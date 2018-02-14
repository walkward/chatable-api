/**
 * Returns the full user object.
 * @param {Object} options
 * @param {} options.id The users primary id
 * @throws {Error}
 * @return {Promise}
 */

module.exports = (options) => {
  return new Promise((resolve, reject) => {
    if (options.id === 'WEKJFL3LK2341L22') resolve({ id: options.id })
    else reject({ status: 404, error: 'No user could be found for the given id.' })
  })
}
