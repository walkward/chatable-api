{{#each operation}}
  {{#each this.path}}
    {{#validMethod @key}}
const {{../summary}} = require('../controllers/{{camelCase ../../../operation_name}}/{{../summary}}')
    {{/validMethod}}
  {{/each}}
{{/each}}

{{#each operation}}
  {{#each this.path}}
    {{#validMethod @key}}
/**
 {{#each ../descriptionLines}}
 * {{{this}}}
 {{/each}}
 * @param {Object} options
{{#each ../parameters}}
{{#if this.name}}
 * @param {{../../../../openbrace}}{{capitalize type}}{{../../../../closebrace}} options.{{name}} {{inline description}}
{{/if}}
{{/each}}
 * @throws {Error}
 * @return {Promise}
 */
module.exports.{{../summary}} = async (options) => {
  // Implement your business logic here...
  return {{../summary}}(options)
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

    {{/validMethod}}
  {{/each}}
{{/each}}
