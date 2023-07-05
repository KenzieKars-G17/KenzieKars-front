import { DivBackgroundModal } from "./styles"
import IModal from "../../interfaces/modal.interface"

const Modal = ({ children }: IModal) => {
  return (
    <DivBackgroundModal>

      {children}

    </DivBackgroundModal>
  )
}

export default Modal