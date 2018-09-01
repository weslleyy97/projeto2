import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from "react-native";

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

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View>
            <TouchableHighlight
              onPress={() => {
                this.somar("Weslley");
              }}
            >
              <View
                style={{ backgroundColor: "green", width: 100, height: 100 }}
              >
                <View style={styles.centralizarTexto}>
                  <Text>Teste</Text>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                this.somar("Weslley");
              }}
            >
              <View
                style={{ backgroundColor: "green", width: 100, height: 100 }}
              >
                <View style={styles.centralizarTexto}>
                  <Text>Teste2</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  centralizarTexto: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  ajusteTexto: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  }
});
