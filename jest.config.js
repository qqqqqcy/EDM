var config = {
    collectCoverage: true,
    collectCoverageFrom: ['component/**/*.{ts,tsx}', '!component/**/demo/index.ts', '!component/**/*.d.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    setupFiles: ['./scripts/tests/setup.js'],
    reporters: ['default'],

    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleDirectories: ['node_modules'],

    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
            // diagnostics: {
            // ignoreCodes: [2305],
            // },
        },
        $PREFIX: 'edm',
    },

    transform: {
        '^.+test\\.(js|jsx)$': 'babel-jest',
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['<rootDir>/component/**/__tests__/**/*.test.(js|jsx|ts|tsx)'],

    moduleNameMapper: {
        '@component/(.*)$': '<rootDir>/component/$1',
        '@tests/(.*)$': '<rootDir>/scripts/tests/$1',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/scripts/tests/__mocks__/file-mock.js',
        '\\.(css|less|sass|scss)$': '<rootDir>/scripts/tests/__mocks__/object-mock.js',
    },
};
module.exports = config;
