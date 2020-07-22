import Line from '../../src/chord_sheet/line';
import ItemStub from '../cloneable_stub';
import { createChordLyricsPair, createLine, createTag } from '../utilities';
import ChordLyricsPair from '../../src/chord_sheet/chord_lyrics_pair';
import Tag from '../../src/chord_sheet/tag';

describe('Line', () => {
  describe('#clone', () => {
    it('returns a clone of the line', () => {
      const line = new Line();
      line.items = ['foo', 'bar'].map(value => new ItemStub(value));
      line.type = 'test_type';
      const clonedLine = line.clone();

      const actualValues = clonedLine.items.map(item => item.value);
      expect(actualValues).toEqual(['foo', 'bar']);
      expect(clonedLine.type).toEqual('test_type');
    });
  });

  describe('#isEmpty', () => {
    describe('when the line has items', () => {
      it('returns false', () => {
        const item = new ChordLyricsPair('C', 'Let it be');
        const line = createLine([item]);

        expect(line.isEmpty()).toBe(false);
      });
    });

    describe('when the line has no items', () => {
      it('returns false', () => {
        const line = createLine([]);

        expect(line.isEmpty()).toBe(true);
      });
    });
  });

  describe('#isVerse', () => {
    describe('when the line type is "verse"', () => {
      it('returns true', () => {
        const line = new Line();
        line.type = 'verse';

        expect(line.isVerse()).toBe(true);
      });
    });

    describe('when the line type is not "verse"', () => {
      it('returns false', () => {
        const line = new Line();
        line.type = 'chorus';

        expect(line.isVerse()).toBe(false);
      });
    });
  });

  describe('#isChorus', () => {
    describe('when the line type is "chorus"', () => {
      it('returns true', () => {
        const line = new Line();
        line.type = 'chorus';

        expect(line.isChorus()).toBe(true);
      });
    });

    describe('when the line type is not "chorus"', () => {
      it('returns false', () => {
        const line = new Line();
        line.type = 'verse';

        expect(line.isChorus()).toBe(false);
      });
    });
  });

  describe('#hasContent', () => {
    describe('when the line contains chord-lyric pairs', () => {
      it('returns true', () => {
        const line = createLine([
          createTag('foo', 'bar'),
          createChordLyricsPair('C', 'Let it be'),
        ]);

        expect(line.hasContent()).toBe(true);
      });
    });

    describe('when the line contains no chord-lyric pairs', () => {
      it('returns false', () => {
        const line = createLine([
          createTag('foo', 'bar'),
          createTag('bar', 'baz'),
        ]);

        expect(line.hasContent()).toBe(false);
      });
    });
  });

  describe('#hasRenderableItems', () => {
    describe('when the line has renderable items', () => {
      it('returns true', () => {
        const line = createLine([
          new ChordLyricsPair('C', 'Let it'),
        ]);

        expect(line.hasRenderableItems()).toBe(true);
      });
    });

    describe('when the line has no renderable items', () => {
      it('returns false', () => {
        const line = createLine([
          new Tag('x_foo', 'bar'),
        ]);

        expect(line.hasRenderableItems()).toBe(false);
      });
    });
  });
});
