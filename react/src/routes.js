
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import "./index.css";
import Cliente from './pages/Client'
import Pedido from './pages/Client/Pedido'
import Cart from './pages/Cart/cart'
import Home from "../src/pages/home/index";
import DetalhesProduto from "../src/pages/detalhes roupa/index";
import PagamentoCarrinho from "../src/pages/pagamento-carrinho/index";
import PagamentoInfo from "./pages/pagamento-info";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={Home} />
                <Route path="/Cliente" exact={true} component={Cliente} />
                <Route path="/pedido" exact={true} component={Pedido} />
                <Route path="/carrinho" exact={true} component={Cart} />
                <Route path="/DetalhesProduto" component={DetalhesProduto} />
                <Route path="/PagamentoCarrinho" component={PagamentoCarrinho} />
                <Route path="/PagamentoInfo" component={PagamentoInfo} />
            </Switch>
        </BrowserRouter>
    )
} 