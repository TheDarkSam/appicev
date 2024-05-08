import AsyncStorage from "@react-native-async-storage/async-storage";
import { TAREFA_COLLECTION } from "../storageCollections";
import { CarregarTarefas } from "./carregarTarefas";

export async function DeleteTarefas(NomeTarefa:string) {
    try {
        const storage = await CarregarTarefas();
        const tarefasFiltradas = storage.filter(tarefa => tarefa !== NomeTarefa);
        const tarefas = JSON.stringify(tarefasFiltradas);

        await AsyncStorage.setItem(TAREFA_COLLECTION, tarefas);
    } catch (error) {
        throw error;
    }
    
}