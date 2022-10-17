import React from "react";
import { useState } from "react";
import './rpg.css';

export default function Rpg() {
    const [habilidade, setHabilidade] = useState([
        {
            nome: "REFLORECER",
            tipo: "Cura",
            descricao: "Equipe um amuleto que cura seus aliados dentro de alcance e na sua linha de visão"
        },
        {
            nome: "LABAREDA",
            tipo: "Fogo",
            descricao: "Equipe uma parede fogo bloqueando a visão do inimigo e causando dano ao atravessa-la"
        },
        {
            nome: "TORMENTA DE AÇO",
            tipo: "Dano",
            descricao: "Equipe um conjunto de facas altamente precisas."
        }
    ]);

    function handleAdd() {
        const name = document.getElementById("nome").value;
        const type = document.getElementById("tipo").value;
        const hability = document.getElementById("habilidade").value;

        setHabilidade([...habilidade, {
            nome: name,
            tipo: type,
            descricao: hability,
        }]);
    }

    function handleSerach() {
        const name = document.getElementById("nome").value.trim();
        const type = document.getElementById("tipo").value.trim();
        const hability = document.getElementById("habilidade").value.trim();

        const search = habilidade.filter((habilidade) => habilidade.nome.toUpperCase() === name.toUpperCase() || habilidade.tipo.toUpperCase() === type.toUpperCase() || habilidade.descricao.toUpperCase() === hability.toUpperCase());
        const position = habilidade.indexOf(search[0]);
        if (position < 0) {
            alert("Habilidade não encontrada!");
        } else {
            for (var i = 0; i < habilidade.length; i++) {
                if (i == position) {
                    document.getElementById(search[0].nome).style.color = "red";
                } else {
                    document.getElementById(habilidade[i].nome).style.color = "black";
                }
            }
        }

    }

    return (
        <div>
            {habilidade.map((habilidade) => {
                return (
                    <ul className="ulRpg" id={habilidade.nome}>
                        <li><b>{habilidade.nome} </b>- {habilidade.tipo}</li>
                        <li>{habilidade.descricao}</li>
                    </ul>
                );
            })}
            <hr />

            <div >
                <div>
                    <div className="input-group">
                        <input type="text" id="nome" required className="input" />
                        <label htmlFor="nome" className="input-label">Nome da Habilidade</label>
                    </div>
                    <div className="input-group">
                        <input type="text" id="tipo" required className="input" />
                        <label htmlFor="tipo" className="input-label">Tipo da Habilidade</label>
                    </div>
                    <div className="input-group">
                        <input type="text" id="habilidade" required className="input" />
                        <label htmlFor="habilidade" className="input-label">Descricao da Habilidade</label>
                    </div>
                </div>


                <div className="inline">
                    <p onClick={handleAdd} className="btn-small">Adicionar</p>
                    <p onClick={handleSerach} className="btn-small">Procurar</p>
                </div>
            </div>


        </div>
    )
}