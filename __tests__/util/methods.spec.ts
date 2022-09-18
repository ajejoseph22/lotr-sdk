import { encodeOptions } from '../../src/util/methods';
import { ListRequestOptions } from '../../src/types/request';
import { Quote as QuoteType } from '../../src/types/quote';

describe('encodeOptions', () => {
  test('should return the right encoded string', async () => {
    // Arrange
    const optionsObj = {
      limit: 2,
      page: 2,
      sort: {
        character: 'asc',
      },
      filter: {
        excludes: {
          dialog: ["I didn't think it would end this way.", 'Hello'],
        },
        propertyExists: 'character',
        isEqualTo: {
          movie: '5cd95395de30eff6ebccde5d',
        },
      },
    } as ListRequestOptions<QuoteType>;
    const expectedResult =
      "?limit=2&page=2&sort=character:asc&dialog!=I didn't think it would end this way.,Hello&character&movie=5cd95395de30eff6ebccde5d";

    // Act
    const result = encodeOptions<QuoteType>(optionsObj);

    // Assert
    expect(result).toBe(expectedResult);
  });
});
