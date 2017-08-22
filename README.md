# coinsss

Post latest Bitcoin --> USD rate in a Slack Channel with Webtask

## How to run

1. Get a webtask account at [webtask.io](https://webtask.io/)
2. Get the wt CLI. You can do that [here](https://webtask.io/cli) or run `npm i wt-cli -g` on your computer.
3. Initialize webtask with your email address `wt init your-email-address`
4. Add an Incoming WebHook to your Slack. You can do that [here](https://anthillhq.slack.com/apps/A0F7XDUAZ-incoming-webhooks) and copy the WebHook URL.
5. Clone this GitHub repo `https://github.com/yomete/coinsss`
6. From the root of the project directory, run the command `wt create hello.js`. Webtask should generate a URL for you
7. Append the WebHook url to the URL Webtask generated for you with a param of `url` and run in a browser/Postman/cURL. Like this `https://wt-49e360526fd38d8135f0e748efeccb5c-0.run.webtask.io/webtask?url=https://hooks.slack.com/services/xxxx/xxxx/xxxxxx`
