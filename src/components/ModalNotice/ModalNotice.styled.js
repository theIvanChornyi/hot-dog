import styled from 'styled-components';
import { ReactComponent as IconBtnPrimal } from '../../pages/NoticesPage/img/closeIcon.svg';

export const ModalNoticeBackdrop = styled.div`
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  max-width: 450px;
  padding: 60px 20px 40px;
  background-color: white;
  border-radius: 20px;
  width: calc(100% - 40px);
  background-color: white;
  margin: auto;
  position: relative;
  transform: translateY(-50%);
  top: 50%;
`;

export const ModalCLoseBtn = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const CatagoryName = styled.span`
  position: absolute;
  top: 80px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;
  padding: 6px 53px 6px 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
`;

export const NoticesInfoImg = styled.img`
  margin-bottom: 16px;
`;

export const NoticesInfoTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 16px;
`;

export const NoticesInfoParameters = styled.p`
  position: relative;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

export const ParametersList = styled.ul`
  display: grid;
  gap: 8px;
  margin-bottom: 28px;
`;

export const ParametersValue = styled.span`
  position: absolute;
  left: 118px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const CloseBtn = styled(IconBtnPrimal)``;

export const CommentsText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  margin-bottom: 40px;
`;

export const CommentsTextStrong = styled.span`
  font-weight: 700;
`;
