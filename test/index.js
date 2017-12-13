
const test = require('tape')
const { spawn } = require('child_process')
const path = require('path')

function argsFrom (field, done) {
  return spawn(
    path.resolve(__dirname, '../bin/args-from'),
    [ field ],
    { cwd: __dirname }
  ).stdout.on('data', buf => {
    done(buf.toString())
  })
}

test('config to args', t => {
  t.plan(2)

  argsFrom('test1', args => {
    t.is(args, '--foo=1 --bar=2')
  })

  argsFrom('test2', args => {
    t.is(args, '--foo="Hello world"')
  })
})
