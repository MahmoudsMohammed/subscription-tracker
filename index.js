import express from 'express';
import authRoutes from './routes/auth.routes.js';
import { PORT } from './config/env.js';
import subscriptionRoutes from './routes/subscription.routes.js';
import userRotes from './routes/user.routes.js';

const app = express();

// define app routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRotes);
app.use('/api/v1/subscription', subscriptionRoutes);

app.listen(PORT, () => {
  console.log(`Server Run and App Listen to Port ${PORT}`);
});
