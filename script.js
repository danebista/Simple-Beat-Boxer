let beats = {
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button("#00fffe",65)
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("#00fffe",83)
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"), 
        button: new Button("#23d5ab",68)

    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button("#ee7752",70)
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button("#23d5ab",71)
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("#23a6d5",72)
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#ee7752", 74)
    },
    "75": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button("#23a6d5", 75)
    },
    "76": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
        button: new Button("#E73C7E", 76)
    }
}


triggerBeat = (event) => {
    if(!beats[event.keyCode]) return;

    beats[event.keyCode].beat.playMusic();  
    beats[event.keyCode].button.select();

}

triggerEnd=(event)=>{
    if(!beats[event.keyCode]) return;

    beats[event.keyCode].button.deselect();
}

document.addEventListener('keydown', triggerBeat);
document.addEventListener('keyup', triggerEnd);
