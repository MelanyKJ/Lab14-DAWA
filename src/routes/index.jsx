import {HomeView,RegisterView,LoginView} from "../pages";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/signup" element={<RegisterView/>}/>
            <Route path="/login" element={<LoginView/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;