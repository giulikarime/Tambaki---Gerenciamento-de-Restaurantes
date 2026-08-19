import { useEffect, useState } from "react";

function Home() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const account = JSON.parse(localStorage.getItem("account"));
        if (account?.name) {
            setUserName(account.name);
        }
    }, []);

    return (
        <h1>Olá, {userName}</h1>
    );
}

export default Home;