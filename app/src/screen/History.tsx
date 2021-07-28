import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { Element, TopBar } from '../component';
import { useHistoryQuery } from '../generated/graphql';


const { height } = Dimensions.get('window');

export const History : React.FC = (props: any) => {

    const _history = useHistoryQuery();

    if(_history.loading){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Loading !</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <TopBar onClick={(screen: string) => props.navigation.navigate(screen)} />
            </View>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        _history.data?.history.map((history, key) => (
                            <Element {...{key}} bg_before={history.bg_before} carbs={history.carbs} date={history.created_at} />        
                        ))
                    }
                
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