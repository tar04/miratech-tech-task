import styled from "styled-components";

import {device} from "../../../config";


export const StyledForm = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  padding: 36px 24px;

  .form {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    width: 100%;
  }

  .add-task-btn {
    background: #EE889A;
    padding: 12px;
    font-size: 24px;
    font-weight: 600;
    white-space: nowrap;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    color: #000;
    transition: hover, 0.4s;

    &:hover {
      background: #e86e84;
    }

    &[disabled] {
      cursor: unset;
      color: rgba(0, 0, 0, 0.25);;
      border-color: #d9dce2;
      background: #f4f6fa;
    }
  }

  @media (${device.mobileMax}) {
    flex-direction: column;
    row-gap: 24px;
    padding: 24px 16px;

    .add-task-btn {
      width: 100%;
      font-size: 20px;
      padding: 10px;
    }
  }
`;