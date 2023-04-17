import type { Config } from '@jest/types'
const config: Config.InitialOptions = {
  transformIgnorePatterns: ['node_modules/(?!(antlr4)/)'],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
  },
}

export default config
