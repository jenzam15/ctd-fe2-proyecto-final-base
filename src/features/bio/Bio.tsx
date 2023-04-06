import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import { BioDescripcion, BioImagen, BioNombre, Button, Container, ContenedorBotones } from "./styled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <Button
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        active={
          bioActiva.id === nombre
        }
      >
        {nombre}
      </Button>
    ));
  };

  return (
    <Container>
      <ContenedorBotones >{crearBotones()}</ContenedorBotones>
      <div>
        <div>
          <BioImagen
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />
        </div>
        <div>
          <BioNombre >{bioActiva.nombre}</BioNombre>
          <BioDescripcion >{bioActiva.descripcion}</BioDescripcion>
        </div>
      </div>
    </Container>
  );
};

export default Bio;
