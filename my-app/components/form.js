import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);
    };
    return(
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder="Впишите задачу..." 
            />
            <Button
                color="green"
                onPress={() => addHandler(text)}
                title="Добавить задачу"
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 20,
        textAlign: "center",
        width: "100%",
    },
});