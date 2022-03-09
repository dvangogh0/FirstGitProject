import express =require("express")
import {Application, json} from "express";
import {Request, Response} from "express/ts4.0";

const myapp: Application = express();
myapp.use(json())

let numbersArray: number[] = [];

myapp.get("/addNumber",(req: Request, res: Response) => {
   const body = req.query; //kolichestvoto chislo shte poluchim kato query param
    const numbersToNumbers = parseInt(body.numbersToNumbers as string)
    //ot request poluchavame chislata kato string i tr[bva da go obyrnem v chislo
    for (let i=0; i<=numbersToNumbers; i++) {
        numbersArray.push(Math.floor(Math.random() * 20))
    }
    res.send(numbersArray)
})

myapp.get("/findNumber", (req: Request, res: Response) => {
    const body = req.query;
    const numberFind = parseInt(body.numberFind as string)
    const foundNumber= numbersArray.find(randNumber=>randNumber === numberFind)
    if (foundNumber) {
        res.send({found: foundNumber})
    } else {
        res.send({found: 0 })
    }
})

myapp.get("/countNumbers", (req: Request, res: Response) => {
    let countedNumbers: any = {};
    for (let number of numbersArray ) {
        const key: string = `${number}`
        countedNumbers[key] =  numbersArray.filter(num=>num===number).length;
    }
    res.send(countedNumbers)
})


myapp.listen(80, () => {
    console.log("Йееееей! We're connected")
})


