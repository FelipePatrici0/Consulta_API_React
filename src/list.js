import React, {useState} from 'react'
import api from './api'
import './App.css'

export default function List() {

  	const [ titulo,  setTitulo ] = useState('');
  	const [ results, setResults] = useState([]);


  	function handlePesquisa() {
  		if (titulo != '') {
  			api.get(`${titulo}`).then((response) => { setResults(response.data.hits) });
  		}
  	}

	return (
		<div>
			<div className="fild">
	      		<h3>Filtro Aplicado: { titulo }</h3>
		      	<input type="text" placeholder="Digite um titulo" value={ titulo } onChange={ e => setTitulo(e.target.value)} />
		      	<button onClick={ handlePesquisa }> Pesquisar </button>
			</div>
			<div className="">
				{results.map((result) => (
					<div key={result.objectID} className="result">
						<div className="itens">
							<p><strong>Titulo:</strong> { result.title }</p>
							<p><strong>Autor:</strong> {result.author}</p>
							<p>
								<span><strong>URL: </strong></span>
								<a href={result.url} target='_blank' rel="noreferrer">{ result.url }</a>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}


