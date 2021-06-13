const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")('sk_test_51HW8UID9uTsL4QbYQyYyOtIwxKTA1N2QRO7ieCzVC55u6uc2Kd31kVyhfEKJahUF5Dy07rMYPETIP42A6I3SLYfr00f9oGp9f9')

// API

// App config
const app = express();
// Middlewares
app.use(cors({ orgin: true }));
app.use(express.json());
// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved  Amount >>>', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command




exports.api = functions.https.onRequest(app);
// Example endpoint
//http://localhost:5001/clone-c52a5/us-central1/api
//'firebase emulators:start' in cmd to start back-end server