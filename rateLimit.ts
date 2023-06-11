import rateLimit from 'express-rate-limit';

// Create the rate limiting middleware
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // maximum 100 requests per minute
  message: 'Too many requests, please try again later.',
});

export default limiter;
