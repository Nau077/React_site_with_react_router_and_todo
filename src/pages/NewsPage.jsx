import React from 'react'
import { Form } from '../components/Form/Forms'
import { News } from '../components/News/MainNews'
import '../App.css'
import newsData from '../../public/data/newsData.json'


class NewsPage extends React.Component {
 state = {
    news: null,
    isLoading: false,
  }

  static getDerivedStateFromProps(props, state) {
    let nextFilteredNews

    // смотрим в state.news (ранее смотрели в props)
    // и проверяем, чтобы не клоинировать null
    // например, в момент первой отрисовки
    if (Array.isArray(state.news)) {
      nextFilteredNews = [...state.news]

      nextFilteredNews.forEach((item, index) => {
        if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
          item.bigText = 'СПАМ'
        }
      })

      return {
        filteredNews: nextFilteredNews,
      }
    }

    return null
  }



  componentDidMount() {
    const {newData} = newsData
    this.setState({ isLoading: true })
    fetch({newData})
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