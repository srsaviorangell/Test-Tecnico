import Expand_content from '../assets/public/expand_content.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";




interface PersonagemNome {
    id: string;
    nome: string;
}

interface CardPersonagemProps {
    personagens: string[];
}

const CardPersonagem = ({ personagens }: CardPersonagemProps) => {
    const [personagensDetalhes, setPersonagensDetalhes] = useState<PersonagemNome[]>([]);

    
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);
    useEffect(() => {
        const buscarPersonagens = async () => {
            try {
                setCarregando(true);
                setErro(null);

                // faz todas as requisições de uma vez
                const promises = personagens.map(async (url) => {
                    const id = url.split("/").filter(Boolean).pop()!;
                    const response = await axios.get(`https://swapi.dev/api/people/${id}`);
                    return { id, nome: response.data.name };
                });

                const resultados = await Promise.all(promises);
                setPersonagensDetalhes(resultados);
            } catch (err) {
                console.error(err);
                setErro("Erro ao carregar personagens.");
            } finally {
                setCarregando(false);
            }
        };

        if (personagens.length > 0) buscarPersonagens();
    }, [personagens]);

    if (carregando) return <div className="text-white p-5">Carregando personagens...</div>;
    if (erro) return <div className="text-red-500 p-5">{erro}</div>;

    return (
        <div className="gap-4 flex flex-col w-full h-full">
            {personagensDetalhes.map(({ id, nome }) => (
                <Link key={id} to={`/personagens/${id}/`}>
                    <div className="border-b-2 border-[#00ff96] flex items-center justify-between text-[12px] ml-2 sm:ml-6 w-[95%] h-full">
                        <h1>{nome}</h1>
                        <img src={Expand_content} className="p-2 w-max h-max" />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CardPersonagem;