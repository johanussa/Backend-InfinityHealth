import HistoryModel from "./ModelHistory";

const resolverHistory = {   
    Query : {
        getHistories : async(parent, args) => {            
            const query = { Paciente: args.Paciente };
            const histories = await HistoryModel.find(query);
            if (histories.length != 0) { return histories; }
            else { console.log("No hay historias para el paciente ", args.Paciente); }
        }
    },
    Mutation : {
        addHistory : async(parent, args) => {
            const history = await HistoryModel.create(args);
            return history;
        },
        updateHistory : async (parent, args) => {
            const query = { _id : args._id };
            const update = await HistoryModel.findByIdAndUpdate(query, args);
            if (update) { return `La historia ${ args._id } Ha sido actualizado`; }
            else { return `La historia ${ args._id } NO Existe en DB`; }
        },
        deleteHistory : async (parent, args) => {
            const query = { _id : args._id };
            const deleteHistory = await HistoryModel.findByIdAndDelete(query);
            if (deleteHistory) { return `La historia ${ args._id } Ha sido Eliminada`; }
            else { return `La historia ${ args._id } NO Existe en DB`; }
        }
    }
}

export { resolverHistory };