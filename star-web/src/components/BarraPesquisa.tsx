import IconLup from '../assets/public/search.png'


interface BarraDePesquisaProps {
  pesquisa: string;
  setPesquisa: (value: string) => void;
  onBuscar: () => void;
}
function BarraDePesquisa({ pesquisa, setPesquisa, onBuscar }:BarraDePesquisaProps) {
  
  

  return (
    <div className="bg-white w-full mb-7 pl-2 h-10 flex items-center justify-center  border-white rounded-xl  opacity-75 hover:opacity-100 hover:cursor-pointer">
      <img src={IconLup} alt="Lupa" onClick={onBuscar} className="  w-5 h-5 mr-2" />
      <input type="text" value={pesquisa} onChange={(e) => {
        setPesquisa(e.target.value);
      }} onKeyDown={(e) => {
        if (e.key === "Enter") {
          onBuscar();
        }
      }} placeholder="" className="text-black focus:outline-none w-full p-2" />
    </div>
  )
}

export default BarraDePesquisa;