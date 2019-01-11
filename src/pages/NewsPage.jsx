import React from 'react'
import { Form } from '../components/Form/Forms'
import { News } from '../components/News/MainNews'
 
import '../App.css'


class NewsPage extends React.Component {
 state = {
    news: null,
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('https://nau077.github.io/React_site_with_react_router_and_todo/data/newsData.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTimeout(() => { // добавили задержку
          this.setState({ isLoading: false, news: data })
        }, 3000) // в три секунды
      })
  }

 
  handleAddNews = data => {
    const nextNews = [data, ...this.state.news]
    this.setState({ news: nextNews }) // --?
  }
  render() {
    const { news, isLoading } = this.state // все необходимое взяли из state
    return (
      <React.Fragment>
        <div className="App-header_2" id="App-header_2"><h2>with React router</h2>
        </div>
        <div className="container">
        <Form onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && <News data={news} />}
      
        </div>

      </React.Fragment>
    )
  }
}

export default NewsPage