import axios from 'axios';
import React,{useEffect, useState} from 'react';
function useFetch(url, opts) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(url)
            .then((res) => {
            setResponse(res.data)
            setLoading(false)
        })
            .catch(() => {
                setHasError(true)
                setLoading(false)
            })
    }, [ url ])
    return [ response, loading, hasError ]
}
export default useFetch