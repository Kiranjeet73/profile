import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Contact from './contact/Contact';
import Fourth from './fourth/Fourth';
import Navbar from './navbar/Navbar';
import Second from './second/second';
import Third from './third/Third';
import './app.css'
// import Recommandation from './recommandation/Recommandation';
// import Certificate from './certificate/Certificate';


function App() {
  
  return (
 <div >
 <section id='navbar'> <Navbar/></section>
 <section id='second'><Second/></section>
 <section id='third'><Third/></section>
<section id='fourth'> <Fourth/></section>
 {/* <section id='recommandation'><Recommandation/></section>
 <section id='certificate'><Certificate/></section> */}
 <section id='contact'><Contact/></section>



 
 </div>

  
  );
}

export default App;
