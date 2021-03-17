import logo from './logo.svg';
import './App.css';
import logosatc from '../src/image/logosatc.png'

function App() {
  return (

<div className="tudo">
 <div className="topo">
  <div className="satc">
    <spam className="educacao">SATC - EDUCAÇÃO E TECNOLOGIA</spam>
  </div>
   <div className="outros">
     <spam className="t1">FOTOS</spam>
     <spam className="t2">SOBRE</spam>
     <spam className="t3">HISTÓRIA</spam>
     <spam className="t4">OUTROS</spam>
   </div>
 </div>

 <div className="titulo">
   <div className="divlogo">
    <img className="logo" src={logosatc} height="80"></img>
   </div>
    <spam className="titulonome">SATC - VIRTUAL MAP</spam>
    <spam className="samuel">Criado por: Samuel Negretti Oliveira de Souza</spam>
 </div>

 <div className="mapa">
 <iframe src="https://www.google.com/maps/d/embed?mid=1Y96XBGGEAB6OoackgqwBSqtVtpGPg4iI" width="1300px" height="450px"></iframe>

 </div>

 <div className="rodape">
  <div className="dados">
    <spam className="p1">LOCALIZAÇÃO</spam>
    <spam className="p2">TELEFONE</spam>
    <spam className="p3">SITE</spam>
  </div>
   <div className="resposta">
    <div className="r1">
      <spam className="local">R. Pascoal Meler, 73 - Universitário, Criciúma - SC, 88805-380</spam>
    </div>
    <div className="r2">
     <spam className="telefone">+55 (48) 9-34317500</spam>
    </div>
    <div className="r3">
     <spam className="site">http://www.portalsatc.com/</spam>
    </div>

   </div>
 </div>





</div>
 







  );
}

export default App;
