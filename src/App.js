import React from 'react';
import { connect } from 'react-redux';
import { addColor, incrementCount } from './actions';

class App extends React.Component {
  handleAddColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.props.addColor(randomColor);
  };

  handleIncrementCount = (id) => {
    this.props.incrementCount(id);
  };

  render() {
    return (
      <div>
        <h1>Lista de Colores</h1>
        <button onClick={this.handleAddColor}>Agregar Color</button>
        <ul>
          {this.props.colors.map((color) => (
            <li
              key={color.id}
              style={{ backgroundColor: color.color, padding: '10px', cursor: 'pointer' }}
              onClick={() => this.handleIncrementCount(color.id)}
            >
              {`${color.color} - ${color.count}`}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  colors: state.colors,
});

const mapDispatchToProps = {
  addColor,
  incrementCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);