import mongoose from "mongoose";

const Schema = mongoose.Schema;
const AntecSchema = new Schema({
    
    Paciente : { type: String, required: true, unique: true },
    Odontologicos : { type: String },
    Patologicos : { type: String },
    Quirurgicos : { type: String },
    Farmaceuticos : { type: String },
    Traumaticos : { type: String },
    Alergicos : { type: String },
    Ginecologicos : { type: String }
});

const AntecModel = mongoose.model('Antecedente', AntecSchema);
export default AntecModel;