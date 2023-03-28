import { config } from "../utils/config.js";
import sql from "mssql"

export default class ContainerSql {
    constructor(tableName){
        this.tableName = tableName
        console.log('Nombre de la tabla',this.tableName)
        
    }

    async getAll() {
        try {
            let pool = await sql.connect(config);
            let all = await pool.request().query(`SELECT * FROM ${this.tableName}`)

            return all.recordsets

        } catch (error) {
            console.log(error)

        }

    }
    
    async selectGrupo(grupo) {
        try {
            let pool = await sql.connect(config);
            let all = await pool.request().query(`SELECT * FROM ${this.tableName} where Grupo = '${grupo}'`)

            return all.recordsets
            
        } catch (error) {
            console.log(error)
        }
    }

    async selectIdVariable(grupo,idVariable) {
        try {
            let pool = await sql.connect(config);
            let all = await pool.request().query(`SELECT * FROM ${this.tableName} where Grupo = '${grupo}' and IdVariable = '${idVariable}'`)

            return all.recordsets
            
        } catch (error) {
            console.log(error)
        }
    }

async selectDateRange(dateIni, dateEnd) {
    try {
        console.log('Fechas', dateIni, dateEnd)
        let pool = await sql.connect(config);
        let all = await pool.request().query(`SELECT * FROM ${this.tableName} WHERE fecha BETWEEN '${dateIni}' and (SELECT DATEADD(day,1,'${dateEnd}')) and IDVariable = 'TIAP'`)

        return all.recordsets
        
    } catch (error) {
        console.log(error)
    }
}

}
