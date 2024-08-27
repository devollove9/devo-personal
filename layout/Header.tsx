'use client'
//import NavigationBar from '@layout/NavigationBar';
const Header = () => {
    const onClickLogo = async () => {
        await alert("asdasdasdasd")
    }
    return (
        <div className="Header">
            <header className="header">
                <div className="header-container">
                    <div className="logoHeader" onClick={onClickLogo}>
                        asdasdasdasd
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;