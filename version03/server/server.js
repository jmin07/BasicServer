// json으로 이루어진 Request Body를 받았을 경우, 
// 요청 값을 제대로 못 받는 문제가 발생한다.

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    const body = `${req.body.user}`;
    console.log(body);
    res.send(`${body}`);
})

app.listen(3000, (error)=>{
    console.log("3000 번 서버 listening...");
    console.log(error);
})

