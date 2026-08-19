import logo from '../../assets/Tambaki_Prototype.png'

function LogoRestaurant() {
    return (
        <div
            id="group-logo"
            className="
                flex flex-col items-center gap-2 sm:gap-3 text-center
                pb-6 sm:pb-8
                lg:absolute lg:inset-y-0 lg:pb-0
                lg:right-[80px] xl:right-[300px]
                lg:top-1/2 lg:-translate-y-1/2 lg:items-start lg:text-left
            "
        >
            <img
                src={logo}
                alt="Logo Tambaki"
                className="w-20 sm:w-24 md:w-28 lg:w-40 xl:w-48 rounded-full bg-white shadow-lg"
            />
            <div id="group-texts" className="flex flex-col gap-1">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#f5ae47] font-bold">
                    Unidade X
                </h2>
                <p className="text-white text-xs sm:text-sm lg:text-base">Restaurante</p>
            </div>
        </div>
    );
}

export default LogoRestaurant;