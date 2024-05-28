import { Text, View, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import InputButton from "../../components/InputButton/index";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/authToken";

export default function Home( ){

    const navigation = useNavigation();

    function apertarBotao( cName : string){
        console.log(`Apertou o botao do campo ${cName}`);
        //navigation.navigate("Config", { id: 18, nome: cName});
        navigation.navigate('Conselho');
    }

    const email = "teste@gmail.com";
    const password = "123456";

    const creatUser = () =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            // ..
        });
    }

    const formulario = ['cpf', 'nome', 'endereço', 'sobrenome', 'idade', 'escolaridade', 'cidade'];
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>A turma do 5° preriodo de ESW é a melhor!</Text>
            <Text style={styles.subTitulo}>Icev</Text>
            <InputButton
                cName="Nome"
                buttonClick={() => creatUser()}
            />
            <InputButton
                cName="Idade"
                buttonClick={() => apertarBotao("Idade")}
            />
        </View>
    )
};