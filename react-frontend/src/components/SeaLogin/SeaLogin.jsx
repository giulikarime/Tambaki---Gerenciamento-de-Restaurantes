import logo from '../../assets/Tambaki_Prototype.png'
import waves from '../../assets/waves.svg'

function SeaLogin(){
    return(
        <section className="relative min-h-screen">
            <div 
              id="group-logo" 
              className="
                flex flex-col gap-4 z-20
                items-center text-center pt-20
                md:absolute md:right-[80px] lg:right-[300px] md:pt-0 md:top-1/2 md:-translate-y-1/2 md:items-start md:text-left
              "
            >
                <img src={logo} alt="Logo Tambaki" className="w-30 md:w-40 lg:w-50" />
                <div id="group-texts" className="flex flex-col gap-2">
                    <h2 className="text-3xl text-[#f5ae47] font-bold">Unidade XYZ</h2>
                    <p className="text-[#f5ae47] sm:text-md">Restaurante</p>
                </div>
            </div>

            <div id="waves" className="absolute bottom-0 w-full z-10">
                <img className="w-full h-auto object-cover" src={waves} alt="Ondas" />
            </div>
        </section>
    );
}

export default SeaLogin;
