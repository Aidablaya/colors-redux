import React from 'react';
import { connect } from 'react-redux';
import {
  addColor,
  incrementCount,
  dragStart,
  dropTop,
  dropBot,
} from './actions';
import './App.css';

// RANDOM COLOR
class App extends React.Component {
  handleAddColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log('Adding color:', randomColor);
    this.props.addColor(randomColor);
  };

  // sumar color
  handleIncrementCount = (id) => {
    this.props.incrementCount(id);
  };

  handleDragStart = (e, item) => {
    e.dataTransfer.setData('application/json', JSON.stringify(item));
    this.props.dragStart(item);
  };

  handleDropTop = (e) => {
    e.preventDefault();
    const draggedItem = JSON.parse(e.dataTransfer.getData('application/json'));
    this.props.dropTop(draggedItem);
  };

  handleDropBot = (e) => {
    e.preventDefault();
    const draggedItemData = e.dataTransfer.getData('application/json');
    const { color, count } = JSON.parse(draggedItemData);

    // Utiliza la acción dropBot con el elemento arrastrado
    this.props.dropBot({ color, count: parseInt(count) || 0 });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='title'>RANDOM COLOR</h1>
        </header>
        <main>
          <button className='AddedColor' onClick={this.handleAddColor}>Agregar Color</button>
          <ul className="listRandomColor">
            {this.props.colors.map((color) => {
              console.log('Color:', color); // Agrega este log para depurar
              return (
                <li
                  className='listRandomColor_li'
                  key={color.id}
                  style={{
                    backgroundColor: color.color,
                    padding: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => this.handleIncrementCount(color.id)}
                  onDragStart={(e) => this.handleDragStart(e, color)} // Manejar el evento de inicio de arrastre
                  draggable
                >
                 
                </li>
              );
            })}
          </ul>
          <div
            className="boxDrop"
            onDrop={this.handleDropBot}
            onDragOver={(e) => e.preventDefault()}
          >
            <ul>
              {' '}
              {/* Cambiado de div a ul */}
              {this.props.botList &&
                this.props.botList.map((item) => (
                  <li
                    key={item.id}
                    className="listBoxDrop"
                    onDragStart={(e) => this.handleDragStart(e, item)}
                    draggable
                    style={{
                      backgroundColor: item.color,
                    }} /* Establecer el color de fondo según la propiedad color */
                  >
                    {`${item.color}`}
                  </li>
                ))}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  colors: state.colors,
  topList: state.topList,
  botList: state.botList || [],
});

const mapDispatchToProps = {
  addColor,
  incrementCount,
  dragStart,
  dropTop,
  dropBot,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
