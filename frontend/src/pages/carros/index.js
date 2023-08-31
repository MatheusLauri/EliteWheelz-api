import './index.scss';
import LateralMenu from '../components/menuComponente/index.js';
import Cabecalho from '../components/cabecalhoComponente/index.js';
import { useRef } from 'react';

export default function CarsControl() {


    // arrumar listagem pois não é map chamada na api

    return (
        <div className='CarsMain'>
            <LateralMenu />
            <div className='CarContent'>
                <Cabecalho/>
                <main>
                    <div className='Titulo'>
                        <h4>ÁREA ADMINISTRATIVA</h4>
                        <h1>Controle de Clientes</h1>
                    </div>

                    <section className='NovoCarro'>
                        <h1> Novo Veículo </h1>
                        <span >
                            <label>Nome</label>
                            <select id="veiculo" name="veiculo">
                                <option value="carro">selecionar</option>
                                <option value="carro">Carro</option>
                                <option value="motocicleta">Motocicleta</option>
                            </select>
                        </span>

                        <span >
                            <label>Modelo</label>
                            <input type='text' />
                        </span>

                        <span >
                            <label>Marca</label>
                            <input type='text' />
                        </span>

                        <span >
                            <label>Ano</label>
                            <input type='text' />
                        </span>

                        <span >
                            <label>Placa</label>
                            <input type='text' />
                        </span>

                        <span className='btnSpan'>
                            <button> Salvar </button>
                        </span>

                    </section>

                    <section className='Carrolista'>
                        <h1>Lista de Veículos</h1>
                        <span >
                            <label>Modelo, Marca, Placa</label>
                            <div className=''  >
                                <input type='text' />
                                <i class="fa-light fa-magnifying-glass"></i>
                            </div>
                        </span>
                        <table>
                            <colgroup>
                                <col style={{ width: 30 + '%' }} />
                                <col style={{ width: 15 + '%' }} />
                                <col style={{ width: 12 + '%' }} />
                                <col style={{ width: 12 + '%' }} />
                                <col style={{ width: 20 + '%' }} />
                            </colgroup>
                            <thead>
                                <tr>

                                    <th>Modelo</th>
                                    <th>Marca</th>
                                    <th>Ano</th>
                                    <th>Tipo</th>
                                    <th>placa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HB20</td>
                                    <td>Hyunday</td>
                                    <td>2016</td>
                                    <td>Carro</td>
                                    <td>abc-123</td>
                                    <td className='btns' style={{ display: 'flex', height: 20 }}><i class="fa-regular fa-pen-to-square"></i> <i class="fa-solid fa-delete-left"></i></td>
                                </tr>
                                <tr>
                                    <td>Prius</td>
                                    <td>Toyota</td>
                                    <td>2020</td>
                                    <td>carro</td>
                                    <td>abc-545</td>
                                    <td className='btns' style={{ display: 'flex', height: 20 }}><i class="fa-regular fa-pen-to-square"></i> <i class="fa-solid fa-delete-left"></i></td>
                                </tr>
                            </tbody>
                        </table>

                    </section>

                </main>

            </div>
        </div>
    );
}