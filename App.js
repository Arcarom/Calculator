import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component {
  state = {...initialState};

  addDigit = n => {
    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;

    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return;
    }
    const currentValue = clearDisplay ? ' ' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({displayValue, clearDisplay: false});

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({values});
    }
  };

  clearMemory = () => {
    this.setState({...initialState});
  };
  setOperations = operation => {
    if (this.state.current === 0) {
      this.setState({operation, current: 1, clearDisplay: true});
    } else {
      const equals = operation === '=';
      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }
      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  };

  render() {
    return (
      <View style={Style.container}>
        <Display value={this.state.displayValue} />
        <View style={Style.buttonStyle}>
          <Button
            label="AC"
            dimensionTriple={(Dimensions.get('window').width / 4) * 3}
            onClick={this.clearMemory}
          />
          <Button
            label="/"
            dimensions={Dimensions.get('window').width / 4}
            operation
            onClick={() => this.setOperations('/')}
            operationButton={true}
          />
          <Button
            label="7"
            dimensions={Dimensions.get('window').width / 4}
            onClick={this.addDigit}
          />
          <Button
            label="8"
            dimensions={Dimensions.get('window').width / 4}
            onClick={this.addDigit}
          />
          <Button
            label="9"
            dimensions={Dimensions.get('window').width / 4}
            onClick={this.addDigit}
          />
          <Button
            label="*"
            dimensions={Dimensions.get('window').width / 4}
            operation
            onClick={() => this.setOperations('*')}
            operationButton={true}
          />
          <Button
            label="4"
            dimensions={Dimensions.get('window').width / 4}
            onClick={this.addDigit}
          />
          <Button
            label="5"
            dimensions={Dimensions.get('window').width / 4}
            onClick={this.addDigit}
          />
          <Button
            label="6"
            dimensions={Dimensions.get('window').width / 4}
            onClick={this.addDigit}
          />
          <Button
            label="-"
            dimensions={Dimensions.get('window').width / 4}
            operation
            onClick={() => this.setOperations('-')}
            operationButton={true}
          />
          <Button
            label="1"
            dimensions={Dimensions.get('window').width / 4}
            onClick={this.addDigit}
          />
          <Button
            label="2"
            dimensions={Dimensions.get('window').width / 4}
            onClick={this.addDigit}
          />
          <Button
            label="3"
            dimensions={Dimensions.get('window').width / 4}
            onClick={this.addDigit}
          />
          <Button
            label="+"
            dimensions={Dimensions.get('window').width / 4}
            operation
            onClick={() => this.setOperations('+')}
            operationButton={true}
          />
          <Button
            label="0"
            onClick={this.addDigit}
            dimensionDouble={(Dimensions.get('window').width / 4) * 2}
          />
          <Button
            label="."
            dimensions={Dimensions.get('window').width / 4}
            onClick={this.addDigit}
          />
          <Button
            label="="
            operationButton={true}
            dimensions={Dimensions.get('window').width / 4}
            operation
            onClick={() => this.setOperations('=')}
          />
        </View>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
