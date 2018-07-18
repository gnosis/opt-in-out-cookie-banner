import styles from './styles.css'

const APP_ID = process.env.APP_ID || 'UA-XXXXX-Y'
const GOOGLE_ANALYTICS_URL = 'https://www.google-analytics.com/analytics.js'

const bannerHTML = `
    <div class="${styles.cookieBar}">
        <span class="${styles.annotation}">We use cookies to give you the best experience and to help improve our website. Please read our <a href="${process.env.cookiesPolicyLink}" target="_blank" class="${styles.policyLink}">Cookie Policy</a>
            for more information. By clicking “Accept Cookies,” you agree to the storing of cookies on your device to
            enhance site navigation and analyze site usage.</span>
        <div class="${styles.buttonContainer}">
            <button id="acceptButton" class="${styles.button} ${styles.accept}">Accept Cookies</button>
            <button id="disableButton" class="${styles.button} ${styles.disable}">Disable Cookies</button>
        </div>
    </div>`

const banner = document.createElement('div')
banner.innerHTML = bannerHTML

const hideBanner = _ => {
  banner.firstChild.nextSibling.style.animationName = styles['float-up']
  setTimeout(_ => {
    banner.style.display = 'none'
  }, 1000)
}

const loadGA = _ => {
  const script = document.createElement('script')
  script.src = GOOGLE_ANALYTICS_URL
  script.type = 'text/javascript'
  script.async = true
  document.head.appendChild(script)

  script.onload = _ => {
    ga('create', APP_ID, 'auto')
    ga('set', 'anonymizeIp', true)
    ga('send', 'pageview')
  }
}

const getCookie = cname => {
  const match = document.cookie.match('(^|;) ?' + cname + '=([^;]*)(;|$)')
  return match ? match[2] : ''
}

const writeCookie = (key, value, days) => {
  const date = new Date();

  let expirationDate
  if (days) {
    // Get unix milliseconds at current time plus number of days
    expirationDate = new Date(date.setTime(+ date + (days * 86400000))) //24 * 60 * 60 * 1000
  }

  document.cookie = `${key}=${value};expires=${expirationDate ? expirationDate.toUTCString() : ''}; path=/`
};

const consentCookie = getCookie('consentCookie') // Initialise a variable to store the consent cookie

const getConsent = _ => {
  if (consentCookie == '') {
    document.body.appendChild(banner)

    const acceptButton = document.getElementById('acceptButton')
    const disableButton = document.getElementById('disableButton')

    acceptButton.onclick = _ => {
      loadGA()
      writeCookie('consentCookie', 'yes', process.env.acceptedCookieExpiration)
      hideBanner()
    }

    disableButton.onclick = _ => {
      writeCookie('consentCookie', 'no', process.env.disabledCookieExpiration)
      hideBanner()
    }
  } else if (consentCookie === 'yes') {
    loadGA()
  }
}

document.onload = getConsent()
