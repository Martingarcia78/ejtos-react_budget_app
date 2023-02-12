
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses } = useContext(AppContext);
    const changeBudget = (ba) => {
        if(ba > 20000) {
            alert("Budget can't exceed 20000");
            return;
        }

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(ba < totalExpenses) {
            alert("Your allocated budget can't be less than current expenses");
            return;
        }

        const new_budget = ba

        dispatch({
            type: "SET_BUDGET",
            payload:new_budget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    required="required"
                    type = "number"
                    id = "budget"
                    value ={budget}
                    style = {{marginLeft:"0.5rem", size:100}}
                    onChange={(a) => changeBudget(a.target.value)}></input>
                    
            </span>
        </div>
    );
};
export default Budget;