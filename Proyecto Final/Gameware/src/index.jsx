import { ActivityIndicator, View } from 'react-native';

import { AppNavigator } from './navigation'
import { Provider } from 'react-redux';
import { init } from './constants/db';
import { store } from './store/store';
import { styles } from './styles';
import { useFonts } from 'expo-font';

const App = () => {
  const [loaded] = useFonts({
    "Roboto-Bold":require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light":require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular":require("../assets/fonts/Roboto-Regular.ttf")
  })

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  init()
    .then(() => { console.log("DB initialized 🟢") })
    .catch((err) => {
      console.log("DB failed to initialize 🔴")
      console.log(err.message);
    })

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )

}

export default App