const { validateEmailReqData } = require("../utils/validate");
const sendEmail = require("../service/emailService");
const fs = require("fs").promises;
const path = require("path");

const emailController = async (req, res, next) => {
  try {
    validateEmailReqData(req);
    const { emailListString, emailSubject, emailTemplateName } = req?.query;
    if (emailTemplateName) {
      var filePath = path.join(
        __dirname,
        `../templates/${emailTemplateName}Template.txt`
      );
    }
    const emailBody =
      JSON.stringify(req?.body) !== "{}"
        ? req?.body
        : await fs.readFile(filePath, "utf8");
    const receiverMailIds = emailListString.split(",");
    const result = await sendEmail(receiverMailIds, emailSubject, emailBody);
    console.log("Email Sent Successfully");
    res.status(200).send({ message: "Email Sent Successfully!", result });
  } catch (err) {
    next(err);
  }
};

module.exports = emailController;
