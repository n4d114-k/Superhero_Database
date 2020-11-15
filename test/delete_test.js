const assert = require('assert');

const Superhero = require('../models/superhero.model.js');


describe('Deleting a superhero', () => {

  it('creates "TestDeletion", the superhero for deletion', (done) => {

      const sh = new Superhero({
        nickname: "TestDeletion",
        real_name: "TestDeletion TestDeletion",
        origin_description: "TestDeletion Origin Description",
        superpowers: "TestDeletion Superpower, TestDeletion Superpower,",
        catch_phrase: "TestDeletion Catch Phrase"
      });
      sh.save()
          .then(() => {
              assert(!sh.isNew);
              done();
          });
  });

  it('removes the "TestDeletion" superhero', (done) => {
    Superhero.findOneAndRemove({ nickname: "TestDeletion" })
      .then(() => Superhero.findOne({ nickname: "TestDeletion" }))
      .then((superhero) => {
        assert(superhero === null);
        done();
      });
  });

})
