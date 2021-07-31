import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

const {width} = Dimensions.get('screen');
interface Props {
    carbs: number;
    bg_before: number;
    bg_after?: number;
    insulin_taken?: number;
    correction?: number;
    hypoglycemia?: boolean;
    date: string;
    onGetinfo: () => void;
}

export const Element : React.FC<Props> = (props) => {


    return(
        <TouchableOpacity style={styles.container} onPress={() => props.onGetinfo()} >
            
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.carbs}g of Carbs ~ {props.insulin_taken || 'N/A'} units</Text>
                <Text style={styles.title}>BG Before : {props.bg_before} mg/dl</Text>
            </View>
            <Text style={styles.subtitle}>BG After : {props.bg_after || 'N/A'} mg/dl </Text>
            <Text style={styles.subtitle}>Correction : {props.insulin_taken || 'N/A'} units </Text>
            <Text style={styles.subtitle}>{props.hypoglycemia ? 'you had hypoglycemia' : 'no hypoglycemia'} </Text>
            <Text style={styles.date}>{props.date}</Text>
        </TouchableOpacity>
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