import  React, { useCallback, useState, useMemo} from 'react'
import  { VStack, useColorModeValue, Fab, Icon} from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import TaskList from '../components/task-list'
import shortid from 'shortid'
import Masthead from '../components/masthead'
import NavBar from '../components/navbar'
import TaskContext, { Task } from '../models/task'
    

const { useRealm, useQuery }  = TaskContext

export default function MainScreen() {
  const realm = useRealm()
  const result = useQuery(Task)
  const tasks = useMemo(() => result.sorted('createdAt'), [result])

  const [ editingItemId, setEditingItemId] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback(
    (task: Task): void => {
      realm.write(() => {
        task.done = !task.done
      })
    }, [realm])

  const handleChangTaskItemSubject = useCallback((task: Task,newSubject) => {
    realm.write(() => {
      task.subject = newSubject
    })
  }, [realm])

  const handleFinishEditingTaskItem = useCallback(_item => {
    setEditingItemId(null)
  }, [])

  const handlePressTaskItemLabel = useCallback(item => {
    setEditingItemId(item._id)
  }, [])

  const handleRemoveItem = useCallback((task: Task): void => {
    realm.write(()=>{
      realm.delete(task)
    })
  }, [realm])

  return (
      <AnimatedColorBox 
      bg={useColorModeValue('warmGray.500','primary.900')}
      w="full"
      flex={1}>
      <Masthead title="What's up, Andying!" image={require('../assets/masthead.png')}>
        <NavBar />
      </Masthead>
      <VStack flex={1} space={1} bg={useColorModeValue('warmGray.50','primary.900')} mt="-20px" borderTopLeftRadius="20px" borderTopRightRadius="20px" pt="20px">
        <TaskList 
          data={tasks}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
          />
      </VStack>
      <Fab position="absolute" renderInPortal={false} size="sm" icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />} colorScheme={useColorModeValue('blue','darkBlue')} bg={useColorModeValue('blue.500','blue.400')} onPress={() => {
        const id = shortid.generate()
        const task = Task.generate(id,'')
        realm.write(() => {
          realm.create("Task",task)
        })
        setEditingItemId(id)
      }} />
     </AnimatedColorBox>
  )
}

