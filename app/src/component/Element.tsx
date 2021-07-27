import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const {width} = Dimensions.get('screen');

export const Element : React.FC = () => {


    return(
        <View style={styles.container}>
            
            <View style={styles.titleContainer}>
                <Text style={styles.title}>80g of Carbs ~ 12 units taken</Text>
                <Text style={styles.title}>BG Before : 120 mg/dl</Text>
            </View>
            <Text style={styles.subtitle}>BG After : 163 mg/dl </Text>
            <Text style={styles.subtitle}>Correction : 3 units </Text>
            <Text style={styles.subtitle}>no hypoglegemia! </Text>
            <Text style={styles.date}>27/07/2021 02:45</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0dfdf',
        borderRadius: 5,
        width: width * .9,
        padding: 15,
        marginBottom: 12
    },
    titleContainer: {
        marginBottom: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom:4
    },
    date: {
        fontSize: 14,
        marginBottom: 4,
        textAlign: 'right'  
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 4
    }
});