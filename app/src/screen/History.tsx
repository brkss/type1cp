import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, RefreshControl} from 'react-native';
import { Element, TopBar } from '../component';
import { useHistoryQuery } from '../generated/graphql';

const wait = (timeout: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
};
const { height } = Dimensions.get('window');

export const History : React.FC = (props: any) => {

    const _history = useHistoryQuery({
        notifyOnNetworkStatusChange: true
    });
    const [refreshing, setRefreshing] = React.useState(false);
    
    // On page refresh !!
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        _history.refetch()
        wait(2000).then(() => setRefreshing(false));
    }, []);

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
                <ScrollView showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                >
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