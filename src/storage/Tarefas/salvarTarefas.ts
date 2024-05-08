import AsyncStorage from "@react-native-async-storage/async-storage";
import { TAREFA_COLLECTION } from "../storageCollections";
import { CarregarTarefas } from "./carregarTarefas";
import { AppError } from "../../utils/AppError";

export async function SalvarTarefas(NomeTarefa:string) {
    try {
        const tarefasSalvas = await CarregarTarefas();

        const tarefas = JSON.stringify([...tarefasSalvas, NomeTarefa]);
        
        const tarefaExiste = tarefasSalvas.includes(NomeTarefa);

        if(tarefaExiste){
            throw new AppError('A tarefa já existe!');
        }

        await AsyncStorage.setItem(TAREFA_COLLECTION, tarefas);
    } catch (error) {
        throw error;
    }
}