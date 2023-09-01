import './index.scss';
import LateralMenu from '../components/menuComponente/index.js';
import Cabecalho from '../components/cabecalhoComponente/index.js';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export default function CarsControl() {


    const [tipos, setTipos] = useState([]);

    const [tipoVeiculo, setTipoVeiculo] = useState(0)
    const [modeloVeiculo, setModeloVeiculo] = useState('')
    const [marcaVeiculo, setMarcaVeiculo] = useState('')
    const [anoVeiculo, setAnoVeiculo] = useState('')
    const [placaVeiculo, setPlacaVeiculo] = useState('')

    const [listarVeiculo, setListarVeiculo] = useState('')
    
    
    async function inserirCarro() {

        try {
            
            let veiculo = {
                idTipoVeiculo: tipoVeiculo,
                modelo: modeloVeiculo,
                marca: marcaVeiculo,
                placa: placaVeiculo,
                ano: anoVeiculo
            }

            let r = await axios.post('http://localhost:5000/veiculo', veiculo)
            alert('veiculo cadastrado')


        } catch (err) {
            alert(err.response.data.erro)
        }
    
    }


    async function listarTipos() {
        let r = await axios.get('http://localhost:5000/veiculo/tipo');
        setTipos(r.data);
      }

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

                        {/*             
                        <select id="veiculo" name="veiculo" value={tipoVeiculo} onChange={e => setTipoVeiculo(e.target.value)}>      
                            {tipos.map(item =>
                                <option value={item.id}> {item.DS_TIPO} </option>  
                            )} 
                        </select>

                        {/* 
                            <select id="veiculo" name="veiculo" value={tipoVeiculo} onChange={e => setTipoVeiculo(e.target.value)}>
                                <option value="carro">selecionar</option>
                                <option value="carro">Carro</option>
                                <option value="motocicleta">Motocicleta</option>
                            </select>
                         */}

                         <input type='Number' value={tipoVeiculo} onChange={e => setTipoVeiculo(e.target.value)}></input>
                        </span>

                        <span >
                            <label value={modeloVeiculo} onChange={e => setModeloVeiculo(e.target.value)}>Modelo</label>
                            <input type='text' />
                        </span>

                        <span >
                            <label value={marcaVeiculo} onChange={e => setMarcaVeiculo(e.target.value)}>Marca</label>
                            <input type='text' />
                        </span>

                        <span >
                            <label value={anoVeiculo} onChange={e => setAnoVeiculo(e.target.value)}>Ano</label>
                            <input type='text' />
                        </span>

                        <span >
                            <label value={placaVeiculo} onChange={e => setPlacaVeiculo(e.target.value)}>Placa</label>
                            <input type='text' />
                        </span>

                        <span className='btnSpan'>
                            <button onClick={inserirCarro}> Salvar </button>
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
                            </tbody>
                        </table>

                    </section>

                </main>

            </div>
        </div>
    );
}