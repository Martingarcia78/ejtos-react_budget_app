import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currencymod = () => {
    const { currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>
                   Martin: {currency}
            </span>
        </div>
    );
};

export default Currencymod;