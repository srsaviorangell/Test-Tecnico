import CardNomeFilms from '../components/CardNomeFilms';
import { useStarWarsPersonagem } from '../hooks/useStarWarsService';
import { useParams } from "react-router-dom";
import BuscaPlaneta from '../components/BuscaPlanetaName';
import BotaoReturn from '../components/ButRetorna';



const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const idNumerico = Number(id);

  const extrairId = (url: string) => {
    const partes = url.split("/").filter(Boolean);
    return Number(partes[partes.length - 1]);
  };

  const { personagem, carregamento, error } = useStarWarsPersonagem(idNumerico);

  if (carregamento) return <div className="text-white p-5">Carregando Personagem...</div>;
  if (error) return <div className="text-red-500 p-5">Erro ao carregar Personagem: {error}</div>;
  if (!personagem) return <div className="text-white p-5">Personagem não encontrado.</div>;

  return (
    <>
      <BotaoReturn />

      <div className="gap-3 flex flex-col items-center justify-start h-full w-[55vw] rounded-[22px] bg-green-900/10 border border-green-500/50 backdrop-blur-xs mb-8 pb-3">

        {/* Informações Gerais */}
        <div className="gap-2 flex flex-col items-center justify-start w-full h-full">
          <div className="flex w-full h-max pt-4 pl-5">
            <h1 className="font-bold">{personagem.nome}</h1>
          </div>

          <div className="gap-3 flex items-center pl-5 w-full h-35">
            <div className="flex flex-col items-center w-max h-full">
              <div className="flex items-center font-semibold text-[12px] sm:ml-2 w-full h-full"><p>Altura:</p></div>
              <div className="flex items-center font-semibold text-[12px] sm:ml-2 w-full h-full"><p>Peso:</p></div>
              <div className="flex items-center font-semibold text-[12px] sm:ml-2 w-full h-full"><p>Cor do cabelo:</p></div>
              <div className="flex items-center font-semibold text-[12px] sm:ml-2 w-full h-full"><p>Cor da pele:</p></div>
              <div className="flex items-center font-semibold text-[12px] sm:ml-2 w-full h-full"><p>Cor do olho:</p></div>
              <div className="flex items-center font-semibold text-[12px] sm:ml-2 w-full h-full whitespace-nowrap"><p>Ano de Nascimento:</p></div>
              <div className="flex items-center font-semibold text-[12px] sm:ml-2 w-full h-full"><p>Gênero:</p></div>
              <div className="flex items-center font-semibold text-[12px] sm:ml-2 w-full h-full"><p>Planeta Natal:</p></div>
            </div>

            <div className="flex flex-col items-center w-max h-full">
              <div className="flex items-center text-[12px] w-full h-full"><p>{personagem.altura} m</p></div>
              <div className="flex items-center text-[12px] w-full h-full"><p>{personagem.peso} KG</p></div>
              <div className="flex items-center text-[12px] w-full h-full"><p>{personagem.corCabelo}</p></div>
              <div className="flex items-center text-[12px] w-full h-full"><p>{personagem.corPele}</p></div>
              <div className="flex items-center text-[12px] w-full h-full"><p>{personagem.corOlhos}</p></div>
              <div className="flex items-center text-[12px] w-full h-full"><p>{personagem.anoNascimento}</p></div>
              <div className="flex items-center text-[12px] w-full h-full"><p>{personagem.genero}</p></div>
              <div className="flex items-center text-[12px] w-full h-full"><BuscaPlaneta id={extrairId(personagem.planetaNatal)} /></div>
            </div>
          </div>
        </div>

        {/* Filmes */}
        <div className="font-bold flex w-full h-max pt-4 pl-5"><h1>Filmes</h1></div>
        <CardNomeFilms films={personagem.filmes} />
    
      </div>
    </>
  );
};

export default CharacterDetail;
