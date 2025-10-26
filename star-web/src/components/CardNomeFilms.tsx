import Expand_content from '../assets/public/expand_content.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


interface FilmsPersonagem{
    id:string;
    nome:string;
}
interface CardNomeFilmsProps{ // temos que cria um molde type para o array e passar ele como props no atributo do card
    films:string[];
}
const CardNomeFilms = ({films}:CardNomeFilmsProps) => {
    const [filmsDosPersonagens, setFilmsDosPersonagens] = useState<FilmsPersonagem[]>([]);

    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() =>{
        const buscaFilmsPersonagem = async()=>{
            try{
                setCarregando(true);
                setErro(null);
                const promises = films.map(async(url)=>{
                    const id = url.split("/").filter(Boolean).pop()!;
                    const response = await axios.get(`https://swapi.dev/api/films/${id}`);
                    return {id,nome:response.data.title};});
                const resultados = await Promise.all(promises);
                setFilmsDosPersonagens(resultados);
            }catch(err){
                console.error(err);
                setErro("Erro ao carregar participação nos filmes.");
            }finally{
                setCarregando(false);
            }
        };
        if(films.length > 0) buscaFilmsPersonagem();
    } , [films]);
    if (carregando) return <div className="text-white p-5">Carregando participação nos filmes...</div>;
    if (erro) return <div className="text-red-500 p-5">{erro}</div>;
  
    return (
        <div className="gap-4 flex flex-col w-full h-full">
            {filmsDosPersonagens.map(({ id, nome }) => (
                <Link key={id} to={`/filmes/${id}/`}>
                    <div className="border-b-2 border-[#00ff96] flex items-center justify-between text-[12px] ml-6 w-[95%] h-full">
                        <h1>{nome}</h1>
                        <img src={Expand_content} className="p-2 w-max h-max" />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CardNomeFilms;