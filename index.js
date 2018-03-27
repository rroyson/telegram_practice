'use strict'

require('dotenv').config()

const { API_TOKEN } = process.env

const Telegram = require('telegram-node-bot')
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram(API_TOKEN)
const PingController = require('./controllers/ping')
const OtherwiseController = require('./controllers/otherwise')

tg.router
  .when(new TextCommand('hello', 'greetingCommand'), new PingController())
  .when(new TextCommand('pothole', 'potholeCommand'), new PingController())
  .when(
    new TextCommand('1445 downwood place', 'successCommand'),
    new PingController()
  )
  .otherwise(new OtherwiseController())
