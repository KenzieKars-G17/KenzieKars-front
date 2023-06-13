import { DivBackgroundModal } from "./styles"
import IModal from "../../interfaces/modal.interface"

const Modal = ({children}: IModal) => {
  return (
    <DivBackgroundModal>

        <div className="divModalInfo">
            {children}
        </div>

    </DivBackgroundModal>
  )
}

export default Modal