import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Button} from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

export default class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      gameState:[
        [0, 0 ,0],
        [0, 0 ,0],
        [0, 0 ,0]
      ],
      currentPlayer: 1,
    }
    
  }
  componentDidMount(){
    this.initializaGame();
  }
  initializaGame = ()=>{
    this.setState({gameState:
      [
        [0, 0 ,0],
        [0, 0 ,0],
        [0, 0 ,0]
      ],
      currentPlayer:1,
    });
  }


  getWinner = ()=>{
    const NUM_TILES = 3;
    var arr = this.state.gameState;
    var sum;

    for (var i = 0; i < NUM_TILES; i++){
      sum = arr[i][0] + arr[i][1]+ arr[i][2];
      if(sum == 3){return 1; }
      else if (sum == -3){return -1; }
    }
    for (var i = 0; i < NUM_TILES; i++){
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if(sum == 3){return 1; }
      else if (sum == -3){return -1; }
    }
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if(sum == 3){return 1;}
    else if ( sum == -3){ return -1; }

    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if(sum == 3){return 1; }
    else if ( sum == -3){ return -1; }
  
    return 0;
  }


  onTilePress = (row, col)=>{
    var value = this.state.gameState[row][col];
    if (value != 0){ return; }

    //declarando al jugador
    var currentPlayer=this.state.currentPlayer;
    
    //tomando los espacios de las teclas
    var arr = this.state.gameState.slice();
    arr[row][col]= currentPlayer;
    this.setState({gameState: arr});
    //otro jugador
    var nextPlayer = (currentPlayer = 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});

    var winner = this.getWinner();
    if(winner == 1){
      Alert.alert("El jugador 1 es el ganador");
      this.initializaGame();
    } else if(winner == -1){
      Alert.alert("EL jugador 2 es el ganador");
      this.initializaGame();
    }
  }
  onNewGamePress=()=>{
    this.initializaGame();
  }

  renderIcon = (row, col) => {
    var value= this.state.gameState[row][col];
    switch(value){
      case 1: return <Icon name="close" style={styles.titlex} />;
      case -1: return <Icon name="circle-outline" style={styles.titleO} />;
      default:return <View />;  
    }
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            <TouchableOpacity onPress={()=> this.onTilePress(0, 0)} style={[styles.title]}>
              {this.renderIcon(0, 0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.onTilePress(0, 1)} style={[styles.title]}>
              {this.renderIcon(0, 1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.onTilePress(0, 2)} style={[styles.title]}>
            {this.renderIcon(0, 2)}
            </TouchableOpacity>
        </View>


        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=> this.onTilePress(1, 0)} style={[styles.title]}>
              {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(1, 1)} style={[styles.title, {}]}>
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(1, 2)} style={[styles.title]}>
            {this.renderIcon(1, 2)}
          </TouchableOpacity>       
        </View>


        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=> this.onTilePress(2, 0)} style={[styles.title]}>
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(2, 1)} style={[styles.title]}>
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(2, 2)} style={[styles.title]}>
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <Button title="newGame" onPress={this.onNewGamePress} color="black"/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cca9d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    borderWidth: 5,
    borderColor:'white',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  titlex:{
    
    color:"black",
    fontSize:60,
  },
  titleO:{
    color:"white",
    fontSize:60,
  },
});
