import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from '.'; 

export const TopBar : React.FC = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.logo}>TYPE 1 COPILOT</Text>
            <View style={styles.boxContainer}>
                <IconButton icon='home' />
                <IconButton icon='bell' /> 
                <IconButton icon='clock' />
                <IconButton icon='settings' />
            </View>
            
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 20,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto'
    },
    boxContainer: {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    box1: {
        backgroundColor: 'red',
        height: 20,
        width: 20,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        marginHorizontal: 2
    }
})