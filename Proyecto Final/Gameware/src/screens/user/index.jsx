import HeaderProfile from '../../components/HeaderProfile/HeaderProfile'
import ImageSelector from '../../components/ImageSelector/ImageSelector'
import PersonalData from '../../components/PersonalData/PersonalData'
import { View } from 'react-native'
import { addImage } from '../../store/user.slice'
import { useDispatch } from 'react-redux'

const UserDetails = ({ navigation }) => {
  const dispatch = useDispatch()

  const onImage = (uri) => {
    dispatch(addImage(uri))
  }

  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      <HeaderProfile navigation={navigation} />
      <ImageSelector onImage={onImage} />
      <PersonalData />
    </View>
  )
}

export default UserDetails