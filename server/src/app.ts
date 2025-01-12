import express, { Request, Response } from 'express';

const port: number = Number(process.env.PORT) || 8000;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('IM ALIVE!!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});