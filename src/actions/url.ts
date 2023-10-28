export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://dalali-v2.vercel.app/api'
    : 'http://localhost:3000/api';
