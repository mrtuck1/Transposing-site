var ChordSheetJS = require('chordsheetjs').default;


import ChordSheetJS from 'chordsheetjs';

const chords = document.getElementById('Chord-finder');
const chordSheet = chords.substring(1);

const parser = new ChordSheetJS.ChordSheetParser();
const song = parser.parse(chordSheet);

const formatter = new ChordSheetJS.TextFormatter();
const disp = formatter.format(song);

const formatter = new ChordSheetJS.HtmlTableFormatter();
const disp = formatter.format(song);

const formatter = new ChordSheetJS.HtmlDivFormatter();
const disp = formatter.format(song);


const displayChords = document.querySelectorAll('.display-chords');