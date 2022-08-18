import { Result, Row } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import React from 'react';
import collectionData from '../../asset/dummy/fakeposts';
import PostsList from './PostsList';
import styled from 'styled-components';

function Section2() {
  return (
    <Row justify="center" align="middle" wrap={true}>
      <Result icon={<FormOutlined />} title="========== Recent Posts ==========" />
      <List>
        <PostsList collectionData={collectionData} />
      </List>
    </Row>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin
`;

export default Section2;
