import { faCartPlus, faGamepad, faList, faPerson } from '@fortawesome/free-solid-svg-icons'

import CartNavigator from '../cart'
import OrderNavigator from '../orders'
import ShopNavigator from '../shop'
import TabIcons from '../../components/TabIcons/TabIcons'
import UserNavigator from '../user'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { styles } from './styles'

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
        }}>
            <BottomTabs.Screen
                name='Shop'
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (<TabIcons focused={focused} name={"Tienda"} icon={faGamepad} />)
                }}
            />
            <BottomTabs.Screen
                name='Cart'
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (<TabIcons focused={focused} name={"Carrito"} icon={faCartPlus} />)
                }}
            />
            <BottomTabs.Screen
                name='Orders'
                component={OrderNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (<TabIcons focused={focused} name={"Órdenes"} icon={faList} />)
                }}
            />
            <BottomTabs.Screen
                name='My Profile'
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (<TabIcons focused={focused} name={"Mi Perfil"} icon={faPerson} />)
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator