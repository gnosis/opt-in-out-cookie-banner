(function () {function h(a){return a&&a.__esModule?{d:a.default}:{d:a}}var g={};g={accept:"_accept_dly46_56",annotation:"_annotation_dly46_26",button:"_button_dly46_32",buttonContainer:"_buttonContainer_dly46_60",cookieBar:"_cookieBar_dly46_8",disable:"_disable_dly46_52","float-down":"_float-down_dly46_1","float-up":"_float-up_dly46_1",policyLink:"_policyLink_dly46_66"};var a=h(g);var k="UA-XXXXX-Y",f="https://www.google-analytics.com/analytics.js",e="\n    <div class=\""+a.d.cookieBar+"\">\n        <span class=\""+a.d.annotation+"\">We use cookies to give you the best experience and to help improve our website. Please read our <a href=\"/cookiesPolicy.html\" target=\"_blank\" class=\""+a.d.policyLink+"\">Cookie Policy</a>\n            for more information. By clicking \u201CAccept Cookies,\u201D you agree to the storing of cookies on your device to\n            enhance site navigation and analyze site usage.</span>\n        <div class=\""+a.d.buttonContainer+"\">\n            <button id=\"acceptButton\" class=\""+a.d.button+" "+a.d.accept+"\">Accept Cookies</button>\n            <button id=\"disableButton\" class=\""+a.d.button+" "+a.d.disable+"\">Disable Cookies</button>\n        </div>\n    </div>",b=document.createElement("div");b.innerHTML=e;var c=function(o){b.firstChild.nextSibling.style.animationName=a.d["float-up"],setTimeout(function(o){b.style.display="none"},1e3)},i=function(o){var e=document.createElement("script");e.src=f,e.type="text/javascript",document.head.appendChild(e),e.onload=function(o){ga("create",k,"auto"),ga("send","pageview")}},j=function(o){var e=document.cookie.match("(^|;) ?"+o+"=([^;]*)(;|$)");return e?e[2]:""},d=function(o,e,t){var n=new Date,a=void 0;t&&(a=new Date(n.setTime(+n+864e5*t))),document.cookie=o+"="+e+";expires="+(a?a.toUTCString():"")+"; path=/"},l=j("consentCookie"),m=function(o){if(""==l){document.body.appendChild(b);var e=document.getElementById("acceptButton"),t=document.getElementById("disableButton");e.onclick=function(o){i(),d("consentCookie","yes","10950"),c()},t.onclick=function(o){d("consentCookie","no","7"),c()}}};document.onload=m();})();