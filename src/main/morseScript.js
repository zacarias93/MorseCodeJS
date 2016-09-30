/**
 * Created by zaclee on 9/29/16.
 */

function morseCode() {

    var display = document.getElementById('result');

    this.askInput = function () {
        var userInput = prompt("Please enter what you want to be translated: ");
        var arr = makeCharArray(userInput);
        translate(arr);

    };

    var makeCharArray = function (userInput) {
        var char = new Array();
        for (var i = 0; i < userInput.length; i++) {
            char.push(userInput[i]);
        }
        console.log(char);
        return char;
    };

    var translate = function(c) {
        var morse = "";
        for(var i =0; i<c.length; i++) {
            morse += alphabet[c[i]];
        }
        display.innerHTML = morse;
    };


    var alphabet = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        " ": " "
    };

}

var morse = new morseCode();
morse.askInput();