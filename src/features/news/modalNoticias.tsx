import { INoticiasNormalizadas } from "./Noticias";
import { BotonSuscribir, CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal, TarjetaModal, TituloModal } from "./styled";
import { SuscribeImage, CloseButton as Close } from "../../assets";

interface IProps {
  noticia: INoticiasNormalizadas | null;
  onClose: () => void;
}

//Se creo un componente modal y se aplicó  el principio de responsabilidad única

export const ModalNoticia: React.FC<IProps> = ({ noticia, onClose }) => {

    return <>
    {noticia ? (
      noticia.esPremium ? (
        <ContenedorModal>
          <TarjetaModal>
            <CloseButton onClick={onClose}>
              <img src={Close} alt="close-button" />
            </CloseButton>
            <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
            <CotenedorTexto>
              <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
              <DescripcionModal>
                Suscríbete a nuestro newsletter y recibe noticias de
                nuestros personajes favoritos.
              </DescripcionModal>
              <BotonSuscribir
                onClick={() =>
                  setTimeout(() => {
                    alert("Suscripto!");
                    onClose()
                  }, 1000)
                }
              >
                Suscríbete
              </BotonSuscribir>
            </CotenedorTexto>
          </TarjetaModal>
        </ContenedorModal>
      ) : (
        <ContenedorModal>
          <TarjetaModal>
            <CloseButton onClick={onClose}>
              <img src={Close} alt="close-button" />
            </CloseButton>
            <ImagenModal src={noticia.imagen} alt="news-image" />
            <CotenedorTexto>
              <TituloModal>{noticia.titulo}</TituloModal>
              <DescripcionModal>{noticia.descripcion}</DescripcionModal>
            </CotenedorTexto>
          </TarjetaModal>
        </ContenedorModal>
      )
    ) : null}
    </>
}