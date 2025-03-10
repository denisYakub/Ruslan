import "./Bottom.css"

export default function Bottom(){
    const redirectToForm = () => {
        window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSeMPLKhSccI8qUc3zx9UKGDW72Jcvx9aW2AfMTGV2a_CzsOuw/viewform';
    }
    return (<div className="Bottom">
        <button onClick={redirectToForm}>Играть</button>
        <div className="Bottom-Info">
            {/*<img src="" alt="Фото планеты"/>*/}
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