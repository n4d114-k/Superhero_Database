const assert = require('assert');

const Superhero = require('../models/superhero.model.js');

describe('Reading superhero details', () => {
    it('finds superhero with the name of Test1', (done) => {
        Superhero.findOne({
          nickname: "Test1",
        });
        done();
    });
});
