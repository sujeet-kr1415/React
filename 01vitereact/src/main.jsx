import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
///import { jsx as _jsx } from 'react/jsx-runtime.js'

function MyApp() {
  return(
    <div>
      <h1>Custom App with Sujeet</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherElement2 = "hey I have been injected in reatElement"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',  
    target: '_blank'
  },
  'visit google',
  anotherElement2
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //MyApp()-give result
   //anotherElement- give result
   //<App/>
   reactElement
)

