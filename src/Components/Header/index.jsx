import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className='headerWrapper'>
                <div className="logo">
                    Flag Quiz
                </div>
                <div className="nav">
                    <ul>
                        <li>Pause</li>
                        <li id="quit">Quit quiz</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;