import SeaLogin from "../../components/SeaLogin/SeaLogin";

function Login(){
    return(
        <main>
            <section className="flex flex-col gap-10">
                <h1>Bem Vindo(a) de Volta!</h1>
                <form action="" method="post" className="flex flex-col gap-5">
                    <div id="field">
                        <input type="email" name="email" id="email" />
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div id="field">
                        <input type="password" name="password" id="password" />
                        <label htmlFor="password">Senha</label>
                    </div>
                    <button type="submit">Entrar</button>
                    <a href="">Esqueci minha senha</a>
                </form>
            </section>
            <SeaLogin/>
        </main>
    );
}

export default Login;