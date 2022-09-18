import { AxiosInstance } from 'axios';
import Quote from '../../src/services/quote';

describe('Quote', () => {
  describe('list', () => {
    test('should respond with the correct list of quotes', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            dialog: 'some_dialog',
            movie: 'some_movie',
            character: 'some_character',
            id: 'some_id',
          },
          {
            _id: '5c2345670eff6ebccfea8',
            dialog: 'another_dialog',
            movie: 'another_movie',
            character: 'another_character',
            id: 'another_id',
          },
        ],
      };
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const quoteClient = new Quote(clientMock);
      const response = await quoteClient.list();

      // Assert
      expect(response).toEqual(expectedResponse);
    });
  });

  describe('get', () => {
    test('should respond with the correct Quote object', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            dialog: 'another_dialog',
            movie: 'another_movie',
            character: 'another_character',
            id: 'another_id',
          },
        ],
      };
      const expectedQuoteId = expectedResponse.docs[0]._id;
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const quoteClient = new Quote(clientMock);
      const quote = await quoteClient.get(expectedQuoteId);

      // Assert
      const expectedQuote = expectedResponse.docs[0];
      expect(quote).toEqual(expectedQuote);
    });
  });

  describe('getQuotesForMovie', () => {
    test('should respond with the correct quotes', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            dialog: 'some_dialog',
            movie: 'some_movie_id',
            character: 'some_character',
            id: 'some_id',
          },
        ],
      };
      const expectedMovieId = 'some_movie_id';
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const quoteClient = new Quote(clientMock);
      const quotes = await quoteClient.getQuotesForMovie(expectedMovieId);

      // Assert
      expect(quotes).toEqual(expectedResponse);
    });
  });

  describe('getQuotesByCharacter', () => {
    test('should respond with the correct quotes', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            dialog: 'some_dialog',
            movie: 'some_movie_id',
            character: 'some_character_id',
            id: 'some_id',
          },
          {
            _id: '5cd23435de30eff6ebccfea8',
            dialog: 'another_dialog',
            movie: 'another_movie_id',
            character: 'some_character_id',
            id: 'some_id',
          },
        ],
      };
      const expectedCharacterId = 'some_character_id';
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const quoteClient = new Quote(clientMock);
      const quotes = await quoteClient.getQuotesByCharacter(
        expectedCharacterId,
      );

      // Assert
      expect(quotes).toEqual(expectedResponse);
    });
  });
});
