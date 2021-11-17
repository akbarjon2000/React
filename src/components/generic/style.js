import styled from 'styled-components';
import { Drawer } from 'antd';
import { ReactComponent as Close } from '../icons/x.svg';

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 0 40px;
  padding-top: 43px;
  position: relative;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* min-width: 1450px; */
  overflow: auto;
  position: ${({ position }) => (position ? 'absolute' : 'relative')};
  .ant-drawer-header button {
    left: -10px;
  }
`;

export const AntModal = styled(Drawer)`
  overflow: auto;
  padding: 0;
`;

export const ModalClose = styled.div`
  width: 82px;
  height: 60px;
  background: #fff;
  position: fixed;
  top: 43px;
  right: ${({ width }) => width || '54.9%'};
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  cursor: pointer;
`;

ModalClose.Close = styled(Close)`
  position: absolute;
  top: 23px;
  left: 30px;
  path {
    fill: #313e47;
  }
  height: 15px;
  width: 15px;
`;