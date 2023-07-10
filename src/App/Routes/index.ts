import express from 'express';
import { artistRoutes } from '../Modules/Artists/artist.routes';
import { userRoutes } from '../Modules/Users/user.routes';
import { artRoutes } from '../Modules/Arts/art.routes';
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