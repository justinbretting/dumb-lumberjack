const Logger = require('./index')

const originalEnv = JSON.stringify(process.env)

describe('dumb-lumberjack', () => {
  let logger

  beforeEach(() => {
    process.env = JSON.parse(originalEnv);
  })

  test('constructs', () => {
    logger = new Logger()
    expect(logger._tag).toBe('index.test.js')
  })
})
