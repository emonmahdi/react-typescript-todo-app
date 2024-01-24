import { useState } from 'react'

const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  return (
    <div>
      <form>
        <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="add todo"
            className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
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
