 'use strict';
import PopUp from './popup.js';
import Game from './game.js';

const gameFinishBanner = new PopUp();


const game = new Game(5,5,5); 
game.setGameStopListner((reason)=>{
    let message;
    switch(reason){
        case 'cancel':
            message = 'Replay ?';
            break;
        case 'win':
            message = 'YOU WON';
            break;
        case 'lose':
            message = 'YOU LOST';
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
})


gameFinishBanner.setClickListner(()=>{
    game.start();
});



