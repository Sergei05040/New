import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{ 
        backgroundColor: "#ys",
        
    },
    text: {
        textAlign: "center",
        marginTop: 80,
        paddingBottom: 50,
        fontSize: 32,
        color: "#fff",
        fontWeight: "bold",
    },
});