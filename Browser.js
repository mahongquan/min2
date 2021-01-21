import React, { Component } from 'react';
import DlgAbout from './DlgAbout';
import DlgSettings from './DlgSettings';
import DlgFail from './DlgFail';
import DlgDownload from './DlgDownload'
import PasswordCapture from './PasswordCapture';
const path = window.require('path');
const fs = window.require('fs');
const electron = window.require('electron');
const { ipcRenderer } = window.require('electron'); //
class Browser extends Component {
  constructor() {
    super();
    this.state = {
      show_download:false,
      download_info:null,
      show_findpage:false,
      findinpage_input: '',
      show_about: false,
      filename_input:"file://"+ __dirname + '/../test/index.html',
      filename: "file://"+__dirname + '/../test/index.html',
      canGoBack: false,
      canGoForward: false,
      failLoad: false,
      favicon: null,
      title: '',
      bookmark: '',
      show_fail: false,
      errorCode: null,
      errorDesc: null,
      validatedURL: null,
    };
  }
  componentDidMount() {
    console.log("Browser componentDidMount-----------------------")
    require('./js/default.js');
  }
  findinpage_input_change = e => {
    this.setState({ findinpage_input: e.target.value });
    if (e.target.value != '') {
      myglobal.webviews.get(tabId).findInPage(e.target.value);
    }
  };
  componentWillUnmount() {}
  onPageURLChange = url => {
    console.log(url);
    this.setState({ filename_input: url }, this.show_bookmark);
    this.show_bookmark();
  };
  onFail = (errorCode, errorDesc, validatedURL) => {
    this.hide_view();
    this.setState({
      show_fail: true,
      errorCode: errorCode,
      errorDesc: errorDesc,
      validatedURL: validatedURL,
    });
  };
  show_bookmark = () => {
    let currentURL = this.state.filename_input;
    db.places
      .where('url')
      .equals(currentURL)
      .first(item => {
        if (item && item.isBookmarked) {
          this.setState({ bookmark: '*' });
        } else {
          this.setState({ bookmark: '' });
        }
      });
  };
  hide_view = () => {
    electron.ipcRenderer.send('setBounds', {
      id: tabId,
      bounds: { x: 0, y: 0, width: 0, height: 0 },
    });
  };
  show_view = () => {
    electron.ipcRenderer.send('setBounds', {
      id: tabId,
      bounds: myglobal.webviews.getViewBounds(),
    });
  };
  updateFavicon = favicon => {
    this.setState({ favicon: favicon });
  };
  updateTitle = title => {
    this.setState({ title: title });
  };
  updateBackButton = () => {
    // myglobal.webviews.callAsync(tabId, 'canGoBack', null, canGoBack => {
    //   this.setState({ canGoBack: canGoBack });
    // });
    // myglobal.webviews.callAsync(tabId, 'canGoForward', null, canGoForward => {
    //   this.setState({ canGoForward: canGoForward });
    // });
  };
  filename_change = e => {
    this.setState({ filename_input: e.target.value });
  };
  download_click=()=>{
    this.hide_view();
    this.setState({ show_download: true });
  }
  about_click = () => {
    this.hide_view();
    this.setState({ show_about: true });
  };
  go_click = () => {
    console.log('go');
    myglobal.webviews.update(tabId, this.state.filename_input);

  };
  bookmark_click = () => {
    const url = this.state.filename_input;

    db.places
      .where('url')
      .equals(url)
      .first(item => {
        if (item && item.isBookmarked) {
          this.updateBookmarkState(url, false);
        } else {
          this.updateBookmarkState(url, true);
        }
      });
  };
  updateBookmarkState = (url, shouldBeBookmarked) => {
    db.transaction('rw', db.places, () => {
      db.places
        .where('url')
        .equals(url)
        .first(item => {
          if (!item) {
            item = {
              url: url,
              title: url,
              color: '',
              visitCount: 1,
              lastVisit: Date.now(),
              pageHTML: '',
              extractedText: '',
              searchIndex: [],
              metadata: {},
            };
          }
          item.isBookmarked = shouldBeBookmarked;

          db.places.put(item);
          if (shouldBeBookmarked) {
            this.setState({ bookmark: '*' });
          } else {
            this.setState({ bookmark: '' });
          }
        });
    });
  };
  show_menu = e => {
    console.log(e);
    var navbar = e.target;
    var navbarRect = navbar.getBoundingClientRect();

    electron.ipcRenderer.send('showSecondaryMenu', {
      x: Math.round(navbarRect.left),
      y: Math.round(navbarRect.bottom),
      async: true,
    });
  };
  render() {
    let gobackbutton, goforwardbutton;
    if (this.state.canGoBack) {
      gobackbutton = (
        <button
          onClick={() => {
            myglobal.webviews.get(tabId).goBack();
          }}
        >
          back
        </button>
      );
    } else {
      gobackbutton = <button disabled>back</button>;
    }
    if (this.state.canGoForward) {
      goforwardbutton = (
        <button
          onClick={() => {
            myglobal.webviews.get(tabId).goForward();
          }}
        >
          forward
        </button>
      );
    } else {
      goforwardbutton = <button disabled>forward</button>;
    }
    return (
      <React.Fragment>
        <div className="window-drag-area"></div>

  <div className="windows-caption-buttons">
    <div className="element caption-minimise">
      <svg>
        <line x1="1" y1="5.5" x2="11" y2="5.5" />
      </svg>
    </div>
    <div className="element caption-maximize">
      <svg>
        <rect x="1.5" y="1.5" width="9" height="9" />
      </svg>
    </div>
    <div className="element caption-restore">
      <svg>
        <rect x="1.5" y="3.5" width="7" height="7" />
        <polyline points="3.5,3.5 3.5,1.5 10.5,1.5 10.5,8.5 8.5,8.5" />
      </svg>
    </div>
    <div className="element caption-close">
      <svg>
        <path d="M1,1 l 10,10 M1,11 l 10,-10" />
      </svg>
    </div>
  </div>

  <button id="linux-control-buttons" className="theme-text-color">
    <svg version="1.1" fill="none" stroke="none" strokeLinecap="square" strokeMiterlimit="10"
      >
      <g id="minimize-button">
        <rect width="24" height="24" fill="transparent"></rect>
        <path className="button-background"
          d="m0.5826226 9.868774l0 0c0 -5.24453 4.251532 -9.496062 9.496063 -9.496062l0 0c2.5185127 0 4.933873 1.0004752 6.714731 2.7813323c1.7808571 1.7808576 2.781332 4.196218 2.781332 6.7147303l0 0c0 5.2445316 -4.2515326 9.496063 -9.496063 9.496063l0 0c-5.244531 0 -9.496063 -4.2515316 -9.496063 -9.496063z"
          fillRule="evenodd" />
        <path stroke="currentColor" strokeWidth="2.0" strokeLinejoin="round" strokeLinecap="butt"
          d="m6.7086616 12.519685l6.7401576 -0.031496048" fillRule="evenodd" />
      </g>
      <g id="maximize-button">
        <rect width="24" height="24" x="24" fill="transparent"></rect>
        <path className="button-background"
          d="m27.85034 9.868774l0 0c0 -5.24453 4.2515316 -9.496062 9.496061 -9.496062l0 0c2.5185127 0 4.933876 1.0004752 6.714733 2.7813323c1.7808571 1.7808576 2.78133 4.196218 2.78133 6.7147303l0 0c0 5.2445316 -4.2515297 9.496063 -9.496063 9.496063l0 0c-5.2445297 0 -9.496061 -4.2515316 -9.496061 -9.496063z"
          fillRule="evenodd" />
        <path stroke="currentColor" strokeWidth="2.0" strokeLinejoin="round" strokeLinecap="butt"
          d="m34.16273 6.717848l6.3622017 0l0 6.2992125l-6.3622017 0z" fillRule="evenodd" />
      </g>
      <g id="close-button">
        <rect width="24" height="24" x="48" fill="transparent"></rect>
        <path className="button-background"
          d="m55.118057 9.496072l0 0c0 -5.244531 4.2515297 -9.496063 9.496063 -9.496063l0 0c2.518509 0 4.9338684 1.0004753 6.7147293 2.7813325c1.7808533 1.7808573 2.781334 4.1962185 2.781334 6.714731l0 0c0 5.2445307 -4.2515335 9.496062 -9.496063 9.496062l0 0c-5.2445335 0 -9.496063 -4.2515316 -9.496063 -9.496062z"
          fillRule="evenodd" />
        <path stroke="currentColor" strokeWidth="2.0" strokeLinejoin="round" strokeLinecap="butt"
          d="m61.26077 6.1103663l6.740162 6.7716537" fillRule="evenodd" />
        <path stroke="currentColor" strokeWidth="2.0" strokeLinejoin="round" strokeLinecap="butt"
          d="m68.01668 6.1261144l-6.771656 6.7401576" fillRule="evenodd" />
      </g>
    </svg>


  </button>

  <div id="navbar" className="theme-background-color theme-text-color windowDragHandle" tabIndex="-1">
    <button id="menu-button" className="navbar-action-button i carbon:overflow-menu-vertical" data-label="openMenu"
      tabIndex="-1">
    </button>
    <button id="back-button" hidden className="navbar-action-button i carbon:chevron-left" data-label="goBack"
      tabIndex="-1">
    </button>
    <div id="tabs">
      <div id="tab-editor" hidden>
        <input id="tab-editor-input" className="mousetrap" spellCheck="false"/>
      </div>
      <div id="tabs-inner" role="tablist"></div>
    </div>
    <div className="navbar-right-actions">
      <button id="add-tab-button" className="navbar-action-button i carbon:add" data-label="newTabAction" tabIndex="-1">
      </button>
    </div>
  </div>

  <button id="switch-task-button" className="navbar-action-button theme-text-color windowDragHandle i"
    data-label="viewTasks" tabIndex="-1">
    <svg version="1.1" viewBox="0.0 0.0 26.0 26.0" fill="none" stroke="none" strokeLinecap="square"
      strokeMiterlimit="10" >
      <g clipPath="url(#p.0)">
        <path fill="currentColor" d="m0 0l32 0l0 4l-32 0z" fillRule="evenodd" />
        <path fill="currentColor" d="m0 11l32 0l0 4l-32 0z" fillRule="evenodd" />
        <path fill="currentColor" d="m0 22l32 0l0 4l-32 0z" fillRule="evenodd" />
      </g>
    </svg>
  </button>

  <div id="searchbar" className="theme-background-color theme-text-color">
    <div className="top-answer-area"></div>
  </div>

  <div id="overlay"></div>

  <div id="webviews">
    <div id="leftArrowContainer" className="arrow-indicator">
      <i id="leftArrow" className="i carbon:chevron-left"></i>
    </div>
    <div id="rightArrowContainer" className="arrow-indicator">
      <i id="rightArrow" className="i carbon:chevron-right"></i>
    </div>
    <img id="webview-placeholder" hidden aria-hidden="true" />
  </div>


  <div id="findinpage-bar" hidden className="theme-background-color theme-text-color">
    <input id="findinpage-input" className="mousetrap" />
    <span id="findinpage-count" className="inline-text"></span>
    <div className="divider"></div>
    <button id="findinpage-previous-match">
      <i className="i carbon:chevron-up navbar-action-button"></i>
    </button>
    <button id="findinpage-next-match">
      <i className="i carbon:chevron-down navbar-action-button"></i>
    </button>
    <div className="divider"></div>
    <button id="findinpage-end">
      <i className="i carbon:close navbar-action-button"></i>
    </button>
  </div>

  <div id="task-overlay" className="" hidden>
    <div className="simulated-navbar windowDragHandle" id="task-overlay-navbar">
    </div>
    <div id="task-area"></div>
    <button id="add-task">
      <i className="i carbon:new-tab"></i>
      <span></span>
    </button>
  </div>

  <div id="download-bar" hidden>
    <div id="download-container" role="list"></div>
    <button id="download-close-button" className="i carbon:close"></button>
  </div>

  <div className="modal" id="manager-setup-dialog" hidden>
    <h3 className="modal-title" id="manager-setup-heading"></h3>
    <button id="manager-setup-close" className="modal-close-button i carbon:close"></button>

    <div id="manager-setup-instructions-primary">
      <div className="light-fade" data-string="passwordManagerSetupStep1" data-allowhtml></div>
      <div className="spacer"></div>
      <div className="light-fade" data-string="passwordManagerSetupStep2" data-allowhtml></div>
    </div>

    <div id="manager-setup-instructions-secondary">
      <div className="light-fade" data-string="passwordManagerInstallerSetup" data-allowhtml></div>
    </div>
    
    <div className="spacer"></div>

    <div id="manager-setup-drop-box" className="drag-and-drop-box" data-string="passwordManagerSetupDragBox">
    </div>

    <div className="spacer"></div>
    <div className="spacer"></div>

    <div className="buttons">
      <input type="button" id="manager-setup-disable" data-value="disableAutofill" />
    </div>

  </div>
  <PasswordCapture />
  <div id="password-viewer" className="modal" hidden>
    <h2 className="modal-title" data-string="savedPasswordsHeading"></h2>
    <button className="modal-close-button i carbon:close"></button>
    <div id="password-viewer-empty" data-string="savedPasswordsEmpty" hidden></div>
    <div id="password-viewer-list"></div>
  </div>

      </React.Fragment>
    );
  }
}

export default Browser;
