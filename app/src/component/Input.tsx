import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

interface Props {
    label: string;
    unit?: string;
    onChange: (value: string) => void;
    value?: string;
}

export const Input : React.FC<Props> = ({label, unit, onChange, value}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={value} onChangeText={(value) => onChange(value)} />
                {
                    unit ? 
                    <Text style={styles.unit}>{unit}</Text> : null
                }
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    inputContainer: {
        backgroundColor: '#F5DDC6',
        width: '100%',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row'
    },
    input: {
        width: '80%'
    },
    unit: {
        width: '20%',
        textAlign: 'right'
    },
    label: {
        fontWeight : 'bold',
        fontSize: 15,
        marginBottom: 5
    }
    
})