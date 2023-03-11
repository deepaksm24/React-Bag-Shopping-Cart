import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import NavBarapp from './nav';
import Cart2 from './cart2';


function App() {
  return (
    <div className="App">
      <NavBarapp />
      <Heading />
      <Cart2 />
      <Foot />
    </div>
  );


}

function Heading() {
  return (

    <header className="bg-dark py-4">
      <Container className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">Welcome</p>
        </div>
      </Container>
    </header>


  );


}


function Foot() {

  return (

    <footer className="py-5 bg-dark">
      <Container>
        <p className="m-0 text-center text-white">Copyright &copy;Owned&copy;Bag-Zone</p>
      </Container>

    </footer>

  )



}
export default App;


