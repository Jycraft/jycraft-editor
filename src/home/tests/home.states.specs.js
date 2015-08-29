import { expect } from 'chai';

import {states} from '../home.states';

describe('routes', () => {
    it('can be imported', () => {
        expect(states).to.be.an('function');
    });
});
