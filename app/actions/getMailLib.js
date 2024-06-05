export default function createTransporter() {
  const nodemailer = require("nodemailer");
  return nodemailer.createTransport({
    host: "mail.nilrio.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@nilrio.com",
      pass: "SS$RrkRlAkn*",
    },
  });
}
