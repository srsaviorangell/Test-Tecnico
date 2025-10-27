
import './App.css'
import Backgroud_img from './assets/public/background-starwars.jpg'
import Vector from './assets/public/vector.png'
import {Outlet} from "react-router-dom"
import TrocaDeIndioma from './components/ToggeI18n.tsx'

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n.ts'; // ajuste o caminho

function App() {

  return (
    <div className="hide-scrollbar bg-[#000000] flex flex-col items-center justify-start w-full relative h-screen overflow-y-auto">
      <div id="conteiner da img" className="   relative w-full h-full flex items-center justify-center flex-col ">
        <img src={Backgroud_img} className="absolute -top-20 w-full h-full object-cover overflow-hidden " />
        <div className="absolute w-full   shadow-2x1 shadow-black  h-4/5 bg-linear-to-t  from-black to-transparent opacity-98"></div>
        <img src={Vector} className="absolute w-88 top-20" />
      <I18nextProvider i18n={i18n}>
      <div className="absolute top-3 sm:top-11 left-42 sm:left-160 lg:left-240 flex items-center justify-center">
        <TrocaDeIndioma />
      </div>
    </I18nextProvider>
      </div>
      <div className="absolute inset-x-0 top-80 flex flex-col w-full items-center z-10">

        <div className="w-[55vw] h-max flex flex-col justify-start">
          <Outlet />
        </div>

      </div>
    </div>



  )
}

export default App
