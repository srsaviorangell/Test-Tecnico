import { useStarWarsDetailFilms,  } from '../hooks/useStarWarsService';
import { useParams } from "react-router-dom";
import CardPersonagem from '../components/CardNomePersonagem.tsx'
import BotaoReturn from '../components/ButRetorna.tsx'

const FilmDetailComponent = () => {
    const { id } = useParams<{ id: string }>();
    const idNumerico = Number(id);
    const { informacao, carregamento, error } = useStarWarsDetailFilms(idNumerico);
    if (carregamento) {
        return <div className="text-white p-5">Carregando detalhes do Filme...</div>;
    }
    if (error) {
        return <div className="text-red-500 p-5">Erro ao carregar detalhes: {error}</div>;
    }
    if (!informacao) {
        return <div className="text-white p-5">Filme não encontrado.</div>;
    }
    return (
        <>
            <BotaoReturn />

            <div id="card-detalhe" className="gap-3 flex flex-col items-center justify-start h-full w-[55vw]  rounded-[22px] bg-green-900/10 border border-green-500/50 backdrop-blur-xs  mb-8 pb-3" >

                <div id="card-das-inf-gertal" className="gap-2 flex flex-col items-center justify-start w-full h-full">
                    <div id="nome filme" className="flex w-full h-max pt-4 pl-5">
                        <h1 className="font-bold">{informacao.titulo}</h1>
                    </div>
                    <div id=" conteiner-dados-gel" className=" gap-3 flex  items-center pl-5 w-full h-35">
                        <div id="if-relação" className="flex  flex-col items-center w-max h-full">
                            <div className="flex items-center font-semibold  text-[12px] ml-2 w-full h-full"><h1>Data de Lançamento:</h1></div>
                            <div className="flex items-center font-semibold  text-[12px] ml-2 w-full h-full"><h1>Episodio:</h1></div>
                            <div className="flex items-center font-semibold  text-[12px] ml-2 w-full h-full"><h1>Diretor:</h1></div>
                            <div className="flex items-center font-semibold  text-[12px] ml-2 w-full h-full"><h1>Produtor:</h1></div>
                        </div>
                        <div id="if-alimenta-relação" className="flex  flex-col items-center  w-max h-full">
                            <div className="flex items-center text-[12px] w-full h-full"><h1>{informacao.dataLancamento}</h1></div>
                            <div className="flex items-center text-[12px] w-full h-full"><h1>{informacao.ep}</h1></div>
                            <div className="flex items-center text-[12px] w-full h-full"><h1>{informacao.diretor}</h1></div>
                            <div className="flex items-center text-[12px] w-full h-full"><h1>{informacao.produtor}:</h1></div>
                        </div>
                    </div>
                </div>
                <div id="card-das-inf-personagem" className="gap-2 flex flex-col  w-full h-ful">
                    <div id="descrição personagem " className="font-bold flex  w-full h-max  pt-4 pl-5">
                        <h1>Personagens</h1>
                    </div>
                    <CardPersonagem personagens={informacao.personagens} />
                    <div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default FilmDetailComponent;