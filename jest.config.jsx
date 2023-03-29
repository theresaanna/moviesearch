module.exports = () => {
  return {
    testEnvironment: 'jsdom',
    rootDir: '.',
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules', 'src'],
    setupFiles: ['<rootDir>/setupJest.js']
  };
};
