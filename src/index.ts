import express, {Request,Response,Application, request} from 'express';
import {testHandler, testHandler2} from './controllers/testController';

const app:Application = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response):void => {
  res.send("Hello TSC!")
})
app.get('/test', async (req: Request, res: Response):Promise<any> => {
  try {
    res.send("Test route worked!")
  } catch (error) {
    res.status(500).json(error);
  }
})

app.get('/test2', testHandler)
app.get('/test3', testHandler2)


app.listen(PORT, ():void => {
  console.log(`Running on ${PORT}`)
})