import { createContext, useContext, useState } from 'react'

const Context = createContext()

export const ContextProvider = ({children}) => {
    const [like, setLike] = useState(0);
    const [isLike, setIsLike] = useState(false)

    const [disLike, setDisLike] = useState(0);
    const [disIsLike, setDisIsLike] = useState(false)

    const likeSetter = () => {
        setIsLike(!isLike)
        if(isLike == true) return setLike(prev => prev-1)
        setLike(prev => prev+1)
    }

    const dislikeSetter = () => {
        setDisIsLike(!disIsLike)
        if(disIsLike == true) return setDisLike(prev => prev-1)
        setDisLike(prev => prev+1)
    }

    return (
        <Context.Provider
            value={{
                like,
                isLike,
                disLike,
                disIsLike,
                likeSetter,
                dislikeSetter
            }}>
            {children}
        </Context.Provider>
    )
}

export const contextUser = () => useContext(Context)