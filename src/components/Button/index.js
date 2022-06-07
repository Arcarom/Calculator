import React from 'react';
import Styled from './styles';

export default props => {
  return (
    <>
      <Styled.TouchableHigh
        diferentColor={props.operationButton}
        onPress={() => props.onClick(props.label)}
        dimensions={props.dimensions}
        dimensionDouble={props.dimensionDouble}
        dimensionTriple={props.dimensionTriple}>
        <Styled.StyledText diferentColor={props.operationButton}>
          {props.label}
        </Styled.StyledText>
      </Styled.TouchableHigh>
    </>
  );
};
