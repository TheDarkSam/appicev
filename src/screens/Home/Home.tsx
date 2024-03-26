import { Text, View } from "react-native";
import { styles } from "./styles";
import InputButton from "../../components/InputButton/Index";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>A turma do 5° preriodo de ESW é a melhor!</Text>
            <Text style={styles.subTitulo}>Icev</Text>
            <InputButton/>
            <InputButton/>
        </View>
    )
};