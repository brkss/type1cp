import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { TopBar, Info, Input, Button } from '../component';

const {height} = Dimensions.get('window');

export const Home : React.FC = () => {

    return (
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <TopBar />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Calculating  Every Meal Carbs {'\n'}Help You Manage {'\n'}Your Diabetes Better</Text>
                <Info />
                <Input label='Blood Sugar Before Eating :' unit='Mg/DL' />
                <Input label='How Much Carbs You’re Taking :' unit='g'/>
                <Button onPress={() => {}} label='Validate' />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBF3EB'
    },
    topBarContainer: {
        flex: .2,
        justifyContent: 'center'
    },
    contentContainer: {
        flex: .65,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24
    }
});
    