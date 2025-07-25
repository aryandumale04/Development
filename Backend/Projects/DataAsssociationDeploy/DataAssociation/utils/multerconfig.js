const multer  = require("multer");
const path =  require("path")
const crypto = require("crypto");

//set the storage for multer 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12,function(err ,bytes){
            const fileName = bytes.toString("hex")+path.extname(file.originalname);
            cb(null,fileName);
    })
  }
});



//create its instance 
const upload = multer({ storage: storage });

//export it so tha we can use it 
module.exports = upload;