import { expect } from 'chai';

import Connection from '../connection.service';

describe('Connections', () => {
    it('can be imported', () => {
        expect(Connection).to.be.a('function');
    });
});
