import matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';
import { expect } from 'vitest';
import { server } from '../mocks/server';
import fetch, { Headers, Request, Response } from 'node-fetch';

if (!('fetch' in globalThis)) {
  Object.assign(globalThis, { fetch, Headers, Request, Response });
}

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

expect.extend(matchers);
