const createUser = require('../controllers/users/createUser')
const getUser = require('../controllers/users/getUser')
const updateUser = require('../controllers/users/updateUser')
const deleteUser = require('../controllers/users/deleteUser')
const getBilling = require('../controllers/users/getBilling')
const updateBilling = require('../controllers/users/updateBilling')
const createBilling = require('../controllers/users/createBilling')
const deleteBilling = require('../controllers/users/deleteBilling')
const getInvoices = require('../controllers/users/getInvoices')
const getInvoice = require('../controllers/users/getInvoice')
const createSource = require('../controllers/users/createSource')
const getSource = require('../controllers/users/getSource')
const updateSource = require('../controllers/users/updateSource')
const deleteSource = require('../controllers/users/deleteSource')

/**
 * Create a new user.
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.createUser = async (options) => {
  // Implement your business logic here...
  return createUser(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Returns the full user object.
 * @param {Object} options
 * @param {} options.id The users primary id
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getUser = async (options) => {
  // Implement your business logic here...
  return getUser(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Updates the specified user object.
 * @param {Object} options
 * @param {String} options.id The users primary id
 * @throws {Error}
 * @return {Promise}
 */
module.exports.updateUser = async (options) => {
  // Implement your business logic here...
  return updateUser(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Deletes the user and all of their associated resources.
 * @param {Object} options
 * @param {} options.id The users primary id
 * @throws {Error}
 * @return {Promise}
 */
module.exports.deleteUser = async (options) => {
  // Implement your business logic here...
  return deleteUser(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Returns the stripe customer object.
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getBilling = async (options) => {
  // Implement your business logic here...
  return getBilling(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Update a stripe customer object.
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.updateBilling = async (options) => {
  // Implement your business logic here...
  return updateBilling(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Create a new stripe customer object.
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.createBilling = async (options) => {
  // Implement your business logic here...
  return createBilling(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Delete the stipe customer object.
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.deleteBilling = async (options) => {
  // Implement your business logic here...
  return deleteBilling(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Returns the invoices associated with a users account.
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getInvoices = async (options) => {
  // Implement your business logic here...
  return getInvoices(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Returns an invoice object per the given invoiceId.
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getInvoice = async (options) => {
  // Implement your business logic here...
  return getInvoice(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Create a new billing source associated with a users account.
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.createSource = async (options) => {
  // Implement your business logic here...
  return createSource(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Returns the billing source associated with a users account.
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getSource = async (options) => {
  // Implement your business logic here...
  return getSource(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Updates the billing source associated with a users account.
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.updateSource = async (options) => {
  // Implement your business logic here...
  return updateSource(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

/**
 * Delete the billing source associated with a users account.
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.deleteSource = async (options) => {
  // Implement your business logic here...
  return deleteSource(options)
    .then(result => {
      // This function should return as follows:
      return {
        code: 200,
        data: result
      }
    })
    .catch(err => {
      // If an error happens during your business logic implementation,
      // promise rejections should return something like this: { status: 404, error: 'Error Message' }
      throw err
    })
}

