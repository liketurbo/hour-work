import ms from 'ms';
import uuid from 'uuid';
import redis from '../middlewares/redis';

const createConfirmationUrl = async (userId: number) => {
  const token = uuid.v4();
  await redis.set(token, userId, 'ex', ms('1d'));

  const url = `${
    process.env.NODE_ENV === 'production'
      ? process.env.WEB_URL
      : 'http://localhost:3000'
  }/register/confirm/${token}`;

  return url;
};

export default createConfirmationUrl;
