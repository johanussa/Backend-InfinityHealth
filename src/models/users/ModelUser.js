import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    Nombre: { type: String, required: true },
    Identificacion: { type: String, required: true },
    Telefono: { type: String },
    Fecha: { type: Date, required: true },
    Hora: { type: Date, required: true },
    Procedimiento: { type: String, required: true,
        enum: ["CONSULTA_MEDICA", "CONTROL_MEDICO", "CONTROL_Y_SUERO"] },
    Estado: { type: String, default: "AGENDADA", 
        enum: ["ASISTIO", "NO_ASISTIO", "AGENDADA", "CANCELADA"] },
    Canal_Ingreso: { type: String },
    Informacion: { type: String }
});

const UserModel = mongoose.model('usuario', UserSchema);
export default UserModel;