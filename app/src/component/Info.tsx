import React from 'react';
import { View, StyleSheet, Text } from 'react-native'; 

export const Info : React.FC = () => {


    return(
        <View style={styles.container}>
            <Text style={styles.label}>✨ Make Sure To Finish Your Meal ✨</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        marginTop: 20,
        marginBottom: 20,
    },
    label: {
        color: 'white'
    }
})