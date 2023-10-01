import defaultCharacter from './domain.js';  

class Game {
    start() {
      console.log('game started');
    }
  }
  
  class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
};

export { Game, GameSavingData, readGameSaving, writeGameSaving };