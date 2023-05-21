import Image from 'next/image'
import { Inter } from 'next/font/google'
import TodoApp from './components/TodoApp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <section className='flex justify-center items-center h-screen'>
        <TodoApp />
      </section>
    </div>
  )
}
