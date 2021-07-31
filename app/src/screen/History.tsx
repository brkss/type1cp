import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, RefreshControl} from 'react-native';
import { Element, TopBar, DataDrawer } from '../component';
import { useHistoryQuery } from '../generated/graphql';
import RBSheet from "react-native-raw-bottom-sheet";
import { IBaseData } from '../utils/types/BaseData';

const wait = (timeout: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
};
const { height } = Dimensions.get('window');

export const History : React.FC = (props: any) => {


    const refRBSheet = React.useRef() as any;
    const [currentBaseData, SetCurrentBaseData] = React.useState<IBaseData>();
    const [currentBaseDataId, SetCurrentBaseDataId] = React.useState<number>(-1);
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

    // show Base Data Info 
    const showBaseDataInfo = (history: any) => {
        SetCurrentBaseData({
            bg_before: history.bg_before,
            carbs: history.carbs,
            date: history.created_at
        });
        SetCurrentBaseDataId(history.id);
        refRBSheet.current.open()
    }

    if(_history.loading){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Loading !</Text>
            </View>
        )
    }

    //return <Drawer />

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
                            <Element {...{key}} bg_before={history.bg_before} carbs={history.carbs} date={history.created_at} bg_after={history.bg_after || undefined} correction={history.correction || undefined} hypoglycemia={history.hypoglycemia || undefined} insulin_taken={history.insulin_taken || undefined} onGetinfo={() => showBaseDataInfo(history)} />        
                        ))
                    }
                
                </ScrollView>
            </View>
            
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={height - 150}
                openDuration={400}
                animationType='slide'
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent",
                        
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    },
                    container: {
                        borderRadius: 20,
                        backgroundColor: '#faefe3',
                       
                    }
                    
                }}
            >
                <DataDrawer id={currentBaseDataId} data={currentBaseData!} />
            </RBSheet>

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