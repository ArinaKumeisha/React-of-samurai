import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from './redux/redux_store';
import Pagination from 'rc-pagination';




    ReactDOM.render(

        <BrowserRouter>
            <Provider store={store}>,
                <Pagination />,
                <App/>,
            </Provider>,
        </BrowserRouter>,
        document.getElementById('root')
    );



/*import '../../assets/index.less';
import React from 'react';
import Pagination from 'rc-pagination';

const App = () => (
    <Pagination className="ant-pagination" defaultCurrent={3} total={450} />
);

export default App;*/
















