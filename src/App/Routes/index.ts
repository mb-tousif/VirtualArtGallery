import express from 'express';
import { artistRoutes } from '../Artists/artist.routes';
import { userRoutes } from '../Users/user.routes';
import { artRoutes } from '../Arts/art.routes';
const router = express.Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRoutes
    },
    {
        path: '/artists',
        route: artistRoutes
    },
    {
        path: '/arts',
        route: artRoutes
    }
];

moduleRoutes.forEach((route) => { 
    router.use(route.path, route.route);
});

export default router;