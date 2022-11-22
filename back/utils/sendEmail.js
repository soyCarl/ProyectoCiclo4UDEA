const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "caliche_9310@hotmail.com",
          pass: "vfiejewyymfdetdw"
        }
      });
    const mensaje={
        from: "MangAnime Store <caliche_9310@hotmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;