import './Footer.css';
import { Link } from "react-router-dom";
import { useState } from "react";;

const Footer = () => {

  const [dev, setDev] = useState(false);

  return (
    <div className="footer-container">
      <div className="cont">
        <p className="Contactanos title">Contactanos</p>
        <a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="#" target="_blank" rel="noopener noreferrer">dinamitahostel@gmail.com</a>
      </div>
      <div className="cont">
        <p className="interes title">Te podria interesar</p>
        <Link to="contact">Preguntas Frecuentes</Link>
        <Link to="rooms">Vistazo rapido</Link>
        <Link to="reviewHostel">Dejanos tu review</Link>
      </div>
      <div className="cont">
        <p className="redes title">Nuestras Redes</p>
        <div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogovector.net%2Fwp-content%2Fuploads%2F2011%2F11%2Ffacebook-f-logo-195x195.png&f=1&nofb=1&ipt=28f161af0961a8646ffa8fed1ec3f3f5ed73a8e77d17060e17876dc360db8976&ipo=images" alt="logo Facebook" />
          <a href="https://www.facebook.com/profile.php?id=100088166975189" target="_blank" rel="noopener noreferrer">Nuestro Facebook</a>
        </div>
        <div>
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F07%2FTwitter-PNG-HD-1-180x180.png&f=1&nofb=1&ipt=dda5b1e96bbd66d9abb08f88614313b9a5ebdf90be7530f6507b3cb8f13c4c6d&ipo=images" alt="Logo Twitter" />
          <a href="https://twitter.com/Dinamita_Hostel?t=iLZWitnpas6UyvvnAr6QEw&s=09" target="_blank" rel="noopener noreferrer">Nuestro Twitter</a>
        </div>
      </div>
      <div className="cont">
        <p className="developers title">Desarrolladores</p>
        <div className="ver">
        <button onClick={()=>setDev(!dev)}>Ver Todos</button>
        <div className={dev ? 'verDevelopers' : 'noDevelopers'}>
          <a href="https://github.com/SophSawczuk" target="_blank" rel="noopener noreferrer">SophSawczuk</a>
          <a href="https://github.com/zyro2930" target="_blank" rel="noopener noreferrer">zyro2930</a>
          <a href="https://github.com/LuCardozo" target="_blank" rel="noopener noreferrer">LuCardozo</a>
          <a href="https://github.com/GermanSmigoski" target="_blank" rel="noopener noreferrer">GermanSmigoski</a>
          <a href="https://github.com/galoss88" target="_blank" rel="noopener noreferrer">galoss88</a>
          <a href="https://github.com/kripto-c" target="_blank" rel="noopener noreferrer">kripto-c</a>
          <a href="https://github.com/ToledoFernando" target="_blank" rel="noopener noreferrer">ToledoFernando</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
