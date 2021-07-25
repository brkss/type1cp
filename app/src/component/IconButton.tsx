import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

interface Props {
    icon: string;
    size?: number;
    onClick: () => void
}

export const IconButton : React.FC<Props> = ({icon, size, onClick}) => {


    return(
        <TouchableOpacity onPress={() => onClick()}  style={styles.container}>
            <Icon name={icon} size={size || 22} />
        </TouchableOpacity>
    );
} 

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 7
    }
})