import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MAX_VOTOS = 20;
var qtdWes = 0,
  qtdTon = 0;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qtdTon,
      qtdWes: 0
    };
  }
  somar(voto) {
    if (voto == "Weslley") {
      this.setState({ qtdWes: this.state.qtdWes + 1 });
    } else {
      this.setState({ qtdTon: this.state.qtdTon + 1 });
    }
  }

  render() {
    if (this.state.qtdTon + this.state.qtdWes < MAX_VOTOS) {
      return (
        <View style={styles.container}>
          <View>
            <Text>Total: {this.state.qtdTon + this.state.qtdWes} </Text>
          </View>
          <Button
            onPress={() => {
              this.somar("Weslley");
            }}
            title="Weslley"
            color="red"
          />
          <Button
            onPress={() => {
              this.somar("Tonin");
            }}
            title="Toninho"
            color="green"
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Button onPress={() => {}} title="Weslley" color="red" />
          <Button onPress={() => {}} title="Toninho" color="green" />
          <View>
            <Text>
              Tonin: {this.state.qtdTon} Wes: {this.state.qtdWes}
            </Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "right"
  }
});
