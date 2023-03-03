const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');
require('dotenv').config('./env');
 

const logDirectory  = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log',{
            interval: "1d",
            path: logDirectory
});



const development = {
    name: 'development',
    asset_path:'./assets',
    session_cookie_key: 'nVRW3QewxYD8dmAjR1M2BtitlKomvW0r',
    db: 'codeial_development',
    smtp:  {
    service:'gmail',
    host: 'smtp.gmail.com',
    port:587,
    secure: false,
    auth: {
        user: 'desaimanoj052@gmail.com',
        pass: 'coyuwdooaomscnsh'
    }
  },
  google_client_id: "110820126200-72m65nvre4m2oq600g787fhju35b34ro.apps.googleusercontent.com",
  google_client_secret:"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",
  google_call_back_url:"http://localhost:8000/users/auth/google/callback",
  jwt_secret:'codeial',
}


const production = {
    name: 'production',
    
    asset_path: process.env.CODEIAL_ASSET_PATH,
    session_cookie_key: process.env.CODEIAL_SESSION_COOKIE_KEY,
    db: process.env.CODEIAL_DB,
    smtp:  {
    service:'gmail',
    host: 'smtp.gmail.com',
    port:587,
    secure: false,
    auth: {
        user: process.env.CODEIAL_GMAIL_USERNAME,
        pass: process.env.CODEIAL_GMAIL_PASSWORD
    }
  },
  google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
  google_client_secret: process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
  google_call_back_url: process.env.CODEIAL_GOOGLE_CALLBACK_URL,
  jwt_secret:process.env.CODEIAL_JWT_SECRET,
}



module.exports = eval(process.env.CODEIAL_ENVIRONMENT) == undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT);