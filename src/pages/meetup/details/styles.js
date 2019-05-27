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
  align-items: center;
`;

export const MeetupImageWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 300px;
`;

export const MeetupImage = styled.img`
  width: 100%;
`;

export const MeetupInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 315px;
  min-width: 315px;
  margin-top: 40px;
  margin-bottom: 40px;

  button {
    margin-top: 30px;
  }
`;

export const MeetupTitle = styled.span`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const MeetupMemebers = styled.span`
  color: #999;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const MeetupDescription = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 30px;
`;

export const MeetupInfoLabel = styled.span`
  color: #999;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const MeetupInfoText = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 20px;
`;
