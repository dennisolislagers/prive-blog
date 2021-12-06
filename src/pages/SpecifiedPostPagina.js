import React from 'react';
import {useParams} from "react-router-dom";
import posts from "../data/posts.json";
import {useHistory} from "react-router-dom";

function SpecifiedPostPagina () {

    const history = useHistory()
    function returnHome (){
        history.push('/')
    }
    function returnOverview () {
        history.push('/blogposts')
    }
    const { blogId } = useParams()
    const currentPost = posts.find((postId) => {
        return postId.id === blogId;
    })
    return (
        <div>
            <h1>Hier de gegevens van blognummer: {currentPost.id}</h1>
            <h3>{currentPost.title}</h3>
            <h4>{currentPost.data}</h4>
            <p>{currentPost.content}</p>
            <button type="button" onClick={returnHome}>Terug naar home pagina </button>
            <button type="button" onClick={returnOverview}>Terug naar het overzicht</button>
        </div>
    );
}

export default SpecifiedPostPagina;