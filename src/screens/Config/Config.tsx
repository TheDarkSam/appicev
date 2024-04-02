import { Text, View, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import InputButton from "../../components/InputButton/index";

export default function Config( ){
    function apertarBotao( cName : string){
        console.log(`Apertou o botao do campo ${cName}`);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>A turma do 5° preriodo de ESW é a melhor!</Text>
            <Text style={styles.subTitulo}>Icev</Text>
        </View>
    )
};