import React from "react";
import {useParams} from "react-router-dom";
import FilmDetailComponet from "../components/FilmDetailComponent.tsx";


 const FilmDetailPage = () =>{
    const {id} = useParams();
const idFilme = id ? parseInt(id) : 0; 

// força o TypeScript a entender que este componente tem exatamente essas props,
const FilmDetailTyped  = FilmDetailComponet as React.ComponentType<{ id: number }>;
 
    return(
        <>
        <div className="text-white">
            <FilmDetailTyped  id={idFilme}/> 
        </div>
        </>
    )
};

export default FilmDetailPage;
