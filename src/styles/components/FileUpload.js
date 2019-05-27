import styled from 'styled-components';

const FileUpload = styled.div`
  margin: 10px 0 40px 0;
  position: relative;

  .fileWrapper {
    border: 0.06em dashed rgba(256, 256, 256, 0.6);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 86px;

    svg {
      color: rgba(255, 255, 255, 0.6);
    }

    input[type='file'] {
      opacity: 0;
      width: 100%;
      height: 100%;
      padding: 30px;
      margin: 0;
      position: absolute;
      cursor: pointer;
    }

    .imagePreview {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  .fileCleanup {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    span {
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
      font-weight: normal;
    }

    button {
      background: transparent;
      color: #e5556e;
    }
  }
`;

export default FileUpload;
