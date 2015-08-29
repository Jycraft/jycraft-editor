import { expect } from 'chai';

import Toast from '../toast.service';

describe('Toast', () => {
    it('can be imported', () => {
        expect(Toast).to.be.a('function');
    });
});
