import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Taste Hub`;
    })
}

export default useTitle;