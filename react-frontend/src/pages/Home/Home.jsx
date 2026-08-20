import { useEffect, useState } from "react";
import burger_menu from "../../assets/header/burger_menu-nobg.svg";
import logo from '../../assets/Tambaki_Prototype.png'
import bell from '../../assets/header/notification_bell-nobg.svg'
import user from '../../assets/header/user_profile-nobg.svg'
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
                    <img src={logo} alt="" />
                    <h1>Olá, {userName} </h1>
                </div>
                <input type="search" name="" id="" placeholder="Buscar por pratos, bebidas, usuários..."/>
                <div id="group-two">
                    <button><img src={bell} alt="" /></button>
                    <button><img style={{backgroundColor: '#87b3f2', borderRadius: "50px", padding:"4px"}} src={user} alt="" />
</button>
                </div>
            </header>
            {expanded && (
                <div id="sidebar">

                </div>
            )}
        </main>
    );
}

export default Home;