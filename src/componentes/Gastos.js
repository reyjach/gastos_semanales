import React, {Component} from 'react';

class Gastos extends Component {

    render() {
        const {nombreGastos,cantidadGastos} = this.props.gasto;
        
        return(
            <li className="gastos">

                <p>
                    {nombreGastos}
                    <span className="gasto">$ {cantidadGastos}</span>
                </p>

            </li>
        )
    }

}

export default Gastos;