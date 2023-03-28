import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import AuthNavigator from '../auth'
import TabNavigator from '../tab'
import { useSelector } from 'react-redux'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF"
  }
}

const AppNavigator = () => {
  const userId = useSelector(state => state.auth.userId)

  return (
    <NavigationContainer theme={MyTheme}>
      <TabNavigator />
      {/* {userId ? <TabNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  )
}

export default AppNavigator