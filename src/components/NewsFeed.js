import React, { Component } from "react";
import {articles} from '../seedData.js'
import '../index.css'

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles
    };
  }

  render() {
    return this.state.articles.map((article, i) => {
      return (
        <div id ="eacharticle" key={i}>
          <p> {article.source.id} by {article.source.name}</p>
          <p> {article.title} by {article.author}  </p>
          <p> {article.description} </p>
          <a href = {article.url}> <img src = {article.urlToImage} alt={"logo"}/></a>
          <p><button> + </button> {article.votes} </p>
          <p> {article.publishedAt} </p>
        </div>
      );
    });
  }
}

export default NewsFeed;
