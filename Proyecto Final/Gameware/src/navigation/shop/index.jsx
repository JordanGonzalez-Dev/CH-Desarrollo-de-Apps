import { Categories, ProductDetail, ProductList } from '../../screens/index'

import HeaderImage from "../../components/HeaderImage/HeaderImage"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const ShopNavigator = () => (
    <Stack.Navigator screenOptions={() => ({ header: HeaderImage })}>
        <Stack.Screen name="Home" component={Categories} />
        <Stack.Screen name="Product List" component={ProductList} />
        <Stack.Screen name="Product Detail" component={ProductDetail} />
    </Stack.Navigator>

)

export default ShopNavigator