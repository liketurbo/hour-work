import ms from 'ms';
import uuid from 'uuid';
import { CONFIRM_EMAIL, FORGOT_PASSWORD } from './createEmailUrl/Prefixes';
import redis from '../middlewares/redis';

const createEmailUrl = async (
  userId: number,
  type: CONFIRM_EMAIL | FORGOT_PASSWORD
) => {
  const token = uuid.v4();
  await redis.set(type + token, userId, 'ex', ms('1d'));

  let url = '';
  switch (type) {
    case CONFIRM_EMAIL:
      url = `${
        process.env.NODE_ENV === 'production'
          ? 'https://157.230.98.243:3000'
          : 'http://localhost:3000'
      }/user/confirm-email/${token}`;
      break;
    case FORGOT_PASSWORD:
      url = `${
        process.env.NODE_ENV === 'production'
          ? 'https://157.230.98.243:3000'
          : 'http://localhost:3000'
      }/user/forgot-password/${token}`;
      break;
  }

  return url;
};

export default createEmailUrl;
