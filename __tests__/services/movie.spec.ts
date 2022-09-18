import { AxiosInstance } from 'axios';
import Movie from '../../src/services/movie';

describe('Movie', () => {
  describe('list', () => {
    test('should respond with the correct list of movies', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            runtimeInMinutes: 50,
            budgetInMillions: 50,
            boxOfficeRevenueInMillions: 50,
            academyAwardNominations: 50,
            academyAwardWins: 50,
            rottenTomatoesScore: 7,
          },
          {
            _id: '5c2345670eff6ebccfea8',
            runtimeInMinutes: 20,
            budgetInMillions: 20,
            boxOfficeRevenueInMillions: 34,
            academyAwardNominations: 50,
            academyAwardWins: 50,
            rottenTomatoesScore: 3,
          },
        ],
      };
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const movieClient = new Movie(clientMock);
      const response = await movieClient.list();

      // Assert
      expect(response).toEqual(expectedResponse);
    });
  });

  describe('get', () => {
    test('should respond with the correct movie object', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            runtimeInMinutes: 50,
            budgetInMillions: 50,
            boxOfficeRevenueInMillions: 50,
            academyAwardNominations: 50,
            academyAwardWins: 50,
            rottenTomatoesScore: 7,
          },
        ],
      };
      const expectedMovieId = expectedResponse.docs[0]._id;
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const movieClient = new Movie(clientMock);
      const movie = await movieClient.get(expectedMovieId);

      // Assert
      const expectedMovie = expectedResponse.docs[0];
      expect(movie).toEqual(expectedMovie);
    });
  });
});
