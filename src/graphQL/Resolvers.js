import { resolverUser } from "../models/users/ResolverUser";
import { resolverHistory } from "../models/historys/ResolverHistory";
import { resolverAntec } from "../models/antecedentes/ResolverAntec";

export const resolvers = [ 
    resolverUser, 
    resolverHistory, 
    resolverAntec 
];