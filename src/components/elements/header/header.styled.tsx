import styled from "styled-components";
import {Input} from "antd";

import {device} from "../../../config";


export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 36px 24px;

  .logo {
    font-size: 40px;
    font-weight: 700;
    white-space: nowrap;
  }

  .filters {
    margin-left: auto;
    display: flex;
    column-gap: 12px;
  }

  @media (${device.tabletMax}) {
    column-gap: 12px;

    .filters {
      margin-left: unset;
      width: 100%;
    }
  }

  @media (${device.mobileMax}) {
    flex-direction: column;
    row-gap: 24px;
    align-items: flex-start;
    padding: 24px 16px;

    .logo {
      font-size: 30px;
      font-weight: 600;
    }
  }
`;

export const StyledSearch = styled(Input.Search)`
  min-width: 500px;

  input {
    border-radius: 8px 0 0 8px;
  }

  .ant-btn-default {
    background: white;
    border-radius: 0 8px 8px 0 !important;

    svg {
      color: rgba(0, 0, 0, 0.85);
    }
  }

  @media (${device.tabletMax}) {
    min-width: unset;
  }
`;