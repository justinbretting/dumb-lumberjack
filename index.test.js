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

  test('logs', () => {
    // log comment 2
    logger = new Logger()
    logger.warn('warn')
  })
})
