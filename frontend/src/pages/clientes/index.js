import { useEffect, useRef, useState } from 'react';
import Cabecalho from '../components/cabecalhoComponente/index.js';
import LateralMenu from '../components/menuComponente/index.js';
import './index.scss';
import axios from 'axios';

export default function ClientsControl() {
  


  return (
    <div className="MainApp">
      <LateralMenu />
      <div className='inputs_Tables'>
        <Cabecalho/>
        <div className='content'>
          <div className='Titulo'>
            <h4>ÁREA ADMINISTRATIVA</h4>
            <h1>Controle de Clientes</h1>
          </div>

          <section className='NovoCliente'>
            <h1> Novo Cliente </h1>
            <span >
              <label>Nome</label>
              <input type='text' />
            </span>

            <span >
              <label>Email</label>
              <input type='text' />
            </span>

            <span>
              <label>Telefone</label>
              <input type='text' />
            </span>

            <span>
              <label>CPF</label>
              <input type='text' />
            </span>

            <span>
              <label>CNH</label>
              <input type='text' />
            </span>

            <span className='btnSpan'>
              <button> Salvar </button>
            </span>

          </section>

          <section className='ClientsLista'>
            <h1>Lista de Clientes</h1>
            <span>
              <label>Nome</label>
              <input type='text' />
            </span>
            <table>
              <colgroup>
                <col style={{ width: 30 + '%' }} />
                <col style={{ width: 20 + '%' }} />
                <col style={{ width: 15 + '%' }} />
                <col style={{ width: 25 + '%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Telefone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {/* map aqui */}
              </tbody>
            </table>

          </section>

        </div>
      </div>
    </div >
  );
}
