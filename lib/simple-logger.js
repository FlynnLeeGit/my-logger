const chalk = require('chalk')
const util = require('util')

class Logger {
  constructor({ scope = 'logger', theme = 'green' } = {}) {
    this.scope = scope
    this.theme = theme
  }
  get title() {
    return '[' + chalk[this.theme](this.scope) + ']'
  }
  _toJsonMsg(msgs) {
    return msgs.map(
      msg =>
        typeof msg === 'object' ? util.inspect(msg, false, null, true) : msg
    )
  }
  log(...msgs) {
    console.log(this.title, ...this._toJsonMsg(msgs))
  }
  info(...msgs) {
    console.log(this.title, chalk.blue('info'), ...this._toJsonMsg(msgs))
  }
  warn(...msgs) {
    console.log(this.title, chalk.yellow('warn'), ...this._toJsonMsg(msgs))
  }
  error(...msgs) {
    console.log(this.title, chalk.red('error'), ...this._toJsonMsg(msgs))
  }
  success(...msgs) {
    console.log(this.title, chalk.green('success'), ...this._toJsonMsg(msgs))
  }
}

module.exports = Logger
