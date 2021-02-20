# Regex Variable Extractor Action

Extracts a variable from Pull Request body using a regex pattern

## Inputs

### `pattern`

**Required** Pattern to match the variable
## Outputs

### `value`

The result of the regex match.

## Example usage

```
uses: actions/variable-regex-extractor-action@v1.1
with:
  pattern: |
    `myVar:([^\s]*)`
```

Will look for `myVar:foo` in the pull request body and return `value: foo` as
output.

Note that we used `|` to escape the backticks

## Use cases

Core use case this action was implemented for is having to use multiple
repositories on CI.

One repository often has to a branch on another repository to run E2E tests on
CI.

For example, frontend PR on branch `foo`, might need backend branch `bar`.

Using this action in respective worflows, we can specify these branches in the
PR description.

Frontend branch PR description:

```
`backend:bar`
```

We can then use this action as a step in our workflow, followed by a checkout
step to get the correct branch on the backend repo, followed by any actions
needed by backend repo to actually start the backend.
