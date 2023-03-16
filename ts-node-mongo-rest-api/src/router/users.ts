import express from 'express';

import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
import { isAuthenticaded, isOwner } from '../middlewares';

export default (router: express.Router) => {
    router.get('/users', isAuthenticaded, getAllUsers);
    router.delete('/users/:id', isAuthenticaded, isOwner, deleteUser);
    router.patch('/users/:id', isAuthenticaded, isOwner, updateUser);
};