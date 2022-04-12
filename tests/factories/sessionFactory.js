const Keygrip = require('keygrip');
const keys = require('../../config/keys');
const keygrip = new Keygrip([keys.cookieKey]);
// const id = '624f0351c7f61e5afc409798';

module.exports = (user) => {

    

    const Buffer = require('safe-buffer').Buffer;
    const sessionObject = {
        passport: {
            user: user._id.toString()
        }
    };
    const session = Buffer.from(JSON.stringify(sessionObject)).toString('base64');



  

    const sig = keygrip.sign('session=' + session);

    return { session, sig };


};