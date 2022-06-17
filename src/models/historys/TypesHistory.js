import { gql } from "apollo-server-express";

const typeHistory = gql`

    type Examen_Fisico {
        Cabeza : String
        Cuello : String
        Torax_Anterior : String
        Torax_Posterior : String
        Abdomen : String
        Extremidades_Superiores : String
        Extremidades_Ineriores : String
        Ginecologicos : String
    }
    input inputExam {
        Cabeza : String
        Cuello : String
        Torax_Anterior : String
        Torax_Posterior : String
        Abdomen : String
        Extremidades_Superiores : String
        Extremidades_Ineriores : String
        Ginecologicos : String
    }
    type Tratamiento { Ambulatorio : String Paraclinico : String }
    input inputTrata { Ambulatorio : String Paraclinico : String }

    type History {
        _id : ID!
        Paciente : String!
        Edad : String
        Ocupacion : String
        Procedencia : String
        Fecha : Date
        Motivo : String
        Enfermedad : String
        Sueno : String
        Emocionalmente : String
        Diuresis : String
        Deposicion : String        
        Examen_Fisico : Examen_Fisico
        Tratamiento : Tratamiento
    }
    type Query { getHistories( Paciente : String! ) : [History] }

    type Mutation {
        addHistory(
            Paciente : String!
            Edad : String
            Ocupacion : String
            Procedencia : String
            Fecha : Date
            Motivo : String
            Enfermedad : String
            Sueno : String
            Emocionalmente : String
            Diuresis : String
            Deposicion : String        
            Examen_Fisico : inputExam
            Tratamiento : inputTrata
        ) : History

        updateHistory(
            _id : ID!
            Edad : String
            Ocupacion : String
            Procedencia : String
            Fecha : Date
            Motivo : String
            Enfermedad : String
            Sueno : String
            Emocionalmente : String
            Diuresis : String
            Deposicion : String        
            Examen_Fisico : inputExam
            Tratamiento : inputTrata
        ) : String

        deleteHistory( _id : ID! ) : String
    }
`;

export { typeHistory };