const express = require('express');
const app = express();
const httpConfig = {
    port: 12347,
    address: '127.0.0.1'
};

app.use('/static', express.static('dist'));

app.listen(httpConfig.port, httpConfig.address, function (err) {
    if(err){
        console.error(err);
        process.abort();
    }else{
        console.log(`Example app listening on ${httpConfig.address}:${httpConfig.port}!`);
    }

});

process.title = "vd_server";