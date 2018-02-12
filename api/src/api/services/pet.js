/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.addPet = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    code: 200,
    data: 'addPet ok!'
  };
};

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.updatePet = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    code: 200,
    data: 'updatePet ok!'
  };
};

/**
 * @param {Object} options
 * @param {Array} options.status Status values that need to be considered for filter
 * @throws {Error}
 * @return {Promise}
 */
module.exports.findPetsByStatus = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    code: 200,
    data: 'findPetsByStatus ok!'
  };
};

/**
 * @param {Object} options
 * @param {Array} options.tags Tags to filter by
 * @throws {Error}
 * @return {Promise}
 */
module.exports.findPetsByTags = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    code: 200,
    data: 'findPetsByTags ok!'
  };
};

/**
 * @param {Object} options
 * @param {Integer} options.petId ID of pet to return
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getPetById = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    code: 200,
    data: 'getPetById ok!'
  };
};

/**
 * @param {Object} options
 * @param {Integer} options.petId ID of pet that needs to be updated
 * @throws {Error}
 * @return {Promise}
 */
module.exports.updatePetWithForm = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    code: 200,
    data: 'updatePetWithForm ok!'
  };
};

/**
 * @param {Object} options
 * @param {String} options.api_key 
 * @param {Integer} options.petId Pet id to delete
 * @throws {Error}
 * @return {Promise}
 */
module.exports.deletePet = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    code: 200,
    data: 'deletePet ok!'
  };
};

/**
 * @param {Object} options
 * @param {Integer} options.petId ID of pet to update
 * @throws {Error}
 * @return {Promise}
 */
module.exports.uploadFile = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    code: 200,
    data: 'uploadFile ok!'
  };
};

