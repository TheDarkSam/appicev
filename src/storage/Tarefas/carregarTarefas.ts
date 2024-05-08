import AsyncStorage from "@react-native-async-storage/async-storage";
import { TAREFA_COLLECTION } from "../storageCollections";

export async function CarregarTarefas() {
    try {
        const storage = await AsyncStorage.getItem(TAREFA_COLLECTION);

        const tarefas: string[] = storage ? JSON.parse(storage) : [];

        return tarefas;
    } catch (error) {
        throw error;
    }
}