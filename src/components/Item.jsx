import { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import ItemCount from "./ItemCount";
import "../assets/css/Item.css";

const Item = ({ prod }) => {
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAdd = (cantidad) => {
    addItem(prod, cantidad);
    Swal.fire({
      title: "Producto agregado",
      text: `${cantidad} unidad(es) de "${prod.name}" fueron añadidas al carrito`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <Card
      className="item-card"
      onClick={() => navigate(`/item/${prod.id}`)}
    >
      <Card.Img className="product-img" variant="top" src={prod.img} />
      <Card.Body className="card-body">
        <Card.Title className="description">{prod.description}</Card.Title>
        <Card.Title className="product-name">{prod.name}</Card.Title>
        <Card.Text className="price">${prod.price}</Card.Text>
        <Card.Text className="iva">sin IVA</Card.Text>

    
        <div onClick={(e) => e.stopPropagation()}>
          <ItemCount stock={prod.stock} onAdd={handleAdd} />
        </div>

        <Card.Text
          className={`stock ${
            prod.stock === 0
              ? "stock-out"
              : prod.stock <= 5
              ? "stock-low"
              : "stock-ok"
          }`}
        >
          <span className="stock-dot"></span>
          {prod.stock === 0
            ? "Agotado"
            : prod.stock <= 5
            ? "Pocas unidades"
            : "En stock"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
