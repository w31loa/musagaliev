import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './index.css'
import 'react-dadata/dist/react-dadata.css';
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { ModalState } from './context/modal.context.tsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>

      <PrimeReactProvider>
          <ModalState>
                    <App/>
            </ModalState>
      </PrimeReactProvider>
      <Toaster />
  </Provider>

)
