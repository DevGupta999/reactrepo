import { Outlet } from "react-router-dom";
import Sidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";
import "./index.css"

export default function Layout(){

    return (   
        <>
            <div style={{'display':'flex'}}>
            <Sidebar/>
            <div className="outlet" style={{'display':'flex','flexDirection':'column'}}>
                <Topbar className='topbar'/>
                <Outlet />
            </div>
            </div>  
            
        </>
    );
}