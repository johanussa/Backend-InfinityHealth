import { gql } from "apollo-server-express";

const typeAntec = gql`

    type Background {        
        _id : ID!
        Paciente : String!
        Odontologicos : String
        Patologicos : String
        Quirurgicos : String
        Farmaceuticos : String
        Traumaticos : String
        Alergicos : String
        Ginecologicos : String
    }
    type Query {
        getBackground( Paciente : String! ) : [Background]
    }
    type Mutation {
        addBackground(
            Paciente : String!
            Odontologicos : String
            Patologicos : String
            Quirurgicos : String
            Farmaceuticos : String
            Traumaticos : String
            Alergicos : String
            Ginecologicos : String
        ) : Background

        updateBackground(
            _id : ID!
            Odontologicos : String
            Patologicos : String
            Quirurgicos : String
            Farmaceuticos : String
            Traumaticos : String
            Alergicos : String
            Ginecologicos : String
        ) : String

        deleteBackground( _id : ID!) : String
    }
`;

export { typeAntec };