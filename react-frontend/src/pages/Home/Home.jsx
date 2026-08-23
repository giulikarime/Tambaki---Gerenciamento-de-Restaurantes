import { Plus, CalendarFold, ClipboardCheck } from "lucide-react"
import { useState } from "react"
import './home.css'
import Header from "../../components/HeaderAndSidebar/Header"
import Sidebar from "../../components/HeaderAndSidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function Home() {
    const [tablesList,setTablesList] = useState([]);
    const [commandList, setCommandList]  = useState([]);
    const [expanded, setExpand] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const navigate = useNavigate();

    function redirect(url){
        navigate(url);
    }

    return (

        <>
            <Header expanded={expanded} setExpand={setExpand} setHasInteracted={setHasInteracted} />
            <main>
                <Sidebar expanded={expanded} hasInteracted={hasInteracted} />
                <div id="principal-menu">
                    <div id="btn-group">
                        <button onClick={()=>redirect('/order_ticket')} style={{ backgroundColor: '#3c57afff', color: 'white' }} className="principal-btn">
                            <Plus color="white" style={{backgroundColor:'#6f7dc6',borderRadius:'10px'}} size={40}></Plus>
                            <h2>Abrir Comanda</h2>
                            <p>Selecione a mesa e os itens do cardápio para abrir uma comanda.</p>
                        </button>
                        <button onClick={()=>redirect('/open_all_tickets')} style={{ backgroundColor: '#f3b45c', color: 'black'}} className="principal-btn">
                            <CalendarFold color="black" size={30} style={{backgroundColor:'#dda761', borderRadius:'16px', padding:'8px'}}></CalendarFold>
                            <h2>Comandas e Reservas Abertas</h2>
                            {commandList.length === 0 ? (<p>Nenhuma comanda ou reserva aberta.</p>) : (<p>Lista de comandas aqui.</p>) }
                        </button>
                        <button onClick={()=>redirect('/book_table')} style={{ backgroundColor: '#7eb5f8', color: 'black' }} className="principal-btn">
                            <ClipboardCheck color="black" size={30} style={{backgroundColor:'#a4c8fd', borderRadius:'16px', padding:'8px'}}></ClipboardCheck>
                            <h2>Reservar Mesa</h2>
                            <p>Reservar uma mesa para um cliente.</p>
                        </button>
                    </div>
                    <div id="tables-group">
                        {tablesList.length === 0 ? 
                            (<p>Nenhuma mesa foi criada.</p>):
                            (<p>Lista de mesas aqui.</p>)  }
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;