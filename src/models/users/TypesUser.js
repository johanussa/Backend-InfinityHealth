import { gql } from "apollo-server-express";

const typeUser = gql `

    enum Enum_Proced{ CONSULTA_MEDICA CONTROL_MEDICO CONTROL_Y_SUERO }
    enum Enum_State { ASISTIO NO_ASISTIO AGENDADA CANCELADA }

    type User {
        _id: ID!
        Nombre: String!
        Identificacion: String!
        Telefono: String
        Fecha: Date
        Hora: Date
        Procedimiento: Enum_Proced
        Estado: Enum_State
        Canal_Ingreso: String
        Informacion: String
    }
    type Query {
        allUsers( Fecha: Date ) : [User]
        getOneUser( Identificacion: String Nombre: String ) : [User]
    }
    type Mutation {
        addUser(
            Nombre: String!
            Identificacion: String!
            Telefono: String
            Fecha: Date
            Hora: Date
            Procedimiento: Enum_Proced
            Estado: Enum_State
            Canal_Ingreso: String
            Informacion: String
        ) : User

        updateUser(
            _id: ID!
            Nombre: String
            Identificacion: String
            Telefono: String
            Procedimiento: Enum_Proced
            Estado: Enum_State
            Canal_Ingreso: String
            Informacion: String
        ) : String

        deleteUser( _id: ID! ) : String
    }
`;

export { typeUser };