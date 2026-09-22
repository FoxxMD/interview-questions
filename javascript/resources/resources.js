import { faker } from '@faker-js/faker';

export const generateMaybeNull = () => faker.helpers.arrayElement([null, undefined]);

export const generateMaybeNullAnswer = (val) => val === null ? 'foo' : 'bar';