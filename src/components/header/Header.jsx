import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../img/snake.png'
import styles from './Header.module.sass'

const Header = (props) => {
    return  <header className ={styles.header}>
                <a href='/#'>
                    {createLogo()}
                </a>
                <div className={styles.loginBlock}>
                    {props.isAuth 
                        ? <div>{props.login}<button onClick={props.logout}>logout</button></div>
                        : <NavLink to='/login'>login</NavLink>}
                    
                </div>
            </header>
}

function createLogo() {
    return <img src = {logo} alt = 'logo' className = {styles.img}/>
}

export default Header