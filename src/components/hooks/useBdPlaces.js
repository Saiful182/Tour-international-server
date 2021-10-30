import { useEffect, useState } from "react"

const useBdPlaces = () => {
    const [bdPlaces, setBdplace] = useState([])
    useEffect(() => {
        fetch('https://stark-shore-53835.herokuapp.com/bdplaces')
            .then(res => res.json())
            .then(data => setBdplace(data))
    }, [])

    return {
        bdPlaces
    }
}
export default useBdPlaces;