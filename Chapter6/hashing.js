const util = require('util');
const crypto = require('crypto');

const pbkdf2 = util.promisify(crypto.pbkdf2);

const encrypt = async text => {
    const ALGO = 'sha512';
    const KEY_LEN = 64;
    const digest = await pbkdf2(text, '', 1, KEY_LEN, ALGO);
    console.log(digest.byteLength); //암호화데이터 길이 확인
    console.log(`${text} | ${digest.toString('base64')}`);
};

(async () => await encrypt('samplepassword'))();

(async () => { //눈사태효과 확인
    await encrypt('samplepasswordsamplepasswordsamplepasswordsamplepasswordsample');
    await encrypt('samplepasswordsamplepastwordsamplepasswordsamplepasswordsample');
})();