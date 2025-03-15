import './App.css';
import {website_name_h1, website_motto_h4} from './Common website features';

function Main() {
    return (
        <div className='App'>
            <div className='header'>
                <div className='nav-bar'>
                    <website_name_h1 />
                </div>
                <website_motto_h4 />
            </div>
            <div className='chat'>
                <div className='response'>

                </div>
                <div className='prompt'>

                </div>
            </div>
            <div className='footer'>
                <div id='groq-logo'>
                    <a href="https://groq.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg"
                            alt="Powered by Groq for fast inference."
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Main;

/*
<div className="Chat">
  <header className="Chat-header">
    <img src={logo} className="Chat-logo" alt="logo" />
    <p>
      Edit <code>src/chat.jsx</code> and save to reload.
    </p>
    <a
        className="Chat-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
 */