'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class OtherwiseController extends TelegramBaseController {
  handle($) {
    $.sendMessage('Could not understand your message')
  }
}

module.exports = OtherwiseController
