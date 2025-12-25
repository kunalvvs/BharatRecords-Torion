import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl as getS3SignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET;

// @desc    Upload file to S3
export const uploadToS3 = async (fileBuffer, fileName, mimeType) => {
  try {
    const params = {
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: fileBuffer,
      ContentType: mimeType,
      ServerSideEncryption: 'AES256'
    };
    
    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    
    return {
      key: fileName,
      url: `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`
    };
  } catch (error) {
    console.error('S3 Upload Error:', error);
    throw new Error('Failed to upload file to S3');
  }
};

// @desc    Delete file from S3
export const deleteFromS3 = async (fileKey) => {
  try {
    const params = {
      Bucket: BUCKET_NAME,
      Key: fileKey
    };
    
    const command = new DeleteObjectCommand(params);
    await s3Client.send(command);
    
    return true;
  } catch (error) {
    console.error('S3 Delete Error:', error);
    throw new Error('Failed to delete file from S3');
  }
};

// @desc    Get signed URL for file access
export const getSignedUrl = async (fileKey, expiresIn = 3600) => {
  try {
    const params = {
      Bucket: BUCKET_NAME,
      Key: fileKey
    };
    
    const command = new GetObjectCommand(params);
    const signedUrl = await getS3SignedUrl(s3Client, command, { expiresIn });
    
    return signedUrl;
  } catch (error) {
    console.error('S3 Signed URL Error:', error);
    throw new Error('Failed to generate signed URL');
  }
};
