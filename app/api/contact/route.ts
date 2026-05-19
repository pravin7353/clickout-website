import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, business, email, phone, stores, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'animusitmanagement@gmail.com', 
      subject: 'New ClickOut Sales Lead',
      text: `You have received a new sales inquiry from the ClickOut Landing Page.

Details:
----------------------------------
Name: ${name}
Business Name: ${business}
Email: ${email}
Phone: ${phone}
Number of Stores: ${stores}
----------------------------------

Message:
${message}
`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}