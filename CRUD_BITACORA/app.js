const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.BD_HOST || 'localhost',
  user: process.env.BD_USER || 'root',
  password: process.env.BD_PASSWORD || '',
  database: process.env.BD_NAME || 'bitacoras_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexion a la base de datos: ' + err);
    process.exit(1);
  }
  console.log('Conexion exitosa a la base de datos');
});


const TIPOS = [
  'Bitácora de Mantenimiento Preventivo',
  'Bitácora de Mantenimiento Correctivo',
  'Bitácora de Calibración e Instrumentación',
  'Bitácora de Inspecciones Diarias',
  'Bitácora de Control de Lubricación'
];

app.get('/', (req, res) => {
  const q = 'SELECT * FROM bitacoras ORDER BY created_at DESC';
  db.query(q, (err, results) => {
    if (err) {
      console.error('Error al obtener bitácoras: ', err);
      return res.status(500).send('Error al obtener bitácoras');
    }
    res.render('index', { bitacoras: results, tipos: TIPOS });
  });
});

app.post('/bitacoras', (req, res) => {
  const {
    tipo, equipo_id, fecha_programada, fecha_ejecucion,
    tarea, tecnico, horas_ciclos, estado_servicio,
    fecha_reporte, cantidad, lubricante, muestra_analisis,
    resultados, proximo_cambio, observaciones
  } = req.body;

  const q = `INSERT INTO bitacoras
    (tipo, equipo_id, fecha_programada, fecha_ejecucion, tarea, tecnico, horas_ciclos, estado_servicio,
     fecha_reporte, cantidad, lubricante, muestra_analisis, resultados, proximo_cambio, observaciones)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const params = [
    tipo || null,
    equipo_id || null,
    fecha_programada || null,
    fecha_ejecucion || null,
    tarea || null,
    tecnico || null,
    horas_ciclos || null,
    estado_servicio || null,
    fecha_reporte || null,
    cantidad || null,
    lubricante || null,
    (muestra_analisis === 'on' || muestra_analisis === '1') ? 1 : 0,
    resultados || null,
    proximo_cambio || null,
    observaciones || null
  ];

  db.query(q, params, (err, result) => {
    if (err) {
      console.error('Error al crear bitácora: ', err);
      return res.status(500).send('Error al crear bitácora');
    }
    res.redirect('/');
  });
});

app.get('/bitacoras/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM bitacoras WHERE id = ?', [id], (err) => {
    if (err) {
      console.error('Error al eliminar bitácora:', err);
      return res.status(500).send('Error al eliminar bitácora');
    }
    res.redirect('/');
  });
});

app.get('/bitacoras/edit/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM bitacoras WHERE id = ?', [id], (err, rows) => {
    if (err) {
      console.error('Error al obtener bitácora:', err);
      return res.status(500).send('Error al obtener bitácora');
    }
    if (!rows.length) return res.status(404).send('Bitácora no encontrada');
    res.render('edit', { bitacora: rows[0], tipos: TIPOS });
  });
});

app.post('/bitacoras/update/:id', (req, res) => {
  const id = req.params.id;
  const {
    tipo, equipo_id, fecha_programada, fecha_ejecucion,
    tarea, tecnico, horas_ciclos, estado_servicio,
    fecha_reporte, cantidad, lubricante, muestra_analisis,
    resultados, proximo_cambio, observaciones
  } = req.body;

  const q = `UPDATE bitacoras SET
    tipo = ?, equipo_id = ?, fecha_programada = ?, fecha_ejecucion = ?, tarea = ?, tecnico = ?,
    horas_ciclos = ?, estado_servicio = ?, fecha_reporte = ?, cantidad = ?, lubricante = ?,
    muestra_analisis = ?, resultados = ?, proximo_cambio = ?, observaciones = ?
    WHERE id = ?`;

  const params = [
    tipo || null,
    equipo_id || null,
    fecha_programada || null,
    fecha_ejecucion || null,
    tarea || null,
    tecnico || null,
    horas_ciclos || null,
    estado_servicio || null,
    fecha_reporte || null,
    cantidad || null,
    lubricante || null,
    (muestra_analisis === 'on' || muestra_analisis === '1') ? 1 : 0,
    resultados || null,
    proximo_cambio || null,
    observaciones || null,
    id
  ];

  db.query(q, params, (err) => {
    if (err) {
      console.error('Error al actualizar bitácora:', err);
      return res.status(500).send('Error al actualizar bitácora');
    }
    res.redirect('/');
  });
});

// start
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
