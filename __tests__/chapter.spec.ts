import { AxiosInstance } from 'axios';
import Chapter from "../src/services/chapter";

describe('Chapter', () => {
  describe('list', () => {
    test('should respond with the correct list of chapters', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            chapterName: 'some_chapter',
          },
          {
            _id: '5cd566778e30eff6ebccfea8',
            chapterName: 'another_chapter',
          },
        ],
      };
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const chapterClient = new Chapter(clientMock);
      const response = await chapterClient.list();

      // Assert
      expect(response).toEqual(expectedResponse);
    });
  });

  describe('get', () => {
    test('should respond with the correct Chapter object', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd566778e30eff6ebccfea8',
            chapterName: 'some_chapter',
          }
        ],
      };
      const expectedChapterId = expectedResponse.docs[0]._id;
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const chapterClient = new Chapter(clientMock);
      const chapter = await chapterClient.get(expectedChapterId);

      // Assert
      const expectedChapter = expectedResponse.docs[0];
      expect(chapter).toEqual(expectedChapter);
    });
  });

  describe('getChaptersForBook', () => {
    test('should respond with the correct chapters', async () => {
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
      const expectedBookId = 'some_book_id';
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const chapterClient = new Chapter(clientMock);
      const chapters = await chapterClient.getChaptersForBook(expectedBookId);

      // Assert
      expect(chapters).toEqual(expectedResponse);
    });
  });
});
