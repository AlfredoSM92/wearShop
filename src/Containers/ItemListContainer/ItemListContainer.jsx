// import ItemList from '../../components/ItemList/ItemList';
import { useEffect, useState } from 'react';
import gFetch from '../../helpers/gFetch';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';


const ItemListContainer = ({ greeting }) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    gFetch()
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      { loading ? <h1>{greeting}</h1> : <ItemList products={products}/>}  
    </>
  )
}

export default ItemListContainer