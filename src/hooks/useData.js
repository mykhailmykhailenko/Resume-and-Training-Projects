import { useState, useEffect } from "react";

function useData (loadData) {
    const [data, setData] = useState([]);
    const [isFetching, setFetching] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        loadData()
        .then((data) => {
            setData(data)
        }).catch((err) => {
            setError(err)
        }).finally (() => {
            setFetching(false)
        })
    }, [loadData])

    return {data, isFetching, error}
}

export default useData;