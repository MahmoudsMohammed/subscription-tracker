import { Router } from 'express';

const subscriptionRoutes = Router();

subscriptionRoutes.get('/', (req, res) => res.send('Get All Subscription'));

// CRUD for Subscription
subscriptionRoutes.post('/', (req, res) => res.send('Get All Subscription'));
subscriptionRoutes.get('/:id', (req, res) => res.send('Get All Subscription'));
subscriptionRoutes.put('/:id', (req, res) => res.send('Get All Subscription'));
subscriptionRoutes.delete('/:id', (req, res) =>
  res.send('Get All Subscription'),
);

// User Subscription
subscriptionRoutes.get('/user/:id', (req, res) =>
  res.send('Get All Subscription'),
);
subscriptionRoutes.put('/cancel/:id', (req, res) =>
  res.send('Get All Subscription'),
);
subscriptionRoutes.get('/upcoming-renewals', (req, res) =>
  res.send('Get All Subscription'),
);

export default subscriptionRoutes;
