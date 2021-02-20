import core from '@actions/core';
import github from '@actions/github';

export const main = () => {
  try {
    const pattern = core.getInput('pattern');
    const source = github.context.payload.pull_request?.body || '';
    const results = source.match(pattern) || [];
    const match = results[1] || null;
    core.setOutput('value', match);
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
