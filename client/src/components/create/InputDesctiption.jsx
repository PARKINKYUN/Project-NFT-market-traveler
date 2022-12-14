import { Form, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';

const { Title: _Title, Paragraph: _Paragraph } = Typography;
function InputDesctiption({ setDescription }) {
  return (
    <MainTitle>
      <>
        <Title level={3}>Description *</Title>
        <Paragraph>Enter a description here</Paragraph>
        <Form.Item name={'description'}>
          <TextArea
            rows={4}
            placeholder="Provide a detailed description of your item."
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Item>
      </>
    </MainTitle>
  );
}

const Title = styled(_Title)`
  color: ${theme.very_dark_blue_line} !important;
`;

const Paragraph = styled(_Paragraph)`
  color: ${theme.very_dark_blue_line} !important;
`;

const MainTitle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Noto+Sans+KR:wght@100&display=swap');
  padding-top: 10px;
  font-weight: 400;
  font-family: 'Aboreto', cursive;
  font-family: 'Noto Sans KR', sans-serif;
`;

export default InputDesctiption;
