const express = require('express')
const users = require('../services/users')

const router = new express.Router()

/**
 * Create a new user.
 */
router.post('/', async (req, res, next) => {
  const options = {
  }

  try {
    const result = await users.createUser(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Returns the full user object.
 */
router.get('/:id', async (req, res, next) => {
  const options = {
    id: req.params.id
  }

  try {
    const result = await users.getUser(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Updates the specified user object.
 */
router.put('/:id', async (req, res, next) => {
  const options = {
    id: req.params.id
  }

  try {
    const result = await users.updateUser(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Deletes the user and all of their associated resources.
 */
router.delete('/:id', async (req, res, next) => {
  const options = {
    id: req.params.id
  }

  try {
    const result = await users.deleteUser(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Returns the stripe customer object.
 */
router.get('/:id/billing', async (req, res, next) => {
  const options = {
  }

  try {
    const result = await users.getBilling(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Update a stripe customer object.
 */
router.put('/:id/billing', async (req, res, next) => {
  const options = {
  }

  try {
    const result = await users.updateBilling(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Create a new stripe customer object.
 */
router.post('/:id/billing', async (req, res, next) => {
  const options = {
  }

  try {
    const result = await users.createBilling(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Delete the stipe customer object.
 */
router.delete('/:id/billing', async (req, res, next) => {
  const options = {
  }

  try {
    const result = await users.deleteBilling(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Returns the invoices associated with a users account.
 */
router.get('/:id/billing/invoices', async (req, res, next) => {
  const options = {
  }

  try {
    const result = await users.getInvoices(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Returns an invoice object per the given invoiceId.
 */
router.get('/:id/billing/invoices/:invoiceId', async (req, res, next) => {
  const options = {
  }

  try {
    const result = await users.getInvoice(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Create a new billing source associated with a users account.
 */
router.post('/:id/billing/sources', async (req, res, next) => {
  const options = {
  }

  try {
    const result = await users.createSource(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Returns the billing source associated with a users account.
 */
router.get('/:id/billing/sources/:sourceId', async (req, res, next) => {
  const options = {
  }

  try {
    const result = await users.getSource(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Updates the billing source associated with a users account.
 */
router.put('/:id/billing/sources/:sourceId', async (req, res, next) => {
  const options = {
  }

  try {
    const result = await users.updateSource(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

/**
 * Delete the billing source associated with a users account.
 */
router.delete('/:id/billing/sources/:sourceId', async (req, res, next) => {
  const options = {
  }

  try {
    const result = await users.deleteSource(options)
    res.status(result.status || 200).send(result.data)
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    })
  }
})

module.exports = router
