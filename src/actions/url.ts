export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'dalali-v2.vercel.app/api'
    : 'http://localhost:3000/api';
