import { Schema, model } from "mongoose";

const clienteEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },

    apellido: {
      type: String,
      required: true,
      trim: true,
    },

    correo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    telefono: {
      type: String,
      required: true,
    },

    direccion: {
      type: String,
      required: true,
    },

    edad: {
      type: Number,
      required: true,
    },

    activo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Clientes", clienteEsquema);