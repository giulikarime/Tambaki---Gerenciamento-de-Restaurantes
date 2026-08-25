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
import './menu.css';

function Menu() {
    const [userName, setUserName] = useState("");
    const [expanded, setExpand] = useState(false);

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
                    <button onClick={() => setExpand(!expanded)}>
                        <img src={burger_menu} alt="" />
                    </button>
                    <img style={{ width: '60px', height: '60px' }} src={logo} alt="" />
                    <h1 style={{ fontSize: '23px' }}>Olá, {userName} </h1>
                </div>
                <input style={{ backgroundColor: 'white', opacity: '50%', fontSize: '19px', padding: '10px 20px', paddingLeft: '50px', borderRadius: '50px', width: '30%' }} className="search-input" type="search" name="" id="" placeholder="Buscar por pratos, bebidas, usuários..." />
                <div id="group-two">
                    <button><img src={bell} alt="" /></button>
                    <button><img style={{ backgroundColor: '#87b3f2', borderRadius: "50px", padding: "4px" }} src={user} alt="" /></button>
                </div>
            </header>
            <div id="container-menu">
               
                    <h1 id="menu-title">Cardápio</h1>
                 <div id="menu-header">
                    <h2>CARDÁPIO DO DIA | "Segunda-feira"</h2>
                </div>
                <div className="card-menu">
                    <h1> Peixe Empanado</h1>
                    <h3>Acompanha arroz e abublé</h3>
                    <h2><b>40.00</b></h2>
                </div>

                <div className="card-menu">
                    <h1> Peixe Empanado</h1>
                    <h3>Acompanha arroz e abublé</h3>
                    <h2><b>40.00</b></h2>
                </div>

                <div className="card-menu">
                    <h1> Peixe Empanado</h1>
                    <h3>Acompanha arroz e abublé</h3>
                    <h2><b>40.00</b></h2>
                </div>


                <div className="card-menu">
                    <h1> Peixe Empanado</h1>
                    <h3>Acompanha arroz e abublé</h3>
                    <h2><b>40.00</b></h2>
                </div>


            </div>

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


        </main>
    );
}

export default Menu;