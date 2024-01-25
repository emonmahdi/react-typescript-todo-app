import { useTodo } from '../context/useTodo'
import { SiStarship } from 'react-icons/si'
import TodoItem from './TodoItem'
import { motion } from 'framer-motion'

const TodoList = () => {
  const { todos } = useTodo()

  if (!todos.length) {
    return (
      <div className="max-w-lg px-5 m-auto bg-gray-300 p-5 rounded-lg">
        <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-bold text-center rounded-xl bg-zinc-900 text-white">
          <SiStarship className="text-5xl text-white" />
          You have nothing to do!
        </h1>
      </div>
    )
  }

  return (
    <div>
      <motion.ul className="grid max-w-lg gap-2 px-5 mx-auto bg-gray-300 p-5 rounded-lg">
        {todos?.map(todo => {
          return <TodoItem todo={todo} key={todo.id} />
        })}
      </motion.ul>
    </div>
  )
}

export default TodoList
