import express from 'express';
import { artistRoutes } from '../Artists/artist.routes';
import { userRoutes } from '../Users/user.routes';
const router = express.Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRoutes
    },
    {
        path: '/artists',
        route: artistRoutes
    }
];

moduleRoutes.forEach((route) => { 
    router.use(route.path, route.route);
});

export default router;