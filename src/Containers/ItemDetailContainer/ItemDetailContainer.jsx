import { useEffect, useState } from "react"
import gFetch from "../../helpers/gFetch"


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        gFetch()
        .then((data) => setProduct(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    },[])

  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer