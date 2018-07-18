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

You can change colors of four elements: background of the banner (__--bgColor__), color of text (__--textColor__) and colors of the buttons (__--acceptButtonColor__ and __-disableButtonColor__).
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

## Environment configurations

Environment configuration can be changed by editing either `.env.development` (used for testing) or `.env.production` (used for final build)
Each environment configuration contains four entries:
```
APP_ID=''
acceptedCookieExpiration='10950'
disabledCookieExpiration='7'
cookiesPolicyLink='/cookiesPolicy.html'
```

`APP_ID` - Google Analytics Application identifier
`acceptedCookieExpiration` - Represents for how many __days__ user's preference for using cookies is saved. 
`disabledCookieExpiration` - Almost the same as `acceptedCookieExpiration` but for disabling cookies
`cookiesPolicyLink` - an absolute link to the cookies policy

