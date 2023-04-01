import "./logo.scss";

const Logo = (props) => {
    return(
        <div className="logo_and_name">
            <img src={props.imgSrc} alt="logo"/>
            <p>{props.companyName}</p>
        </div>
    )
};

export default Logo;