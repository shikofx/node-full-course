const bcrypt = require('bcryptjs');

const passwordHashing = async () => {
    const password = 'hahaha';
    const hashingPassword = await bcrypt.hash(password, 8);
    
    console.log(password);
    console.log(hashingPassword);

    const isMatchWithPass = await bcrypt.compare('hahaha', hashingPassword);
    console.log(isMatchWithPass);
}

passwordHashing();