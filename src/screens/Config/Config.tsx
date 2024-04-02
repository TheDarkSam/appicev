import { Text, View, Button } from "react-native";
import { styles } from "./styles";
import InputButton from "../../components/InputButton/index";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

type RouteParams ={
    id: number;
    nome: string;
}

export default function Config( ){
    const route = useRoute();
    const { id, nome } = route.params as RouteParams;

    const navigation = useNavigation();

    function apertarBotao( cName : string){
        console.log(`Apertou o botao do campo ${cName}`);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{id}</Text>
            <Text style={styles.texto}>{nome}</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Config', { id: Math.floor(Math.random() * 100), nome: "Vim da dela de configurações"})}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
};