import React, {Fragment} from 'react';
import Button from './components/Button';
import NewsItem from './components/NewsItem'
import Loading from './components/Loading'


class App extends React.Component {
  state = {
    loading: false,
    article: null,
  }
  getNews = () => {
    this.setState({ loading: true });
    fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then((res) => res.json())
    .then((res) => this.setState({ article: res, loading: false }))
    console.log('getting there');
  }
  render = () => {
    const { article, loading } = this.state;
    return (
      <Fragment>
        <Button loading={loading} getNews={this.getNews} />
        <Loading loading={loading} />
        <NewsItem article={article} />
      </Fragment>
    );
  }
}


export default App;

