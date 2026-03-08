import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from './Loader'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const { idCategory } = useParams()

  useEffect(() => {
    setLoading(true)

    const prodCollection = idCategory ? query(collection(db, "productos"), where("category", "==", idCategory)) : collection(db, "productos")

    getDocs(prodCollection)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setData(list)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [idCategory])

  return (
    <>
      {loading ? (
        <Loader text={idCategory ? 'Cargando Categoría...' : 'Cargando Productos...'} />
      ) : (
        <div>
          <h1>
            {mensaje}
            {idCategory && <span className="title">{idCategory}</span>}
          </h1>
          <ItemList data={data} />
        </div>
      )}
    </>
  )
}

export default ItemListContainer
