import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {memo} from 'react'

interface MenuIconProps {
    id: number;
    name: string;
}

const MenuIcon = memo((props: MenuIconProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.menuBack}
            onPress={() => console.log(props.name)}
        >
            <Text style={styles.menuName}>{props.name}</Text>
        </TouchableOpacity>
    );
});
export default MenuIcon
const styles = StyleSheet.create({
    menuBack: {

        backgroundColor: '#E95A24',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 28,
    },
    menuName: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
    }
})
