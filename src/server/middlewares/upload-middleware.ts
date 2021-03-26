import * as multer from 'multer';
import * as S3 from 'aws-sdk/clients/s3';
import * as multers3 from 'multer-s3';
import * as path from 'path';
import config from '../config';

const s3 = new S3({
    apiVersion: '2006-03-01',
    region: 'us-east-2',
    credentials: {
        accessKeyId: config.aws.accessKey,
        secretAccessKey: config.aws.secretKey
    }
});

const upload = multer({
    storage: multers3({
        s3,
        bucket: 'amandapetservices',
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname })
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString() + path.extname(file.originalname))
        }
    })
});

export default upload; 