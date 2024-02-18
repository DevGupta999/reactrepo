import {ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route} from 'react-router-dom'
//CSbaseline set css to the default and ThemeProvider proivide the ability to pass themes to material UI
import Topbar from "./pages/global/Topbar"
import Dashboards from "./pages/dashboard";
import Sidebars from "./pages/global/Sidebar"
import Team from "./pages/team"
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
// import Bar from "./pages/bar";
import Form from "./pages/form";
// import Line from "./pages/line";
import FAQ from "./pages/faq";
// import Pie from "./pages/pie";
// import Geography from "./pages/geography"
import Calendar from "./pages/calendar"

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme ={theme}>
        <CssBaseline/>
        <div className="app" >
          <Sidebars/>
          <main className='content'>
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboards/>} />
              <Route path="/team" element={<Team/>}/>
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
               {/*<Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>*/}
              <Route path="/faq" element={<FAQ/>}/>
              {/* <Route path="/geography" element={<Geography/>}/> */}
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
