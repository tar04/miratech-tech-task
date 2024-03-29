import styled from "styled-components";

import {device} from "../../../config";


export const StyledTask = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  padding: 6px 24px;

  &:nth-child(2n) {
    background: #DCDCDC;
  }

  &:hover {
    .delete-task-btn {
      opacity: 1;
      pointer-events: all;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    row-gap: 6px;

    h3, p {
      overflow-wrap: anywhere;
    }

    h3 {
      font-size: 24px;
      color: #EE889A;
    }

    p {
      font-size: 20px;
    }
  }

  .delete-task-btn {
    cursor: pointer;
    transition: opacity, 100ms;
    margin-left: auto;
    opacity: 0;
    pointer-events: none;
    color: #EE889A;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #EE889A;
    border-color: #EE889A;
  }

  @media (${device.mobileMax}) {
    padding: 4px 16px;
    
		.info {
      h3 {
        font-size: 20px;
      }

      p {

        font-size: 16px;
      }

    }
  }
`;