export const VALID_NAME = /^([A-Z]+[a-zA-Z]{2,30})$/;

export const DEFAULT_OPTION = '--Choose a hut--';

export enum Errors {
  required = 'This field is required.',
  avatar = 'Please, upload an image.',
  name = 'The name must start with uppercase letter and contain at least 3 latin letters.',
}
