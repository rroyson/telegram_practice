'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class PingController extends TelegramBaseController {
  /**
     * @param {Scope} $
     */
  greetingHandler($) {
    const user = $._update._message._from
    $.sendMessage(
      `Hello ${user._firstName}, Thank you for contacting Citibot.  To get started type pothole.`
    )
  }
  potholeHandler($) {
    const user = $._update._message._from
    $.sendMessage(
      `thank you ${user._firstName}, please enter the address of pothole`
    )
  }

  successHandler($) {
    const message = $._update._message._text
    $.sendMessage(
      `Your request for pothole at ${message} repair has been submited`
    )
  }

  get routes() {
    return {
      greetingCommand: 'greetingHandler',
      potholeCommand: 'potholeHandler',
      successCommand: 'successHandler'
    }
  }
}

module.exports = PingController
