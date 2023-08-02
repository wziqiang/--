const fs = require('fs')
fs.writeFile('./testDir/test.json','', (err)=>{  
    if(err){  
        console.log(err)  
        return  
    }  
    console.log('创建写入文件成功')  
})

function shuju() {
    // return parseInt(Math.random() * (200 - 1) + 0);
    return (Math.random() * (200 - 1) + 0).toFixed(1)
}
function aaa() {
    for (let index = 0; index <= 100; index++) {
        fs.appendFile('./testDir/test.json', `{
            "DId":"SDP9041_1",
            "TS":1685677249000,
            "P":{
            "F": ${shuju()},
            "IA": ${shuju()},
            "IB": ${shuju()},
            "IC": ${shuju()},
            "UAB": ${shuju()},
            "UBC": ${shuju()},
            "UCA": ${shuju()},
            "Psum": ${shuju()},
            "Qsum": ${shuju()},
            "Ssum": ${shuju()},
            "UA": ${shuju()},
            "UB": ${shuju()},
            "UC": ${shuju()},
            "3Uo": ${shuju()},
            "Ux": ${shuju()}
            }
     }
     
     `, (err) => {
        })
        //     console.log(`{
        //         "DId":"SDP9041_1",
        //         "TS":1685677249000,
        //         "P":{
        //         "F": ${shuju()},
        //         "IA": ${shuju()},
        //         "IB": ${shuju()},
        //         "IC": ${shuju()},
        //         "UAB": ${shuju()},
        //         "UBC": ${shuju()},
        //         "UCA": ${shuju()},
        //         "Psum": ${shuju()},
        //         "Qsum": ${shuju()},
        //         "Ssum": ${shuju()},
        //         "UA": ${shuju()},
        //         "UB": ${shuju()},
        //         "UC": ${shuju()},
        //         "3Uo": ${shuju()},
        //         "Ux": ${shuju()}
        //         }
        //  }`)
    }
}

aaa()
console.log('完成');



