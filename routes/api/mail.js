const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  "571854254980-jf0fa31e6qmber7roq5r4s84fbkfuske.apps.googleusercontent.com",
  "Tx8hO2BawNowI_tfAHrut0ux",
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token:
    "1//049T0FVaTQqBcCgYIARAAGAQSNwF-L9Irvv-BhQsfKSy5TMTRqCyHtBcsXvfNx2MsrFenRLuwg84Zqp03pfXPqfsBb1Bebh9tNE4",
});
const accessToken = oauth2Client.getAccessToken();

router.post("/", async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        clientId:
          "571854254980-jf0fa31e6qmber7roq5r4s84fbkfuske.apps.googleusercontent.com",
        clientSecret: "Tx8hO2BawNowI_tfAHrut0ux",
      },
    });
    let info = await transporter.sendMail({
      from: "takhajr@gmail.com",
      to: req.body.to,
      subject: req.body.subject,
      html: req.body.body,
      auth: {
        user: "takhajr@gmail.com",
        refreshToken:
          "1//049T0FVaTQqBcCgYIARAAGAQSNwF-L9Irvv-BhQsfKSy5TMTRqCyHtBcsXvfNx2MsrFenRLuwg84Zqp03pfXPqfsBb1Bebh9tNE4",
        accessToken: accessToken,
        expires: 1484314697598,
      },
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
