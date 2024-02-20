import { Outlet } from "react-router-dom";
import Sidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";
import "./index.css"

export default function Layout(){

    return (   
        <div className="tact" style={{
            display: "flex",
        }}>
                <Sidebar/>
                <div style={{width: "100%"}}>
                <Topbar/>
                <div style={{width: "100%"}}>
                <Outlet />
                </div>
                
                </div>
        </div>
    );
}