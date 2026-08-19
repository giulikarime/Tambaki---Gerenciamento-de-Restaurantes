import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SeaLogin from "../../components/SeaLogin/SeaLogin";
import LogoRestaurant from "../../components/LogoRestaurant/LogoRestaurant";
import { login } from "../../services/auth";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const result = await login(form);

            // Guarda o token para usar nas próximas requisições
            localStorage.setItem("accessToken", result.accessToken);
            localStorage.setItem("account", JSON.stringify(result.account));

            navigate("/dashboard"); // ajuste para a rota certa do seu app
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="relative min-h-screen lg:h-screen overflow-hidden isolate bg-[#fdf1e0]">
            <SeaLogin />

            {/* Wrapper: empilhado (mobile/tablet) até lg; duas colunas a partir de lg */}
            <div
                className="
                    relative z-10 flex flex-col items-center justify-center
                    min-h-screen px-4 sm:px-6 py-10 sm:py-12
                    lg:block lg:h-full lg:min-h-0 lg:px-0 lg:py-0
                "
            >
                <section
                    className="
                        flex flex-col justify-center gap-5 sm:gap-8 w-full max-w-xs sm:max-w-sm
                        pb-8 sm:pb-10
                        lg:absolute lg:inset-y-0 lg:left-[80px] xl:left-[220px]
                        lg:max-w-none lg:w-[400px] lg:pb-0
                    "
                >
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy text-center">
                        Bem vindo(a) <br />de volta
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3 sm:gap-4 w-full"
                    >
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="
                                w-full rounded-lg border border-navy/30 lg:border-white/70 bg-transparent
                                px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base
                                text-navy lg:text-white placeholder-navy/50 lg:placeholder-white/80
                                outline-none focus:border-[#f5ae47] transition-colors
                            "
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Senha"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="
                                w-full rounded-lg border border-navy/30 lg:border-white/70 bg-transparent
                                px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base
                                text-navy lg:text-white placeholder-navy/50 lg:placeholder-white/80
                                outline-none focus:border-[#f5ae47] transition-colors
                            "
                        />

                        {error && (
                            <p className="text-sm text-red-600 text-center">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                w-full rounded-lg py-2.5 sm:py-3 text-sm sm:text-base
                                hover:brightness-95 active:brightness-90 transition bg-[#f5ae47]
                                disabled:opacity-60
                            "
                        >
                            {loading ? "Entrando..." : "Entrar"}
                        </button>

                        
                        <a    href="/esqueci-senha"
                            className="text-xs sm:text-sm underline text-center text-[#f5ae47]"
                        >
                            Esqueci minha senha
                        </a>
                    </form>
                </section>

                <LogoRestaurant />
            </div>
        </main>
    );
}

export default Login;