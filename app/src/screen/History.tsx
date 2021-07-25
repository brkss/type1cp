import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import { Element } from '../component';


const { height } = Dimensions.get('window');

export const History : React.FC = () => {


    return (
        <View style={styles.container}>
            <Text>Hello !</Text>
            <Element />
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        height: height,
        justifyContent: 'center',
        alignItems: 'center'
    }
});