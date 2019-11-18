var database = require('./index').database
const all = () => database('papers').select()

module.exports = {
  all
}
