import { Text, View, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import InputButton from "../../components/InputButton/index";

export default function Home(){
    function apertarBotao( cName : string){
        console.log(`Apertou o botao do campo ${cName}`);
    }

    const formulario = ['cpf', 'nome', 'endereço', 'sobrenome', 'idade', 'escolaridade', 'cidade'];
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>A turma do 5° preriodo de ESW é a melhor!</Text>
            <Text style={styles.subTitulo}>Icev</Text>
            <FlatList
                data={formulario}
                keyExtractor={(campo) => formulario}
                renderItem={({ item: campo}) =>(
                    <InputButton
                    cName={campo}
                    buttonClick={() => apertarBotao(campo)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.texto}>
                        A lista esta vazia
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
                        
            />
        </View>
    )
};