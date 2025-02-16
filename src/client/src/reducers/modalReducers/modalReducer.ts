import { AZURE_TYPEKEYS } from "../../actions/azureActions/typeKeys";
import {
  MODAL_TYPEKEYS,
  ModalState
} from "../../actions/modalActions/typeKeys";
import { WIZARD_INFO_TYPEKEYS } from "../../actions/wizardInfoActions/typeKeys";
import RootAction from "../../actions/ActionType";

const initialState: ModalState = {
  modalType: null,
  modalData: null
};

const openModal = (state: ModalState = initialState, action: RootAction) => {
  switch (action.type) {
    case MODAL_TYPEKEYS.OPEN_MODAL:
      return action.payload;
    case AZURE_TYPEKEYS.SAVE_AZURE_FUNCTIONS_SETTINGS:
    case AZURE_TYPEKEYS.SAVE_COSMOS_DB_RESOURCE_SETTINGS:
    case MODAL_TYPEKEYS.CLOSE_MODALS:
    case WIZARD_INFO_TYPEKEYS.RESET_WIZARD:
      return initialState;
    default:
      return state;
  }
};

export { openModal };
