// https://blog.csdn.net/weixin_47047590/article/details/119925250  js输出文件到本地
const fs = require('fs')
function shuju() {
    return parseInt(Math.random() * (200 - 1) + 0);
}
function shujuDouble() {
    return (Math.random() * (200 - 1) + 0).toFixed(1)
}
function aaa() {
    fs.writeFile('./testDir/test.json','', (err)=>{  
        if(err){  
            console.log(err)  
            return  
        }  
        console.log('创建写入文件成功')  
    })

    for (let index = 0; index <= 100; index++) {
        fs.appendFile('./testDir/test.json', `{
            "DId": "SDI8_1",
            "TS": 1685677249000,
            "P": {
                "DI_1": ${shuju()},
                "DI_2":  ${shuju()},
                "DI_4":  ${shuju()},
                "EPim_S":  ${shuju()},
                "EPex_S":  ${shuju()},
                "EQim_S":  ${shuju()},
                "EQex_S":  ${shuju()},
                "EPim_P":  ${shuju()},
                "EPex_P":  ${shuju()},
                "EQim_P":  ${shuju()},
                "EQex_P":  ${shuju()},
                "EPim_V":  ${shuju()},
                "EPex_V":  ${shuju()},
                "EQim_V":  ${shuju()},
                "EQex_V":  ${shuju()},
                "EPim_F":  ${shuju()},
                "EPex_F":  ${shuju()},
                "EQim_F":  ${shuju()},
                "EQex_F":  ${shuju()},
                "EPim_T":  ${shuju()},
                "EPex_T":  ${shuju()},
                "EQim_T":  ${shuju()},
                "EQex_T":  ${shuju()},
                "F":  ${shujuDouble()},
                "UA":  ${shujuDouble()},
                "UB":  ${shujuDouble()},
                "UC":  ${shujuDouble()},
                "UAB":  ${shujuDouble()},
                "UBC":  ${shujuDouble()},
                "UCA":  ${shujuDouble()},
                "IA":  ${shujuDouble()},
                "IB":  ${shujuDouble()},
                "IC":  ${shujuDouble()},
                "PA":  ${shujuDouble()},
                "PB":  ${shujuDouble()},
                "PC":  ${shujuDouble()},
                "Psum":  ${shujuDouble()},
                "QA":  ${shujuDouble()},
                "QB":  ${shujuDouble()},
                "QC":  ${shujuDouble()},
                "Qsum":  ${shujuDouble()},
                "Ssum":  ${shujuDouble()},
                "PF":  ${shujuDouble()},
                "EU":  ${shujuDouble()},
                "EA":  ${shujuDouble()},
                "PD":  ${shujuDouble()},
                "QD":  ${shujuDouble()},
                "SD":  ${shujuDouble()},
                "THD_V":  ${shuju()},
                "THD_I":  ${shuju()},
                "LC_1":  ${shuju()},
                "LC_2":  ${shuju()},
                "LC_3":  ${shuju()},
                "LC_4":  ${shuju()},
                "LC_5":  ${shuju()},
                "LC_6":  ${shuju()}
            }
        }
        
        `, (err) => {
        })
        // console.log(`{
        //     "DId": "SDI8_1",
        //     "TS": 1685677249000,
        //     "P": {
        //         "DI_1": ${shuju()},
        //         "DI_2":  ${shuju()},
        //         "DI_4":  ${shuju()},
        //         "EPim_S":  ${shuju()},
        //         "EPex_S":  ${shuju()},
        //         "EQim_S":  ${shuju()},
        //         "EQex_S":  ${shuju()},
        //         "EPim_P":  ${shuju()},
        //         "EPex_P":  ${shuju()},
        //         "EQim_P":  ${shuju()},
        //         "EQex_P":  ${shuju()},
        //         "EPim_V":  ${shuju()},
        //         "EPex_V":  ${shuju()},
        //         "EQim_V":  ${shuju()},
        //         "EQex_V":  ${shuju()},
        //         "EPim_F":  ${shuju()},
        //         "EPex_F":  ${shuju()},
        //         "EQim_F":  ${shuju()},
        //         "EQex_F":  ${shuju()},
        //         "EPim_T":  ${shuju()},
        //         "EPex_T":  ${shuju()},
        //         "EQim_T":  ${shuju()},
        //         "EQex_T":  ${shuju()},
        //         "F":  ${shujuDouble()},
        //         "UA":  ${shujuDouble()},
        //         "UB":  ${shujuDouble()},
        //         "UC":  ${shujuDouble()},
        //         "UAB":  ${shujuDouble()},
        //         "UBC":  ${shujuDouble()},
        //         "UCA":  ${shujuDouble()},
        //         "IA":  ${shujuDouble()},
        //         "IB":  ${shujuDouble()},
        //         "IC":  ${shujuDouble()},
        //         "PA":  ${shujuDouble()},
        //         "PB":  ${shujuDouble()},
        //         "PC":  ${shujuDouble()},
        //         "Psum":  ${shujuDouble()},
        //         "QA":  ${shujuDouble()},
        //         "QB":  ${shujuDouble()},
        //         "QC":  ${shujuDouble()},
        //         "Qsum":  ${shujuDouble()},
        //         "Ssum":  ${shujuDouble()},
        //         "PF":  ${shujuDouble()},
        //         "EU":  ${shujuDouble()},
        //         "EA":  ${shujuDouble()},
        //         "PD":  ${shujuDouble()},
        //         "QD":  ${shujuDouble()},
        //         "SD":  ${shujuDouble()},
        //         "THD_V":  ${shuju()},
        //         "THD_I":  ${shuju()},
        //         "LC_1":  ${shuju()},
        //         "LC_2":  ${shuju()},
        //         "LC_3":  ${shuju()},
        //         "LC_4":  ${shuju()},
        //         "LC_5":  ${shuju()},
        //         "LC_6":  ${shuju()}
        //     }
        // }`)
        // console.log('            ');
    }
}
aaa()
