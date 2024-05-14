import { Text, View, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import InputButton from "../../components/InputButton/index";
import { useNavigation } from "@react-navigation/native";

export default function Home( ){

    const navigation = useNavigation();

    function apertarBotao( cName : string){
        console.log(`Apertou o botao do campo ${cName}`);
        //navigation.navigate("Config", { id: 18, nome: cName});
        navigation.navigate('Conselho');
    }

    const formulario = ['cpf', 'nome', 'endereço', 'sobrenome', 'idade', 'escolaridade', 'cidade'];
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>A turma do 5° preriodo de ESW é a melhor!</Text>
            <Text style={styles.subTitulo}>Icev</Text>
            <InputButton
                cName="Nome"
                buttonClick={() => apertarBotao("Nome")}
            />
            <InputButton
                cName="Idade"
                buttonClick={() => apertarBotao("Idade")}
            />
        </View>
    )
};