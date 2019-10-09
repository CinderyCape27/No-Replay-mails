// Routes settings
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const router =  express.Router();

const Factura = require('../models/facturas');


router.post('/send-email', async (req, res) => {
    // console.log(req.files[0].filename);
    const { name, email, message } = req.body;
    console.log(req.files[0]);
    
    const filePath = `${req.files[0].filename}`
    console.log(filePath);
    
    

    const newFact = new Factura({ name, email, message, filePath});
    console.log(newFact);

    await newFact.save()
    

    contentHTML = `
    <h1>${name} S.A. De C.V.</h1>
    <ul>
        <li>${name}</li>
        <li>${email}</li>
    </ul>
    <p>${message}</p>
    `;

    const HOST_URI = process.env.HOST_URI
    const PASS_URI = process.env.PASS_URI
    const transporter = nodemailer.createTransport({
        host: HOST_URI,
        port: 26,
        secure: false,
        auth: {
            user: 'jdenis@corah.com.mx',
            pass: PASS_URI
        },
        tls: {
            rejectUnauthorized: false
        }
        
    });
    const info = await transporter.sendMail({
        from: '"Servicio de facturación" <jdenis@corah.com.mx>',
        to: `${email}`,
        subject: 'Entrega de factura',
        text: `Gracias por comprar en ${name}`,
        html: contentHTML,
        attachments: [
            {
                filename: `${filePath}`,
                path: path.join(__dirname, `../public/uploads/${req.files[0].filename }`)
            }
        ]
    });
    console.log('Message sent', info.messageId);
    res.redirect('/sent.html');
});




module.exports = router;