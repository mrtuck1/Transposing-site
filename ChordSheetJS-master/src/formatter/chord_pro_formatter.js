import Tag from '../chord_sheet/tag';
import ChordLyricsPair from '../chord_sheet/chord_lyrics_pair';

const NEW_LINE = '\n';

/**
 * Formats a song into a ChordPro chord sheet
 */
class ChordProFormatter {
  /**
   * Formats a song into a ChordPro chord sheet.
   * @param {Song} song The song to be formatted
   * @returns {string} The ChordPro string
   */
  format(song) {
    return song.lines.map(line => this.formatLine(line)).join(NEW_LINE);
  }

  formatLine(line) {
    return line.items.map(item => this.formatItem(item)).join('');
  }

  formatItem(item) {
    if (item instanceof Tag) {
      return this.formatTag(item);
    } else if (item instanceof ChordLyricsPair) {
      return this.formatChordLyricsPair(item);
    }

    return '';
  }

  formatTag(tag) {
    if (tag.hasValue()) {
      return `{${tag.originalName}: ${tag.value}}`;
    }

    return `{${tag.originalName}}`;
  }

  formatChordLyricsPair(chordLyricsPair) {
    return [
      this.formatChordLyricsPairChords(chordLyricsPair),
      this.formatChordLyricsPairLyrics(chordLyricsPair),
    ].join('');
  }

  formatChordLyricsPairChords(chordLyricsPair) {
    if (chordLyricsPair.chords) {
      return `[${chordLyricsPair.chords}]`;
    }

    return '';
  }

  formatChordLyricsPairLyrics(chordLyricsPair) {
    return chordLyricsPair.lyrics || '';
  }
}

export default ChordProFormatter;
