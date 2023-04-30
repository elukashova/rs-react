import { defineConfig } from 'cypress';
import registerCodeCoverageTasks from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: ['cypress/**/*.*'],
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      return config;
    },
    experimentalRunAllSpecs: true,
  },
});
