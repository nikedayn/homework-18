import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//импор main scss стилей
import './assets/scss/style.scss';

//компоненты
import LogoContainer from './Components/Logo/logo';
import Menu from './Components/Menu/menu';
import MainSlogan from './Components/main_words_and_btn/main'

//импор картинки лого
import logoImg from './assets/img/Logo.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='wraper'>
        <header>
            <div className='container'>
                <LogoContainer imgSrc={logoImg} companyName='Simo'/>
                <Menu type='navigation' textForA={['Discover', 'Join', 'Sign In']} class='navigation_menu'/>
            </div>
        </header>
        <main>
            <div className='container'>
                <MainSlogan mainSlogan='Feel the music' bottomText='Stream over 10 million songs with one click' btnText='Join now'/>
            </div>
        </main>
        <footer>
            <div className='container'>
                <Menu type='navigation' textForA={['About As', 'Contact', 'CR Info', 'Twitter', 'Facebook']} class='footer_menu'/>
            </div>
        </footer>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();