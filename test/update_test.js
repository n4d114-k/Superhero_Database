const assert = require('assert');

const Superhero = require('../models/superhero.model.js');

describe('Update a superhero', () => {

  it('creates "TestUpdate", the superhero for update', (done) => {

      const sh = new Superhero({
        nickname: "TestUpdate",
        real_name: "TestUpdate TestUpdate",
        origin_description: "TestUpdate Origin Description",
        superpowers: "TestUpdate Superpower, TestUpdate Superpower,",
        catch_phrase: "TestUpdate Catch Phrase"
      });
      sh.save()
          .then(() => {
              assert(!sh.isNew);
              done();
          });
  });

  it('update one superhero', (done) => {
    Superhero.findOneAndUpdate({ nickname: "TestUpdate" }, { nickname: "Updated" })
    .then(() => Superhero.findOne({ nickname: "Updated" }))
    done();
  });

});
