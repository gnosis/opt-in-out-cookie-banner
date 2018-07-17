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

<<<<<<< HEAD
You can change colors of four elements: background of the banner (*--bgColor*), color of text (*--textColor*) and colors of the buttons (*--acceptButtonColor* and *--disableButtonColor*).
=======
You can change colors of four elements: background of the banner (--bgColor), color of text (--textColor) and colors of the buttons (--acceptButtonColor and --disableButtonColor).
>>>>>>> f7298a72535a8e01552bd81082629c95db71bb72
To do this, go to and change these lines of code.

`src/styles.css`:
```css
:root {
  --bgColor: #463f3f;
  --textColor: #ffffff;
  --acceptButtonColor: #23d160;
  --disableButtonColor: #ff3860;
}
```