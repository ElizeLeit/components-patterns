import {
  AlertStyle,
  TextLink,
  ButtonsAction,
  StyledCloseButton,
  DescriptionContainer,
  StyleAlertIcon,
} from "./style";
import Lexend from "../../atoms/Lexend";
import IconError from "../../../assets/icons/error-transparent.svg";
import IconInfo from "../../../assets/icons/info-transparent.svg";
import IconSuccess from "../../../assets/icons/success-transparent.svg";
import IconWarning from "../../../assets/icons/warning-transparent.svg";
import IconClose from "../../../assets/icons/close-transparent.svg";

export default function AlertFilled({
  title,
  type,
  status,
  textMainButton,
  actionMainButton,
  hasIconClose,
}) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "error":
        return IconError;
      case "info":
        return IconInfo;
      case "success":
        return IconSuccess;
      case "warning":
        return IconWarning;
      default:
        return IconInfo;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "error":
        return "#E54545";
      case "info":
        return "#0B63E5";
      case "success":
        return "#0F9918";
      case "warning":
        return "#FF8800";
      default:
        return "#838E9E";
    }
  };

  return (
    <AlertStyle statusColor={getStatusColor(status)}>
      <DescriptionContainer>
        <StyleAlertIcon src={getStatusIcon(status)} alt="Ícone de erro" />
        <Lexend text={title} size="16px" weight={500} color="white" />
      </DescriptionContainer>
      <div>botao1</div>
      {hasIconClose && (
        <StyledCloseButton src={IconClose} alt="Ícone de fechar" />
      )}
    </AlertStyle>
  );
}
