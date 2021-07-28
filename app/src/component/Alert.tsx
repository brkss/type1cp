import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    message: string;
    type: string;
}

export const Alert : React.FC<Props> = ({message, type}) => {

    return(
        <View style={[styles.container, {backgroundColor: type === 'error' ? '#fba9a9' : '#94e4cf'}]}>
            <Text style={styles.textInfo}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 12,
        borderRadius: 7,
    },
    textInfo: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})