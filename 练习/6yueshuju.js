
let a = "INSERT INTO equ_data_hour_2023(`ID_`, `DEVICE_ID`, `TIME_LOGO`, `DATA_DATE`, `TYPE`, `VALUE`, `CREATE_BY_`, `CREATE_TIME_`, `CREATE_ORG_ID_`, `UPDATE_BY_`, `UPDATE_TIME_`, `TENANT_ID_`, `IS_DELE_`) "
function aaa(params) {
    //一天24小时 月份自己去改
    let kshi=11 //几号开始
    let jihao = 31 //到几号
    for (let index = kshi; index <= jihao; index++) {
        for (let j = 0; j <= 23; j++) {
            let shuju = parseInt(Math.random() * (600 - 100) + 100);
            console.log(a + `VALUES (uuid(), 'SDI8_1', ${j}, '202307${index < 10 ? '0' + index : index}', '0', ${shuju}, NULL, '2023-05-31 16:34:39', NULL, NULL, NULL, '-1', '0');`);
        }
        console.log('             ');
    }
}
aaa('ss')
