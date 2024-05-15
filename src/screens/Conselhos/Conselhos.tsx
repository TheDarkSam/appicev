import { Text, View, ScrollView, FlatList, Alert, TextInput } from "react-native";
import { styles } from "./styles";
import InputButton from "../../components/InputButton/index";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import Tarefa from "../../components/Tarefa";
import AdicionarTarefa from "../../components/AdicionarTarefa";
import { SalvarTarefas } from "../../storage/Tarefas/salvarTarefas";
import { CarregarTarefas } from "../../storage/Tarefas/carregarTarefas";
import { DeleteTarefas } from "../../storage/Tarefas/deleteTarefas";
import { AppError } from "../../utils/AppError";
import { api } from "../../services/api";

export default function Conselhos( ){

    const navigation = useNavigation();
    const [contador, setContador] = useState(0);
    const [ tarefas, setTarefas ] = useState<string[]>([]);
    const [ tarefa, setNomeTarefa] = useState('');

    const novaTarefa = useRef<TextInput>(null);

    function estados(){
        setTarefas(prevState => [...prevState, tarefa]);
        console.log(tarefas);
    }

    async function ApiCalls(){
        if(tarefa.trim().length === 0){
            const response = await api.get('advice',{
                headers: {
                    'Cache-Control': 'no-cache',
                }
            });
            console.log(response.data.slip.advice);
        } else {
            const query = tarefa;
            const response = await api.get(`advice/search/${query}`);
            if(response.data.message){
                console.log("Nao existe conselho com essa busca");
            } else {
                response.data.slips.forEach((slip: { advice: string; }) => {
                    console.log(slip.advice);
                });
            }
            //console.log(data.slips[0].advice);
        }
    }

    async function AddTarefa(){
        try {
            if(tarefas.includes(tarefa)){
                return Alert.alert("Erro", "Essa tarefa ja foi registrada");
            }

            await SalvarTarefas(tarefa);
            setTarefas(prevState => [...prevState, tarefa]);
            setNomeTarefa('');
            novaTarefa.current?.blur();
            novaTarefa.current?.clear();
            Alert.alert("Atenção", `Tarefa ${tarefa} adcionada com sucesso!`);
        } catch (error) {
            if(error instanceof AppError){
                Alert.alert("Nota Tarefa", error.message);
            } else {
                Alert.alert("Nova Tarefa", "Erro generico")
                console.log(error);
            }
        }
    }

    async function removeTarefa( nomeTarefa : string){
        Alert.alert("Atenção", `Você tem certeza que quer deletar a tarefa ${nomeTarefa}?`, [
            {
                text: 'Sim',
                onPress: ()=> setTarefas(prevState => prevState.filter(tarefa => tarefa !== nomeTarefa))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        await DeleteTarefas(nomeTarefa);
    }

    async function fetchTarefas() {
        try {
            const data = await CarregarTarefas();
            setTarefas(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTarefas();
    },[]);

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{contador}</Text>
            <Text style={styles.texto}>Icev</Text>
            <Text style={styles.subTitulo}>Icev</Text>
            <AdicionarTarefa
                cName=""
                AddTarefa={ApiCalls}
                ChangeText={setNomeTarefa}
                inputRef={novaTarefa}
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