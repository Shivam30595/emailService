const validator = require("validator");

const validateEmailReqData = (req, res, next) => {
  const { emailListString, emailSubject, emailTemplateName } = req.query;

  if (!emailSubject) throw { message: "Email Subject can not be empty." };
  if (!emailListString) throw { message: "Email List can not be empty." };
  // if (!emailTemplateName) throw { message: "Email template name can not be empty." };
  if (!req?.body) throw { message: "Email body can not be empty." };


  const emails = emailListString.split(",");
  const invalidEmails = emails.filter((email) => !validator.isEmail(email));
  if (invalidEmails.length)
    throw { message: "Got Invalid Emails", errData: invalidEmails };
};

module.exports = {
  validateEmailReqData,
};
