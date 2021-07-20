import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
    label: string;
    onPress: () => void
}

export const Button : React.FC<Props> = ({label, onPress}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        width: '100%',
        padding: 15,
        borderRadius: 7,
        marginTop: 13
    },
    label: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})