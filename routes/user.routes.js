import { Router } from 'express';

const userRotes = Router();

userRotes.get('/', (req, res) => res.send('Get All Users'));
// CRUD operations For User
userRotes.post('/', (req, res) => res.send('Get All Users'));
userRotes.get('/:id', (req, res) => res.send('Get All Users'));
userRotes.put('/:id', (req, res) => res.send('Get All Users'));
userRotes.delete('/:id', (req, res) => res.send('Get All Users'));

export default userRotes;
