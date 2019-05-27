import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MeetupBox = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;

  &:hover {
    img {
      opacity: 0.8;
    }
  }
`;

export const MeetupImage = styled.img`
  width: 100%;
  min-width: 290px;
  height: 110px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  transition: opacity 0.2s ease;
`;

export const MeetupInfoWrapper = styled.div`
  display: flex;
  padding: 20px;
  background: #fff;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const MeetupInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
  max-width: 190px;
`;

export const MeetupWhen = styled.span`
  color: #e5556e;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const MeetupTitle = styled.span`
  color: #222;
  font-size: 16px;
  font-weight: bold;
`;

export const MeetupMemebers = styled.span`
  color: #999;
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const MeetupButtonDetails = styled(Link)`
  background-color: #e5556e;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  transition: background-color 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #fc5e76;
  }
`;
