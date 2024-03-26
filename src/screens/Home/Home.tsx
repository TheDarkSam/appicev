import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";
import InputButton from "../../components/InputButton/index";

export default function Home(){
    function apertarBotao( cName : string){
        console.log(`Apertou o botao do campo ${cName}`);
    }

    const formulario = ['nome', 'sobrenome', 'email', 'data de nascimento', 'cpf', 'numero do cartao', 'sexo', 'genero', 'estado civil', 'rg', 'nivel de escolaridade', 'cep'];
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>A turma do 5° preriodo de ESW é a melhor!</Text>
            <Text style={styles.subTitulo}>Icev</Text>
            <ScrollView>
                {
                    formulario.map( campo => (
                        <InputButton
                            key={campo}
                            cName={campo}
                            buttonClick={() => apertarBotao(campo)}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
};