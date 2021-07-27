import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from './IconButton'; 

interface Props {
    onClick: (screenName: string) => void;
}

export const TopBar : React.FC<Props> = ({onClick}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.logo}>TYPE 1 COPILOT</Text>
            <View style={styles.boxContainer}>
                <IconButton onClick={() => onClick('home')} icon='home' />
                <IconButton onClick={() => {}} icon='bell' /> 
                <IconButton onClick={() => onClick('history')} icon='clock' />
                <IconButton onClick={() => {}} icon='settings' />
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