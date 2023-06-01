import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'juku@juurikas.ee',
        pass: 'kala'
    }
});

function sendLog(content: string) {
    let mailOptions = {
        from: 'juku@juurikas.ee',
        to: 'juku@juurikas.ee',
        subject: 'Log',
        text: content
    };
    transporter.sendMail(mailOptions);
}

function checkDiskSize(diskSize: number) {
    if (diskSize < 1000000000) {
        sendLog(`Low disk space: ${diskSize} bytes`);
    } else {
        console.log('Disk space is sufficient');
    }
}

checkDiskSize(500000000); // Adjust the disk size value as per your requirement

function initApp(freeMemory: number, mailFn: any) {
    if (freeMemory < 100000) {
        mailFn(`Low free memory: ${freeMemory}`);
        return;
    }
    mailFn('Application started');
}

initApp(15000, console.log); // Adjust the free memory value as per your requirement
