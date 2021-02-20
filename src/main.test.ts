import core from '@actions/core';

import { main } from './main';

jest.mock('@actions/core', () => ({
  getInput: jest.fn().mockReturnValue('`variable:([^\\s]*)`'),
  setOutput: jest.fn(),
}));

jest.mock('@actions/github', () => ({
  context: {
    payload: {
      // eslint-disable-next-line camelcase
      pull_request: {
        body: 'Some body with `variable:match`',
      },
    },
  },
}));

it('works', () => {
  main();
  expect(core.setOutput).toHaveBeenCalledWith('value', 'match');
});
