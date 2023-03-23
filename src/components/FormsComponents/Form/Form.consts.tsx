export const VALID_NAME = /^([A-Z]+[a-zA-Z]{2,30})$/;

export const DEFAULT_OPTION = '--Choose a hut--';

export enum Errors {
  required = 'This field is required.',
  avatar = 'Please, upload an .jpg, .jpeg or .png image.',
  name = 'The name must contain at least 3 latin letters and start with uppercase letter.',
}

export const INPUTS = {
  name: {
    label: 'name',
    type: 'text',
    name: 'text',
  },
  arrival: {
    label: 'From:',
    type: 'date',
    name: 'date',
    className: 'date',
    parentClass: 'wrapper',
  },
  departure: {
    label: 'To:',
    type: 'date',
    name: 'date',
    className: 'date',
    parentClass: 'wrapper',
  },
  image: {
    label: 'Add your avatar',
    type: 'file',
    name: 'file',
    className: 'file',
    format: 'image/*',
  },
  privacy: {
    type: 'checkbox',
    className: 'checkbox',
    name: 'privacy',
    parentClass: 'privacy',
  },
};
