const fs = require('fs')
fs.writeFile('./testDir/test.json','', (err)=>{  
    if(err){  
        console.log(err)  
        return  
    }  
    console.log('创建写入文件成功')  
})
function shujuDouble() {
    return (Math.random() * (200 - 1) + 0).toFixed(1)
}
function shujuInt(shu) {
    if (shu) {
        return parseInt(Math.random() * shu)
    }
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
        fs.appendFile('./testDir/test.json', `{
            "DId":"NDM5E_1",
            "TS":1685677249000,
            "P":{
            "CMOCF_DO1":${shujuArr([0, 1, 2, 3, 4, 5, 6, 7])},
            "CMOCF_DO2":${shujuArr([0, 1, 2, 3, 4, 5, 6, 7])},
            "CMOCF_DO3":${shujuArr([0, 1, 2, 3, 4, 5, 6, 7])},
            "NOP":${shujuInt(10)},
            "WCT":${shujuArr()},
            "SDAL_EE":${shujuArr()},
            "SDAL_OT":${shujuArr()},
            "SDAL_NOP":${shujuArr()},
            "SDAL_WCT":${shujuArr()},
            "ALS_TF":${shujuArr()},
            "ALS_OW":${shujuArr()},
            "ALS_OLD":${shujuArr()},
            "ALS_SCSD":${shujuArr()},
            "ALS_SCIST":${shujuArr()},
            "ALS_GD":${shujuArr()},
            "ALS_LK":${shujuArr()},
            "ALS_OV":${shujuArr()},
            "ALS_UV":${shujuArr()},
            "ALS_MP":${shujuArr()},
            "ALS_ZD":${shujuArr()},
            "ALS_PSQ":${shujuArr()},
            "ALS_VU":${shujuArr()},
            "SOP1_T":${shujuArr([11000,10010,11110,11101,10011,10001,10111,10000])},
            "SOP1_SB":${shujuArr()},
            "SOP2_PP":${shujuArr([1,2])},
            "SOP2_OMP":${shujuArr([1,2])},
            "SOP2_TF":${shujuArr([1,2])},
            "SOP2_HVL":${shujuArr([1,2])},
            "SOP2_DPF":${shujuArr([1,2])},
            "SOP2_CB":${shujuArr([1,2])},
            "SOP2_ABALOC/RC":${shujuArr([1,2])},
            "SOP2_SCE":${shujuArr([1,2])},
            "SOP2_PWI":${shujuArr([1,2])},
            "SOP2_PI":${shujuArr([1,2])}
            }
            }
            
            `, (err) => {
        })
        // console.log(`{
        //     "DId":"NDM5E_1",
        //     "TS":1685677249000,
        //     "P":{
        //     "CMOCF_DO1":${shujuArr([0, 1, 2, 3, 4, 5, 6, 7])},
        //     "CMOCF_DO2":${shujuArr([0, 1, 2, 3, 4, 5, 6, 7])},
        //     "CMOCF_DO3":${shujuArr([0, 1, 2, 3, 4, 5, 6, 7])},
        //     "NOP":${shujuInt(10)},
        //     "WCT":${shujuArr()},
        //     "SDAL_EE":${shujuArr()},
        //     "SDAL_OT":${shujuArr()},
        //     "SDAL_NOP":${shujuArr()},
        //     "SDAL_WCT":${shujuArr()},
        //     "ALS_TF":${shujuArr()},
        //     "ALS_OW":${shujuArr()},
        //     "ALS_OLD":${shujuArr()},
        //     "ALS_SCSD":${shujuArr()},
        //     "ALS_SCIST":${shujuArr()},
        //     "ALS_GD":${shujuArr()},
        //     "ALS_LK":${shujuArr()},
        //     "ALS_OV":${shujuArr()},
        //     "ALS_UV":${shujuArr()},
        //     "ALS_MP":${shujuArr()},
        //     "ALS_ZD":${shujuArr()},
        //     "ALS_PSQ":${shujuArr()},
        //     "ALS_VU":${shujuArr()},
        //     "SOP1_T":${shujuArr([11000,10010,11110,11101,10011,10001,10111,10000])},
        //     "SOP1_SB":${shujuArr()},
        //     "SOP2_PP":${shujuArr([1,2])},
        //     "SOP2_OMP":${shujuArr([1,2])},
        //     "SOP2_TF":${shujuArr([1,2])},
        //     "SOP2_HVL":${shujuArr([1,2])},
        //     "SOP2_DPF":${shujuArr([1,2])},
        //     "SOP2_CB":${shujuArr([1,2])},
        //     "SOP2_ABALOC/RC":${shujuArr([1,2])},
        //     "SOP2_SCE":${shujuArr([1,2])},
        //     "SOP2_PWI":${shujuArr([1,2])},
        //     "SOP2_PI":${shujuArr([1,2])}
        //     }
        //     }`)
    }
}
aaa()



