import * as dotenv from 'dotenv';

dotenv.config();

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expires: process.env.JWT_EXPIRES
    },
    aws: {
        accessKey: process.env.AWS_ACCESS_ID,
        secretKey: process.env.AWS_SECRET_KEY
    },
    keys: {
        mailgun: process.env.MAILGUN_SK,
        mailgunDomain: process.env.MAILGUN_DOMAIN
    }
    
}