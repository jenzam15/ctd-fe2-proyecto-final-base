import { useState } from "react";
import { ListaTarjetas } from "./listaTarjetas";
import { ModalNoticia } from "./modalNoticias";
import {
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias
} from "./styled";
import { useNoticias } from "./useNoticias";

// Se aplicó el Principio de responsabilidad única, extrayendo lógica del componente en distintos archivos para asi dividir responsabilidades en la API.

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {

  const [noticia, setNoticia] = useState<INoticiasNormalizadas | null>(null);
  const noticias = useNoticias()

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        <ListaTarjetas noticias={noticias} onClick={(n) => { setNoticia(n) }} />
        <ModalNoticia noticia={noticia} onClose={() => setNoticia(null)} />
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
