import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'




const reactElement =React.createElement(
  'a',
  {href:'hhtps://google.com', target: '_blank'},
  'click me to visit  google!'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)




