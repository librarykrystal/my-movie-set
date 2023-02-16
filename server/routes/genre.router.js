const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/', (req, res) => {
  // getting ALL genres from database
  const query = `SELECT * FROM genres ORDER BY "id" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});

// GET genres by specific movie_id
router.get('/:id', (req, res) => {
  console.log('Get GENRES by ID req.params.id:', req.params.id);
  let id = req.params.id;
  const queryText = `
  SELECT "movies"."title", "genres"."name" FROM "movies"
  JOIN "movies_genres" ON "movies_genres"."movie_id" = "movies"."id"
  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
  WHERE "movies"."id" = $1;
  `;
  pool.query(queryText, [id])
  .then((result) => {
      console.log('GET GENRES by ID RESULTS:', result);
      res.send(result.rows);
  })
  .catch((error) => {
      console.log('Get GENRES by ID ERROR:', error);
      res.sendStatus(500);
  })
});

module.exports = router;