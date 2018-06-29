## sr-simple-logger

simplest logger in nodejs

```js
const { SimpleLogger } = require('sr-simple-logger')
const logger = new SimpleLogger({
  scope: 'scope',
  theme: 'blue'
})

logger.info('info')
logger.log('log')
logger.warn('warn')
logger.error('error')
logger.success('success')
```
