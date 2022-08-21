import Mainpage from "./pages/Mainpage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mainpage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
