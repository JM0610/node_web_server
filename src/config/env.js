/*require('dotenv').config()
const{get}=require('env-var')*///Forma angigua de importar
import envvar from 'env-var';
import env from 'dotenv'

/*Forma antigua de exportar
const envs={
    PORT:get('PORT').required().asPortNumber(),
    PUBLIC_PATH:get('PUBLIC_PATH').default('public').asString()
}
module.exports={
    envs
}*/
env.config()
export const envs={
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}
