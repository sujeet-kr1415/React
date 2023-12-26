import Chai from "./chai"

function App() {
  const username = 'Start learning new skills'
  return (
    <>
    <Chai />
    <h1>Hello folks</h1>
    <p>{username}</p>
    </>
  )
  // using {} you can inject variable int return()
  // you can't write evaluation expression in return() only evaluated expression is allowed
  // wrape everything in jsx fragment <></>
}

export default App
