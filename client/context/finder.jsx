import { createContext, useContext, useState } from 'react'
import { themes } from '../utils/theme';

const Context = createContext()

export const ContextProvider = ({children}) => {
    // ========= LIKE STATES ========= //
    const [like, setLike] = useState(0);
    const [isLike, setIsLike] = useState(false)

    // ========= DISLIKE STATES ========== //
    const [disLike, setDisLike] = useState(0);
    const [disIsLike, setDisIsLike] = useState(false)

    // =========== THEME STATE ============ //
    const [theme, setTheme] = useState(themes[0])

    // =========== LIKE FUNCTION ========= //
    const likeSetter = () => {
        setIsLike(!isLike)
        if(isLike == true) return setLike(prev => prev-1)
        setLike(prev => prev+1)
    }

    // ========= DISLIKE FUNCTION =========== //
    const dislikeSetter = () => {
        setDisIsLike(!disIsLike)
        if(disIsLike == true) return setDisLike(prev => prev-1)
        setDisLike(prev => prev+1)
    }

    // =========== THEME FUNCTION =========== //
    const blackTheme = () => {

    }

    return (
        <Context.Provider
            value={{
                like,
                isLike,
                disLike,
                disIsLike,
                theme,
                likeSetter,
                dislikeSetter
            }}>
            {children}
        </Context.Provider>
    )
}

export const contextUser = () => useContext(Context)