import './App.css';
import '../variables';

function Main() {
    return (
        <div className='App'>
            <div className='header'>
                <div className='nav-bar'>
                    <h1>Groq API website interface</h1>
                </div>
                <h4></h4>
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