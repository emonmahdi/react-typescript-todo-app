import { useEffect, useRef, useState } from 'react'
import { Input } from './Input'
import { useTodo } from '../context/useTodo'
import toast from 'react-hot-toast'

const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const { addTodo } = useTodo()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() !== '') {
      addTodo(input)
      setInput('')
      toast.success('Todo added successfully')
    } else {
      toast.error('Todo can not empty filed')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto bg-gray-300 my-5 rounded-lg">
          <Input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
            placeholder="Add todo...."
          />
          <button
            type="submit"
            className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo
