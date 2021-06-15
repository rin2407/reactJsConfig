import { BrowserRouter } from "react-router-dom";
import BaseAppComponent from './BaseAppComponent';

function PrivateComponent(props) {
    return (
       <>
       <BrowserRouter>
         <BaseAppComponent />
       </BrowserRouter>
       </>
    );
}

export default PrivateComponent;