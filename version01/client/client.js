const request = require('request');

const options = {
    url:"http://localhost:3000",
    header: {
        'Content-Type':'application/json'
    },
    // JSON.stringify: 객체를 JSON 문자열로 변경한다.
    body: JSON.stringify({
        user:"http",
        name:"JM",
        email:"express@gmail.com",
    })
}

request.post(options, (error, response, body)=>{
    if (error){
        console.log(error);
    }
})
