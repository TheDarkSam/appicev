import { View, TextInput, Text , Platform, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    cName : string;
    removerTarefa : () => void;
}

export default function Tarefa( { cName, removerTarefa } : Props ){

    return(
        <View style={styles.viewTextButton}>
                <TextInput style={styles.textInput}
                    placeholder={cName}
                    placeholderTextColor='#fff'
                    keyboardType={Platform.select({
                        ios: 'numbers-and-punctuation',
                        android: 'visible-password'
                    })}
                />
                <TouchableOpacity style={styles.button} onPress={removerTarefa}>
                    <Text style={styles.texto}>-</Text>
                </TouchableOpacity>
            </View>
    )
};