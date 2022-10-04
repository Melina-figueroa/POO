var figlet = require('figlet');

figlet('Hello TDF!!', function(err: any, data: any) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});