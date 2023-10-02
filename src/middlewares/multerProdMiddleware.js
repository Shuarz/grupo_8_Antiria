const multer = require('multer');
const path = require('path');
const uuid = require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/products'));
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + uuid.v4();
        const newFilename = 'product-' + uniqueSuffix + extension;
        cb(null, newFilename);
    }
});

const fileupload = multer({ storage: storage });

module.exports = fileupload;
