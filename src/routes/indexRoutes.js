import { Router } from "express";
import Productos from '../models/Productos';
import { createProductos, deleteProdctos, renderEditProducto, renderProductos, statusProductos, updateProductos } from "../controllers/productoController";


const router = Router();

router.get("/", renderProductos);

router.post("/productos/agregar", createProductos);

router.get("/productos/:id/update", renderEditProducto);

router.post("/productos/:id/update", updateProductos);

router.get("/productos/:id/delete", deleteProdctos);

router.get("/productos/:id/status", statusProductos);


export default router;

