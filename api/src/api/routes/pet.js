const express = require('express');
const pet = require('../services/pet');

const router = new express.Router();

/**
 * Add a new pet to the store
 */
router.post('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await pet.addPet(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Update an existing pet
 */
router.put('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await pet.updatePet(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Multiple status values can be provided with comma separated 
 * strings
 */
router.get('/findByStatus', async (req, res, next) => {
  const options = {
    status: req.query.status
  };

  try {
    const result = await pet.findPetsByStatus(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Muliple tags can be provided with comma separated strings. 
 * Use tag1, tag2, tag3 for testing.
 */
router.get('/findByTags', async (req, res, next) => {
  const options = {
    tags: req.query.tags
  };

  try {
    const result = await pet.findPetsByTags(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Returns a single pet
 */
router.get('/:petId', async (req, res, next) => {
  const options = {
    petId: req.params.petId
  };

  try {
    const result = await pet.getPetById(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Updates a pet in the store with form data
 */
router.post('/:petId', async (req, res, next) => {
  const options = {
    petId: req.params.petId
  };

  try {
    const result = await pet.updatePetWithForm(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Deletes a pet
 */
router.delete('/:petId', async (req, res, next) => {
  const options = {
    petId: req.params.petId
  };

  try {
    const result = await pet.deletePet(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * uploads an image
 */
router.post('/:petId/uploadImage', async (req, res, next) => {
  const options = {
    petId: req.params.petId
  };

  try {
    const result = await pet.uploadFile(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;
