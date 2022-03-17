const test = require('tape')
const supertest = require('supertest')
const app = require('./index')

test('GET /sum/10/5', (t) => {
    supertest(app)
        .get('/sum/10/5')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(res.body.valorSomado === 15, "Soma correta")
            t.end()
        })
})

test('GET /sum/10/78', (t) => {
    supertest(app)
        .get('/sum/10/78')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(res.body.valorSomado === 88, "Soma correta")
            t.end()
        })
})

test('GET /sub/10/5', (t) => {
    supertest(app)
        .get('/sub/10/5')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(res.body.valorSubtraido === 5, "Subtração correta")
            t.end()
        })
})

test('GET /sub/28/19', (t) => {
    supertest(app)
        .get('/sub/28/19')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(res.body.valorSubtraido === 9, "Subtração correta")
            t.end()
        })
})

test('GET /div/10/5', (t) => {
    supertest(app)
        .get('/div/10/5')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(res.body.valorDividido === 2, "Divisão correta")
            t.end()
        })
})

test('GET /div/88/11', (t) => {
    supertest(app)
        .get('/div/88/11')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(res.body.valorDividido === 8, "Divisão correta")
            t.end()
        })
})

test('GET /multi/10/5', (t) => {
    supertest(app)
        .get('/multi/10/5')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(res.body.valorMultiplicado === 50, "Multiplicação correta")
            t.end()
        })
})

test('GET /multi/8/12', (t) => {
    supertest(app)
        .get('/multi/8/12')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.assert(res.body.valorMultiplicado === 96, "Multiplicação correta")
            t.end()
        })
})