import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 40px 26px;
`;

export const MeetupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 910px;
`;

export const MeetupContainerTitle = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const MeetupList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 40px;

  :last-child {
    margin-bottom: 0;
  }

  /* Supports Grid */
  display: grid;
  grid-template-columns: 290px 290px 290px;
  grid-gap: 20px;

  @media all and (max-width: 1024px) {
    grid-template-columns: 290px 290px;
  }
  @media all and (max-width: 768px) {
    grid-template-columns: 290px;
  }
`;

export const Message = styled.div`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
`;
