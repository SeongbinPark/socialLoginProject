// response time log
'use strict';
import moment from 'moment-timezone';

function resSend(res, data) {
  if (data.error) { timeLog('    error=' + JSON.stringify(data.error)) }
  res.send(data)
  timeLog('    ==> res=' + JSON.stringify(data))
}

function consoleBar() {
  console.log('-------------------------------------------------------------------');
}

function timeLog(log) {
  const time_current = moment().tz('Asia/Seoul').format('YYYY-MM-DD H:mm:ss');            // 콘솔에 시간
  console.log('[KST: ' + time_current + '] ' + log);
}


export { resSend, consoleBar, timeLog };
