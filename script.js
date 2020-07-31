var ChordSheetJS = require('chordsheetjs').default;


import ChordSheetJS from 'chordsheetjs';

const chords = document.getElementById('Chord-finder');
const chordSheet = `
{title: Let it be}
{subtitle: ChordSheetJS example version}
{Chorus}
 
Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
[C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]`.substring(1);

const parser = new ChordSheetJS.ChordSheetParser();
const song = parser.parse(chordSheet);

const formatter = new ChordSheetJS.TextFormatter();
const disp = formatter.format(song);

const formatter = new ChordSheetJS.HtmlTableFormatter();
const disp = formatter.format(song);

const formatter = new ChordSheetJS.HtmlDivFormatter();
const disp = formatter.format(song);


const displayChords = document.querySelectorAll('.display-chords');