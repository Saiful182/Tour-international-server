import { useEffect, useState } from "react"

const useComments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://stark-shore-53835.herokuapp.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))

    }, [])
    return {
        comments
    }
}
export default useComments;