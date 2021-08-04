import "../style/style.css"
import { createContext } from 'react';

function Popup(props) {
const AppContext = createContext();

  return (
    <div className="popup-background">
        <div className="popup-body">
            <div className="popup-content">
              { props.children }
            </div>
        </div>        
    </div>
  );
}

export default Popup;
