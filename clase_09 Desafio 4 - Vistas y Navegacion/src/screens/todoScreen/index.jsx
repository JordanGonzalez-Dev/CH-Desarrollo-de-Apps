import { AddTaskButton, AddTaskModal, Header, TaskCard } from '../../components'
import { Button, FlatList, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'

import { styles } from './styles'
import { useDropdown } from '../../hooks'
import { useNavigation } from '@react-navigation/native'
import uuid from 'react-native-uuid'

const dropdownItems = [
  { label: 'Critical', value: 'critical' },
  { label: 'High', value: 'high' },
  { label: 'Medium', value: 'medium' },
  { label: 'Low', value: 'low' }
]

const TodoScreen = () => {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
    priority: '',
    done: false
  })
  const [error, setError] = useState(null)

  const [modalVisible, setModalVisible] = useState(false)

  const { dropdownOpen, setIsDropdownOpen, dropdownValue, setDropdownValue, items, setItems } =
    useDropdown(dropdownItems)

  const handleChangeTitle = value => setTask({ ...task, title: value })
  const handleChangeDesc = value => setTask({ ...task, description: value })
  const handleCancel = () => {
    setModalVisible(!modalVisible)
    setTask({
      id: '',
      title: '',
      description: '',
      priority: '',
      done: false
    })
    setDropdownValue(null)
  }
  const handleAddTask = () => {
    if (task.title === '' || task.description === '' || dropdownValue === null) {
      setError('Please fill all fields')
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }

    setTasks([...tasks, { ...task, priority: dropdownValue, id: uuid.v4() }])
    setModalVisible(!modalVisible)
    setTask({
      id: '',
      title: '',
      description: '',
      priority: '',
      done: false
    })
    setDropdownValue(null)
    setError(null)

    if (tasks.length > 1) flatList.current.scrollToEnd()
  }
  const handleCheck = id => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    setTasks(newTasks)
  }
  const handleEdit = id => {
    console.warn('Not implemented yet')
  }
  const handleDelete = id => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const renderItem = ({ item }) => (
    <TaskCard item={item} handleCheck={handleCheck} handleEdit={handleEdit} handleDelete={handleDelete} />
  )

  const flatList = useRef()

  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Header title="CHMDC Task List" subtitle="Add, delete or mark as done a task" />

        <View style={styles.listContainer}>
          {tasks.length === 0 ? (
            <View style={styles.noContentContainer}>
              <Text style={styles.noContentText}>No tasks</Text>
              <Button
                title="Go to Reminders"
                onPress={() => navigation.navigate("Reminders")}
              />
              <Button
                title="Go to Settings"
                onPress={() => navigation.navigate("Settings")}
              />
            </View>
          ) : (
            <>
              <FlatList
              ref={flatList}
              data={tasks}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
            <Button
                title="Go to Reminders"
                onPress={() => navigation.navigate("Reminders")}
              />
              <Button
                title="Go to Settings"
                onPress={() => navigation.navigate("Settings")}
              />
            </>
          )}
        </View>

        <AddTaskButton modalVisible={modalVisible} setModalVisible={setModalVisible} />

        <AddTaskModal
          open={modalVisible}
          handleChangeTitle={handleChangeTitle}
          handleChangeDesc={handleChangeDesc}
          task={task}
          dropdownOpen={dropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
          items={items}
          setItems={setItems}
          error={error}
          handleCancel={handleCancel}
          handleAddTask={handleAddTask}
        />
      </View>
    </>
  )
}

export default TodoScreen
