import { View, TextInput, Text , Platform, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    cName : string;
    AddTarefa : () => void;
    ChangeText: (text: string) => void;
    inputRef?: React.RefObject<TextInput>;
}

export default function AdicionarTarefa( { cName, AddTarefa, ChangeText, inputRef } : Props ){

    return(
        <View style={styles.viewTextButton}>
                <TextInput style={styles.textInput}
                    placeholder={cName}
                    placeholderTextColor='#fff'
                    keyboardType={Platform.select({
                        ios: 'numbers-and-punctuation',
                        android: 'visible-password'
                    })}
                    onChangeText={ChangeText}
                    ref={inputRef}
                    onSubmitEditing={AddTarefa}
                    returnKeyType="done"
                />
                <TouchableOpacity style={styles.button} onPress={AddTarefa}>
                    <Text style={styles.texto}>+</Text>
                </TouchableOpacity>
            </View>
    )
};