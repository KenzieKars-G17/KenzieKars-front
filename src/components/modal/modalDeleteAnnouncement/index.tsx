import { useContext } from "react";
import { ModalBody } from "./styles";
import { AdvertisementContext } from "../../../contexts/advertisements.context";
import Modal from "..";
import jwt_decode from 'jwt-decode'


const DeleteAnnouncementModal = () => {
  const {
    SetShowDeleteAdvertisementModal,
    deleteAdvertisement,
    selectedAd,
    getSellerAdvertisements,
  } = useContext(AdvertisementContext);

  const token = localStorage.getItem('@TOKEN')
  const id : any = jwt_decode(token!)

  const deleteAd = () => {
    deleteAdvertisement(selectedAd?.id);
    SetShowDeleteAdvertisementModal();
    getSellerAdvertisements(id.sub);
  };

  return (
    <Modal>
      <ModalBody>
        <div className="divTitleAndCloseButton">
          <h2>Excluir anúncio</h2>
          <button onClick={SetShowDeleteAdvertisementModal}></button>
        </div>
        <div className="divText">
          <h3>Tem certeza que deseja remover este anúncio?</h3>
          <p>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </p>
        </div>
        <div className="divButtons">
          <button
            className="buttonCancel"
            onClick={SetShowDeleteAdvertisementModal}
          >
            Cancelar
          </button>
          <button className="buttonConfirm" onClick={() => deleteAd()}>
            Sim, excluir anúncio
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default DeleteAnnouncementModal;
