import "./Head.css"

export default function Head() {
    const redirectToSelf = () => {
        window.location.reload();
    }
    const redirectToKate = () => {
        window.location.href='https://vk.com/katedvinova';
    }
    const redirectToGroup = () => {
        window.location.href='https://vk.com/fmopifam';
    }
    const redirectToPost = () => {
        window.location.href='';
    }

    return (
        <div className="Head">
            <div className="Links-Buttons">
                <button onClick={redirectToSelf}>Главная</button>
                <button onClick={redirectToKate}>Помощь</button>
                <button onClick={redirectToGroup}>ВКонтакте</button>
            </div>
            <div className="Login-Button" onClick={redirectToPost}>
                {/*<img src="" alt="Фото перейти"/>*/}
                <span>Log in</span>
            </div>
        </div>
    );
}