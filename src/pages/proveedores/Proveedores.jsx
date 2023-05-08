import Card from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import proveedores from "../../data/proveedores.json"
import fotoProveedor from "../../assets/proveedores.jpg"

export const Proveedores = () => {
  return (
    <div>
      <Navbar />
      <section className="container__info">
      {
        proveedores.map(provedor => 
          <Card
          key={provedor.id}
          foto={fotoProveedor}
          nombre={provedor.nombre}
          telefono={provedor.telefono}
          email={provedor.email}
          direccion={provedor.direccion}



          />)
      }
      

      </section>
    </div>
  );
};
