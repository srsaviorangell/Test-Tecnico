import BarraDePesquisa from '../components/BarraPesquisa.tsx'
import { useState } from 'react';
import { useStarWarsFilmes, type Films } from '../hooks/useStarWarsService.ts'
import {Link} from "react-router-dom";


interface CardDeFilmesProps {
  filme: Films;
}

function CardFilmes({ filme }: CardDeFilmesProps) {


  return (
    <>
    <Link to={`/filmes/${filme.id}`}>
      <div id="card-principal" className=" flex flex-col items-center justify-start h-26 w-full  rounded-[22px] bg-green-900/10 border border-green-500/50 backdrop-blur-xs hover:drop-shadow-xl hover:cursor-pointer hover:translate-y-[-5px] hover:shadow-[0px_0px_30px_0px_#00ff96] transition mb-5" >
        
        <div id="sub-card-conteiner" className="flex  flex-col items-center justify-start h-full w-full  ml-5 mt-1 ">
          <div id="titulo" className="ms:pl-2  text-white w-full h- font-semibold">
            <h1>{filme.titulo}</h1>

          </div>

          <div id="sub-inf" className=" ms:p-2 gap-2   flex w-full h-max" >

            <div className="whitespace-nowrap text-white  w-full  h-max  text-[12px] ">
              <h1>Data de Lancamento:</h1>
              <h1>Episódio:</h1>
            </div>
            <div className=" text-white w-full h-max text-[12px] ">
              <h1 className="whitespace-nowrap  ">{filme.dataLancamento}</h1>
              <h1>{filme.ep}</h1>
            </div>


          </div>



        </div>


      </div>
    </Link>

    </>
  )
}



function ListFilm() {
  const { filmes, carregamento, error } = useStarWarsFilmes()

  const [pesquisa, setPesquisa] = useState("");
  const [termoBuscaConfirmado, setTermoBuscaConfirmado] = useState('');
  const handleBuscar = () => {
    setTermoBuscaConfirmado(pesquisa);
  };

  if (!filmes) return null;

  const filmesFiltrados = filmes.filter(filme =>
    filme.titulo.toLowerCase().includes(termoBuscaConfirmado.toLowerCase())
  );


  if (carregamento) return <div className="text-white">Carregando...</div>
  if (error) return <div className="text-red-500">Erro: {error}</div>
  return (
    <>
      <div className=" -mb-160 w-[55vw]    ">

        <BarraDePesquisa pesquisa={pesquisa} 
          setPesquisa={setPesquisa} 
          onBuscar={handleBuscar} />

        {filmesFiltrados.length === 0 && termoBuscaConfirmado.length > 0 ? (
          <div className="flex items-center justify-center w-full h-20 rounded-[22px] bg-green-900/10 border border-green-500/50 backdrop-blur-xs text-white">Não encontramos esse filme "{termoBuscaConfirmado}".</div>
        ) : (

          filmesFiltrados.map((filme) => (
            <CardFilmes key={filme.id} filme={filme} />
          ))
        )}
        
      </div>
    </>
  )
}
export default ListFilm
