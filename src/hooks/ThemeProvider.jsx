//hör slänger jag in det som inte ska klydda ner app.jsx. Där ska bara typ routsen ligga??

import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'react-ui'
import { tokens, components } from 'react-ui/themes/light'
import App from './App'

ReactDOM.render(  
<ThemeProvider tokens={tokens} components={components}>   
     <App />  
     </ThemeProvider>,  
     
     
     document.getElementById('root'))