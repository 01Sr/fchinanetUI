const fs = require('fs')
const encoding = 'utf-8'
const file = 'user-config.json'

alert(__dirname)
exports.config = {
    account: '',
    passwd:'',

}

exports.saveConfig=function(){
    // 写文件，文件不存在则创建，同步方法
    fs.writeFileSync(file,JSON.stringify(exports.config),encoding)
}
function changeData(data){
    c=JSON.parse(data)
    exports.config.account=c.account
    exports.config.passwd=c.passwd
}





// fs.stat(file,(err,stat)=>{
//     if(!stat||!stat.isFile()){
//         fs.writeFile(file,encoding,JSON.stringify(config))
//     }
// })
//
// fs.access(file,fs.R_OK|fs.W_OK,(err)=>{
//     // alert('can\'t read or write user-config.json')
// })

if(fs.existsSync(file)){
    datas = fs.readFileSync(file,encoding)
    changeData(datas.toString())
}


// fs.writeFile(file,encoding,{
//     mode
// })
