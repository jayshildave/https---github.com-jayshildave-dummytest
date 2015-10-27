/*
Janrain initializations and settings for JUMP.

For more information about these settings, see the following documents:

    http://developers.janrain.com/documentation/widgets/social-sign-in-widget/social-sign-in-widget-api/settings/
    http://developers.janrain.com/documentation/widgets/user-registration-widget/capture-widget-api/settings/
    http://developers.janrain.com/documentation/widgets/social-sharing-widget/sharing-widget-js-api/settings/
*/

// TODO: Need to figure out what this PSE_GLOBAL_JS is injecting
// 


(function() {
    if (typeof window.janrain !== 'object') window.janrain = {};
    window.janrain.settings = {};
    window.janrain.settings.capture = {};

    janrain.settings.packages = ['login', 'capture'];

    // --- Engage Widget -------------------------------------------------------

    janrain.settings.language = 'en';
    janrain.settings.appUrl = 'https://auth.mycokerewards.com';
    janrain.settings.tokenUrl = 'http://localhost/';
    janrain.settings.tokenAction = 'event';
    janrain.settings.borderColor = '#ffffff';
    janrain.settings.fontFamily = 'Helvetica, Lucida Grande, Verdana, sans-serif';
    janrain.settings.width = 300;
    janrain.settings.actionText = ' ';
    janrain.settings.format = 'two column';
    janrain.settings.providersPerPage = 4;
    janrain.settings.providers = ["facebook", "twitter", "instagram"];

    // --- Capture Widget ------------------------------------------------------

    janrain.settings.capture.flowName = 'ccna_default_v3_embedded';
    janrain.settings.capture.appId = 'up7d9ae7uazsymyds8er4w6r3h';
    janrain.settings.capture.captureServer = 'https://ccna-test.janraincapture.com';
    janrain.settings.capture.redirectUri = 'http://localhost/';
    janrain.settings.capture.clientId = '35xtjyb9t659h47727rhpcmzv3vqktpc';
    janrain.settings.capture.flowVersion = 'HEAD';
    janrain.settings.capture.registerFlow = 'socialRegistration';
    janrain.settings.capture.setProfileCookie = true;
    janrain.settings.capture.keepProfileCookieAfterLogout = true;
    janrain.settings.capture.modalCloseHtml = '<span class="janrain-icon-16 janrain-icon-ex2"></span>';
    janrain.settings.capture.noModalBorderInlineCss = true;
    janrain.settings.capture.responseType = 'token';
    janrain.settings.capture.returnExperienceUserData = ['displayName'];
    janrain.settings.capture.hasSettings = true;
    janrain.settings.capture.transactionTimeout = 10000;
    janrain.settings.capture.recaptchaPublicKey = '6LeVKb4SAAAAAGv-hg5i6gtiOV4XrLuCDsJOnYoP';

    // --- Mobile WebView ------------------------------------------------------

    //janrain.settings.capture.redirectFlow = true;
    //janrain.settings.popup = false;
    //janrain.settings.tokenAction = 'url';
    //janrain.settings.capture.registerFlow = 'socialMobileRegistration'

    // --- Federate  -----------------------------------------------------------

    //janrain.settings.capture.federate = true;
    //janrain.settings.capture.federateServer = '';
    //janrain.settings.capture.federateXdReceiver = '';
    //janrain.settings.capture.federateLogoutUri = '';
    //janrain.settings.capture.federateLogoutCallback = function() {};
    //janrain.settings.capture.federateEnableSafari = false;

    // --- Backplane -----------------------------------------------------------

    //janrain.settings.capture.backplane = true;
    //janrain.settings.capture.backplaneBusName = '';
    //janrain.settings.capture.backplaneVersion = 2;
    //janrain.settings.capture.backplaneBlock = 20;

    // --- Share widget --------------------------------------------------------

    //janrain.settings.share = {};
    //janrain.settings.packages.push('share');
    //janrain.settings.share.message = "";
    //janrain.settings.share.title = "";
    //janrain.settings.share.url = "";
    //janrain.settings.share.description = "";

    // --- Load URLs -----------------------------------------------------------

    var httpsLoadUrl = "https://rpxnow.com/load/ccna-dev";
    var httpLoadUrl = "http://widgets-cdn.rpxnow.com/load/ccna-dev";

    // --- DO NOT EDIT BELOW THIS LINE -----------------------------------------

    function isReady() { janrain.ready = true; };
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", isReady, false);
    } else {
        window.attachEvent('onload', isReady);
    }

    var e = document.createElement('script');
    e.type = 'text/javascript';
    e.id = 'janrainAuthWidget';
    if (document.location.protocol === 'https:') {
        e.src = httpsLoadUrl;
    } else {
        e.src = httpLoadUrl;
    }
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
})();

function janrainReturnExperience() {
	var span = document.getElementById('traditionalWelcomeName');
	var name = janrain.capture.ui.getReturnExperienceData("displayName");
	if (span && name) {
		span.innerHTML = "Welcome back, " + name + "!";
	}
}

function passwordValidation(name, value, validation) {
    return /(?=^.{8,21}$)(?=(?:.*?\d){1})(?=.*[A-Z]{1})(?!.*\s)[0-9a-zA-Z!@#$%^&*()<>_-]*$/.test(value);
}
function emailValidation(name, value, validation) {
    return /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value);
}
function addressValidation(name, value, validation) {
    return /^(?!p\.?o\.?\sbox|post\soffice|P\.O\. BOX|P\.O\.| PO\.|POBOX|box| PO |p\.o\. box|p\.o\.| p\.o\. | p\.o\.| po\.| p\.o | p\.o| bin | po | ^po| bin\.| Bin | BIN\.| BIN | ^BIN|pobox";\"(^BOX[\s|\.]*.*)|(^BIN[\s|\.]*.*)|(.*P[\s|\.|,]*(OST)?[\s|\.]*O[\s|\.|,]*((FFICE)|(FICE))?[\s|\.]*((BOX)|(BIN))[\s|\.]*.*)).*$/.test(value);
}


