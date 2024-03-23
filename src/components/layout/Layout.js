import Menu from "../../header/menu";
import {Outlet} from "react-router-dom";

const Layout=()=>{
    return(
        <>
            <div className="App">
                <header>
                    <Menu/>
                </header>
                <main>
                  <Outlet/>
                </main>
            </div>
        </>
    )
}

export default Layout;