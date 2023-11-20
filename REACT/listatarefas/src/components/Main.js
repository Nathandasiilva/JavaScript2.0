import React, { Component } from 'react';

// From

import'./Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

render() {
  const { novaTarefa } = this.state;

    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>

        <form action='#' className='form'>
          <input onChange={this.handleChange} type="text" />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    );
  }
}
