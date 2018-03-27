# Practice Telegram Chatbot

### Currently uses two controllers
- `ping` returns 'pong' to Telegram
- `otherwise` catch all other messages and handles with error

### Setup

- Follow account setup on the Telegram website:
https://core.telegram.org/api
- Once you have created you account and obtained your api key, follow steps to setup bot in Telegram app.

- Then from the command line:
```
$ git clone https://github.com/rroyson/telegram_practice.git
$ cd telegram_practice
$ npm install
$ npm start
```

- You should now be able to send `ping` to your bot and recieve a `pong` as a response.
- Anything else you send should result in a response of `Could not understand your message`
