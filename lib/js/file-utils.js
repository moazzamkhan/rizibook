const path = require("path");
const fs = require('fs');

const iconMap = {
    "Bookmarks": "bookmarks",
    "Notes": "docs",
    "Contacts": "vcard",
    "Wishlist": "heart",
    "Code Snippets": "code",
    "Todos": "list",
    "Personal Information":"user",
    "Accounts": "key"
};

var FileUtils = {
    getIcon: function (file) {
        return iconMap[file] || "folder";
    },

    init: function (folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }
        Object.keys(iconMap).forEach((dir) => {
            console.log(dir);
            if (!fs.existsSync(path.join(folderPath, dir))) {
                fs.mkdirSync(path.join(folderPath, dir));
            }
        })
    },
    listFiles: function (folderPath, callback) {
        fs.readdir(folderPath, (err, files) => {
            if (files) {
                files.forEach(file => {
                    console.log(file, typeof file);
                });
                callback && callback(files);
            }
        })
    },
    readFile: function (filepath, callback) {
        fs.readFile(filepath, 'utf-8', function (err, data) {
            if (err) {
                alert("An error ocurred reading the file :" + err.message);
                return;
            }
            callback(data);
        });
    },
    deleteFile: function (filepath, callback) {
        fs.exists(filepath, function (exists) {
            if (exists) {
                // File exists deletings
                fs.unlink(filepath, function (err) {
                    if (err) {
                        alert("An error ocurred updating the file" + err.message);
                        console.log(err);
                        return;
                    }
                });
            } else {
                alert("This file doesn't exist, cannot delete");
            }
        });
    },
    saveChanges: function (filepath, content, callback) {
        fs.writeFile(filepath, content, function (err) {
            if (err) {
                alert("An error ocurred updating the file" + err.message);
                console.log(err);
                return;
            }

            alert("The file has been succesfully saved");
        });
    }
};

module.exports = FileUtils;
