
let a = "INSERT INTO `equ_data_day_2023`(`ID_`, `DEVICE_ID`, `DATA_DATE`, `TYPE`, `VALUE`, `CREATE_BY_`, `CREATE_TIME_`, `CREATE_ORG_ID_`, `UPDATE_BY_`, `UPDATE_TIME_`, `TENANT_ID_`, `IS_DELE_`) "
function aaa(params) {
    //尖峰平谷 月份自己去改
    let kshi=11 //几号开始
    let jihao = 31 //到几号
    for (let index = kshi; index <= jihao; index++) {
        let list = generateRandom()
        for (let j = 1; j < 6; j++) {
            let shuju = list[j - 1]
            console.log(a + `VALUES (uuid(), 'SDI8_1', '202307${index < 10 ? '0' + index : index}', ${j - 1}, ${shuju}, NULL, '2023-06-01 11:18:48', NULL, NULL, NULL, '-1', '0');`);
        }
        console.log('             ');
    }
}


// INSERT INTO `equ_data_day_2023`(`ID_`, `DEVICE_ID`, `DATA_DATE`, `TYPE`, `VALUE`, `CREATE_BY_`, `CREATE_TIME_`, `CREATE_ORG_ID_`, `UPDATE_BY_`, `UPDATE_TIME_`, `TENANT_ID_`, `IS_DELE_`) VALUES (uuid(), 'SDI8_1', '20230501', '0', 5500, NULL, '2023-06-01 11:18:48', NULL, NULL, NULL, '-1', '0');
// INSERT INTO `equ_data_day_2023`(`ID_`, `DEVICE_ID`, `DATA_DATE`, `TYPE`, `VALUE`, `CREATE_BY_`, `CREATE_TIME_`, `CREATE_ORG_ID_`, `UPDATE_BY_`, `UPDATE_TIME_`, `TENANT_ID_`, `IS_DELE_`) VALUES (uuid(), 'SDI8_1', '20230501', '1', 2000, NULL, '2023-06-01 11:18:48', NULL, NULL, NULL, '-1', '0');
// INSERT INTO `equ_data_day_2023`(`ID_`, `DEVICE_ID`, `DATA_DATE`, `TYPE`, `VALUE`, `CREATE_BY_`, `CREATE_TIME_`, `CREATE_ORG_ID_`, `UPDATE_BY_`, `UPDATE_TIME_`, `TENANT_ID_`, `IS_DELE_`) VALUES (uuid(), 'SDI8_1', '20230501', '2', 2000, '2023-06-01 11:18:48', NULL, NULL, NULL, '-1', '0');
// INSERT INTO `equ_data_day_2023`(`ID_`, `DEVICE_ID`, `DATA_DATE`, `TYPE`, `VALUE`, `CREATE_BY_`, `CREATE_TIME_`, `CREATE_ORG_ID_`, `UPDATE_BY_`, `UPDATE_TIME_`, `TENANT_ID_`, `IS_DELE_`) VALUES (uuid(), 'SDI8_1', '20230501', '3', 100, NULL, '2023-06-01 11:18:48', NULL, NULL, NULL, '-1', '0');
// INSERT INTO `equ_data_day_2023`(`ID_`, `DEVICE_ID`, `DATA_DATE`, `TYPE`, `VALUE`, `CREATE_BY_`, `CREATE_TIME_`, `CREATE_ORG_ID_`, `UPDATE_BY_`, `UPDATE_TIME_`, `TENANT_ID_`, `IS_DELE_`) VALUES (uuid(), 'SDI8_1', '20230501', '4', 500, NULL, '2023-06-01 11:18:49', NULL, NULL, NULL, '-1', '0');
aaa('ss')

function generateRandom() {
    var array = new Array();
    for (var i = 0; i < 4; i++) {
        var rand = parseInt(Math.random() * (3000 - 200) + 1000);
        array.push(rand);
    }
    let sun = array.reduce(function (total, value) {
        return total + value;
    }, 0)
    array.unshift(sun)
    return array
}

