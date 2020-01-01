const fs = require('fs');
const path = require('path');
let components = [];
let i = 1;
let walk = function (modelPath) {
    fs.readdirSync(modelPath)
        .forEach(function (file) {
            let filePath = path.join(modelPath, '/' + file)

            let stat = fs.statSync(filePath);
            if (stat.isFile()) {
                if (/(.*)\.(jpg|png)/.test(file)) {
                    // require(filePath)
                    let imgObj = {
                        title: '超能APP',
                        images: `cartoon/${filePath}`,
                        name: file,
                        episode: `第${i}集`,
                        id: i
                    }
                    components.push(imgObj);
                    // let newPath = path.join(modelPath, '/' + `${i}.jpg`);
                    // // 如果文件名称不一致修改
                    // fs.rename(filePath, newPath, function (err) {
                    //     if (err) {
                    //         console.log(err);
                    //         throw err;
                    //     }
                    // });
                    i++;
                }
            } else if (stat.isDirectory()) {
                walk(filePath)
            }
        })
};
walk('./');
fs.writeFile('./cartoon.js', JSON.stringify(components), { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) {
    if (err) {
        console.log("文件写入失败")
    } else {
        console.log("文件写入成功");

    }
})
return;
files.forEach(function (item, index) {
    console.log(item.isDirectory());
    // console.log(item);
    let stat = fs.lstatSync("./" + item)
    if (stat.isDirectory() === true) {
        components.push(item)
    }
})

console.log(components);

// let str = JSON.stringify(components)

// fs.writeFile('./extension.json', str, function (err) {
//     if (err) { res.status(500).send('Server is error...') }
// })