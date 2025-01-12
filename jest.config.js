module.exports = {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
      "node_modules/(?!(testing-library|some-other-module)/)", // Adjust for specific modules
    ],
  };
  