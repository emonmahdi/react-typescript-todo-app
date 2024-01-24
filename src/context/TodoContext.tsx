import { createContext, useState } from 'react'
import { nanoid } from 'nanoid'

export interface Todo {
  id: string
  text: string
  status: 'undone' | 'completed'
}

interface TodoContextProps {
  todos: Todo[]
  addTodo: (text: string) => void
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined,
)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  // Add new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      status: 'undone',
    }
    setTodos([...todos, newTodo])
  }

  const value: TodoContextProps = {
    todos,
    addTodo,
  }

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
