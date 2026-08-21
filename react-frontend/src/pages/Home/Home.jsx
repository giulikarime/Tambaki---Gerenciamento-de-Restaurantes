import { useEffect, useState } from "react"
import burger_menu from "../../assets/header/burger_menu.svg"
import logo from '../../assets/Tambaki_Prototype.png'
import bell from '../../assets/header/notification_bell.svg'
import user from '../../assets/header/user_profile.svg'
import estoque from '../../assets/sidebar/estoque_icon.svg'
import financeiro from '../../assets/sidebar/financeiro_icon.svg'
import home from '../../assets/sidebar/home_icon.svg'
import menu from '../../assets/sidebar/menu_icon.png'
import usuarios from '../../assets/sidebar/users_icon.svg'
import add_icon from '../../assets/buttons/add_icon.svg'
import calendar_check from '../../assets/buttons/calendar_check.svg'
import check_list from '../../assets/buttons/check_list.svg'
import './home.css';

function Home() {
    const [userName, setUserName] = useState("");
    const [expanded,setExpand] = useState(false);

    useEffect(() => {
        const account = JSON.parse(localStorage.getItem("account"));
        if (account?.name) {
            setUserName(account.name);
        }
    }, []);

    return (
        <main>
            <header>
                <div id="group-one">
                    <button onClick={()=>setExpand(!expanded)}>
                        <img src={burger_menu} alt="" />
                    </button>
                    <img style={{width:'60px', height:'60px'}} src={logo} alt="" />
                    <h1 style={{fontSize: '23px'}}>Olá, {userName} </h1>
                </div>
                <input style={{backgroundColor: 'white', opacity: '50%',fontSize:'19px', padding: '10px 20px',paddingLeft: '50px', borderRadius: '50px', width:'30%'}} className="search-input" type="search" name="" id="" placeholder="Buscar por pratos, bebidas, usuários..."/>
                <div id="group-two">
                    <button><img src={bell} alt="" /></button>
                    <button><img style={{backgroundColor: '#87b3f2', borderRadius: "50px", padding:"4px"}} src={user} alt="" /></button>
                </div>
            </header>
            <div id="sidebar">
                    <div id="sidebar-notexpanded">
                        <button>
                        <img src={home} alt="" />
                    </button>
                    <button>
                        <img src={financeiro} alt="" />
                    </button>
                    <button>
                        <img src={menu} alt="" />
                    </button>
                    <button>
                        <img src={estoque} alt="" />
                    </button>
                    <button>
                        <img src={usuarios} alt="" />
                    </button>
                    </div>
                    {expanded && (
                        <div id='sidebar-expanded'>
                            <p>Tela Inicial</p>
                            <p>Financeiro</p>
                            <p>Cardápio</p>
                            <p>Estoque</p>
                            <p>Usuários</p>
                        </div>
                    )}
                </div>
                <div id="principal-menu">
                    <div id="btn-group">
                        <button style={{backgroundColor: '#3553b5',color: 'white'}} className="principal-btn">
                            <img src={add_icon} alt="" />
                            <h2>Abrir Comanda</h2>
                            <p>Selecione a mesa e os itens do cardápio para abrir uma comanda.</p>
                        </button>
                        <button style={{backgroundColor: '#f3b45c',color: 'black'}} className="principal-btn">
                            <img src={calendar_check} alt="" />
                            <h2>Comandas e Reservas Abertas</h2>
                            <p>'x' comandas em andamento agora</p>
                        </button>
                        <button style={{backgroundColor: '#7eb5f8',color: 'black'}} className="principal-btn">
                            <img src={check_list} alt="" />
                            <h2>Reservar Mesa</h2>
                            <p>Reservar uma mesa para um cliente.</p>
                        </button>
                    </div>
                    <div id="tables-group">
                        <p>Lista de mesas aqui</p>
                    </div>
                </div>
        </main>
    );
}

export default Home;