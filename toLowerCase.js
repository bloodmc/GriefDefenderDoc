const fs = require('fs');
const path = require('path');

function toLowerCaseHTML(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      toLowerCaseHTML(fullPath);
    } else {
      if (path.extname(file).toLowerCase() === '.html') {
        const fullPathLower = path.join(dir, file.toLowerCase());
        fs.renameSync(fullPath, fullPathLower);
      }
    }
  }
}

toLowerCaseHTML('./dist');
