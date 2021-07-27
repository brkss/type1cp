import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { Element, TopBar } from '../component';


const { height } = Dimensions.get('window');

export const History : React.FC = (props: any) => {

    

    return (
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <TopBar onClick={(screen: string) => props.navigation.navigate(screen)} />
            </View>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Element />
                    <Element />
                    <Element />
                    <Element />
                    <Element />
                    <Element />
                    <Element />
                    <Element />
                    <Element />
                    <Element />
                    <Element />
                    <Element />
                </ScrollView>
            </View>
            
            
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBF3EB',
        
    },
    topBarContainer: {
        flex: .2,
        justifyContent: 'center'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .8
    }
});