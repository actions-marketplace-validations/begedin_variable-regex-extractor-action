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
  pattern: 'myVar:([^\s]*)'
```

Will look for `myVar:foo` in the pull request body and return `value: foo` as 
output.
