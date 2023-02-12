import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currencymod = () => {
    const { currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary' style = {{}}>
            <span>
                   Currency: {currency}
                <select className="custom-select" id="inputGroupSelect01">
                <option defaultValue>Choose...</option>
                <option value="Dollar" name="Dollar"> $ Dollar</option>
                <option value="Pound" name="Pound"> £ Pound</option>
                <option value="Euro" name="Euro">Є Euro</option>
                <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
                </select>
            </span>
        </div>
    );
};

export default Currencymod;