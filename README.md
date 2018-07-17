# opt-in-out-cookie-banner
A script that shows a banner asking the user if he wants to enable cookies

## Installing dependencies
yarn:

```shell
yarn add
```

or with npm:

```shell
npm i
```

## Running local test environment

Start local server on http://localhost:1234 by running `dev` command:

yarn:

```shell
yarn dev
```

npm:

```shell
npm run dev
```

This command will run a server with a blank html page and injected script

## Customization

### CSS Styles

`src/styles.css`:

```css
:root {
  --bg-color: #463f3f;
  --text-color: #ffffff;
  --acceptButtonColor: #23d160;
  --disableButtonColor: #ff3860;
}
```