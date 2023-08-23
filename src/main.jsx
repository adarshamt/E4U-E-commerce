
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom'


import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import store from './store/store.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
 <Provider store={store}>

  <App />

 </Provider>
  
  </BrowserRouter>

)
