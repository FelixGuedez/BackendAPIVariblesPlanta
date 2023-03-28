import daosDatosFreire from './src/daos/daosDatosFreire.js';
import express  from 'express';

const dbGetAll = new daosDatosFreire

let app = express()
let router = express.Router();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use('/freire', router);

router.route('/all').get((req, res) => {
    console.log('Entro a All')
    dbGetAll.getAll().then(result => {
        res.json(result[0]);
    })
})

router.route('/param/:grupo').get((req, res) => {
    console.log('Entro a grupo',req.params.grupo )
    const grupoUrl = req.params.grupo
    dbGetAll.selectGrupo(grupoUrl).then(result => {
        res.json(result[0]);
    })
})

router.route('/param/:grupo/id/:idVariable').get((req, res) => {
    console.log('Entro a grupo',req.params.grupo )
    const grupoUrl = req.params.grupo
    const idVariableUrl = req.params.idVariable
    dbGetAll.selectIdVariable(grupoUrl, idVariableUrl).then(result => {
        res.json(result[0]);
    })
})

router.route('/fecha').get((req, res) => {
    console.log('Entro a Fecha')
    const dateIni = '2022-07-01'
    const dateEnd = '2022-07-10'
    dbGetAll.selectDateRange(dateIni, dateEnd).then(result => {
        res.json(result[0]);
    })
})
const port = process.env.PORT || 8080

app.listen(port)
console.log(`Servidor escuchando en puerto http://localhost:${port}`)


