import { Text, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { THEME } from '../../constants/theme/index';
import { styles } from './styles';

const TabIcons = ({ focused, name, icon }) => {

    return (
        <View style={styles.tabItem}>
            <FontAwesomeIcon icon={icon} size={26} color={focused ? THEME.colors.accent : "#494949"} />
            <Text style={[styles.tabText, { color: focused ? THEME.colors.accent : "#494949" }]}>{name}</Text>
        </View>
    )
}

export default TabIcons