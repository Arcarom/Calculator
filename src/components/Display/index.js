import React from 'react';
import Styled from './styles';

export default props => {
  return (
    <Styled.DisplayView>
      <Styled.DisplayText numberOfLines={1}>{props.value}</Styled.DisplayText>
    </Styled.DisplayView>
  );
};
