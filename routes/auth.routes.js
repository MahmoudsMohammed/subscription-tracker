import { Router } from 'express';

const authRoutes = Router();

authRoutes.get('/sign-in', (req, res) => {
  res.send('From User');
});
authRoutes.post('/sign-in', (req, res) => {});
authRoutes.post('/sign-up', (req, res) => {});
authRoutes.post('/sign-out', (req, res) => {});
authRoutes.put('/change-password', (req, res) => {});

export default authRoutes;
