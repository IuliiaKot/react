import React from 'react';
import Article from './Article';

const ArticleList = (props) => {

  return(
    <div>
      {Object.values(props.articles).map((article) => {
        return <Article 
          article={article}
          key={article.id}
          actions={props.articleActions}/>;
      })}
    </div>
  );
};

export default ArticleList;