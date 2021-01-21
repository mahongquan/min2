document.querySelectorAll('[data-string]').forEach(function (el) {
    var str = l(el.getAttribute('data-string'))
    if (typeof str === 'string') {
      el.textContent = str
    } else if (str && str.unsafeHTML && el.hasAttribute('data-allowHTML')) {
      el.innerHTML = str.unsafeHTML
    }
})
document.querySelectorAll('[data-label]').forEach(function (el) {
    var str = l(el.getAttribute('data-label'))
    if (typeof str === 'string') {
      el.setAttribute('title', str)
      el.setAttribute('aria-label', str)
    } else {
      throw new Error('invalid data-label value: ' + str)
    }
})

require('./tabState.js');
require('./navbar/tabActivity.js').initialize()
require('./navbar/tabColor.js').initialize()
require('./navbar/goBackButton.js').initialize()
require('./downloadManager.js').initialize()
require('./webviewMenu.js').initialize()
require('./contextMenu.js').initialize()
require('./menuRenderer.js').initialize()
require('./defaultKeybindings.js').initialize()
require('./pdfViewer.js').initialize()
require('./autofillSetup.js').initialize()
require('./passwordManager/passwordManager.js').initialize()
require('./passwordManager/passwordCapture.js').initialize()
require('./passwordManager/passwordViewer.js').initialize()
require('./util/theme.js').initialize()
require('./userscripts.js').initialize()

// default searchbar plugins

require('./searchbar/placesPlugin.js').initialize()
require('./searchbar/instantAnswerPlugin.js').initialize()
require('./searchbar/openTabsPlugin.js').initialize()
require('./searchbar/bangsPlugin.js').initialize()
require('./searchbar/searchSuggestionsPlugin.js').initialize()
require('./searchbar/placeSuggestionsPlugin.js').initialize()
require('./searchbar/updateNotifications.js').initialize()
require('./searchbar/restoreTaskPlugin.js').initialize()
require('./searchbar/bookmarkManager.js').initialize()
require('./searchbar/developmentModeNotification.js').initialize()
require('./windowControls.js');
require('./searchbar/customBangs.js');
require('./taskOverlay/taskOverlay.js');
require('./navbar/addTabButton.js');
require('./navbar/menuButton.js');
require('./sessionRestore.js');