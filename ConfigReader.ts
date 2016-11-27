var fs = require('fs');

export default function readConfigData(){
    if (fs.existsSync('./Config/config.json')) {
        console.log("Checking your config file");   
        var config = fs.readFileSync('./Config/config.json');
        var configData = JSON.parse(config);
        console.log(configData)
        return configData; 
    } else {
      console.log("We couldn't find Config.json in config folder.");
      console.log("Please, download the file from the Github repository");
      process.exit();
    }
}
