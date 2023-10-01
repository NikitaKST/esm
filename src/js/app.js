import './domain.js';
import './game.js';
import { Game, GameSavingData, loadGame, saveGame } from './game.js';



const game = new Game();
game.start();