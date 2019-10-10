# No-Replay-mails
## To Clone this repo type on your terminal:
` git clone https://github.com/CinderyCape27/No-Replay-mails.git`

## To install the proyect dependencies:
`npm install`

### Install nodemon 
`npm install nodemon -D`

## Run the proyect
`npm run dev`

After to install and run the server, go to `localhost:3000` in your favorite browser

## If the app does not work make sure that:
- You already set SMTP server up, with your email, host, port and password
  - In my case I wrote most of them in env variables
- Your share hosting is already well configured
- If you are saving information in a database, make sure that it is connected
  - I used MongoDB and mongoose as ORM
  
If you want to use your Gmail account READ the documentation below

Using Gmail: https://nodemailer.com/usage/using-gmail/
  
## Would you like to learn more?
Just read the documentation:
> NodeMailer: https://nodemailer.com/about/

> Multer: https://www.npmjs.com/package/multer

> SMTP: https://serversmtp.com/es/que-es-servidor-smtp/#targetText=El%20mensaje%20es%20enviado%20generalmente,Agente%20de%20Transferencia%20de%20Mensaje).

### Authors
> Julio Denis
