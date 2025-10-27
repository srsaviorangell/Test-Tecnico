import { useNavigate } from "react-router-dom";
import Arrow_back from '../assets/public/arrow_back.png';
import  "../i18n/i18n" // caregamos as linguagem    
import {useTranslation} from 'react-i18next';


// sm:left-40
const BotaoReturn = () =>{
    const navigate = useNavigate();
    const {t, } = useTranslation();
    return(
        <>

            <button className="absolute  -top-76 sm:-top-68  left-5 sm:left-40 gap-2 w-20 h-13 flex items-center justify-center bg-[#ffffff] rounded-[22px] text-[#737373] px-4 py-2   hover:drop-shadow-xl hover:cursor-pointer hover:translate-y-[-5px] hover:shadow-[0px_0px_30px_0px_#00ff96] transition "
            onClick={() => navigate(-1)} >
            <img src={Arrow_back} alt="Voltar" className="color-[#737373] w-4 h-4"/>
            <p>{t('Voltar')}</p>
            </button>
        
        
        </>
    )

} 

export default BotaoReturn;

