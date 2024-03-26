import { View, TextInput, Text , Platform, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function InputButton(){
    return(
        <View style={styles.viewTextButton}>
                <TextInput style={styles.textInput}
                    placeholder="Digite um texto"
                    placeholderTextColor='#666666'
                    keyboardType={Platform.select({
                        ios: 'numbers-and-punctuation',
                        android: 'visible-password'
                    })}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texto}>Texto</Text>
                </TouchableOpacity>
            </View>
    )
};