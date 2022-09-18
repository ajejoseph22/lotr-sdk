import { AxiosInstance } from 'axios';
import Character from '../../src/services/character';

describe('Character', () => {
  describe('list', () => {
    test('should respond with the correct list of characters', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            name: 'some_name',
            height: 'some_height',
            race: 'some_race',
            gender: 'some_gender',
            birth: 'some_date',
            spouse: 'some_name',
            death: 'some_date',
            realm: 'some_realm',
            hair: 'some_hair',
            wikiUrl: 'some_url',
          },
          {
            _id: '5c2345670eff6ebccfea8',
            name: 'another_name',
            height: 'another_height',
            race: 'another_race',
            gender: 'another_gender',
            birth: 'another_date',
            spouse: 'another_name',
            death: 'another_date',
            realm: 'another_realm',
            hair: 'another_hair',
            wikiUrl: 'another_url',
          },
        ],
      };
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const characterClient = new Character(clientMock);
      const response = await characterClient.list();

      // Assert
      expect(response).toEqual(expectedResponse);
    });
  });

  describe('get', () => {
    test('should respond with the correct character object', async () => {
      // Arrange
      const expectedResponse = {
        docs: [
          {
            _id: '5cd95395de30eff6ebccfea8',
            name: 'some_name',
            height: 'some_height',
            race: 'some_race',
            gender: 'some_gender',
            birth: 'some_date',
            spouse: 'some_name',
            death: 'some_date',
            realm: 'some_realm',
            hair: 'some_hair',
            wikiUrl: 'some_url',
          },
        ],
      };
      const expectedCharacterId = expectedResponse.docs[0]._id;
      const clientMock = {
        get: jest.fn(() => Promise.resolve({ data: expectedResponse })),
      } as unknown as AxiosInstance;

      // Act
      const characterClient = new Character(clientMock);
      const character = await characterClient.get(expectedCharacterId);

      // Assert
      const expectedCharacter = expectedResponse.docs[0];
      expect(character).toEqual(expectedCharacter);
    });
  });
});
