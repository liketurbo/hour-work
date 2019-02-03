import Redis from 'ioredis';

const redis =
  process.env.NODE_ENV === 'production'
    ? new Redis('redis://redis:6379')
    : new Redis();

export default redis;
