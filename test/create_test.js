const assert = require('assert');

const Superhero = require('../models/superhero.model.js');

describe('Creating documents', () => {
    it('creates a superhero', (done) => {

        const sh = new Superhero({
          nickname: "Test1",
          real_name: "Test1 Test1",
          origin_description: "Test1 Origin Description",
          superpowers: "Test1 Superpower, Test1 Superpower,",
          catch_phrase: "Test1 Catch Phrase"
        });
        sh.save()
            .then(() => {
                assert(!sh.isNew);
                done();
            });
    });
});
