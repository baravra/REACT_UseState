import React, {useState} from "react";
import './banco.css';
import { MinusCircle , PlusCircle , Bank} from "phosphor-react";

export default function Banco() {
    const [saldo, setSaldo] = useState("0.00");

    function handleAdd() {
        const valor = (document.getElementById("deposito").value).replace(',', '.');
        const saldoAtual = parseFloat(saldo.replace(',', '.')) + parseFloat(valor);
        setSaldo(((saldoAtual.toFixed(2)).toString()).replace('.', ',') );
        
    }

    function handleMinus(){
        const valor = (document.getElementById("saque").value).replace(',', '.');
        const saldoAtual = parseFloat(saldo.replace(',', '.')) - parseFloat(valor);
        setSaldo(((saldoAtual.toFixed(2)).toString()).replace('.', ',') );
    }

    return (
        <div>
            <div className="flex">
                <Bank size={30} />
                <h3>Saldo: R${saldo} </h3> 

            </div>

            
            <div className="input-group">
                <input type="text" id="deposito" required className="input"/>
                <label htmlFor="deposito" className="input-label">Valor do Deposito</label>
                <PlusCircle size={27} className="btn" onClick={handleAdd}/>
            </div>
            <div className="input-group">
                <input type="text" id="saque" required className="input"/>
                <label htmlFor="saque" className="input-label">Valor do Saque</label>
                <MinusCircle size={27}  className="btn"  onClick={handleMinus}/>
            </div>

        </div>
    )
}