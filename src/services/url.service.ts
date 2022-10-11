import crypto from 'crypto';
import { CustomError } from '../error/errorHandler';
import urlRepository from '../repositories/urlRepository';

export async function getUrl(shortUrl: string) {
  try {
    return await urlRepository.getUrl(shortUrl);
  } catch (error) {
    console.log(error);
  }
}

export async function createUrl(url: string) {
  try {
    if (url) {
      const shortenUrl = crypto.randomBytes(3).toString('hex');
      return await urlRepository.createUrl(shortenUrl, url);
    }
    return new CustomError('Please enter valid information!', 400);
  } catch (error) {
    console.log(error);
  }
}
