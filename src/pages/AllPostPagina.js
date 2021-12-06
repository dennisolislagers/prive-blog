import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";
function AllPostPagina() {
    console.log(posts);
    return (
            <div>
                <h1>Blog Post Overview</h1>
                <h2>Aantal Blog Posts: {posts.length}</h2>
                <ul>
                    {posts.map((overview) => {
                        return <li key={overview.id}>
                            <Link to={`/blogposts/${overview.id}`}>
                                {overview.title}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
    );
}
export default AllPostPagina;