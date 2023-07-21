const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/user'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});
const fileupload = multer({ storage: storage });

module.exports = fileupload;