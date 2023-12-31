import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

export async function POST(req: NextRequest) {
  let success = false;
  try {
    const json = await req.json();
    const { fname, lname, email, message }: any = json;

    if (fname.replace("/s/g", "").trim().length === 0) {
      return NextResponse.json({
        success,
        error: "First name cannot be empty",
      });
    } else if (lname.replace("/s/g", "").trim().length === 0) {
      return NextResponse.json({ success, error: "Last name cannot be empty" });
    } else if (!emailRegex.test(email)) {
      return NextResponse.json({ success, error: "Invalid email" });
    } else if (message.replace("/s/g", "").trim().length === 0) {
      return NextResponse.json({ success, error: "Message cannot be empty" });
    }

    const mailOptions = {
      from: process.env.NODE_MAILER_EMAIL,
      to: "hello@thesocialtriangle.co",
      subject: `Message from TST Website by: ${fname} ${lname}`,
      text: `Name: ${fname} ${lname}\n Email: ${email}\n Message: ${message}`,
    };

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_PASSWORD,
      },
    });

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });

    success = true;
    return NextResponse.json({ success });
  } catch (error: any) {
    return NextResponse.json({ success, error: error.message });
  }
}
