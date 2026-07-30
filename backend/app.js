import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});

app.post("/api/message", async (req, res) => {
  const { email, fullname, phone, message } = req.body;

  const userMailOptions = {
    from: '"Finora Technologies" <fidelmuthomi007@gmail.com>',
    to: email,
    subject: "Message request",
    html: `<h1 style="font-size: 20px">Hello ${fullname}</h1>
    <p>
      Thank you for trusting Finora Technologies. Your message has been received
      successfully. We will keep in touch. Good day
    </p>`,
  };

  const adminMailOptions = {
    from: '"Finora Technologies Form" <fidelmuthomi007@gmail.com>',
    to: "fidelmuthomi007@gmail.com",
    subject: "Message request",
    html: `<h1 style="font-size: 20px">New project request details</h1>
    <p><b>Email Address:</b> ${email}</p>
    <p><b>Phone Number:</b> ${phone}</p>
    <p><b>Fullname:</b> ${fullname}</p>
    <p><b>Message:</b> ${message}</p>`,
  };

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
    res.status(200).json({ message: "Registration received" });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at  http://localhost:${port}`);
});
