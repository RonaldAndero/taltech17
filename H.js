"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = require("nodemailer");
var transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'juku@juurikas.ee',
        pass: 'kala'
    }
});
function sendLog(content) {
    var mailOptions = {
        from: 'juku@juurikas.ee',
        to: 'juku@juurikas.ee',
        subject: 'Log',
        text: content
    };
    transporter.sendMail(mailOptions);
}
function checkDiskSize(diskSize) {
    if (diskSize < 1000000000) {
        sendLog("Low disk space: ".concat(diskSize, " bytes"));
    }
    else {
        console.log('Disk space is sufficient');
    }
}
checkDiskSize(500000000); // Adjust the disk size value as per your requirement
function initApp(freeMemory, mailFn) {
    if (freeMemory < 100000) {
        mailFn("Low free memory: ".concat(freeMemory));
        return;
    }
    mailFn('Application started');
}
initApp(15000, console.log); // Adjust the free memory value as per your requirement
