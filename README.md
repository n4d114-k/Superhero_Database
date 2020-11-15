# Superhero Database

***

This release is a development version of App(non-production ready).

First of all clone this repository to start. Then `cd` to the *Superhero_Database* directory

Your next step is to `npm install` to grab all the necessary dependencies.

Then `npm run dev` and open *localhost:3000* in your browser.

Alternatively, you can `npm run server` to run server server-side only.

To run Unit Tests `cd` to *test* directory and run `npm test`

***

In the Home Page you will see the Navigation Bar with two options: **Home** and **Create New Superhero**. *Create New Superhero* will let you submit New Superhero Form.

But let's go back  to our *Home Page*. Here you can see full **list of Superheroes from our Mongo DB Atlas**, with pagination, showing 5 items at once.

Every Item has two action buttons. **Delete** button will immediately delete selected Superhero from DB, so *be careful*!

The **Details** button will let you not only see details about particular Superhero, but also **edit** all information.
