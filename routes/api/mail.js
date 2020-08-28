const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  "ADD YOUR OAUTH CREDIENTIALS HERE"
);

oauth2Client.setCredentials({
  refresh_token:
    "ADD YOUR REFRESH TOKEN HERE",
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
          "ADD YOUR CLIENT ID HERE",
        clientSecret: "ADD YOUR CLIENT SECRET HERE",
      },
    });
    let info = await transporter.sendMail({
      from: "YOUR8GMAIL@gmail.com",
      to: req.body.to,
      subject: req.body.subject,
      html: req.body.body,
      auth: {
        user: "YOURGMAIL@gmail.com",
        refreshToken:
          "ADD YOUR REFRESH TOKEN HERE",
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
