import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET
  },
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
});

export async function getS3Url(key: string) {
  const command = new GetObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKETNAME,
    Key: key,
  });

  return await getSignedUrl(s3, command, { expiresIn: 3600 });
}

export async function putS3Url(key: string) {
  const command = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKETNAME,
    Key: key,
  });

  return await getSignedUrl(s3, command, { expiresIn: 3600 });
}

export async function setS3Url(key: string) {
  const command = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKETNAME,
    Key: key,
  });

  return await getSignedUrl(s3, command, { expiresIn: 3600 });
}