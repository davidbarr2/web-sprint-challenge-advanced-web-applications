import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import { useEffect } from "react";

async function articleService(){
    console.log(setArticles)

    let articles =[]

    await axiosWithAuth()
        .get('/articles')
        .then( res => {
             articles = res.data
             console.log(articles)
        })
    
    //return articles
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.