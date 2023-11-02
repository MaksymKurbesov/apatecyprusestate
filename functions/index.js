/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest, onCall } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

const { initializeApp } = require("firebase-admin/app");

initializeApp();

const app = express();

const port = process.env.PORT || 8080;

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  host: "mail.apatecyprusestate.com",
  name: "mail.apatecyprusestate.com",
  secure: true,
  port: 465,
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

app.use(cors({ origin: true }));
app.use(express.json());

app.post("/sendEmail", async (req, res) => {
  const { to, subject, html } = req.body;

  try {
    await mailTransport.sendMail({
      from: `Support <${gmailEmail}>`,
      to,
      subject,
      html,
    });
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

exports.sendEmail = functions.runWith({ minInstances: 1 }).https.onRequest(app);

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });
