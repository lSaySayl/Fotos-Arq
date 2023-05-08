import Card from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import clientes from "../../data/clientes.json"
import fotoCliente from "../../assets/clientes.jpg"

import "./Clientes.css"

export const Clientes = () => {
  return (
    <section>
      <Navbar />
      <section className="container__info">
      {
        clientes.map(cliente => 
        <Card
        key={cliente.id}
        foto={fotoCliente }
        nombre={cliente.nombre}
        telefono={cliente.telefono}
        email={cliente.email}
        direccion={cliente.direccion}

        />

        )
      }
        
      </section>
    </section>
  );
};
