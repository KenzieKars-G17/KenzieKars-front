import { ModalWrapper } from "./styles";
import IModal from "../../../interfaces/modal.interface";

const FilterModal = ({ children }: IModal) => {
  return <ModalWrapper>{children}</ModalWrapper>;
};

export default FilterModal;
