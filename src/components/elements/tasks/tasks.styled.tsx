import styled from "styled-components";

import {device} from "../../../config";


export const StyledTasks = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;

  .no-tasks {
    color: #DCDCDC;
    font-size: 24px;
    font-weight: 400;
    padding: 36px 24px;
  }

  @media (${device.mobileMax}) {
    .no-tasks {
      padding: 24px 16px;
      font-size: 20px;
    }
  }
`;