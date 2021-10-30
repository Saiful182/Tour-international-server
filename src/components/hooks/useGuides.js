import { useEffect, useState } from "react"

const useGuides = () => {
    const [guides, setGuide] = useState([]);
    useEffect(() => {
        fetch('https://stark-shore-53835.herokuapp.com/guide')
            .then(res => res.json())
            .then(data => setGuide(data))
    }, []);
    return {
        guides
    }

}
export default useGuides;