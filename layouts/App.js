import Sidebar from "../components/Sidebar";

function App({children}){

    return (
        <div>        
            <Sidebar /> 
            <div className="container pt-4">
                {children}
            </div>
        </div>

    )
}