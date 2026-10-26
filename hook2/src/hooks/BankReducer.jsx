import { useReducer, useState } from "react";

const initialState = {balance: 0};

const reducer = (state, action) => {
    // 예금: DEPOSIT, 출금: WITHDRAW , action.payload - AMOUNT(액수)
    switch(action.type){
        case "DEPOSIT":  //예금
            return { ...state, balance: state.balance + action.payload}
        case "WITHDRAW": //출금
            return { ...state, balance: state.balance - action.payload}
        default:
            return state;  //현재 잔액
    }
}

const BankReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [amount, setAmount] = useState(0); //금액(입. 출금)

    return(
        <div>
            <h2>예금 및 출금</h2>
        </div>
    )
}

export default BankReducer;