import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TopBar, Info, Input, Button } from '../component';
import { useDataQuery } from "../generated/graphql";

const {height} = Dimensions.get('window');

export const Home : React.FC = () => {

    const {loading, data} = useDataQuery({
        onCompleted: (data) => {
            console.log("data => ", data.data);
        },
        onError: (e) => {
            console.log("error => ", e);
        }
    });

    if(loading){
        return <Text>Loading !</Text>
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.topBarContainer}>
                <TopBar />
            </View>
            <View style={styles.contentContainer}>
                <Text>{data?.data}</Text>
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
    