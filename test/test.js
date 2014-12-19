
var assert = require('assert')

var thenify = require('..')

it('thenifyAll(fs, {}, ["readFile"])', function () {
  var fs = thenify(require('fs'), {}, [
    'readFile',
  ])

  return fs.readFile(__filename, 'utf8').then(function (string) {
    assert(~string.indexOf('kasjdflasjkdflajsdfklajs dajsdfakls;dfjal;ksdfj akls;dfj als;kdfj asdf'))
  })
})

it('thenifyAll(fs, ["readFile"])', function () {
  var fs = thenify(require('fs'), [
    'readFile',
  ])

  return fs.readFile(__filename, 'utf8').then(function (string) {
    assert(~string.indexOf('kasjdflasjkdflajsdfklajs dajsdfakls;dfjal;ksdfj akls;dfj als;kdfj asdf'))
  })
})

it('thenifyAll(fs)', function () {
  var fs = thenify(require('fs'))

  return fs.readFile(__filename, 'utf8').then(function (string) {
    assert(~string.indexOf('kasjdflasjkdflajsdfklajs dajsdfakls;dfjal;ksdfj akls;dfj als;kdfj asdf'))
    return fs.stat(__filename)
  }).then(function (stat) {
    assert(stat.size, fs.statSync(__filename).size)
  })
})

it('thenifyAll(fs, destination)', function () {
  var fs = {};
  thenify(require('fs'), fs)

  return fs.readFile(__filename, 'utf8').then(function (string) {
    assert(~string.indexOf('kasjdflasjkdflajsdfklajs dajsdfakls;dfjal;ksdfj akls;dfj als;kdfj asdf'))
    return fs.stat(__filename)
  }).then(function (stat) {
    assert(stat.size, fs.statSync(__filename).size)
  })
})
