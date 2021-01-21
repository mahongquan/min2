import React, { Component } from 'react';
// const webviews = require('./js/webviews.js')
// const PasswordManagers = require('./passwordManager/passwordManager.js')
export default class PasswordCapture extends Component {
  constructor() {
    super();
    this.state = {
      currentDomain:"",
      bar_hidden:true,
      description_textContent:"",
      passwordInput_type:"password",
      revealButton_classList:"i carbon:view",
      username:l('username'),
      password:l('password'),
    };
  }
  componentDidMount() {

    console.log("PasswordCapture componentDidMount==")
    // this.webviews = require('./js/webviews.js')
    // this.passwordManagers = require('./passwordManager/passwordManager.js')
    // webviews.bindIPC('password-form-filled', passwordCapture.handleRecieveCredentials)
  }
  hideCaptureBar=()=> {
    // webviews.adjustMargin([passwordCapture.barHeight * -1, 0, 0, 0])
    this.setState({bar_hidden:true,username:"",password:"",currentDomain:""})
  }
  togglePasswordVisibility=()=> {
    if (this.state.passwordInput_type === 'password') {
      this.setState({passwordInput_type:"text",revealButton_classList:"i carbon:view-off"})
    } else {
      this.setState({passwordInput_type:"password",revealButton_classList:"i carbon:view"})
    }
  }
  showCaptureBar=(username, password)=>{
    var description_textContent = l('passwordCaptureSavePassword').replace('%s', this.state.currentDomain)
    this.setState({bar_hidden:false
      ,description_textContent:description_textContent
      ,passwordInput_type:"password"
      ,revealButton_classList:"i carbon:view-off"
      ,username:username || ''
      ,password:password|| ''
      },()=>{
        // var barHeight= this.passwordCapture.bar.getBoundingClientRect().height;
        // this.webviews.adjustMargin([passwordCapture.barHeight, 0, 0, 0]);    
      });
  }
  seve_click=()=>{
//       if (passwordCapture.usernameInput.checkValidity() && passwordCapture.passwordInput.checkValidity()) {
//         PasswordManagers.getConfiguredPasswordManager().then(function (manager) {
//           manager.saveCredential(passwordCapture.currentDomain, passwordCapture.usernameInput.value, passwordCapture.passwordInput.value)

//           passwordCapture.hideCaptureBar()
//         })
//       }
  }
  handleRecieveCredentials= (tab, args, frameId)=> {
    var domain = args[0][0]
    if (domain.startsWith('www.')) {
      domain = domain.slice(4)
    }

    var username = args[0][1][0] || ''
    var password = args[0][2][0] || ''
      PasswordManagers.getConfiguredPasswordManager().then(function (manager) {
      if (!manager || !manager.saveCredential) {
        // the password can't be saved
        return
      }

      // check if this username/password combo is already saved
      manager.getSuggestions(domain).then(function (credentials) {
        var alreadyExists = credentials.some(cred => cred.username === username && cred.password === password)
        if (!alreadyExists) {
          if (!passwordCapture.bar.hidden) {
            passwordCapture.hideCaptureBar()
          }

          passwordCapture.currentDomain = domain
          passwordCapture.showCaptureBar(username, password)
        }
      })
    })
  }
  username_change=(event)=>{
    this.setState({username:event.target.value})
  }
  password_change=(event)=>{
    this.setState({password:event.target.value})
  }
  render() {
    return(  <div id="password-capture-bar" hidden={this.state.bar_hidden}>
    <span id="password-capture-description">{this.state.description_textContent}</span>
    <input id="password-capture-username" type="text" onChange={this.username_change} value={this.state.username} required />
    <span className="password-capture-section">
      <input id="password-capture-password" onChange={this.password_change} type={this.state.passwordInput_type} value={this.state.password} required/>
      <button  onClick={this.togglePasswordVisibility} id="password-capture-reveal-password" className={this.state.revealButton_classList}></button>
    </span>
    <span className="password-capture-section">
      <button id="password-capture-save" onClick={this.save_cliek} data-string="passwordCaptureSave"></button>
      <button id="password-capture-ignore" onClick={this.hideCaptureBar}  data-string="passwordCaptureDontSave"></button>
    </span>
  </div>)
  }
}
// const passwordCapture = {
//   bar: document.getElementById('password-capture-bar'),
//   description: document.getElementById('password-capture-description'),
//   usernameInput: document.getElementById('password-capture-username'),
//   passwordInput: document.getElementById('password-capture-password'),
//   revealButton: document.getElementById('password-capture-reveal-password'),
//   saveButton: document.getElementById('password-capture-save'),
//   closeButton: document.getElementById('password-capture-ignore'),
//   currentDomain: null,
//   barHeight: 0,
//   showCaptureBar: function (username, password) {
//     passwordCapture.description.textContent = l('passwordCaptureSavePassword').replace('%s', passwordCapture.currentDomain)
//     passwordCapture.bar.hidden = false

//     passwordCapture.passwordInput.type = 'password'
//     passwordCapture.revealButton.classList.add('carbon:view')
//     passwordCapture.revealButton.classList.remove('carbon:view-off')

//     passwordCapture.usernameInput.value = username || ''
//     passwordCapture.passwordInput.value = password || ''

//     passwordCapture.barHeight = passwordCapture.bar.getBoundingClientRect().height
//     webviews.adjustMargin([passwordCapture.barHeight, 0, 0, 0])
//   },
//   hideCaptureBar: function () {
//     webviews.adjustMargin([passwordCapture.barHeight * -1, 0, 0, 0])

//     passwordCapture.bar.hidden = true
//     passwordCapture.usernameInput.value = ''
//     passwordCapture.passwordInput.value = ''
//     passwordCapture.currentDomain = null
//   },
//   togglePasswordVisibility: function () {
//     if (passwordCapture.passwordInput.type === 'password') {
//       passwordCapture.passwordInput.type = 'text'
//       passwordCapture.revealButton.classList.remove('carbon:view')
//       passwordCapture.revealButton.classList.add('carbon:view-off')
//     } else {
//       passwordCapture.passwordInput.type = 'password'
//       passwordCapture.revealButton.classList.add('carbon:view')
//       passwordCapture.revealButton.classList.remove('carbon:view-off')
//     }
//   },
//   handleRecieveCredentials: function (tab, args, frameId) {
//     var domain = args[0][0]
//     if (domain.startsWith('www.')) {
//       domain = domain.slice(4)
//     }

//     var username = args[0][1][0] || ''
//     var password = args[0][2][0] || ''

//     PasswordManagers.getConfiguredPasswordManager().then(function (manager) {
//       if (!manager || !manager.saveCredential) {
//         // the password can't be saved
//         return
//       }

//       // check if this username/password combo is already saved
//       manager.getSuggestions(domain).then(function (credentials) {
//         var alreadyExists = credentials.some(cred => cred.username === username && cred.password === password)
//         if (!alreadyExists) {
//           if (!passwordCapture.bar.hidden) {
//             passwordCapture.hideCaptureBar()
//           }

//           passwordCapture.currentDomain = domain
//           passwordCapture.showCaptureBar(username, password)
//         }
//       })
//     })
//   },
//   initialize: function () {
//     passwordCapture.usernameInput.placeholder = l('username')
//     passwordCapture.passwordInput.placeholder = l('password')

//     webviews.bindIPC('password-form-filled', passwordCapture.handleRecieveCredentials)

//     passwordCapture.saveButton.addEventListener('click', function () {
//       if (passwordCapture.usernameInput.checkValidity() && passwordCapture.passwordInput.checkValidity()) {
//         PasswordManagers.getConfiguredPasswordManager().then(function (manager) {
//           manager.saveCredential(passwordCapture.currentDomain, passwordCapture.usernameInput.value, passwordCapture.passwordInput.value)

//           passwordCapture.hideCaptureBar()
//         })
//       }
//     })

//     passwordCapture.closeButton.addEventListener('click', passwordCapture.hideCaptureBar)
//     passwordCapture.revealButton.addEventListener('click', passwordCapture.togglePasswordVisibility)

//     // the bar can change height when the window is resized, so the webview needs to be resized in response
//     window.addEventListener('resize', function () {
//       if (!passwordCapture.bar.hidden) {
//         var oldHeight = passwordCapture.barHeight
//         passwordCapture.barHeight = passwordCapture.bar.getBoundingClientRect().height
//         webviews.adjustMargin([passwordCapture.barHeight - oldHeight, 0, 0, 0])
//       }
//     })
//   }
// }

// module.exports = passwordCapture
