const { SimpleLogger } = require('../index')

describe('SimpleLogger basic', () => {
  test('should exist', () => {
    expect(SimpleLogger).toBeDefined()
  })
  test('should contractor ok', () => {
    const sl = new SimpleLogger({
      scope: 'test',
      theme: 'yellow'
    })
    expect(sl.title).toMatchSnapshot()
  })
  test('json should output inspect formate', () => {
    const sl = new SimpleLogger()
    sl.log({ a: 1 })
  })
  test('should output ok', () => {
    const sl = new SimpleLogger()
    sl.log(1)
    sl.warn(1)
    sl.error(1)
    sl.info(1)
  })
})
