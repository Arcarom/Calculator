import styled from 'styled-components';

const TouchableHigh = styled.TouchableOpacity`
  height: ${({dimensions, dimensionDouble, dimensionTriple}) =>
    dimensions
      ? dimensions
      : dimensionDouble
      ? dimensionDouble / 2
      : dimensionTriple
      ? dimensionTriple / 3
      : 0}px;
  width: ${({dimensions, dimensionDouble, dimensionTriple}) =>
    dimensions
      ? dimensions
      : dimensionDouble
      ? dimensionDouble
      : dimensionTriple
      ? dimensionTriple
      : 0}px;
  padding: 20px;
  background-color: ${({diferentColor}) =>
    diferentColor ? '#fa8231' : '#f0f0f0'};
  border-width: 1px;
  border-color: #888;
`;

const StyledText = styled.Text`
  font-size: 40px;
  height: ${({dimensions}) => dimensions ?? 100}px;
  height: ${({dimensions}) => dimensions ?? 100}px;
  text-align: center;
  color: ${({diferentColor}) => (diferentColor ? '#fff' : 'black')};
`;
export default {StyledText, TouchableHigh};
