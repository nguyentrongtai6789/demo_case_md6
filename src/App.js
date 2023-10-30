import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomeUser} from "./tour/view/Home-user";
import {About} from "./tour/view/About";
import {InfoUser} from "./tour/view/Info-user";
import {FormLogin} from "./tour/view/FormLogin";
import {Layout} from "./tour/view/Layout";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={""} element={<HomeUser/>}></Route>
                </Route>
                <Route path={'/info-lover'} element={<InfoUser/>}></Route>
                {/*<Route path={'/form-login'} element={<FormLogin/>}></Route>*/}
                {/*<Route path={'/tourInformation/:id'} element={<TourInformation/>}></Route>*/}
                {/*<Route path={'/create'} element={<HomeUser/>}></Route>*/}
                {/*<Route path={'/edit/:id'} element={<FormEdit/>}></Route>*/}
            </Routes>
        </>
    );
}

export default App;
