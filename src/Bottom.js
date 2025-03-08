import "./Bottom.css"

export default function Bottom(){
    return (<div className="Bottom">
        <button>Играть</button>
        <span>ССЫЛКА НА ФОРУМ РЕГИСТРАЦИИ</span>
        <div className="Bottom-Info">
            <img src="" alt="Фото планеты"/>
            <span>©2024-2025 5ive, Contact us</span>
            <span>Legal info | Privacy policy</span>
            <div className="Bottom-Info-Cards">
                <img src="/visa.svg.png" alt="Фото лого визы"/>
                <img src="/mc.svg.png" alt="Фото лого мастеркард"/>
                <img src="/mir.svg.png" alt="Фото лого мир"/>
            </div>
        </div>
    </div>);
}