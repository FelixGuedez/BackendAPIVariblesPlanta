import ContainerSql from "../container/containerSQL.js";

class daosDatosFreire extends ContainerSql {
    constructor(){
        super('PLC_FREIRE')
    }
}

export default daosDatosFreire