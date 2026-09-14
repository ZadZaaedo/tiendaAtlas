import app from "./app";//equivale a el codigo que esta en app.js
import './database';
import { PORT } from "./config";

app.listen(3000);
console.log("Servidor en puerto", PORT);
