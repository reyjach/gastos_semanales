import React, {Component} from 'react';

class FormularioGastos extends Component {

    //refs para los campos del formulario
    nombreGastos = React.createRef();
    cantidadGastos = React.createRef()

    CrearGastos = (e) => {
        
        e.preventDefault();
        
        const gasto = {
            nombreGastos : this.nombreGastos.current.value,
            cantidadGastos : this.cantidadGastos.current.value
        }

        this.props.agregarGasto(gasto);


        e.currentTarget.reset();
    }

    render(){
        return(
            <form onSubmit={this.CrearGastos}>

                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGastos} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidadGastos} className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}

export default FormularioGastos;