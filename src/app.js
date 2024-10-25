const {envs}=require('./config/env')
const{startServer}=require('./server/server')
const main=()=>{
startServer({port:envs.PORT,public_path:envs.PUBLIC_PATH})
}

//funcion agnostica autoconvocada
//agnostica porque no se le define nombre
//autoconvocada, se ejecuta ella sola con los parentesis al final
(async()=>{
    main()
})()