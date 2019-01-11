import React, { Component, Fragment } from 'react'
import '../App.css'
 

 
class Form extends Component {
  state = {
    inputName: '',
    inputEmail: '',
    inputInfo: '',
    agree: false,
    visible: false,
    showData: {
      name: '',
      email: '',
      info: '',
    }
    
  }

  // onBtnClickHandler = e => {
  //   e.preventDefault()
  //   const { inputName, inputEmail,  inputInfo } = this.state
  //   this.props.onAddContact({
  //     id: +new Date(),
  //     author: inputName,
  //     inputEmail,
  //     inputInfo,
  //   })
  // }
  
 

  handleInputNameChange = ({target: {value} }) => {
    this.setState({
      inputName: value,
    })
  }

  handleInputEmailChange = ({target: {value} }) => {
    this.setState({
      inputEmail: value,
    })
  }

  handleInfoChange = ({target: {value} }) => {
    this.setState({
      inputInfo: value,
    })
  }

  handleShow = (e) => {
    e.preventDefault();
    const { inputName, inputEmail, inputInfo, visible } = this.state;
    this.setState({
      inputName: '',
      inputEmail: '',
      inputInfo: '',
      visible: true,
      showData: {
        name: inputName,
        email: inputEmail,
        info: inputInfo,
      }
     
    })
    
  }
  

  handleCheckboxChange = e => {
    this.setState({ agree: e.currentTarget.checked })
  }

  validate = () => {
    const { inputName, inputEmail, agree } = this.state
    if (inputName.trim() && inputEmail.trim() && agree) {
      return true
    }
    return false
  }

   

  render() {
    const { inputName, inputEmail, inputInfo, showData, visible  } = this.state;
    const { name, email, info } =  showData;
    

    return (
      <Fragment>
      <form className="add">
        <input
          id="inputName"
          type="text"
          onChange={this.handleInputNameChange}
          className="add__author"
          placeholder="Ваше Лапоимя"
          value={inputName}
        />
        <input
          id="inputEmail"
          type='email'
          onChange={this.handleInputEmailChange}
          className="add__text"
          placeholder="Ваша лапопочта"
          value={inputEmail}
        />
        <textarea
          id="inputInfo"
          onChange={this.handleInfoChange}
          className="add__text"
          placeholder="О себе"
          value={inputInfo}
        />
        <label className="add__checkrule">
          <input type="checkbox" onChange={this.handleCheckboxChange} /> Я
          согласен с правилами
        </label>
        <button
          className="add__btn"
          onClick={this.handleShow}
          
          // onClick={() => { this.state.handleShow(this.state.showData)}}
          // onClick={this.onBtnClickHandler}
          disabled={!this.validate()}        
        >
          Отправить
        </button>
      </form>
{visible && <div className="article">
<p className="news__author"> {name}</p>
<p className="news__text">{email}</p>
 
 <p className="news__big-text">{info}</p> 
</div>}


</Fragment>
    )
  }
}

export { Form }

class Contact  extends React.Component {
  
      render() {

        return (
            <React.Fragment>
            <div className="App-header_2" id="App-header_2"><h2>with React router</h2>
            </div>
         <Form />
    
 
          </React.Fragment>
        )
      }

}

export default Contact