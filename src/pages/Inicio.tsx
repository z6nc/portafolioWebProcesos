import { Navbar } from '../components/layout/Navbar'
import { Main } from '../components/layout/Main/main'

export default function Inicio() {

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <Navbar />
      <Main />
    </div>
  )
}