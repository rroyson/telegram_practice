'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class OtherwiseController extends TelegramBaseController {
  handle($) {
    const user = $._update._message._from

    $.sendMessage(
      `We're sorry ${user._firstName}. We could not understand your request.  Try typing hello to get started.`
    )
  }
}

module.exports = OtherwiseController
