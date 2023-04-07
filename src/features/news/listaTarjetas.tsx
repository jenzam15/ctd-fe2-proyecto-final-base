import { INoticiasNormalizadas } from "./Noticias";
import { BotonLectura, DescripcionTarjetaNoticia, FechaTarjetaNoticia, ImagenTarjetaNoticia, TarjetaNoticia, TituloTarjetaNoticia } from "./styled";



interface IProps {
  noticias: INoticiasNormalizadas[];
  onClick: (n: INoticiasNormalizadas) => void;
}

export const ListaTarjetas: React.FC<IProps> = ({ noticias, onClick }) => {
  return <>{noticias.map((n) => (
    <TarjetaNoticia key={n.id}>
      <ImagenTarjetaNoticia src={n.imagen} />
      <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>
        {n.descripcionCorta}
      </DescripcionTarjetaNoticia>
      <BotonLectura aria-label="ver noticia" onClick={() => onClick(n)}>Ver más</BotonLectura>
    </TarjetaNoticia>
  ))}
  </>
}