import { S3Client } from '@aws-sdk/client-s3';

export const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_KEY,
  },
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
});
