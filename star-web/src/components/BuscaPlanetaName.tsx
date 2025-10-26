import { useEffect, useState } from "react";
import axios from "axios";

interface PlanetaName {
    id: number;
    nome?: string;

}

const BuscaPlaneta = ({ id } : PlanetaName ) => {
const [planeta, setPlaneta] = useState<PlanetaName | null>(null);
const [carregamento, setCarregamento] = useState(true);
const [erro, setErro] = useState<string | null>(null);

useEffect(() => {
    const buscarPlaneta = async () => {
        try {
            setCarregamento(true);
            setErro(null);
            const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
            setPlaneta({id: response.data.id, nome: response.data.name });
        }catch(err){
            console.error(err);
            setErro("Erro ao carregar planeta.");
        }finally{
            setCarregamento(false);
        }
    };

    buscarPlaneta();

},[id]);
if (carregamento) return <p>Carregando planeta...</p>;
  if (erro) return <p>{erro}</p>;

  return <p> {planeta?.nome}</p>;

};

export default BuscaPlaneta;