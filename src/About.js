import "./About.css"

export default function About(){
    return (<div className="About">
        <div className="Preview-Imgs">
            <img src="/preViewImg.png" alt="Фото персонажей"/>
            <img src="/preViewImg1.png" alt="Фото текста"/>
        </div>
        <div className="Preview-Info-Blocks">
            <div className="Preview-Info-Block-Blue">
                <img src="/diamond.png.png" alt="Фото алмаза"/>
                <h1>Сюжет</h1>
                <span>Мы приглашаем Вас посетить благотворительный вечер памяти Аннет Сильвер-Харрис, чья смерть остается загадкой по сей день.</span>
            </div>
            <div className="Preview-Info-Block-Blue">
                <img src="/diamond.png.png" alt="Фото алмаза"/>
                <h1>Тех.поддежка и функционал</h1>
                <span>Мы всегда готовы ответить на все ваши вопросы и помочь с решением возникших проблем. По всем вопросам можете смело обращаться к <a href="https://vk.com/katedvinova">Кате</a> и <a href="https://vk.com/hazardousidol">Андрею</a>!</span>
            </div>
            <div className="Preview-Info-Block-Violet">
                <img src="/diamond.png.png" alt="Фото алмаза"/>
                <h1>Доступная цена</h1>
                <span>Алмазы и чашки — дорого? Теперь все выборы и истории доступны по единой подписке по самой лучшей цене на рынке. А качество у нас не хуже, чем у конкурентов!</span>
            </div>
            <div className="Preview-Info-Block-Violet">
                <img src="/diamond.png.png" alt="Фото алмаза"/>
                <h1>Активное сообщество</h1>
                <span>Мы вместе с нашими пользователи постоянно стараемся находить интересные занятия. Так что помимо самой игры на проекте, Вы точно найдёте друзей со схожими идеями и интересами! Наш чат открыт для всех!</span>
            </div>
        </div>
        <div className="To-Next">
            {/*<img src="" alt="Фото стрелка вниз"/>*/}
            <span>Узнать больше</span>
            {/*<img src="" alt="Фото стрелка вниз"/>*/}
        </div>
    </div>);
}