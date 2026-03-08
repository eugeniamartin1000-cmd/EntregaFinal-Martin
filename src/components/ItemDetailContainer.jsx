import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams, Link } from "react-router-dom";
import '../assets/css/ItemDetailContainer.css';
import Loader from "./Loader";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [invalid, setInvalid] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setDetail({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setCargando(false));
  }, [id]);

  if (invalid) {
    return (
      <div className="item-detail-error">
        <h2>El producto no existe</h2>
        <Link className="btn btn-dark" to="/">Volver a home</Link>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      {cargando 
        ? <Loader text={'Cargando Detalle...'} /> 
        : detail && <ItemDetail detail={detail} />}
    </div>
  );
};

export default ItemDetailContainer;
