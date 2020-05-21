module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/js/**/*.js', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
}
