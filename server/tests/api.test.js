const request = require('supertest');
const app = require('../index');

describe('GET /api/gastos', () => {
    it('Test 01: Responde con json y contiene una lista de gastos', done => {
        request(app)
            .get('/api/gastos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

// Casos de prueba para GET /api/gastos/:id
describe('GET /api/gastos/:id', () => {
    it('Test 02: Verificar gasto por id', done => {
        // Supongamos que tienes un ID válido de gasto existente
        const gastoId = '64b6abaf0b73d7221a8b203a';
        request(app)
            .get(`/api/gastos/${gastoId}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('Test 03: Verificar gasto por id incorrecto', done => {
        const gastoIdIncorrecto = '61ddbe9642ea140b708f874d';
        request(app)
            .get(`/api/gastos/${gastoIdIncorrecto}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
    });
});

// Caso de prueba para la ruta de creación de un nuevo gasto
describe('POST /api/gastos', () => {
    it('Test 04: Gasto creado', done => {
        const data = {
            tipo: 'Alimentación',
            ruc: '123456789',
            empresa: 'Restaurante ABC',
            monto: 100.50
        };

        request(app)
            .post('/api/gastos')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('Test 05: Gasto no creado', done => {
        request(app)
          .post('/api/gastos')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, done);
      });
});

// Caso de prueba para PUT /api/gastos/:id
describe('PUT /api/gastos/:id', () => {
    it('Test 06: Debe actualizar el gasto cuando el ID existe y se envían todos los campos', (done) => {
        const updatedData = {
          tipo: 'Viaje',
          ruc: '555555555',
          empresa: 'Agencia de Viajes',
          monto: 200.00
        };
    
        request(app)
          .put('/api/gastos/64c6fbbeacc376e28b78bbdf')
          .send(updatedData)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done)
      });
    
      it('Test 07: Debe retornar un 404 cuando el ID no existe', (done) => {
        const updatedData = {
          tipo: 'Viaje',
          ruc: '555555555',
          empresa: 'Agencia de Viajes',
          monto: 200.00
        };
    
        request(app)
          .put('/api/gastos/61ddbe9642ea140b708f874d')
          .send(updatedData)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404, done);
      });
    
      it('Test 08: Debe retornar un 400 cuando los campos están incompletos', (done) => {
        const incompleteData = {
          tipo: 'Viaje',
          ruc: '555555555'
          // Falta el campo 'empresa' y 'monto'
        };
    
        request(app)
          .put('/api/gastos/64c6fbbeacc376e28b78bbdf')
          .send(incompleteData)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, done);
      });
    });

// Caso de prueba para /api/gastos/tipo/:tipo
describe('GET /api/gastos/tipo/:tipo', () => {
    it('Test 09: Debe obtener los gastos por un tipo existente', done => {
      const tipo = 'Alimentación';
  
      request(app)
        .get(`/api/gastos/tipo/${tipo}`)
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  
    it('Test 10: Debe responder con código de estado 404 en caso de error por inexistencia', done => {
      // Forzamos un error en la consulta a la base de datos para simular un error interno
      const tipo = 'TipoInexistente';
  
      request(app)
        .get(`/api/gastos/tipo/${tipo}`)
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  });




