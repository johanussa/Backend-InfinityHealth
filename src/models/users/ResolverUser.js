import UserModel from "./ModelUser";

const resolverUser = {

    Query: {        
        allUsers: async (parent, args) => {
            
            if (args.Fecha) {
                const users = await UserModel.find({ Fecha: args.Fecha });
                if (users.length != 0) { return users; } 
                else { console.log("No hay registros para esta fecha"); }
            } else {
                const users = await UserModel.find();
                if (users.length != 0) { return users; }
                else { console.log("No hay registros en la DB"); }
            }
        },
        getOneUser: async (parent, args) => {
            
            if (args.Identificacion) {
                const query = { Identificacion: args.Identificacion };
                const user = await UserModel.find(query); 
                if (user.length != 0) { return user; }
                else { console.log(`El usuario ${ args.Identificacion } No Existe`); }                
            } else {                
                const query = { Nombre: args.Nombre };
                const user = await UserModel.find(query);
                if (user.length != 0) { return user; }
                else { console.log(`El usuario ${ args.Nombre } No Existe`); }                
            }
        }
    },
    Mutation: {        
        addUser: async (parent, args) => {
            const user = await UserModel.create(args);
            return user;
        }, 
        updateUser: async (parent, args) => {
            const query = { _id: args._id };
            const user = await UserModel.findByIdAndUpdate(query, args);
            if (user) { return `El usuario ${ args._id } Ha sido actualizado`; } 
            else { return `El usuario ${ args._id } No esta registrado!!`; }
        }, 
        deleteUser: async (parent, args) => {
            const query = { _id: args._id };
            const user = await UserModel.findByIdAndDelete(query);
            if (user) { return `El usuario Ha sido eliminado !!`; }
            else { return `El usuario No esta registrado`; }
        }
    }
}

export { resolverUser };