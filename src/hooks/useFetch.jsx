import { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types';

function useFetch({ api, autoFetch = true }) {
    const [response, setResponse] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch(api.url, {
                method: api.method,
                headers: {
                    'Content-Type': 'application/json',
                    ...api.headers
                },
                body: api.body ? JSON.stringify(api.body) : undefined
            })
            const json = await res.json()
            setResponse(res)
            setData(json)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }, [api])

    useEffect(() => {
        if (autoFetch) {
            fetchData()
        }
    }, [autoFetch, fetchData])

    const refetch = useCallback(() => {
        fetchData()
    }, [fetchData])

    return { response, data, loading, error, refetch }
}

useFetch.propTypes = {
    api: PropTypes.shape({
        url: PropTypes.string.isRequired,
        method: PropTypes.string.isRequired,
        body: PropTypes.object,
        headers: PropTypes.object
    }).isRequired,
    autoFetch: PropTypes.bool
}

export default useFetch