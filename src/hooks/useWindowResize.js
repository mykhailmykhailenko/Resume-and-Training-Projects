import {useState, useEffect} from 'react';

function useWindowResize () {
    const [sizes , setSizes] = useState({
        x: window.innerWidth,
        y: window.innerHeight
    })

    const resizeHandler = () => {
        setSizes({
            x: window.innerWidth,
            y: window.innerHeight 
        })
    }
    
    useEffect(() => {
        window.addEventListener('resize' , resizeHandler);
        return () => {
        window.removeEventListener('resize' , resizeHandler);
        }
    }, [])

    return sizes
}

export default useWindowResize;