const GuardianApi = require('../guardianApi');

require('jest-fetch-mock').enableMocks()

describe('GuardianApi class', () => {
  describe('loadStories', () => {
    it('calls fetch and loads the stories', () => {
      const api = new GuardianApi();
      
      fetch.mockResponseOnce(JSON.stringify({
        headline: ['Pig\'s Fly!']
      }));

      api.loadStories((data) => {
        expect(data.headline[0]).toBe('Pig\'s Fly!');
      });
    });
  });
});