//Forma antigua de importar
/*const express=require('express')
const path=require('path')*/
import express from 'express'
import path from 'path'


/*Forma antigua de exportar
const startServer=(options)=>{
    const{port,public_path='public'}=options
    console.log(port)
    console.log(public_path)
    const app=express();
    //para usar midleware se usa USE, es propio de express
    app.use(express.static(public_path))//contenido estatico que expone 
    app.get('*',(req,res)=>{
        const indexPath=path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath);

    })
    app.listen(port,()=>{
        console.log(`escuchando en el puerto ${port}`)
    })
}

module.exports={
    startServer
}*/


export const startServer=(options)=>{
    const{port,public_path='public'}=options
    console.log(port)
    console.log(public_path)
    const app=express();
    //para usar midleware se usa USE, es propio de express
    app.use(express.static(public_path))//contenido estatico que expone 
    app.get('*',(req,res)=>{
        const indexPath=path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath);

    })
    app.listen(port,()=>{
        console.log(`escuchando en el puerto ${port}`)
    })
}
