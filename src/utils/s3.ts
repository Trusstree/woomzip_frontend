import AWS from 'aws-sdk';

export const getS3Url = (key: string | undefined) => {
  if (!key) return undefined;

  const s3 = new AWS.S3({
    accessKeyId: process.env.s3AccessKeyID,
    region: 'ap-northeast-2',
    secretAccessKey: process.env.s3SecretAccessKey
  });

  const url = s3.getSignedUrl('getObject', {
    Bucket: 'trussimagedb',
    Key: key,
    Expires: 60 * 1
  });

  return url;
};