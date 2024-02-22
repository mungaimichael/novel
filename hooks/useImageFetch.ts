import { useState } from "react"

interface imageFetchFunctionProps  {
    value:number
}


const useImageFetch =  (value:imageFetchFunctionProps) => {
    const [image, setImage] = useState()

    const getImage = async() {
        const res = await fetch(`https://covers.openlibrary.org/b/ISBN/${value}-L.jpg`)
        
    }
}