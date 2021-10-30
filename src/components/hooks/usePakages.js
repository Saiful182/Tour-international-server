import { useEffect, useState } from "react"

const usePakages = () => {
    const [pakages, setPakages] = useState([]);

    useEffect(() => {
        fetch('https://stark-shore-53835.herokuapp.com/tourpakages')
            .then(res => res.json())
            .then(data => setPakages(data))
    }, []);

    return {
        pakages, setPakages
    }
}
export default usePakages;