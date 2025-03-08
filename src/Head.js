import "./Head.css"

export default function Head() {
    return (
        <div className="Head">
            <div className="Links-Buttons">
                <div className="Link-Button">
                    <button>Главная</button>
                    <span>ТЕКУЩАЯ СТРАНИЦА</span>
                </div>
                <div className="Link-Button">
                    <button>Помощь</button>
                    <span>ССЫЛКА КАТЮШКУ</span>
                </div>
                <div className="Link-Button">
                    <button>ВКонтакте</button>
                    <span>ССЫЛКА НА ГРУППУ</span>
                </div>
            </div>
            <div className="Login-Button">
                <button>Log in</button>
                <span>ССЫЛКА НА ПОСТ</span>
            </div>
        </div>
    );
}