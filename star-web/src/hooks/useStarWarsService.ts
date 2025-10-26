import { useState, useEffect } from "react";
import axios from "axios";

export interface Personagens {

    nome: string;
    altura: string;
    peso: string;
    corCabelo: string;
    corPele: string;
    corOlhos: string;
    anoNascimento: string;
    genero: string;
    planetaNatal: string;
    filmes: string[];
}

export interface Films {
    id?: number;
    titulo: string;
    ep: number;
    dataLancamento: string;
}

export interface DetailFilms extends Films {
    titulo: string;
    diretor: string;
    produtor: string;
    personagens: string[];
}


export const useStarWarsPersonagem = (id: number) => {

    const [personagem, setPersonagem] = useState<Personagens | null>(null);
    const [carregamento, setCarregamento] = useState(true); // caregamento da requisão verificar se ja foi feito 

    // criaremos o estade de erro onde iremos guarda as mesanged e erros caso haja
    const [error, setError] = useState<string | null>(null);

    useEffect(() => { // dipararemos a chamada de requisição 
        const fetchData = async () => {
            try {
                setCarregamento(true);
                const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
                const data = response.data; // esta sendo crianda pq a interface esta em pt-br e logo temos que trata os dados para tal lingua
                setPersonagem({
                    nome: data.name,
                    altura: data.height,
                    peso: data.mass,
                    corCabelo: data.hair_color,
                    corPele: data.skin_color,
                    corOlhos: data.eye_color,
                    anoNascimento: data.birth_year,
                    genero: data.gender,
                    planetaNatal: data.homeworld,
                    filmes: data.films
                });
            } catch (err) {
                // Correção: forma correta de tratar errors no TypeScript
                if (axios.isAxiosError(err)) {
                    setError(`Erro ao buscar o filme: ${err.response?.status === 404 ? 'Filme não encontrado' : err.message}`);
                } else if (err instanceof Error) {
                    setError(`Erro ao buscar o filme: ${err.message}`);
                } else {
                    setError("Erro desconhecido ao buscar o filme");
                }
            } finally {
                setCarregamento(false);
            }
        };
        fetchData();

    }, [id]);// passamos o id para caso o id mude a função de busca vai atras

    return { personagem, carregamento, error };
};

export const useStarWarsFilmes = () => {

    const [filmes, setFilmes] = useState<Films[] | null>(null);
    const [carregamento, setCarregamento] = useState(true); // caregamento da requisão verificar se ja foi feito 

    // criaremos o estade de erro onde iremos guarda as mesanged e erros caso haja
    const [error, setError] = useState<string | null>(null);

    useEffect(() => { // dipararemos a chamada de requisição 
        const fetchData = async () => {
            try {

                setCarregamento(true);
                const responseCont = await axios.get(`https://swapi.dev/api/films/`);
                const dataCont = responseCont.data;

                const totalFilmes = dataCont.count; // 

                const Ids = Array.from({ length: totalFilmes }, (_, index) => index + 1);

                const filmesPromises = Ids.map(async (filmeId, index) => {
                    const response = await axios.get(`https://swapi.dev/api/films/${filmeId}/`);
                    const data = response.data;
                    const dataId = { ...data, id: index + 1 }; // colocar id no objeto da requisão para interar no link e referencia a cada obj da api 

                    return {
                        id: dataId.id,
                        titulo: data.title,
                        ep: data.episode_id,
                        dataLancamento: data.release_date,
                    };
                });
                const todosFilmes = await Promise.all(filmesPromises);
                setFilmes(todosFilmes);

            } catch (err) {
                // Correção: forma correta de tratar errors no TypeScript
                if (axios.isAxiosError(err)) {
                    setError(`Erro ao buscar o filme: ${err.response?.status === 404 ? 'Filme não encontrado' : err.message}`);
                } else if (err instanceof Error) {
                    setError(`Erro ao buscar o filme: ${err.message}`);
                } else {
                    setError("Erro desconhecido ao buscar o filme");
                }
            } finally {
                setCarregamento(false);
            }
        };
        fetchData();

    }, []);

    return { filmes, carregamento, error };
};


export const useStarWarsDetailFilms = (id: number) => {
    const [informacao, setInformacao] = useState<DetailFilms | null>(null);
    const [carregamento, setCarregamento] = useState(true); // caregamento da requisão verificar se ja foi feito 

    // criaremos o estade de erro onde iremos guarda as mesanged e erros caso haja
    const [error, setError] = useState<string | null>(null);

    useEffect(() => { // dipararemos a chamada de requisição 
        const fetchData = async () => {
            try {

                setCarregamento(true);
                const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
                const data = response.data;
                setInformacao({
                    titulo: data.title,
                    ep: data.episode_id,
                    diretor: data.director,
                    produtor: data.producer,
                    dataLancamento: data.release_date,
                    personagens: data.characters,
                });

            }catch (err) {
                // Correção: forma correta de tratar errors no TypeScript
                if (axios.isAxiosError(err)) {
                    setError(`Erro ao buscar o filme: ${err.response?.status === 404 ? 'Filme não encontrado' : err.message}`);
                } else if (err instanceof Error) {
                    setError(`Erro ao buscar o filme: ${err.message}`);
                } else {
                    setError("Erro desconhecido ao buscar o filme");
                }
            } finally {
                setCarregamento(false);
            }
        };
        fetchData();

    }, [id]);

    return { informacao, carregamento, error };
}
