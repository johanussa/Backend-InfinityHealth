import AntecModel from "./ModelAntec";

const resolverAntec = {
    Query : {
        getBackground : async (parent, args) => {            
            const query = { Paciente : args.Paciente };
            const back = await AntecModel.find(query);
            if (back.length != 0) { return back }
            else { console.log("No hay Antecedentes para el paciente ", args.Paciente); }
        }
    }, 
    Mutation : {
        addBackground : async (parent, args) => {
            const background = await AntecModel.create(args);
            return background
        },
        updateBackground : async (parent, args) => {
            const query = { _id : args._id };
            const update = await AntecModel.findByIdAndUpdate(query, args);
            if (update) { return `Antecedente ${ args._id } Actualizado`; }
            else { return `Antecedente ${ args._id } NO existe`; }
        },
        deleteBackground : async (parent, args) => {
            const query = { _id : args._id };
            const deleteBack = await AntecModel.findByIdAndDelete(query, args);
            if (deleteBack) { return `Antecedente ${ args._id } Eliminado !!`; }
            else { return `Antecedente ${ args._id } NO Existe`; }
        }
    }
}

export { resolverAntec };