import React from 'react';


function Formulario(){

    const handleChange = e => {
        //cambiar el state
    }

    return(
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="Ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                </select>
            </div>
            <div className="input-field col s12"></div>
                <input type="submit" className="waves-efect waves-light btn-large btn-block yellow accent-4" 
                value="Buscar Clima" />
        </form>
    )
}

export default Formulario;