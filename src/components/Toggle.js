import React, { useContext } from 'react'
import { ThemeContext } from './../context/context';
import sun from '../images/sun.png'
import moon from '../images/moon.png'

const Toggle = () => {

    const theme = useContext(ThemeContext)

    const handleToggle = () => {
        theme.dispatch({
            type: 'TOGGLE'
        })
    }


    return (
        <div className="t">

            <img className="t-icon" src={sun} alt="sun" />
            <img className="t-icon" src={moon} alt="moon" />
            <div
                style={{ left: theme.state.darkMode ? 0 : 25 }}
                className="t-button"
                onClick={handleToggle}>


            </div>

        </div>
    )
}

export default Toggle
