import { Button, FlatList, Text, View } from 'react-native'
import { Header, TaskCard } from '../../components'
import React, { useRef, useState } from 'react'

import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid'

const RemindersScreen = () => {
  const [reminders, setReminders] = useState([])
  const [reminder, setReminder] = useState({
    id: '',
    title: '',
    description: '',
    time: ''
  })
  const [error, setError] = useState(null)

  const handleAddReminder = () => {
    if (reminder.title === '' || reminder.description === '') {
      setError('Please fill all fields')
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }

    setReminders([...reminders, { ...reminder, time: '20:30', id: uuid.v4() }])
    // setModalVisible(!modalVisible)
    setReminder({
      id: '',
      title: '',
      description: '',
      priority: '',
      done: false
    })
    setError(null)

    if (reminder.length > 1) flatList.current.scrollToEnd()
  }
  const handleEdit = () => { }
  const handleDelete = () => { }

  const renderItem = ({ item }) => <TaskCard item={item} handleEdit={handleEdit} handleDelete={handleDelete} />

  const flatList = useRef()

  const RemindersList = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.listContainer}>
        {reminders.length === 0 ? (
          <>
            <View style={styles.noContentContainer}>
              <Text style={styles.noContentText}>No Reminders</Text>
              <Button
                title="Back to Home"
                onPress={() => navigation.navigate("Home")}
              />
              <Button
                title="Go to Settings"
                onPress={() => navigation.navigate("Settings")}
              />
            </View>
          </>

        ) : (
          <FlatList
            ref={flatList}
            data={reminders}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title="CHMDC Reminders" subtitle="Add or delete Reminders" />

      <RemindersList />
    </View>
  )
}

export default RemindersScreen
