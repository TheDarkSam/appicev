import { Text, View, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import InputButton from "../../components/InputButton/index";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Tarefa from "../../components/Tarefa";
import AdicionarTarefa from "../../components/AdicionarTarefa";

export default function ListaDeTarefas( ){

    const navigation = useNavigation();
    const [contador, setContador] = useState(0);
    const [ tarefas, setTarefas ] = useState<string[]>([]);
    const [ tarefa, setNomeTarefa] = useState('');

    const numero = [];

    //let contador = 0;

    function AddTarefa(){
        setTarefas(prevState => [...prevState, tarefa]);
        setNomeTarefa('');
    }

    function removeTarefa( nomeTarefa : string){
        const listaTarefas = tarefas.filter(tarefa => tarefa !== nomeTarefa);
        setTarefas(prevState => prevState.filter(tarefa => tarefa !== nomeTarefa));
        console.log(listaTarefas);
        //navigation.navigate("Config", { id: 18, nome: cName});
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{contador}</Text>
            <Text style={styles.subTitulo}>Icev</Text>
            <AdicionarTarefa
                cName=""
                AddTarefa={AddTarefa}
                ChangeText={setNomeTarefa}
            />

            <FlatList
                data={tarefas}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Tarefa
                    cName={item}
                    removerTarefa={() => removeTarefa(item)}
            />
                )}
            />
        </View>
    )
};