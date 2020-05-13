# HOW MUCH IS A FUCKING BITCOIN?
Wouldn't you like to know.

This is the repo for [this website.](https://howmuchisafuckingbitcoin.com)

## Develop
1. Clone the repo:

```
git clone git@github.com:irubnich/hmiafb.git
cd hmiafb
```

2. Install Netlify CLI and dependencies:

```
yarn global add netlify-cli
yarn install
```

3. Run the dev server:

```
netlify dev
```

4. Open [localhost:8888](http://localhost:8888)
5. Enjoy?

## Deploy

1. Build the site:

```
yarn build
```

2. Deploy the `build` folder to any static host your heart desires

## How it Works
1. A bunch of React components render the data-less skeleton of the page. Check out `src/components/layout.tsx` and `src/App.tsx` for that skeleton.
2. The `Price` component fires a request to get BTC exchange rates to a [Netlify Function](https://www.netlify.com/products/functions/). The function's source is in `functions/get-rates.js`.
3. The cloud function calls the [Coinbase API](https://developers.coinbase.com/api/v2) to get that sweet BTC data it so craves. This request proxying is needed because of browser-enforced [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) restrictions.
4. The response is parsed and the `Price` component's state is updated with the new exchange rate and more importantly a new expletive. It defaults to USD because America. 🇺🇸 🦅
5. The view is tied to the state so everything magically updates. Thanks React!

Steps 2-5 run every 30 seconds (you may have noticed that BTC fluctuates a lot) or whenever a new currency is selected.

---

Made by [Ilya](https://twitter.com/irubnich)
