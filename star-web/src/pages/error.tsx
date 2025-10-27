import ImgParaErro from "../assets/public/msn_erro.png"
import { Link } from "react-router-dom";
import  "../i18n/i18n" // caregamos as linguagem 

import {useTranslation} from 'react-i18next';


const ErrorPage = () => {
const {t} = useTranslation();

  return (
  <div className="absolute w-screen h-screen overflow-hidden flex items-center justify-s">
    <img src={ImgParaErro} alt="Página não encontrada" className="w-full h-full  " />
    <div className="absolute top-123 left-115">
      <Link to="/">
      <button className="bg-[#ffffff] rounded-[22px] text-[#737373] px-4 w-120 py-2 hover:drop-shadow-xl hover:cursor-pointer hover:-translate-y-1 hover:shadow-[0px_0px_30px_0px_#00ff96] transition  ">
        <p className="font-bold">{t('HOME')}</p>
      </button>
    </Link>
  </div>
  </div>);
};

export default ErrorPage;

