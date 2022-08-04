import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
function App(){
  return(
<>
<Header></Header>
  <main>
    <h2>Home</h2>
  </main>
 <Footer test={true} nombre="Tomas" ></Footer>
</>
  )
}


export default App