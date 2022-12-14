import { Row, Typography } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';
import MarketNFTList from './MarketNFTList';
import axios from 'axios';
import { useEffect } from 'react';

const { Title } = Typography;

function Market({ token }) {
  const [collectionData, setCollectionData] = useState([]);
  useEffect(() => {
    getNFTs();
  }, []);

  const getNFTs = async () => {
    axios.get('http://localhost:4000/token/market').then((res) => {
      setCollectionData(res.data.data);
    });
  };

  return (
    <Row gutter={[8, 8]} justify="center" align="middle" wrap={true}>
      <TitleFont>
        <Title
          style={{
            marginTop: `${theme.space_7}`,
            marginBottom: `${theme.space_7}`,
            fontSize: `${theme.fs_14}`,
            fontWeight: `${theme.fw_700}`,
            color: `${theme.black}`,
          }}
        >
          NFT Market
        </Title>
      </TitleFont>
      <MarketNFTList collectionData={collectionData} token={token} />
    </Row>
  );
}

const TitleFont = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Noto+Sans+KR:wght@100&display=swap');

  text-align: center;
  font-weight: 400;
  font-family: 'Aboreto', cursive;
  font-family: 'Noto Sans KR', sans-serif;
  width: 100%;
`;

export default Market;
