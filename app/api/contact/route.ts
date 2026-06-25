import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory cache for API optimization & rate limiting (Throttling)
const rateLimitCache = new Map<string, number>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, business, email, phone, stores, message } = body;

    // 1. Proper Backend Validation
    if (!name?.trim() || !business?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    // Phone Validation (Basic numeric check)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    // 2. API Caching & Rate Limiting (Avoid repetitive calls)
    // Using email as an identifier. Limits to 1 request per 60 seconds per user.
    const now = Date.now();
    const lastCallTime = rateLimitCache.get(email) || 0;
    const cooldownPeriod = 60000; // 60 seconds

    if (now - lastCallTime < cooldownPeriod) {
      return NextResponse.json({ error: "Too many requests. Please wait a minute." }, { status: 429 });
    }
    
    // Update cache with current time
    rateLimitCache.set(email, now);

    // Memory optimization: Clean up cache if it gets too large
    if (rateLimitCache.size > 1000) rateLimitCache.clear();

    // YAHAN DIRECT DETAILS DAAL (Ye Backend hai, isliye safe hai)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🚀 New ClickOut Lead: ${business} (${name})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #00C853; border-bottom: 2px solid #00C853; padding-bottom: 10px;">New Sales Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Business Name:</strong> ${business}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Store Count:</strong> <span style="background: #eee; padding: 2px 6px; border-radius: 4px;">${stores}</span></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #00C853; margin-top: 20px;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin-top: 5px; color: #333;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}