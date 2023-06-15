import { useContext } from "react"
import { AdvertisementContext } from "../../../contexts/advertisements.context"
import { InputComponent } from "../../InputComponent"
import Modal from "../../modal"
import { FormNewAd } from "./styles"

const FormAddAnnouncement = () => {

  const { SetShowAddAdvertisementForm, showAddAdvertisementForm} = useContext(AdvertisementContext)
  return (
    <Modal>
      <FormNewAd>

        <div className="divTitleAndCloseButton">
          <h2>Criar anúncio</h2>
          <button onClick={SetShowAddAdvertisementForm}>X</button>
        </div>

        <div className="divInputs">
          <h3>Informações do veículo:</h3>
          <InputComponent type="text" placeholder="Mercedez-Benz" label="Marca" />
          <InputComponent type="text" placeholder="A 200 CGI ADVANCE SEDAN" label="Modelo" />

          <div className="divTwoInputs">
            <InputComponent type="text" placeholder="2018" label="Ano" />
            <InputComponent type="text" placeholder="Gasolina / Etanol" label="Combustível" />
          </div>

          <div className="divTwoInputs">
            <InputComponent type="text" placeholder="3000" label="Quilometragem" />
            <InputComponent type="text" placeholder="Branco" label="Cor" />
          </div>

          <div className="divTwoInputs">
            <InputComponent type="text" placeholder="R$ 48.000,00" label="Preço tabela FIPE" />
            <InputComponent type="text" placeholder="R$ 50.000,00" label="Preço" />
          </div>

          <InputComponent type="text" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" label="Descrição" />

          <InputComponent type="text" placeholder="https://image.com" label="Imagem da capa" />

          <InputComponent type="text" placeholder="https://image.com" label="1º Imagem da galeria" />

          <InputComponent type="text" placeholder="https://image.com" label="2º Imagem da galeria" />

          <button className="buttonAddField">Adicionar campo para imagem da galeria</button>

          <div className="divButtonCancelAndSubmit">
            
            <button className="buttonCancel" onClick={SetShowAddAdvertisementForm}>Cancelar</button>
            <button type="submit" className="buttonSubmit">Criar Anúncio</button>
          </div>

        </div>



      </FormNewAd>
    </Modal>
  )
}

export default FormAddAnnouncement