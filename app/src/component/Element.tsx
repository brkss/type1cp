import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Element : React.FC = () => {


    return(
        <View style={styles.container}>
            <Text style={styles.title}>title</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderRadius: 5
    },
    title: {
        fontSize: 15
    }
});