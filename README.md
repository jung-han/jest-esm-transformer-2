# jest esm transformer 2

https://github.com/ActuallyACat/jest-esm-transformer for jest 28 and later version (https://jestjs.io/docs/upgrading-to-jest28#transformer)

## Getting started

1. npm install jest-esm-transformer-2
2. Add this to your jest config, targetting your esm files:

```js
transform: {
    '.js': 'jest-esm-transformer-2',
}
```
