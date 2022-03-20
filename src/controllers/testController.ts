import express, {Request,Response} from 'express';


interface testObject {
  user: String;
  number: Number;
}

export function sum(a: number, b: number):number{
  return a+b;
}

export async function testHandler(req: Request, res: Response):Promise<any> {
  try {
    let obj:testObject = {
       user: "Evan",
       number: 4
    }
    res.send({success: true, data: obj})
  } catch (error) {
    res.status(500).json({success: false, message: error})
  }
}

export async function testHandler2(req: Request, res: Response):Promise<any>{
  try {
    res.send("Handler worked")
  } catch (error) {
    res.status(500).json({success: false, message: error})
  }
}