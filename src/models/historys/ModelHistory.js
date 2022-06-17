import mongoose from "mongoose";

const Schema = mongoose.Schema;
const HistorySchema = new Schema({

    Paciente : { type: String, required: true },
    Edad : { type: String },
    Ocupacion : { type: String },
    Procedencia : { type: String },
    Fecha : { type: Date, default: new Date() },
    Motivo : { type: String },
    Enfermedad : { type: String },
    Sueno : { type: String },
    Emocionalmente : { type: String },
    Diuresis : { type: String },
    Deposicion : { type: String },
    Examen_Fisico : {
        Cabeza : { type: String },
        Cuello : { type: String },
        Torax_Anterior : { type: String },
        Torax_Posterior : { type: String },
        Abdomen : { type: String },
        Extremidades_Superiores : { type: String },
        Extremidades_Ineriores : { type: String },      
        Ginecologicos : { type: String }      
    },
    Tratamiento : {
        Ambulatorio : { type: String },
        Paraclinico : { type: String }
    },
});

const HistoryModel = mongoose.model('Historia', HistorySchema);
export default HistoryModel;