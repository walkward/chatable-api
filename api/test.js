import test from 'ava'
import request from 'supertest'
const bodyParser = require('body-parser')
const express = require('express')

function makeApp () {
  const app = express()
  app.use(bodyParser.json())
  app.use('/users', require('./src/api/routes/users'))
  return app
}

test('foo', t => {
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')

  t.is(await bar, 'bar')
})

/* User Endpoint Tests */

test('users:createUser', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .post('/users')
    .send({email: 'ava@rocks.com', password: '123123'})

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

test('users:getUser', async t => {
  t.plan(4)

  const res = await request(makeApp())
    .get('/users/WEKJFL3LK2341L22')

  t.is(res.status, 200)
  t.is(res.body.id, 'WEKJFL3LK2341L22')

  const fail = await request(makeApp())
    .get('/users/JEKJFL3LK2341L22')

  t.is(fail.status, 404)
  t.is(fail.body.error, 'No user could be found for the given id.')
})

test('users:updateUser', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .put('/users/WEKJFL3LK2341L22')
    .send({email: 'ava@rocks.com', password: '123123'})

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

test('users:deleteUser', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .delete('/users/WEKJFL3LK2341L22')

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

/* User Billing Endpoint Tests */

test('users:createBilling', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .post('/users/WEKJFL3LK2341L22/billing')
    .send({email: 'ava@rocks.com', password: '123123'})

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

test('users:getBilling', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .get('/users/WEKJFL3LK2341L22/billing')

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

test('users:deleteBilling', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .delete('/users/WEKJFL3LK2341L22/billing')

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

test('users:updateBilling', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .put('/users/WEKJFL3LK2341L22')
    .send({email: 'ava@rocks.com', password: '123123'})

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

/* User Billing Source Endpoint Tests */

test('users:createSource', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .post('/users/WEKJFL3LK2341L22/billing/sources')
    .send({email: 'ava@rocks.com', password: '123123'})

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

test('users:deleteSource', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .delete('/users/WEKJFL3LK2341L22/billing/sources/LKJ1234KLJ1KG11KJ4')

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

test('users:getSource', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .get('/users/WEKJFL3LK2341L22/billing/sources/LKJ1234KLJ1KG11KJ4')

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

test('users:updateSource', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .put('/users/WEKJFL3LK2341L22/billing/sources/LKJ1234KLJ1KG11KJ4')
    .send({email: 'ava@rocks.com', password: '123123'})

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

/* User Billing Invoice Endpoint Tests */

test('users:getInvoice', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .get('/users/WEKJFL3LK2341L22/billing/invoices/ALK3LH23JKL4L1')

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})

test('users:getInvoices', async t => {
  t.plan(2)

  const res = await request(makeApp())
    .get('/users/WEKJFL3LK2341L22/billing/invoices')

  t.is(res.status, 200)
  t.is(res.body.text, 'ok!')
})
