import express from "express";
import apiController from '../controller/apiController';

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', apiController.getAllUsers); //method get -> read data
    router.post('/create-user', apiController.createNewUser); //method post -> create data
    router.put('/update-user',apiController.updateUser); //method put -> update data
    router.delete('/delete-user/:Id',apiController.deleteUser); //method delete -> delete data
    return app.use('/api/v1/', router)
}


export default initAPIRoute;
