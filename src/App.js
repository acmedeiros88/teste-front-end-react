import { Component } from "react";
import Table from 'react-bootstrap/Table'
import api from "./api";

class App extends Component {
  state = {
    produtos: []
  };

  async componentDidMount() {
    const response = await api.get("/produtos/ativo?sort=quantidade");
    this.setState({produtos: response.data});
  };

  render(){
    const {produtos} = this.state; 
    return(
      <div>
        <h1>PRODUTOS</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Quantidade</th>
              <th>ativo</th>
            </tr>
          </thead>
          <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome_produto}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.ativo.toString()}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };
};

export default App;
