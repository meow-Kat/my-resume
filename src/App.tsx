import { Resume } from './components/resume/resume'
import { Header } from './components/header'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB, faCheckSquare, faCoffee, faDatabase, faHouseLaptop, faS, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
library.add(faB, faS, faHouseLaptop, faCheckSquare, faCoffee, faDatabase, faWindowMaximize)

function App() {
  return (
    <div className='bg-kevin-blue-secound'>
      {/* <Header/> */}
      <div className="container m-auto">
        <Resume />
      </div>
    </div>
  )
}

export default App