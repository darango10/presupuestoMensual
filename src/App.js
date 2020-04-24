import React, {useState} from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";


function App() {
    // Definir el state
    const [presupuesto, guardarPresupuesto] = useState(0);
    const [restante, guardarRestante] = useState(0);
    const [mostrarPregunta, actualizarPregunta] = useState(true);
    const [gastos, guardarGastos] = useState([]);


    //Cuando agreguemos un nuevo gasto
    const agregarNuevoGasto = gasto => {
        guardarGastos([
            ...gastos,
            gasto
        ])
    }

    console.log(gastos)

    return (
        <div className="container">
            <header>
                <h1>Presupuesto Mensual</h1>
                <div className="contenido-principal contenido">
                    {mostrarPregunta ?
                        <Pregunta
                            guardarPresupuesto={guardarPresupuesto}
                            guardarRestante={guardarRestante}
                            actualizarPregunta={actualizarPregunta}
                        />
                        :
                        <div className="row">
                            <div className="one-half column">
                                <Formulario
                                    agregarNuevoGasto={agregarNuevoGasto}
                                />
                            </div>
                            <div className="one-half column">
                                2
                            </div>
                        </div>}
                </div>
            </header>

        </div>
    );
}

export default App;
