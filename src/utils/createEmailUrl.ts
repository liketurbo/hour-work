import ms from 'ms';
import uuid from 'uuid';
import redis from '../middlewares/redis';

const createEmailUrl = async (
  userId: number,
  type: 'confirmEmail' | 'forgotPassword'
) => {
  const token = uuid.v4();
  await redis.set(token, userId, 'ex', ms('1d'));

  let url = '';
  switch (type) {
    case 'confirmEmail':
      url = `${
        process.env.NODE_ENV === 'production'
          ? process.env.WEB_URL
          : 'http://localhost:3000'
      }/user/confirm-email/${token}`;
      break;
    case 'forgotPassword':
      url = `${
        process.env.NODE_ENV === 'production'
          ? process.env.WEB_URL
          : 'http://localhost:3000'
      }/user/forgot-password/${token}`;
      break;
  }

  return url;
};

export default createEmailUrl;
