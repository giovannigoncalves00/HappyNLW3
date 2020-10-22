import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanegesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// MVC
// MODEL
// VIEWS
//CONTROLER

// index, show, create. update, delete

routes.get('/orphanages/', OrphanegesController.index);
routes.get('/orphanages/:id', OrphanegesController.show);
routes.post('/orphanages', upload.array('images'), OrphanegesController.create);

export default routes;