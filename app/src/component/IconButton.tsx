import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

interface Props {
    icon: string;
    size?: number;
}

export const IconButton : React.FC<Props> = ({icon, size}) => {


    return(
        <TouchableOpacity style={styles.container}>
            <Icon name={icon} size={size || 22} />
        </TouchableOpacity>
    );
} 

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 7
    }
})