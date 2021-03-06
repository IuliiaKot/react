import React from 'react';
import DataApi from 'state-api';
import {data} from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  articleAtions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };

  render(){
    return(
      <ArticleList articles={this.state.articles}
        articleActions={this.articleAtions}/>
    );
  }
}

export default App;