import s from './App.module.sass';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCards} from "./store/cards-reducer";
import Card from "./components/Card";
import {arrow} from "./assets/svg";

function App() {
    const dispatch = useDispatch()
    const [seeMore, setSeeMore] = useState(16)
    const cards = useSelector(state => state.Cards)
    const cardsRendering = cards.slice(0, seeMore)
    const card = cardsRendering.map(c => <Card key={c.id} id={c.id} oldPrice={c.oldPrice} price={c.price}
                                               title={c.title} seen={c.seen}
                                               locality={c.locality} date={c.date}/>)
    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch])

    const click = () => {
        if (cardsRendering.length >= seeMore) {
            setSeeMore(seeMore + 16)
        } else {
            setSeeMore(16)
        }

    }
    return (
        <div className={s.app}>
            <h1 className={s.title}>Похожие объявления</h1>
            <div className={s.container}>
                {card}
            </div>
            <div className={s.seeMore}
                 onClick={click}>{cardsRendering.length >= seeMore ? 'Показать еще' : 'Свернуть'} {arrow}</div>
            <div className={s.spacing}></div>
        </div>
    )

}

export default App;
