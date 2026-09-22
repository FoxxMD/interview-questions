import { faker } from '@faker-js/faker';

export const generateMaybeNull = () => faker.helpers.arrayElement([null, undefined]);

export const generateMaybeNullAnswer = (val) => val === null ? 'foo' : 'bar';

export const createHelper = () => {
    const array1 = faker.helpers.multiple(() => faker.person.fullName(), { count: 5 });
    return {
        testArray1: () => array1,
        testArray1Answer: () => array1[3],
    };
};

export class Dog {
    age = 5;
    static ageAnswer() { return 5; }
}

export class Cat {
    age = 7;
    constructor(name) {
        this.name = name;
    }
    static ageAnswer() { return 10; }
}

export const nationArray = () => ['pizzanation', 'scoobynation', 'awolnation'];

export const squidObj = () => ({
    sandy: 'squirrel',
    sponge: 'bob',
    gary: 'snail',
    squidward: 'clarinet',
    plankton: 'crabby patty',
});

export const squidAnswer = () => 'clarinet';

export const algo1Count = () => 7;