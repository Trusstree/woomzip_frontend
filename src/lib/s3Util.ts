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
  let [response, error] = [undefined, undefined] as any[];
  const command = new GetObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKETNAME,
    Key: key,
  });

  try {
    response = await getSignedUrl(s3, command, { expiresIn: 3600 });
  } catch (err) {
    error = err;
  }

  return {response, error};
}

export async function setS3Url(key: string, body: any) {
  let [response, error] = [undefined, undefined] as any[];
  const command = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKETNAME,
    Key: key,
    Body: body,
  });

  try {
    response = await s3.send(command);
  } catch (err) {
    error = err;
  }

  return {response, error};
}
