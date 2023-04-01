import s from "./main.module.scss";

const Menu = (props) => {
    return(
        <article className={s.main_words}>
            <h1 className={s.main_slogan}>{props.mainSlogan}</h1>
            <p className={s.bottom_text}>{props.bottomText}</p>
            <button className={s.join_us}>{props.btnText}</button>
        </article>
    )
};

export default Menu;