const express = require('express');
const users = require('../services/users');

const router = new express.Router();

/**
 * Create a new user.
 */
router.post('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await users.postUsers(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Returns the full user object.
 */
router.get('/:id', async (req, res, next) => {
  const options = {
    id: req.params.id
  };

  try {
    const result = await users.getUsersById(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Updates the specified user object.
 */
router.put('/:id', async (req, res, next) => {
  const options = {
    id: req.params.id
  };

  try {
    const result = await users.putUsersById(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Deletes the user and all of their associated resources.
 */
router.delete('/:id', async (req, res, next) => {
  const options = {
    id: req.params.id
  };

  try {
    const result = await users.deleteUsersById(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Returns the stripe customer object.
 */
router.get('/:id/billing', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await users.getUsersByIdBilling(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Update a stripe customer object.
 */
router.put('/:id/billing', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await users.putUsersByIdBilling(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Create a new stripe customer object.
 */
router.post('/:id/billing', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await users.postUsersByIdBilling(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Delete the stipe customer object.
 */
router.delete('/:id/billing', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await users.deleteUsersByIdBilling(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Returns the invoices associated with a users account.
 */
router.get('/:id/billing/invoices', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await users.getUsersByIdBillingInvoices(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Returns an invoice object per the given invoiceId.
 */
router.get('/:id/billing/invoices/:invoiceId', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await users.getUsersByIdBillingInvoicesByInvoiceId(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Returns the billing source associated with a users account.
 */
router.get('/:id/billing/source', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await users.getUsersByIdBillingSource(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Updates the billing source associated with a users account.
 */
router.put('/:id/billing/source', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await users.putUsersByIdBillingSource(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Create a new billing source associated with a users account.
 */
router.post('/:id/billing/source', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await users.postUsersByIdBillingSource(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Delete the billing source associated with a users account.
 */
router.delete('/:id/billing/source', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await users.deleteUsersByIdBillingSource(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

module.exports = router;
