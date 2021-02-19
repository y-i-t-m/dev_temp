const chalk = require('chalk');

function replaceRelativePath($string) {
  return $string.replace(/^\.\//, '');
}

function timeLog($from, $to) {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;
  console.log(`[${chalk.gray(currentTime)}] from :${chalk.green(replaceRelativePath($from))}`);
  console.log(`[${chalk.gray(currentTime)}] to   :${chalk.green(replaceRelativePath($to))}`)
}

module.exports = timeLog;