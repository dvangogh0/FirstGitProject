import express =require("express")
import {Application, json} from "express";
import {Request, Response} from "express/ts4.0";

const myapp: Application = express()
myapp.use(json())



myapp.listen(80, () => {
    console.log("Йееееей! We're connected")
})

