import Book from '../src/services/book';
import { AxiosInstance } from 'axios';

describe('Book', () => {
  describe('list', () => {
    test('should respond with the correct list of Books', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            name: 'The Fellowship of the Ring',
          },
          {
            _id: '5cd95395de30eff6ebccfea9',
            name: 'The Two Towers',
          },
          {
            _id: '5cd95395de30eff6ebccfeaa',
            name: 'The Return of the King',
          },
        ],
      };
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const bookClient = new Book(clientMock);
      const response = await bookClient.list();

      // Assert
      expect(response).toEqual(expectedResponse);
    });
  });

  describe('get', () => {
    test('should respond with the correct book object', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            name: 'The Fellowship of the Ring',
          },
        ],
      };
      const expectedBookId = expectedResponse.docs[0]._id;
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const bookClient = new Book(clientMock);
      const book = await bookClient.get(expectedBookId);

      // Assert
      const expectedBook = expectedResponse.docs[0];
      expect(book).toEqual(expectedBook);
    });
  });
});
