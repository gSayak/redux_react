import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { actionCreators } from '../state/index.js';
import { bindActionCreators } from 'redux';

export const Shop = () => {
    const balance = useSelector((state) => state.amount)
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
        <h2>Deposit/Withdraw Rupees</h2>
        <button className="btn btn-primary mx-2" onClick={()=>(withdrawMoney(100))}>-</button>
        Update Balance ({balance})
        <button className="btn btn-primary" onClick={()=>(depositMoney(100))}>+</button>
            
    </div>
  )
}
