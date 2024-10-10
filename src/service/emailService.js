const nodemailer = require("nodemailer");
const path = require("path");

const getResumePath = () => {
  const filePath = path.join(
    __dirname,
    `../attachments/Shivam Gupta Resume.pdf`
  );
  return filePath;
};

const createTransport = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER_ID,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
};

const sendMail = async (receiverMailIds, subject, body) => {
  try {
    const transporter = createTransport();
    const mailOptions = {
      from: process.env.GMAIL_USER_ID,
      to: "",
      subject,
      text: body,
      attachments: [
        {
          filename: "Shivam Gupta Resume.pdf",
          path: getResumePath(),
        },
      ],
    };
    const emailPromiseArray = receiverMailIds.map((receiverMailId) => {
      mailOptions.to = receiverMailId;
      return transporter.sendMail(mailOptions);
    });
    const result = await Promise.allSettled(emailPromiseArray);
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = sendMail;
