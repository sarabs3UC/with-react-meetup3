import React from 'react';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}

const NewsItem = ({ article }) => (
  article ? article.articles.map((item) => (
    <article style={articleStyle} >
      <div>
        <h1>{item.title}</h1>
        <img style={imgStyle} src={item.urlToImage} alt="" />
        <h2>{item.description}</h2>
        <a href={item.url}>READ MORE</a>
      </div>
  </article>)) :
    null

);

export default NewsItem;

