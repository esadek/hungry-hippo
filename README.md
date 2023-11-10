# Hungry Hippo

Hungry Hippo is a [Deno](https://deno.com/) HTTP server that accepts JSON payloads via POST requests and appends the received JSON to a [JSON Lines](https://jsonlines.org/) file. [ngrok](https://ngrok.com/) is used to expose the server to the internet. Hungry Hippo was created to be used with the [RudderStack webhooks destination](https://www.rudderstack.com/docs/destinations/webhooks/), but can be used to consume webhooks from other providers.

![Diagram](diagram.png)

## Prerequisites

Install Deno and ngrok. [Homebrew](https://brew.sh/) is recommended for macOS:

```bash
brew install deno
brew install --cask ngrok
```

## Usage

1. Run HTTP server:

```bash
deno task run
```

2. Start HTTP tunnel:

```bash
ngrok http 8000
```

## License

[MIT](LICENSE)
