import LOTR from '../src/app';
import Quote from '../src/services/quote';
import Movie from '../src/services/movie';
import Chapter from '../src/services/chapter';
import Character from '../src/services/character';
import Book from '../src/services/book';

describe('LOTR', () => {
  let accessKey;

  beforeAll(() => {
    // Arrange
    accessKey = 'some_access_key';
  });

  test('should expose a Quote API interface', () => {
    // Act
    const lotrClient = new LOTR(accessKey);

    // Assert
    expect(lotrClient.quote).toBeInstanceOf(Quote);
  });

  test('should expose a Movie API interface', () => {
    // Act
    const lotrClient = new LOTR(accessKey);

    // Assert
    expect(lotrClient.movie).toBeInstanceOf(Movie);
  });

  test('should expose a Chapter API interface', () => {
    // Act
    const lotrClient = new LOTR(accessKey);

    // Assert
    expect(lotrClient.chapter).toBeInstanceOf(Chapter);
  });

  test('should expose a Character API interface', () => {
    // Act
    const lotrClient = new LOTR(accessKey);

    // Assert
    expect(lotrClient.character).toBeInstanceOf(Character);
  });

  test('should expose a Book API interface', () => {
    // Act
    const lotrClient = new LOTR(accessKey);

    // Assert
    expect(lotrClient.book).toBeInstanceOf(Book);
  });
});
