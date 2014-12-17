
var assert = require('assert')

var thenify = require('..')

it('thenifyAll(fs)', function () {
  var fs = thenify(require('fs'), {}, [
    'readFile',
  ])

  return fs.readFile(__filename, 'utf8').then(function (string) {
    assert(~string.indexOf('kasjdflasjkdflajsdfklajs dajsdfakls;dfjal;ksdfj akls;dfj als;kdfj asdf'))
  })
})
