import styled from "styled-components";

export const AlertStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e6e8ec;
  padding: 20px 40px 20px 16px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  text-align: left;
  background-color: ${(props) =>
    props.statusColor ? props.statusColor : "#0B63E5"};
`;

export const TextLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  > :not(:first-child) {
    margin-left: 6px;
    cursor: pointer;
  }
`;

export const StyleAlertIcon = styled.img`
  margin: 10px 16px 10px 4px;
`;

export const StyledCloseButton = styled.img`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: 18px;
  right: 16px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;
