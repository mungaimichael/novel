import { useEffect, useState } from "react"


interface useDataFetchReturn {
    loading: boolean, 
    data:[]
}

const useDataFetch = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    
    const fetchData = async ()  => {
        try {
            const response = await fetch('https://openlibrary.org/search.json?q=artificial + technology&limit=1&numFoundExact')
            setLoading(true)
            const data = await response.json()
            
            setData(data)
            setLoading(false)
        
        }
        catch (error) {
            console.log(error)
        
      }

    }

    useEffect(() => {
        fetchData();
    }, [])

    return {loading, data}
}

export default useDataFetch; 