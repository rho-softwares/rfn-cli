// Based on https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

export async function black(inputString) {
  console.log('\x1b[30m%s\x1b[0m', inputString);
  return true}

export async function red(inputString) {
  console.log('\x1b[31m%s\x1b[0m', inputString);
  return true}

export async function green(inputString) {
  console.log('\x1b[32m%s\x1b[0m', inputString);
  return true}

export async function yellow(inputString) {
  console.log('\x1b[33m%s\x1b[0m', inputString);
  return true}

export async function blue(inputString) {
  console.log('\x1b[34m%s\x1b[0m', inputString);
  return true}

export async function magenta(inputString) {
  console.log('\x1b[35m%s\x1b[0m', inputString);
  return true}

export async function cyan(inputString) {
  console.log('\x1b[36m%s\x1b[0m', inputString);
  return true}

export async function white(inputString) {
  console.log('\x1b[37m%s\x1b[0m', inputString);
  return true}