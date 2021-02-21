import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={headerStyles.title}>
             <h1>Header <span>Hello</span></h1>
             <p className={headerStyles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
    )
}

export default Header
