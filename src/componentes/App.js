import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header.js';
import Formulario from './Formulario.js';
import Listado from './Listado.js';
import ControlPresupuesto from './ControlPresupuesto.js';
import {validarPresupuesto} from '../helper.js';


class App extends Component {

  state = {
      presupuesto : '',
      restante : '',
      gastos : {}
  }
  
  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto= () =>{
    let presupuesto = prompt('¿Cual es el presupuesto?');
    
    let resultado = validarPresupuesto(presupuesto);

    if (resultado){
      this.setState({
        presupuesto : presupuesto,
        restante : presupuesto
      })
    }else{
      this.obtenerPresupuesto();
    }
  }

  agregarGasto = gasto => {

    const gastos = {...this.state.gastos};

    gastos[`gasto${Date.now()}`] = gasto;

    this.restarPresupuesto(gasto.cantidadGastos);
  
    this.setState({
      gastos
    })
  }

  //Restar del presupuesto cuando un gasto se crea

  restarPresupuesto = cantidad =>{
    let restar = Number(cantidad);


    let restante = this.state.restante;

    restante -= restar;

    this.setState({
      restante
    })


  }

  render(){
    return (
      <div className="App container">
        <Header
          titulo='Gastos Semanal'
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarGasto = {this.agregarGasto}
              />
            </div>
            <div className="one-half column">
              <Listado 
                gastos = {this.state.gastos}
              />
              <ControlPresupuesto 
                presupuesto = {this.state.presupuesto}
                restante = {this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    
    );
  }

  
}

export default App;
