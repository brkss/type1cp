import { useLinkBuilder } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Dimensions, DevSettings, KeyboardAvoidingViewBase } from "react-native";
import { TopBar, Info, Input, Button, Alert } from '../component';
import { useCreateBaseDataMutation, useDataQuery } from "../generated/graphql";

const {height} = Dimensions.get('window');

export const Home : React.FC = (props: any) => {

    const [error, SetError] = React.useState('');
    const [form, SetForm] = React.useState<any>();
    const [createBase] = useCreateBaseDataMutation();
    // handle form 
    const handleForm = (index: string, value: string) => {
        SetForm({
            ...form,
            [index]: value
        })
    }

    // handle data creation 
    const handleCreatebaseData = () => {
        if(!form || !form.bg_before || !form.carbs){
            SetError('Invalid Data !');
            return;
        }
        SetError('');
        const _data = {
            bg_before : Number(form.bg_before),
            carbs: Number(form.carbs)
        }
        createBase({
            variables: {
                bg_before: _data.bg_before,
                carbs: _data.carbs
            }
        }).then(res => {
            if(res.data?.createBaseData.status && !error){
                props.navigation.navigate('history');
            }
            console.log("req res => ", res);
        });
    }
    


    return (
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <TopBar onClick={(screen: string) => props.navigation.navigate(screen)} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Calculating  Every Meal Carbs {'\n'}Help You Manage {'\n'}Your Diabetes Better</Text>
                <Info />
                {
                    error ? 
                        <Alert message='Invalid Data !' type='error' />
                    : null
                }
                
                <Input label='Blood Sugar Before Eating :' unit='Mg/DL' onChange={(value: string) => handleForm('bg_before', value)} />
                <Input label='How Much Carbs You’re Taking :' unit='g' onChange={(value: string) => handleForm('carbs', value)} />
                <Button onPress={() => handleCreatebaseData()} label='Validate' />
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
    