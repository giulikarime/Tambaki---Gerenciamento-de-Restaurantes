import waves from '../../assets/waves.svg'

function SeaLogin() {
    return (
        <div id="waves" className="absolute bottom-0 w-full z-0">
            <img className="w-full h-auto object-cover" src={waves} alt="Ondas" />
        </div>
    );
}

export default SeaLogin;