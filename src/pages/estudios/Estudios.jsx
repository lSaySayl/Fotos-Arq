import Card from "../../components/Card/Card"
import { Navbar } from "../../components/Navbar/Navbar"
import estudios from "../../data/estudios.json"
import fotoEstudio from "../../assets/estudios.jpg"


export const Estudios = () => {
  return (
    <div>
    <Navbar/>
    <section className="container__info">

    {
      estudios.map(estudio => 
      <Card
      key={estudio.id}
      foto={fotoEstudio}
      nombre={estudio.nombre}
      telefono={estudio.telefono}
      email={estudio.email}
      direccion={estudio.direccion}


      />
      
      )


    }
        
      </section>
    </div>
  )
}
