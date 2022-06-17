import { gql } from "apollo-server-express";
import { typeUser } from "../models/users/TypesUser";
import { typeAntec } from "../models/antecedentes/TypesAntec";
import { typeHistory } from "../models/historys/TypesHistory";

const allTypes = gql ` scalar Date `;

export const typeDefs = [ 
    allTypes, 
    typeUser, 
    typeHistory, 
    typeAntec 
];