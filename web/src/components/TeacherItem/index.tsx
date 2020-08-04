import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/32230841?s=460&u=aa5d7a6a6a10381a1f37439597f194dc49a90650&v=4" alt="João Vítor Gonçalves"/>
                <div>
                    <strong>João Vítor Gonçalves</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Programando e relaxando.
                <br/>
                MUDAR ESSE TEXTO DEPOIS
                <br/>
                xddddddddddddddddddddddd
            </p>

            <footer>
                <p>
                    Preço/hora:
                    <strong>R$ 8000,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;