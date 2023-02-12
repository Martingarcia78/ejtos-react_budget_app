import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currencymod = () => {
    const { dispatch, currency } = useContext(AppContext);

    const changecurrency = (n) => {
        const new_currency = n.target.value;

        dispatch({
         type: "CHG_CURRENCY",
         payload: new_currency,   
        });
    };

    return (
        <div className='alert alert-secondary' style = {{background:"#66FF99",}}>
            <span>
                   Currency: ({currency}
                <select className="custom-select" 
                        id="inputGroupSelect01" 
                        style = {{background:"#66FF99", 
                        border:"none"}}
                        onChange={(event) => changecurrency(event)}>

                <option value="£" name="Pound">£ Pound</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="Є" name="Euro">Є Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
                </select>)
            </span>
        </div>
    );
};

export default Currencymod;