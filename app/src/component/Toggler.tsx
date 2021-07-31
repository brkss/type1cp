import React from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native';

interface Props {
    label: string;
    onChange: (value: boolean) => void; 
}

export const Toggler : React.FC<Props> = ({label, onChange}) => {

    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = (value: boolean) => {
        console.log("toggle value => ", value);
        onChange(value);
        setIsEnabled(value);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.label} >{label}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#000000" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#ebe8e8"
                onValueChange={value => toggleSwitch(value)}
                value={isEnabled}
                style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10
    }
})