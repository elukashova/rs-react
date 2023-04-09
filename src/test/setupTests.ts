import matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';
import { expect } from 'vitest';
import { server } from '../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

expect.extend(matchers);
