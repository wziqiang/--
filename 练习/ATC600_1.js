const fs = require('fs')
//删除文件
fs.writeFile('./testDir/test.json','', (err)=>{  
    if(err){  
        console.log(err)  
        return  
    }  
    console.log('创建写入文件成功')  
})

function shujuDouble() {
    // return parseInt(Math.random() * (200 - 1) + 0);
    return (Math.random() * (200 - 1) + 0).toFixed(1)
}
function shujuInt() {
    return parseInt(Math.random() * (200 - 1) + 0);
}
var shurArr = [0, 1]
function shujuArr(arr) {
    if (arr) {
        return arr[Math.floor((Math.random() * arr.length))]
    }
    return shurArr[Math.floor((Math.random() * shurArr.length))]

}
function aaa() {
    for (let index = 0; index <= 50; index++) {
        fs.appendFile('./testDir/test.json', 
        `{
            "DId":"ATC600_1",
            "TS":1685677249000,
            "P":{
            "ADRCM":1,
            "BCM":${shujuArr([2400, 4800, 9600, 19200])},
            "RM":${shujuArr()},
            "WTRTM":${shujuDouble()},
            "WTMS_1":${shujuDouble()},
            "WTMS_2":${shujuDouble()},
            "WTMS_3":${shujuDouble()},
            "WTMS_4":${shujuDouble()},
            "WTMS_5":${shujuDouble()},
            "WTMS_6":${shujuDouble()},
            "WTMS_7":${shujuDouble()},
            "WTMS_8":${shujuDouble()},
            "WTMS_9":${shujuDouble()},
            "WTMS_10":${shujuDouble()},
            "WTMS_11":${shujuDouble()},
            "WTMS_12":${shujuDouble()},
            "WTMS_13":${shujuDouble()},
            "WTMS_14":${shujuDouble()},
            "WTMS_15":${shujuDouble()},
            "WTMS_16":${shujuDouble()},
            "WTMS_17":${shujuDouble()},
            "WTMS_18":${shujuDouble()},
            "WTMSADR_1":${shujuInt()},
            "WTMSADR_2":${shujuInt()},
            "WTMSADR_3":${shujuInt()},
            "WTMSADR_4":${shujuInt()},
            "WTMSADR_5":${shujuInt()},
            "WTMSADR_6":${shujuInt()},
            "WTMSADR_7":${shujuInt()},
            "WTMSADR_8":${shujuInt()},
            "WTMSADR_9":${shujuInt()},
            "WTMSADR_10":${shujuInt()},
            "WTMSADR_11":${shujuInt()},
            "WTMSADR_12":${shujuInt()},
            "WTMSADR_13":${shujuInt()},
            "WTMSADR_14":${shujuInt()},
            "WTMSADR_15":${shujuInt()},
            "WTMSADR_16":${shujuInt()},
            "WTMSADR_17":${shujuInt()},
            "WTMSADR_18":${shujuInt()},
            "WTMSOS_1":${shujuArr()},
            "WTMSOS_2":${shujuArr()},
            "WTMSOS_3":${shujuArr()},
            "WTMSOS_4":${shujuArr()},
            "WTMSOS_5":${shujuArr()},
            "WTMSOS_6":${shujuArr()},
            "WTMSOS_7":${shujuArr()},
            "WTMSOS_8":${shujuArr()},
            "WTMSOS_9":${shujuArr()},
            "WTMSOS_10":${shujuArr()},
            "WTMSOS_11":${shujuArr()},
            "WTMSOS_12":${shujuArr()},
            "WTMSOS_13":${shujuArr()},
            "WTMSOS_14":${shujuArr()},
            "WTMSOS_15":${shujuArr()},
            "WTMSOS_16":${shujuArr()},
            "WTMSOS_17":${shujuArr()},
            "WTMSOS_18":${shujuArr()},
            "WTMSBS_1":${shujuArr()},
            "WTMSBS_2":${shujuArr()},
            "WTMSBS_3":${shujuArr()},
            "WTMSBS_4":${shujuArr()},
            "WTMSBS_5":${shujuArr()},
            "WTMSBS_6":${shujuArr()},
            "WTMSBS_7":${shujuArr()},
            "WTMSBS_8":${shujuArr()},
            "WTMSBS_9":${shujuArr()},
            "WTMSBS_10":${shujuArr()},
            "WTMSBS_11":${shujuArr()},
            "WTMSBS_12":${shujuArr()},
            "WTMSBS_13":${shujuArr()},
            "WTMSBS_14":${shujuArr()},
            "WTMSBS_15":${shujuArr()},
            "WTMSBS_16":${shujuArr()},
            "WTMSBS_17":${shujuArr()},
            "WTMSBS_18":${shujuArr()}
            }
        }
            
            `, (err) => {
        })
        // console.log(`{
        //     "DId":"ATC600_1",
        //     "TS":1685677249000,
        //     "P":{
        //     "ADRCM":1,
        //     "BCM":${shujuArr([2400, 4800, 9600, 19200])},
        //     "RM":${shujuArr()},
        //     "WTRTM":${shujuDouble()},
        //     "WTMS_1":${shujuDouble()},
        //     "WTMS_2":${shujuDouble()},
        //     "WTMS_3":${shujuDouble()},
        //     "WTMS_4":${shujuDouble()},
        //     "WTMS_5":${shujuDouble()},
        //     "WTMS_6":${shujuDouble()},
        //     "WTMS_7":${shujuDouble()},
        //     "WTMS_8":${shujuDouble()},
        //     "WTMS_9":${shujuDouble()},
        //     "WTMS_10":${shujuDouble()},
        //     "WTMS_11":${shujuDouble()},
        //     "WTMS_12":${shujuDouble()},
        //     "WTMS_13":${shujuDouble()},
        //     "WTMS_14":${shujuDouble()},
        //     "WTMS_15":${shujuDouble()},
        //     "WTMS_16":${shujuDouble()},
        //     "WTMS_17":${shujuDouble()},
        //     "WTMS_18":${shujuDouble()},
        //     "WTMSADR_1":${shujuInt()},
        //     "WTMSADR_2":${shujuInt()},
        //     "WTMSADR_3":${shujuInt()},
        //     "WTMSADR_4":${shujuInt()},
        //     "WTMSADR_5":${shujuInt()},
        //     "WTMSADR_6":${shujuInt()},
        //     "WTMSADR_7":${shujuInt()},
        //     "WTMSADR_8":${shujuInt()},
        //     "WTMSADR_9":${shujuInt()},
        //     "WTMSADR_10":${shujuInt()},
        //     "WTMSADR_11":${shujuInt()},
        //     "WTMSADR_12":${shujuInt()},
        //     "WTMSADR_13":${shujuInt()},
        //     "WTMSADR_14":${shujuInt()},
        //     "WTMSADR_15":${shujuInt()},
        //     "WTMSADR_16":${shujuInt()},
        //     "WTMSADR_17":${shujuInt()},
        //     "WTMSADR_18":${shujuInt()},
        //     "WTMSOS_1":${shujuArr()},
        //     "WTMSOS_2":${shujuArr()},
        //     "WTMSOS_3":${shujuArr()},
        //     "WTMSOS_4":${shujuArr()},
        //     "WTMSOS_5":${shujuArr()},
        //     "WTMSOS_6":${shujuArr()},
        //     "WTMSOS_7":${shujuArr()},
        //     "WTMSOS_8":${shujuArr()},
        //     "WTMSOS_9":${shujuArr()},
        //     "WTMSOS_10":${shujuArr()},
        //     "WTMSOS_11":${shujuArr()},
        //     "WTMSOS_12":${shujuArr()},
        //     "WTMSOS_13":${shujuArr()},
        //     "WTMSOS_14":${shujuArr()},
        //     "WTMSOS_15":${shujuArr()},
        //     "WTMSOS_16":${shujuArr()},
        //     "WTMSOS_17":${shujuArr()},
        //     "WTMSOS_18":${shujuArr()},
        //     "WTMSBS_1":${shujuArr()},
        //     "WTMSBS_2":${shujuArr()},
        //     "WTMSBS_3":${shujuArr()},
        //     "WTMSBS_4":${shujuArr()},
        //     "WTMSBS_5":${shujuArr()},
        //     "WTMSBS_6":${shujuArr()},
        //     "WTMSBS_7":${shujuArr()},
        //     "WTMSBS_8":${shujuArr()},
        //     "WTMSBS_9":${shujuArr()},
        //     "WTMSBS_10":${shujuArr()},
        //     "WTMSBS_11":${shujuArr()},
        //     "WTMSBS_12":${shujuArr()},
        //     "WTMSBS_13":${shujuArr()},
        //     "WTMSBS_14":${shujuArr()},
        //     "WTMSBS_15":${shujuArr()},
        //     "WTMSBS_16":${shujuArr()},
        //     "WTMSBS_17":${shujuArr()},
        //     "WTMSBS_18":${shujuArr()}
        //     }
        //     }`)
    }
}
aaa()



