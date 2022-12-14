import { AutoComplete, Typography } from 'antd';
import React from 'react';
import { theme } from '../../style/theme';
import styled from 'styled-components';

const { Title } = Typography;

function CreatePageTitle() {
  return (
    <MainTitle>
      <>
        <Title
          style={{
            textAlign: 'center',
            marginTop: `${theme.space_5_6}`,
            marginBottom: `${theme.space_7}`,
            fontSize: `${theme.fs_18}`,
            fontWeight: `${theme.fw_700}`,
            color: `${theme.black}`,
          }}
        >
          Create Your NFT
        </Title>
      </>
    </MainTitle>
  );
}

const MainTitle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Noto+Sans+KR:wght@100&display=swap');
  padding-top: 30px;
  text-align: center;
  font-weight: 400;
  font-family: 'Aboreto', cursive;
  font-family: 'Noto Sans KR', sans-serif;
`;

export default CreatePageTitle;
