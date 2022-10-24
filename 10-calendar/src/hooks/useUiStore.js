import { useDispatch, useSelector } from "react-redux";
import { onOpenDateModal, onCloseDateModal } from '../store'

export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isDateModalOpen
    } = useSelector(state => state.ui);

    const openDateModal = () => {
        dispatch(onOpenDateModal())
    }

    const closeDateModal = () => {
        dispatch(onCloseDateModal())
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal();
    }

    return {
        // * Propiedades
        isDateModalOpen,

        // * Metodos
        openDateModal,
        closeDateModal,
        toggleDateModal,
    }

}