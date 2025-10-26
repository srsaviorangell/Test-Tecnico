import { useNavigate } from "react-router-dom";
import Arrow_back from '../assets/public/arrow_back.png';



const BotaoReturn = () =>{
    const navigate = useNavigate();

    return(
        <>

            <button className="absolute  -top-68 left-40 gap-2 w-20 h-10 flex items-center justify-center bg-[#ffffff] rounded-[22px] text-[#737373] px-4 py-2   hover:drop-shadow-xl hover:cursor-pointer hover:translate-y-[-5px] hover:shadow-[0px_0px_30px_0px_#00ff96] transition "
            onClick={() => navigate(-1)} >
            <img src={Arrow_back} alt="Voltar" className="color-[#737373] w-4 h-4"/>
            Voltar
            </button>
        
        
        </>
    )

} 

export default BotaoReturn;

