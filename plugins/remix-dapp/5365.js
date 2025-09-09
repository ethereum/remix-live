"use strict";(self["webpackChunkremix_dapp"]=self["webpackChunkremix_dapp"]||[]).push([[5365],{55365:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{AppKitAccountButton:()=>AppKitAccountButton,AppKitButton:()=>AppKitButton,AppKitConnectButton:()=>AppKitConnectButton,AppKitNetworkButton:()=>AppKitNetworkButton,W3mAccountButton:()=>W3mAccountButton,W3mAccountSettingsView:()=>W3mAccountSettingsView,W3mAccountView:()=>W3mAccountView,W3mAllWalletsView:()=>W3mAllWalletsView,W3mButton:()=>W3mButton,W3mChooseAccountNameView:()=>W3mChooseAccountNameView,W3mConnectButton:()=>W3mConnectButton,W3mConnectView:()=>W3mConnectView,W3mConnectWalletsView:()=>W3mConnectWalletsView,W3mConnectingExternalView:()=>W3mConnectingExternalView,W3mConnectingMultiChainView:()=>W3mConnectingMultiChainView,W3mConnectingWcBasicView:()=>W3mConnectingWcBasicView,W3mConnectingWcView:()=>W3mConnectingWcView,W3mDownloadsView:()=>W3mDownloadsView,W3mGetWalletView:()=>W3mGetWalletView,W3mNetworkButton:()=>W3mNetworkButton,W3mNetworkSwitchView:()=>W3mNetworkSwitchView,W3mNetworksView:()=>W3mNetworksView,W3mProfileView:()=>W3mProfileView,W3mRouter:()=>w3m_router.J,W3mSIWXSignMessageView:()=>W3mSIWXSignMessageView,W3mSwitchActiveChainView:()=>W3mSwitchActiveChainView,W3mSwitchAddressView:()=>W3mSwitchAddressView,W3mUnsupportedChainView:()=>W3mUnsupportedChainView,W3mWalletCompatibleNetworksView:()=>W3mWalletCompatibleNetworksView,W3mWhatIsANetworkView:()=>W3mWhatIsANetworkView,W3mWhatIsAWalletView:()=>W3mWhatIsAWalletView});var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var if_defined=__webpack_require__(51133);var ChainController=__webpack_require__(64096);var AssetUtil=__webpack_require__(74681);var OptionsController=__webpack_require__(19717);var AssetController=__webpack_require__(49953);var AccountController=__webpack_require__(1218);var CoreHelperUtil=__webpack_require__(10526);var ModalController=__webpack_require__(66084);var esm_exports=__webpack_require__(79849);var wui_image=__webpack_require__(62084);var wui_loading_spinner=__webpack_require__(37447);var wui_text=__webpack_require__(35198);var wui_flex=__webpack_require__(80268);var ThemeUtil=__webpack_require__(35989);var UiHelperUtil=__webpack_require__(35508);var WebComponentsUtil=__webpack_require__(67662);var wui_avatar=__webpack_require__(24128);var wui_icon_box=__webpack_require__(22992);const styles=(0,lit.AH)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiAccountButton=class WuiAccountButton extends lit.WF{constructor(){super(...arguments);this.networkSrc=undefined;this.avatarSrc=undefined;this.balance=undefined;this.isUnsupportedChain=undefined;this.disabled=false;this.loading=false;this.address="";this.profileName="";this.charsStart=4;this.charsEnd=6}render(){return(0,lit.qy)`
      <button
        ?disabled=${this.disabled}
        class=${(0,if_defined.J)(this.balance?undefined:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?UiHelperUtil.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain){return(0,lit.qy)` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`}if(this.balance){const networkElement=this.networkSrc?(0,lit.qy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,lit.qy)`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;const balanceTemplate=this.loading?(0,lit.qy)`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:(0,lit.qy)`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return(0,lit.qy)`${networkElement} ${balanceTemplate}`}return null}};WuiAccountButton.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiAccountButton.prototype,"networkSrc",void 0);__decorate([(0,decorators.MZ)()],WuiAccountButton.prototype,"avatarSrc",void 0);__decorate([(0,decorators.MZ)()],WuiAccountButton.prototype,"balance",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiAccountButton.prototype,"isUnsupportedChain",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiAccountButton.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiAccountButton.prototype,"loading",void 0);__decorate([(0,decorators.MZ)()],WuiAccountButton.prototype,"address",void 0);__decorate([(0,decorators.MZ)()],WuiAccountButton.prototype,"profileName",void 0);__decorate([(0,decorators.MZ)()],WuiAccountButton.prototype,"charsStart",void 0);__decorate([(0,decorators.MZ)()],WuiAccountButton.prototype,"charsEnd",void 0);WuiAccountButton=__decorate([(0,WebComponentsUtil.E)("wui-account-button")],WuiAccountButton);var w3m_account_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};class W3mAccountButtonBase extends lit.WF{constructor(){super(...arguments);this.unsubscribe=[];this.disabled=false;this.balance="show";this.charsStart=4;this.charsEnd=6;this.namespace=undefined;this.caipAddress=ChainController.W.getAccountData(this.namespace)?.caipAddress;this.balanceVal=ChainController.W.getAccountData(this.namespace)?.balance;this.balanceSymbol=ChainController.W.getAccountData(this.namespace)?.balanceSymbol;this.profileName=ChainController.W.getAccountData(this.namespace)?.profileName;this.profileImage=ChainController.W.getAccountData(this.namespace)?.profileImage;this.network=ChainController.W.getNetworkData(this.namespace)?.caipNetwork;this.networkImage=AssetUtil.$.getNetworkImage(this.network);this.isSupported=OptionsController.H.state.allowUnsupportedChain?true:ChainController.W.state.activeChain?ChainController.W.checkIfSupportedNetwork(ChainController.W.state.activeChain):true}firstUpdated(){const namespace=this.namespace;if(namespace){this.unsubscribe.push(ChainController.W.subscribeChainProp("accountState",(val=>{this.caipAddress=val?.caipAddress;this.balanceVal=val?.balance;this.balanceSymbol=val?.balanceSymbol;this.profileName=val?.profileName;this.profileImage=val?.profileImage}),namespace),ChainController.W.subscribeChainProp("networkState",(val=>{this.network=val?.caipNetwork;this.isSupported=ChainController.W.checkIfSupportedNetwork(namespace,val?.caipNetwork);this.networkImage=AssetUtil.$.getNetworkImage(val?.caipNetwork)}),namespace))}else{this.unsubscribe.push(AssetController.j.subscribeNetworkImages((()=>{this.networkImage=AssetUtil.$.getNetworkImage(this.network)})),ChainController.W.subscribeKey("activeCaipAddress",(val=>{this.caipAddress=val})),AccountController.U.subscribeKey("balance",(val=>this.balanceVal=val)),AccountController.U.subscribeKey("balanceSymbol",(val=>this.balanceSymbol=val)),AccountController.U.subscribeKey("profileName",(val=>this.profileName=val)),AccountController.U.subscribeKey("profileImage",(val=>this.profileImage=val)),ChainController.W.subscribeKey("activeCaipNetwork",(val=>{this.network=val;this.networkImage=AssetUtil.$.getNetworkImage(val);this.isSupported=val?.chainNamespace?ChainController.W.checkIfSupportedNetwork(val?.chainNamespace):true;this.fetchNetworkImage(val)})))}}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){if(!ChainController.W.state.activeChain){return null}const shouldShowBalance=this.balance==="show";const shouldShowLoading=typeof this.balanceVal!=="string";return(0,lit.qy)`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${OptionsController.H.state.allowUnsupportedChain?false:!this.isSupported}
        address=${(0,if_defined.J)(CoreHelperUtil.w.getPlainAddress(this.caipAddress))}
        profileName=${(0,if_defined.J)(this.profileName)}
        networkSrc=${(0,if_defined.J)(this.networkImage)}
        avatarSrc=${(0,if_defined.J)(this.profileImage)}
        balance=${shouldShowBalance?CoreHelperUtil.w.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${shouldShowLoading}
      >
      </wui-account-button>
    `}async onClick(){await ChainController.W.switchActiveNamespace(this.namespace);if(this.isSupported||OptionsController.H.state.allowUnsupportedChain){ModalController.W.open()}else{ModalController.W.open({view:"UnsupportedChain"})}}async fetchNetworkImage(network){if(network?.assets?.imageId){this.networkImage=await AssetUtil.$.fetchNetworkImage(network?.assets?.imageId)}}}w3m_account_button_decorate([(0,decorators.MZ)({type:Boolean})],W3mAccountButtonBase.prototype,"disabled",void 0);w3m_account_button_decorate([(0,decorators.MZ)()],W3mAccountButtonBase.prototype,"balance",void 0);w3m_account_button_decorate([(0,decorators.MZ)()],W3mAccountButtonBase.prototype,"charsStart",void 0);w3m_account_button_decorate([(0,decorators.MZ)()],W3mAccountButtonBase.prototype,"charsEnd",void 0);w3m_account_button_decorate([(0,decorators.MZ)()],W3mAccountButtonBase.prototype,"namespace",void 0);w3m_account_button_decorate([(0,decorators.wk)()],W3mAccountButtonBase.prototype,"caipAddress",void 0);w3m_account_button_decorate([(0,decorators.wk)()],W3mAccountButtonBase.prototype,"balanceVal",void 0);w3m_account_button_decorate([(0,decorators.wk)()],W3mAccountButtonBase.prototype,"balanceSymbol",void 0);w3m_account_button_decorate([(0,decorators.wk)()],W3mAccountButtonBase.prototype,"profileName",void 0);w3m_account_button_decorate([(0,decorators.wk)()],W3mAccountButtonBase.prototype,"profileImage",void 0);w3m_account_button_decorate([(0,decorators.wk)()],W3mAccountButtonBase.prototype,"network",void 0);w3m_account_button_decorate([(0,decorators.wk)()],W3mAccountButtonBase.prototype,"networkImage",void 0);w3m_account_button_decorate([(0,decorators.wk)()],W3mAccountButtonBase.prototype,"isSupported",void 0);let W3mAccountButton=class W3mAccountButton extends W3mAccountButtonBase{};W3mAccountButton=w3m_account_button_decorate([(0,esm_exports.EM)("w3m-account-button")],W3mAccountButton);let AppKitAccountButton=class AppKitAccountButton extends W3mAccountButtonBase{};AppKitAccountButton=w3m_account_button_decorate([(0,esm_exports.EM)("appkit-account-button")],AppKitAccountButton);const w3m_button_styles=(0,lit.AH)`
  :host {
    display: block;
    width: max-content;
  }
`;var w3m_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};class W3mButtonBase extends lit.WF{constructor(){super(...arguments);this.unsubscribe=[];this.disabled=false;this.balance=undefined;this.size=undefined;this.label=undefined;this.loadingLabel=undefined;this.charsStart=4;this.charsEnd=6;this.namespace=undefined;this.caipAddress=ChainController.W.state.activeCaipAddress}firstUpdated(){if(this.namespace){this.unsubscribe.push(ChainController.W.subscribeChainProp("accountState",(val=>{this.caipAddress=val?.caipAddress}),this.namespace))}else{this.unsubscribe.push(ChainController.W.subscribeKey("activeCaipAddress",(val=>this.caipAddress=val)))}}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return this.caipAddress?(0,lit.qy)`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,if_defined.J)(this.balance)}
            .charsStart=${(0,if_defined.J)(this.charsStart)}
            .charsEnd=${(0,if_defined.J)(this.charsEnd)}
            namespace=${(0,if_defined.J)(this.namespace)}
          >
          </appkit-account-button>
        `:(0,lit.qy)`
          <appkit-connect-button
            size=${(0,if_defined.J)(this.size)}
            label=${(0,if_defined.J)(this.label)}
            loadingLabel=${(0,if_defined.J)(this.loadingLabel)}
            namespace=${(0,if_defined.J)(this.namespace)}
          ></appkit-connect-button>
        `}}W3mButtonBase.styles=w3m_button_styles;w3m_button_decorate([(0,decorators.MZ)({type:Boolean})],W3mButtonBase.prototype,"disabled",void 0);w3m_button_decorate([(0,decorators.MZ)()],W3mButtonBase.prototype,"balance",void 0);w3m_button_decorate([(0,decorators.MZ)()],W3mButtonBase.prototype,"size",void 0);w3m_button_decorate([(0,decorators.MZ)()],W3mButtonBase.prototype,"label",void 0);w3m_button_decorate([(0,decorators.MZ)()],W3mButtonBase.prototype,"loadingLabel",void 0);w3m_button_decorate([(0,decorators.MZ)()],W3mButtonBase.prototype,"charsStart",void 0);w3m_button_decorate([(0,decorators.MZ)()],W3mButtonBase.prototype,"charsEnd",void 0);w3m_button_decorate([(0,decorators.MZ)()],W3mButtonBase.prototype,"namespace",void 0);w3m_button_decorate([(0,decorators.wk)()],W3mButtonBase.prototype,"caipAddress",void 0);let W3mButton=class W3mButton extends W3mButtonBase{};W3mButton=w3m_button_decorate([(0,esm_exports.EM)("w3m-button")],W3mButton);let AppKitButton=class AppKitButton extends W3mButtonBase{};AppKitButton=w3m_button_decorate([(0,esm_exports.EM)("appkit-button")],AppKitButton);const wui_connect_button_styles=(0,lit.AH)`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var wui_connect_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiConnectButton=class WuiConnectButton extends lit.WF{constructor(){super(...arguments);this.size="md";this.loading=false}render(){const textVariant=this.size==="md"?"paragraph-600":"small-600";return(0,lit.qy)`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${textVariant} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){if(!this.loading){return null}return(0,lit.qy)`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`}};WuiConnectButton.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_connect_button_styles];wui_connect_button_decorate([(0,decorators.MZ)()],WuiConnectButton.prototype,"size",void 0);wui_connect_button_decorate([(0,decorators.MZ)({type:Boolean})],WuiConnectButton.prototype,"loading",void 0);WuiConnectButton=wui_connect_button_decorate([(0,WebComponentsUtil.E)("wui-connect-button")],WuiConnectButton);var w3m_connect_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};class W3mConnectButtonBase extends lit.WF{constructor(){super();this.unsubscribe=[];this.size="md";this.label="Connect Wallet";this.loadingLabel="Connecting...";this.open=ModalController.W.state.open;this.loading=this.namespace?ModalController.W.state.loadingNamespaceMap.get(this.namespace):ModalController.W.state.loading;this.unsubscribe.push(ModalController.W.subscribe((val=>{this.open=val.open;this.loading=this.namespace?val.loadingNamespaceMap.get(this.namespace):val.loading})))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)`
      <wui-connect-button
        size=${(0,if_defined.J)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){if(this.open){ModalController.W.close()}else if(!this.loading){ModalController.W.open({view:"Connect",namespace:this.namespace})}}}w3m_connect_button_decorate([(0,decorators.MZ)()],W3mConnectButtonBase.prototype,"size",void 0);w3m_connect_button_decorate([(0,decorators.MZ)()],W3mConnectButtonBase.prototype,"label",void 0);w3m_connect_button_decorate([(0,decorators.MZ)()],W3mConnectButtonBase.prototype,"loadingLabel",void 0);w3m_connect_button_decorate([(0,decorators.MZ)()],W3mConnectButtonBase.prototype,"namespace",void 0);w3m_connect_button_decorate([(0,decorators.wk)()],W3mConnectButtonBase.prototype,"open",void 0);w3m_connect_button_decorate([(0,decorators.wk)()],W3mConnectButtonBase.prototype,"loading",void 0);let W3mConnectButton=class W3mConnectButton extends W3mConnectButtonBase{};W3mConnectButton=w3m_connect_button_decorate([(0,esm_exports.EM)("w3m-connect-button")],W3mConnectButton);let AppKitConnectButton=class AppKitConnectButton extends W3mConnectButtonBase{};AppKitConnectButton=w3m_connect_button_decorate([(0,esm_exports.EM)("appkit-connect-button")],AppKitConnectButton);var EventsController=__webpack_require__(28304);const wui_network_button_styles=(0,lit.AH)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var wui_network_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiNetworkButton=class WuiNetworkButton extends lit.WF{constructor(){super(...arguments);this.imageSrc=undefined;this.isUnsupportedChain=undefined;this.disabled=false}render(){return(0,lit.qy)`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){if(this.isUnsupportedChain){return(0,lit.qy)`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `}if(this.imageSrc){return(0,lit.qy)`<wui-image src=${this.imageSrc}></wui-image>`}return(0,lit.qy)`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};WuiNetworkButton.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_network_button_styles];wui_network_button_decorate([(0,decorators.MZ)()],WuiNetworkButton.prototype,"imageSrc",void 0);wui_network_button_decorate([(0,decorators.MZ)({type:Boolean})],WuiNetworkButton.prototype,"isUnsupportedChain",void 0);wui_network_button_decorate([(0,decorators.MZ)({type:Boolean})],WuiNetworkButton.prototype,"disabled",void 0);WuiNetworkButton=wui_network_button_decorate([(0,WebComponentsUtil.E)("wui-network-button")],WuiNetworkButton);const w3m_network_button_styles=(0,lit.AH)`
  :host {
    display: block;
    width: max-content;
  }
`;var w3m_network_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};class W3mNetworkButtonBase extends lit.WF{constructor(){super();this.unsubscribe=[];this.disabled=false;this.network=ChainController.W.state.activeCaipNetwork;this.networkImage=AssetUtil.$.getNetworkImage(this.network);this.caipAddress=ChainController.W.state.activeCaipAddress;this.loading=ModalController.W.state.loading;this.isSupported=OptionsController.H.state.allowUnsupportedChain?true:ChainController.W.state.activeChain?ChainController.W.checkIfSupportedNetwork(ChainController.W.state.activeChain):true;this.unsubscribe.push(...[AssetController.j.subscribeNetworkImages((()=>{this.networkImage=AssetUtil.$.getNetworkImage(this.network)})),ChainController.W.subscribeKey("activeCaipAddress",(val=>{this.caipAddress=val})),ChainController.W.subscribeKey("activeCaipNetwork",(val=>{this.network=val;this.networkImage=AssetUtil.$.getNetworkImage(val);this.isSupported=val?.chainNamespace?ChainController.W.checkIfSupportedNetwork(val.chainNamespace):true;AssetUtil.$.fetchNetworkImage(val?.assets?.imageId)})),ModalController.W.subscribeKey("loading",(val=>this.loading=val))])}firstUpdated(){AssetUtil.$.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const isSupported=this.network?ChainController.W.checkIfSupportedNetwork(this.network.chainNamespace):true;return(0,lit.qy)`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${OptionsController.H.state.allowUnsupportedChain?false:!isSupported}
        imageSrc=${(0,if_defined.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){if(this.network){if(!this.isSupported&&!OptionsController.H.state.allowUnsupportedChain){return"Switch Network"}return this.network.name}if(this.label){return this.label}if(this.caipAddress){return"Unknown Network"}return"Select Network"}onClick(){if(!this.loading){EventsController.E.sendEvent({type:"track",event:"CLICK_NETWORKS"});ModalController.W.open({view:"Networks"})}}}W3mNetworkButtonBase.styles=w3m_network_button_styles;w3m_network_button_decorate([(0,decorators.MZ)({type:Boolean})],W3mNetworkButtonBase.prototype,"disabled",void 0);w3m_network_button_decorate([(0,decorators.MZ)({type:String})],W3mNetworkButtonBase.prototype,"label",void 0);w3m_network_button_decorate([(0,decorators.wk)()],W3mNetworkButtonBase.prototype,"network",void 0);w3m_network_button_decorate([(0,decorators.wk)()],W3mNetworkButtonBase.prototype,"networkImage",void 0);w3m_network_button_decorate([(0,decorators.wk)()],W3mNetworkButtonBase.prototype,"caipAddress",void 0);w3m_network_button_decorate([(0,decorators.wk)()],W3mNetworkButtonBase.prototype,"loading",void 0);w3m_network_button_decorate([(0,decorators.wk)()],W3mNetworkButtonBase.prototype,"isSupported",void 0);let W3mNetworkButton=class W3mNetworkButton extends W3mNetworkButtonBase{};W3mNetworkButton=w3m_network_button_decorate([(0,esm_exports.EM)("w3m-network-button")],W3mNetworkButton);let AppKitNetworkButton=class AppKitNetworkButton extends W3mNetworkButtonBase{};AppKitNetworkButton=w3m_network_button_decorate([(0,esm_exports.EM)("appkit-network-button")],AppKitNetworkButton);var w3m_router=__webpack_require__(14198);var ConstantsUtil=__webpack_require__(49024);var ConnectorController=__webpack_require__(58217);var utils_ConstantsUtil=__webpack_require__(96184);var SnackController=__webpack_require__(48375);var RouterController=__webpack_require__(63348);var ConnectionController=__webpack_require__(27617);var SendController=__webpack_require__(57652);var exports_wui_flex=__webpack_require__(90766);var wui_icon_link=__webpack_require__(1552);var wui_list_item=__webpack_require__(75429);var wui_icon=__webpack_require__(18436);var wui_button=__webpack_require__(57199);const wui_notice_card_styles=(0,lit.AH)`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var wui_notice_card_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiNoticeCard=class WuiNoticeCard extends lit.WF{constructor(){super(...arguments);this.label="";this.description="";this.icon="wallet"}render(){return(0,lit.qy)`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};WuiNoticeCard.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_notice_card_styles];wui_notice_card_decorate([(0,decorators.MZ)()],WuiNoticeCard.prototype,"label",void 0);wui_notice_card_decorate([(0,decorators.MZ)()],WuiNoticeCard.prototype,"description",void 0);wui_notice_card_decorate([(0,decorators.MZ)()],WuiNoticeCard.prototype,"icon",void 0);WuiNoticeCard=wui_notice_card_decorate([(0,WebComponentsUtil.E)("wui-notice-card")],WuiNoticeCard);var exports_wui_text=__webpack_require__(42762);var W3mFrameConstants=__webpack_require__(11536);var StorageUtil=__webpack_require__(16812);var w3m_account_auth_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAccountAuthButton=class W3mAccountAuthButton extends lit.WF{constructor(){super();this.unsubscribe=[];this.socialProvider=StorageUtil.i.getConnectedSocialProvider();this.socialUsername=StorageUtil.i.getConnectedSocialUsername();this.namespace=ChainController.W.state.activeChain;this.unsubscribe.push(ChainController.W.subscribeKey("activeChain",(namespace=>{this.namespace=namespace})))}disconnectedCallback(){this.unsubscribe.forEach((unsub=>unsub()))}render(){const connectorId=ConnectorController.a.getConnectorId(this.namespace);const authConnector=ConnectorController.a.getAuthConnector();if(!authConnector||connectorId!==ConstantsUtil.o.CONNECTOR_ID.AUTH){this.style.cssText=`display: none`;return null}const email=authConnector.provider.getEmail()??"";if(!email&&!this.socialUsername){this.style.cssText=`display: none`;return null}return(0,lit.qy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(email,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(email)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(email,socialProvider){if(!socialProvider){RouterController.I.push("UpdateEmailWallet",{email,redirectView:"Account"})}}getAuthName(email){if(this.socialUsername){if(this.socialProvider==="discord"&&this.socialUsername.endsWith("0")){return this.socialUsername.slice(0,-1)}return this.socialUsername}return email.length>30?`${email.slice(0,-3)}...`:email}};w3m_account_auth_button_decorate([(0,decorators.wk)()],W3mAccountAuthButton.prototype,"namespace",void 0);W3mAccountAuthButton=w3m_account_auth_button_decorate([(0,esm_exports.EM)("w3m-account-auth-button")],W3mAccountAuthButton);var w3m_account_settings_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAccountSettingsView=class W3mAccountSettingsView extends lit.WF{constructor(){super();this.usubscribe=[];this.networkImages=AssetController.j.state.networkImages;this.address=AccountController.U.state.address;this.profileImage=AccountController.U.state.profileImage;this.profileName=AccountController.U.state.profileName;this.network=ChainController.W.state.activeCaipNetwork;this.preferredAccountTypes=AccountController.U.state.preferredAccountTypes;this.disconnecting=false;this.loading=false;this.switched=false;this.text="";this.usubscribe.push(...[AccountController.U.subscribe((val=>{if(val.address){this.address=val.address;this.profileImage=val.profileImage;this.profileName=val.profileName;this.preferredAccountTypes=val.preferredAccountTypes}})),AccountController.U.subscribeKey("preferredAccountTypes",(val=>this.preferredAccountTypes=val)),ChainController.W.subscribeKey("activeCaipNetwork",(val=>{if(val?.id){this.network=val}}))])}disconnectedCallback(){this.usubscribe.forEach((unsubscribe=>unsubscribe()))}render(){if(!this.address){throw new Error("w3m-account-settings-view: No account provided")}const networkImage=this.networkImages[this.network?.assets?.imageId??""];return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,if_defined.J)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${esm_exports.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${networkImage?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,if_defined.J)(networkImage)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const namespace=this.network?.chainNamespace;const connectorId=ConnectorController.a.getConnectorId(namespace);const authConnector=ConnectorController.a.getAuthConnector();const hasNetworkSupport=ChainController.W.checkIfNamesSupported();if(!hasNetworkSupport||!authConnector||connectorId!==ConstantsUtil.o.CONNECTOR_ID.AUTH||this.profileName){return null}return(0,lit.qy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${true}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){const namespace=this.network?.chainNamespace;const connectorId=ConnectorController.a.getConnectorId(namespace);const authConnector=ConnectorController.a.getAuthConnector();const{origin}=location;if(!authConnector||connectorId!==ConstantsUtil.o.CONNECTOR_ID.AUTH||origin.includes(utils_ConstantsUtil.oU.SECURE_SITE)){return null}return(0,lit.qy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const requestedCaipNetworks=ChainController.W.getAllRequestedCaipNetworks();const isMultiNetwork=requestedCaipNetworks?requestedCaipNetworks.length>1:false;const isValidNetwork=requestedCaipNetworks?.find((({id})=>id===this.network?.id));return isMultiNetwork||!isValidNetwork}onCopyAddress(){try{if(this.address){CoreHelperUtil.w.copyToClopboard(this.address);SnackController.P.showSuccess("Address copied")}}catch{SnackController.P.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const namespace=this.network?.chainNamespace;const isNetworkEnabled=ChainController.W.checkIfSmartAccountEnabled();const connectorId=ConnectorController.a.getConnectorId(namespace);const authConnector=ConnectorController.a.getAuthConnector();if(!authConnector||connectorId!==ConstantsUtil.o.CONNECTOR_ID.AUTH||!isNetworkEnabled){return null}if(!this.switched){this.text=this.preferredAccountTypes?.[namespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"}return(0,lit.qy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${true}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `}onChooseName(){RouterController.I.push("ChooseAccountName")}async changePreferredAccountType(){const namespace=this.network?.chainNamespace;const isSmartAccountEnabled=ChainController.W.checkIfSmartAccountEnabled();const accountTypeTarget=this.preferredAccountTypes?.[namespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT||!isSmartAccountEnabled?W3mFrameConstants.Vl.ACCOUNT_TYPES.EOA:W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT;const authConnector=ConnectorController.a.getAuthConnector();if(!authConnector){return}this.loading=true;await ConnectionController.x.setPreferredAccountType(accountTypeTarget,namespace);this.text=accountTypeTarget===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account";this.switched=true;SendController.R.resetSend();this.loading=false;this.requestUpdate()}onNetworks(){if(this.isAllowedNetworkSwitch()){RouterController.I.push("Networks")}}async onDisconnect(){try{this.disconnecting=true;await ConnectionController.x.disconnect();ModalController.W.close()}catch{EventsController.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"});SnackController.P.showError("Failed to disconnect")}finally{this.disconnecting=false}}onGoToUpgradeView(){EventsController.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"});RouterController.I.push("UpgradeEmailWallet")}};w3m_account_settings_view_decorate([(0,decorators.wk)()],W3mAccountSettingsView.prototype,"address",void 0);w3m_account_settings_view_decorate([(0,decorators.wk)()],W3mAccountSettingsView.prototype,"profileImage",void 0);w3m_account_settings_view_decorate([(0,decorators.wk)()],W3mAccountSettingsView.prototype,"profileName",void 0);w3m_account_settings_view_decorate([(0,decorators.wk)()],W3mAccountSettingsView.prototype,"network",void 0);w3m_account_settings_view_decorate([(0,decorators.wk)()],W3mAccountSettingsView.prototype,"preferredAccountTypes",void 0);w3m_account_settings_view_decorate([(0,decorators.wk)()],W3mAccountSettingsView.prototype,"disconnecting",void 0);w3m_account_settings_view_decorate([(0,decorators.wk)()],W3mAccountSettingsView.prototype,"loading",void 0);w3m_account_settings_view_decorate([(0,decorators.wk)()],W3mAccountSettingsView.prototype,"switched",void 0);w3m_account_settings_view_decorate([(0,decorators.wk)()],W3mAccountSettingsView.prototype,"text",void 0);W3mAccountSettingsView=w3m_account_settings_view_decorate([(0,esm_exports.EM)("w3m-account-settings-view")],W3mAccountSettingsView);var exports_wui_button=__webpack_require__(75541);var exports_wui_icon=__webpack_require__(24188);const wui_profile_button_v2_styles=(0,lit.AH)`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var wui_profile_button_v2_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiProfileButtonV2=class WuiProfileButtonV2 extends lit.WF{constructor(){super(...arguments);this.avatarSrc=undefined;this.profileName="";this.address="";this.icon="mail"}render(){const namespace=ChainController.W.state.activeChain;const connectorId=ConnectorController.a.getConnectorId(namespace);const shouldShowIcon=connectorId===ConstantsUtil.o.CONNECTOR_ID.AUTH;return(0,lit.qy)`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${UiHelperUtil.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(event){if(event.target instanceof HTMLElement&&event.target.id==="copy-address"){this.onCopyClick?.(event);return}this.onProfileClick?.(event)}getIconTemplate(icon){return(0,lit.qy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${icon||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};WuiProfileButtonV2.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_profile_button_v2_styles];wui_profile_button_v2_decorate([(0,decorators.MZ)()],WuiProfileButtonV2.prototype,"avatarSrc",void 0);wui_profile_button_v2_decorate([(0,decorators.MZ)()],WuiProfileButtonV2.prototype,"profileName",void 0);wui_profile_button_v2_decorate([(0,decorators.MZ)()],WuiProfileButtonV2.prototype,"address",void 0);wui_profile_button_v2_decorate([(0,decorators.MZ)()],WuiProfileButtonV2.prototype,"icon",void 0);wui_profile_button_v2_decorate([(0,decorators.MZ)()],WuiProfileButtonV2.prototype,"onProfileClick",void 0);wui_profile_button_v2_decorate([(0,decorators.MZ)()],WuiProfileButtonV2.prototype,"onCopyClick",void 0);WuiProfileButtonV2=wui_profile_button_v2_decorate([(0,WebComponentsUtil.E)("wui-profile-button-v2")],WuiProfileButtonV2);const wui_tabs_styles=(0,lit.AH)`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var wui_tabs_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTabs=class WuiTabs extends lit.WF{constructor(){super(...arguments);this.tabs=[];this.onTabChange=()=>null;this.buttons=[];this.disabled=false;this.localTabWidth="100px";this.activeTab=0;this.isDense=false}render(){this.isDense=this.tabs.length>3;this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `;this.dataset["type"]=this.isDense?"flex":"block";return this.tabs.map(((tab,index)=>{const isActive=index===this.activeTab;return(0,lit.qy)`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(index)}
          data-active=${isActive}
          data-testid="tab-${tab.label?.toLowerCase()}"
        >
          ${this.iconTemplate(tab)}
          <wui-text variant="small-600" color="inherit"> ${tab.label} </wui-text>
        </button>
      `}))}firstUpdated(){if(this.shadowRoot&&this.isDense){this.buttons=[...this.shadowRoot.querySelectorAll("button")];setTimeout((()=>{this.animateTabs(0,true)}),0)}}iconTemplate(tab){if(tab.icon){return(0,lit.qy)`<wui-icon size="xs" color="inherit" name=${tab.icon}></wui-icon>`}return null}onTabClick(index){if(this.buttons){this.animateTabs(index,false)}this.activeTab=index;this.onTabChange(index)}animateTabs(index,initialAnimation){const passiveBtn=this.buttons[this.activeTab];const activeBtn=this.buttons[index];const passiveBtnText=passiveBtn?.querySelector("wui-text");const activeBtnText=activeBtn?.querySelector("wui-text");const activeBtnBounds=activeBtn?.getBoundingClientRect();const activeBtnTextBounds=activeBtnText?.getBoundingClientRect();if(passiveBtn&&passiveBtnText&&!initialAnimation&&index!==this.activeTab){passiveBtnText.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"});passiveBtn.animate([{width:`34px`}],{duration:500,easing:"ease",fill:"forwards"})}if(activeBtn&&activeBtnBounds&&activeBtnTextBounds&&activeBtnText){if(index!==this.activeTab||initialAnimation){this.localTabWidth=`${Math.round(activeBtnBounds.width+activeBtnTextBounds.width)+6}px`;activeBtn.animate([{width:`${activeBtnBounds.width+activeBtnTextBounds.width}px`}],{duration:initialAnimation?0:500,fill:"forwards",easing:"ease"});activeBtnText.animate([{opacity:1}],{duration:initialAnimation?0:125,delay:initialAnimation?0:200,fill:"forwards",easing:"ease"})}}}};WuiTabs.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_tabs_styles];wui_tabs_decorate([(0,decorators.MZ)({type:Array})],WuiTabs.prototype,"tabs",void 0);wui_tabs_decorate([(0,decorators.MZ)()],WuiTabs.prototype,"onTabChange",void 0);wui_tabs_decorate([(0,decorators.MZ)({type:Array})],WuiTabs.prototype,"buttons",void 0);wui_tabs_decorate([(0,decorators.MZ)({type:Boolean})],WuiTabs.prototype,"disabled",void 0);wui_tabs_decorate([(0,decorators.MZ)()],WuiTabs.prototype,"localTabWidth",void 0);wui_tabs_decorate([(0,decorators.wk)()],WuiTabs.prototype,"activeTab",void 0);wui_tabs_decorate([(0,decorators.wk)()],WuiTabs.prototype,"isDense",void 0);WuiTabs=wui_tabs_decorate([(0,WebComponentsUtil.E)("wui-tabs")],WuiTabs);var wui_tag=__webpack_require__(8469);const w3m_account_default_widget_styles=(0,lit.AH)`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var w3m_account_default_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAccountDefaultWidget=class W3mAccountDefaultWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.caipAddress=AccountController.U.state.caipAddress;this.address=CoreHelperUtil.w.getPlainAddress(AccountController.U.state.caipAddress);this.allAccounts=AccountController.U.state.allAccounts;this.profileImage=AccountController.U.state.profileImage;this.profileName=AccountController.U.state.profileName;this.disconnecting=false;this.balance=AccountController.U.state.balance;this.balanceSymbol=AccountController.U.state.balanceSymbol;this.features=OptionsController.H.state.features;this.namespace=ChainController.W.state.activeChain;this.chainId=ChainController.W.state.activeCaipNetwork?.id;this.unsubscribe.push(...[AccountController.U.subscribeKey("caipAddress",(val=>{this.address=CoreHelperUtil.w.getPlainAddress(val);this.caipAddress=val})),AccountController.U.subscribeKey("balance",(val=>this.balance=val)),AccountController.U.subscribeKey("balanceSymbol",(val=>this.balanceSymbol=val)),AccountController.U.subscribeKey("profileName",(val=>this.profileName=val)),AccountController.U.subscribeKey("profileImage",(val=>this.profileImage=val)),OptionsController.H.subscribeKey("features",(val=>this.features=val)),AccountController.U.subscribeKey("allAccounts",(allAccounts=>{this.allAccounts=allAccounts})),ChainController.W.subscribeKey("activeChain",(val=>this.namespace=val)),ChainController.W.subscribeKey("activeCaipNetwork",(val=>{if(val){const[namespace,chainId]=val?.caipNetworkId?.split(":")||[];if(namespace&&chainId){this.namespace=namespace;this.chainId=chainId}}}))])}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){if(!this.caipAddress){return null}const shouldShowMultiAccount=ChainController.W.state.activeChain!==ConstantsUtil.o.CHAIN.SOLANA&&this.allAccounts.length>1;return(0,lit.qy)`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${shouldShowMultiAccount?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${CoreHelperUtil.w.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${false}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){if(!this.namespace){return null}const isOnrampEnabled=this.features?.onramp;const hasNetworkSupport=utils_ConstantsUtil.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);if(!isOnrampEnabled||!hasNetworkSupport){return null}return(0,lit.qy)`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${true}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){const featuresOrder=this.features?.walletFeaturesOrder||utils_ConstantsUtil.oU.DEFAULT_FEATURES.walletFeaturesOrder;return featuresOrder.map((feature=>{switch(feature){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}}))}activityTemplate(){if(!this.namespace){return null}const isEnabled=this.features?.history&&utils_ConstantsUtil.oU.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace);return isEnabled?(0,lit.qy)` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${true}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){const isSwapsEnabled=this.features?.swaps;const isEvm=ChainController.W.state.activeChain===ConstantsUtil.o.CHAIN.EVM;if(!isSwapsEnabled||!isEvm){return null}return(0,lit.qy)`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${true}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){const isSendEnabled=this.features?.send;const activeNamespace=ChainController.W.state.activeChain;const isSendSupported=utils_ConstantsUtil.oU.SEND_SUPPORTED_NAMESPACES.includes(activeNamespace);if(!isSendEnabled||!isSendSupported){return null}return(0,lit.qy)`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${true}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const namespace=ChainController.W.state.activeChain;const connectorId=ConnectorController.a.getConnectorId(namespace);const authConnector=ConnectorController.a.getAuthConnector();const{origin}=location;if(!authConnector||connectorId!==ConstantsUtil.o.CONNECTOR_ID.AUTH||origin.includes(utils_ConstantsUtil.oU.SECURE_SITE)){return null}return(0,lit.qy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){RouterController.I.push("SwitchAddress")}handleClickPay(){RouterController.I.push("OnRampProviders")}handleClickSwap(){RouterController.I.push("Swap")}handleClickSend(){RouterController.I.push("WalletSend")}explorerBtnTemplate(){const addressExplorerUrl=AccountController.U.state.addressExplorerUrl;if(!addressExplorerUrl){return null}return(0,lit.qy)`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `}singleAccountTemplate(){return(0,lit.qy)`
      <wui-avatar
        alt=${(0,if_defined.J)(this.caipAddress)}
        address=${(0,if_defined.J)(CoreHelperUtil.w.getPlainAddress(this.caipAddress))}
        imageSrc=${(0,if_defined.J)(this.profileImage===null?undefined:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?esm_exports.Zv.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):esm_exports.Zv.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address){throw new Error("w3m-account-view: No account provided")}const account=this.allAccounts.find((acc=>acc.address===this.address));const label=AccountController.U.state.addressLabels.get(this.address);if(this.namespace==="bip122"){return this.btcAccountsTemplate()}return(0,lit.qy)`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${(0,if_defined.J)(this.address)}
        icon="${account?.type===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&ChainController.W.state.activeChain===ConstantsUtil.o.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${(0,if_defined.J)(this.profileImage?this.profileImage:undefined)}
        profileName=${(0,if_defined.J)(label?label:this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return(0,lit.qy)`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${(0,if_defined.J)(this.profileImage?this.profileImage:undefined)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${index=>AccountController.U.setCaipAddress(`bip122:${this.chainId}:${this.allAccounts[index]?.address||""}`,this.namespace)}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${esm_exports.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{if(this.address){CoreHelperUtil.w.copyToClopboard(this.address);SnackController.P.showSuccess("Address copied")}}catch{SnackController.P.showError("Failed to copy")}}onTransactions(){const activeChainNamespace=ChainController.W.state.activeChain;EventsController.E.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});RouterController.I.push("Transactions")}async onDisconnect(){try{this.disconnecting=true;await ConnectionController.x.disconnect();ModalController.W.close()}catch{EventsController.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"});SnackController.P.showError("Failed to disconnect")}finally{this.disconnecting=false}}onExplorer(){const addressExplorerUrl=AccountController.U.state.addressExplorerUrl;if(addressExplorerUrl){CoreHelperUtil.w.openHref(addressExplorerUrl,"_blank")}}onGoToUpgradeView(){EventsController.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"});RouterController.I.push("UpgradeEmailWallet")}};W3mAccountDefaultWidget.styles=w3m_account_default_widget_styles;w3m_account_default_widget_decorate([(0,decorators.wk)()],W3mAccountDefaultWidget.prototype,"caipAddress",void 0);w3m_account_default_widget_decorate([(0,decorators.wk)()],W3mAccountDefaultWidget.prototype,"address",void 0);w3m_account_default_widget_decorate([(0,decorators.wk)()],W3mAccountDefaultWidget.prototype,"allAccounts",void 0);w3m_account_default_widget_decorate([(0,decorators.wk)()],W3mAccountDefaultWidget.prototype,"profileImage",void 0);w3m_account_default_widget_decorate([(0,decorators.wk)()],W3mAccountDefaultWidget.prototype,"profileName",void 0);w3m_account_default_widget_decorate([(0,decorators.wk)()],W3mAccountDefaultWidget.prototype,"disconnecting",void 0);w3m_account_default_widget_decorate([(0,decorators.wk)()],W3mAccountDefaultWidget.prototype,"balance",void 0);w3m_account_default_widget_decorate([(0,decorators.wk)()],W3mAccountDefaultWidget.prototype,"balanceSymbol",void 0);w3m_account_default_widget_decorate([(0,decorators.wk)()],W3mAccountDefaultWidget.prototype,"features",void 0);w3m_account_default_widget_decorate([(0,decorators.wk)()],W3mAccountDefaultWidget.prototype,"namespace",void 0);w3m_account_default_widget_decorate([(0,decorators.wk)()],W3mAccountDefaultWidget.prototype,"chainId",void 0);W3mAccountDefaultWidget=w3m_account_default_widget_decorate([(0,esm_exports.EM)("w3m-account-default-widget")],W3mAccountDefaultWidget);const wui_balance_styles=(0,lit.AH)`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var wui_balance_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiBalance=class WuiBalance extends lit.WF{constructor(){super(...arguments);this.dollars="0";this.pennies="00"}render(){return(0,lit.qy)`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};WuiBalance.styles=[ThemeUtil.W5,wui_balance_styles];wui_balance_decorate([(0,decorators.MZ)()],WuiBalance.prototype,"dollars",void 0);wui_balance_decorate([(0,decorators.MZ)()],WuiBalance.prototype,"pennies",void 0);WuiBalance=wui_balance_decorate([(0,WebComponentsUtil.E)("wui-balance")],WuiBalance);var wui_icon_button=__webpack_require__(68933);const wui_profile_button_styles=(0,lit.AH)`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var wui_profile_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiProfileButton=class WuiProfileButton extends lit.WF{constructor(){super(...arguments);this.networkSrc=undefined;this.avatarSrc=undefined;this.profileName="";this.address="";this.icon="chevronBottom"}render(){return(0,lit.qy)`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${UiHelperUtil.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){if(this.networkSrc){return(0,lit.qy)`<wui-image src=${this.networkSrc}></wui-image>`}return(0,lit.qy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};WuiProfileButton.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_profile_button_styles];wui_profile_button_decorate([(0,decorators.MZ)()],WuiProfileButton.prototype,"networkSrc",void 0);wui_profile_button_decorate([(0,decorators.MZ)()],WuiProfileButton.prototype,"avatarSrc",void 0);wui_profile_button_decorate([(0,decorators.MZ)()],WuiProfileButton.prototype,"profileName",void 0);wui_profile_button_decorate([(0,decorators.MZ)()],WuiProfileButton.prototype,"address",void 0);wui_profile_button_decorate([(0,decorators.MZ)()],WuiProfileButton.prototype,"icon",void 0);WuiProfileButton=wui_profile_button_decorate([(0,WebComponentsUtil.E)("wui-profile-button")],WuiProfileButton);const wui_tooltip_styles=(0,lit.AH)`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var wui_tooltip_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTooltip=class WuiTooltip extends lit.WF{constructor(){super(...arguments);this.placement="top";this.variant="fill";this.message=""}render(){this.dataset["variant"]=this.variant;return(0,lit.qy)`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};WuiTooltip.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_tooltip_styles];wui_tooltip_decorate([(0,decorators.MZ)()],WuiTooltip.prototype,"placement",void 0);wui_tooltip_decorate([(0,decorators.MZ)()],WuiTooltip.prototype,"variant",void 0);wui_tooltip_decorate([(0,decorators.MZ)()],WuiTooltip.prototype,"message",void 0);WuiTooltip=wui_tooltip_decorate([(0,WebComponentsUtil.E)("wui-tooltip")],WuiTooltip);var src_utils_ConstantsUtil=__webpack_require__(2834);const HelpersUtil={getTabsByNamespace(namespace){const isEVM=Boolean(namespace)&&namespace===ConstantsUtil.o.CHAIN.EVM;if(!isEVM){return[]}return src_utils_ConstantsUtil.o.ACCOUNT_TABS}};var w3m_activity_list=__webpack_require__(47083);const w3m_account_activity_widget_styles=(0,lit.AH)`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var w3m_account_activity_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAccountActivityWidget=class W3mAccountActivityWidget extends lit.WF{render(){return(0,lit.qy)`<w3m-activity-list page="account"></w3m-activity-list>`}};W3mAccountActivityWidget.styles=w3m_account_activity_widget_styles;W3mAccountActivityWidget=w3m_account_activity_widget_decorate([(0,esm_exports.EM)("w3m-account-activity-widget")],W3mAccountActivityWidget);var exports_wui_icon_box=__webpack_require__(96616);var wui_link=__webpack_require__(1764);const w3m_account_nfts_widget_styles=(0,lit.AH)`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var w3m_account_nfts_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAccountNftsWidget=class W3mAccountNftsWidget extends lit.WF{render(){return(0,lit.qy)`${this.nftTemplate()}`}nftTemplate(){return(0,lit.qy)` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){RouterController.I.push("WalletReceive")}};W3mAccountNftsWidget.styles=w3m_account_nfts_widget_styles;W3mAccountNftsWidget=w3m_account_nfts_widget_decorate([(0,esm_exports.EM)("w3m-account-nfts-widget")],W3mAccountNftsWidget);var composites_wui_tag=__webpack_require__(98220);const wui_list_description_styles=(0,lit.AH)`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var wui_list_description_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListDescription=class WuiListDescription extends lit.WF{constructor(){super(...arguments);this.icon="card";this.text="";this.description="";this.tag=undefined;this.iconBackgroundColor="accent-100";this.iconColor="accent-100";this.disabled=false}render(){return(0,lit.qy)`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){if(this.tag){return(0,lit.qy)` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`}return(0,lit.qy)`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};WuiListDescription.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_list_description_styles];wui_list_description_decorate([(0,decorators.MZ)()],WuiListDescription.prototype,"icon",void 0);wui_list_description_decorate([(0,decorators.MZ)()],WuiListDescription.prototype,"text",void 0);wui_list_description_decorate([(0,decorators.MZ)()],WuiListDescription.prototype,"description",void 0);wui_list_description_decorate([(0,decorators.MZ)()],WuiListDescription.prototype,"tag",void 0);wui_list_description_decorate([(0,decorators.MZ)()],WuiListDescription.prototype,"iconBackgroundColor",void 0);wui_list_description_decorate([(0,decorators.MZ)()],WuiListDescription.prototype,"iconColor",void 0);wui_list_description_decorate([(0,decorators.MZ)({type:Boolean})],WuiListDescription.prototype,"disabled",void 0);WuiListDescription=wui_list_description_decorate([(0,WebComponentsUtil.E)("wui-list-description")],WuiListDescription);var wui_list_token=__webpack_require__(36766);const w3m_account_tokens_widget_styles=(0,lit.AH)`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var w3m_account_tokens_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAccountTokensWidget=class W3mAccountTokensWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.tokenBalance=AccountController.U.state.tokenBalance;this.unsubscribe.push(...[AccountController.U.subscribe((val=>{this.tokenBalance=val.tokenBalance}))])}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)`${this.tokenTemplate()}`}tokenTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>0){return(0,lit.qy)`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`}return(0,lit.qy)` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map((token=>(0,lit.qy)`<wui-list-token
          tokenName=${token.name}
          tokenImageUrl=${token.iconUrl}
          tokenAmount=${token.quantity.numeric}
          tokenValue=${token.value}
          tokenCurrency=${token.symbol}
        ></wui-list-token>`))}onReceiveClick(){RouterController.I.push("WalletReceive")}onBuyClick(){const activeChainNamespace=ChainController.W.state.activeChain;EventsController.E.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});RouterController.I.push("OnRampProviders")}};W3mAccountTokensWidget.styles=w3m_account_tokens_widget_styles;w3m_account_tokens_widget_decorate([(0,decorators.wk)()],W3mAccountTokensWidget.prototype,"tokenBalance",void 0);W3mAccountTokensWidget=w3m_account_tokens_widget_decorate([(0,esm_exports.EM)("w3m-account-tokens-widget")],W3mAccountTokensWidget);var w3m_tooltip_trigger=__webpack_require__(12882);var w3m_tooltip=__webpack_require__(33331);const w3m_account_wallet_features_widget_styles=(0,lit.AH)`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var w3m_account_wallet_features_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const TABS=3;const TABS_PADDING=48;const MODAL_MOBILE_VIEW_PX=430;let W3mAccountWalletFeaturesWidget=class W3mAccountWalletFeaturesWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.address=AccountController.U.state.address;this.profileImage=AccountController.U.state.profileImage;this.profileName=AccountController.U.state.profileName;this.network=ChainController.W.state.activeCaipNetwork;this.currentTab=AccountController.U.state.currentTab;this.tokenBalance=AccountController.U.state.tokenBalance;this.features=OptionsController.H.state.features;this.networkImage=AssetUtil.$.getNetworkImage(this.network);this.unsubscribe.push(...[AssetController.j.subscribeNetworkImages((()=>{this.networkImage=AssetUtil.$.getNetworkImage(this.network)})),AccountController.U.subscribe((val=>{if(val.address){this.address=val.address;this.profileImage=val.profileImage;this.profileName=val.profileName;this.currentTab=val.currentTab;this.tokenBalance=val.tokenBalance}else{ModalController.W.close()}}))],ChainController.W.subscribeKey("activeCaipNetwork",(val=>this.network=val)),OptionsController.H.subscribeKey("features",(val=>this.features=val)));this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()));clearInterval(this.watchTokenBalance)}firstUpdated(){AccountController.U.fetchTokenBalance()}render(){if(!this.address){throw new Error("w3m-account-view: No account provided")}return(0,lit.qy)`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0,if_defined.J)(this.address)}
        networkSrc=${(0,if_defined.J)(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${(0,if_defined.J)(this.profileImage?this.profileImage:undefined)}
        profileName=${(0,if_defined.J)(this.profileName??undefined)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()} ${this.tabsTemplate()}
      ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const walletFeaturesOrder=this.features?.walletFeaturesOrder||utils_ConstantsUtil.oU.DEFAULT_FEATURES.walletFeaturesOrder;const isAllDisabled=walletFeaturesOrder.every((feature=>!this.features?.[feature]));if(isAllDisabled){return null}return(0,lit.qy)`<wui-flex gap="s">
      ${walletFeaturesOrder.map((feature=>{switch(feature){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}}))}
    </wui-flex>`}onrampTemplate(){const isOnrampEnabled=this.features?.onramp;if(!isOnrampEnabled){return null}return(0,lit.qy)`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){const isSwapsEnabled=this.features?.swaps;const isEvm=ChainController.W.state.activeChain===ConstantsUtil.o.CHAIN.EVM;if(!isSwapsEnabled||!isEvm){return null}return(0,lit.qy)`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `}receiveTemplate(){const isReceiveEnabled=this.features?.receive;if(!isReceiveEnabled){return null}return(0,lit.qy)`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){const isSendEnabled=this.features?.send;const activeNamespace=ChainController.W.state.activeChain;const isSendSupported=utils_ConstantsUtil.oU.SEND_SUPPORTED_NAMESPACES.includes(activeNamespace);if(!isSendEnabled||!isSendSupported){return null}return(0,lit.qy)`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval((()=>AccountController.U.fetchTokenBalance((error=>this.onTokenBalanceError(error)))),1e4)}onTokenBalanceError(error){if(error instanceof Error&&error.cause instanceof Response){const statusCode=error.cause.status;if(statusCode===ConstantsUtil.o.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE){clearInterval(this.watchTokenBalance)}}}listContentTemplate(){if(this.currentTab===0){return(0,lit.qy)`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}if(this.currentTab===1){return(0,lit.qy)`<w3m-account-nfts-widget></w3m-account-nfts-widget>`}if(this.currentTab===2){return(0,lit.qy)`<w3m-account-activity-widget></w3m-account-activity-widget>`}return(0,lit.qy)`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const value=CoreHelperUtil.w.calculateBalance(this.tokenBalance);const{dollars="0",pennies="00"}=CoreHelperUtil.w.formatTokenBalance(value);return(0,lit.qy)`<wui-balance dollars=${dollars} pennies=${pennies}></wui-balance>`}return(0,lit.qy)`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const tabsByNamespace=HelpersUtil.getTabsByNamespace(ChainController.W.state.activeChain);if(tabsByNamespace.length===0){return null}return(0,lit.qy)`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${CoreHelperUtil.w.isMobile()&&window.innerWidth<MODAL_MOBILE_VIEW_PX?`${(window.innerWidth-TABS_PADDING)/TABS}px`:"104px"}
      .tabs=${tabsByNamespace}
    ></wui-tabs>`}onTabChange(index){AccountController.U.setCurrentTab(index)}onProfileButtonClick(){const{allAccounts}=AccountController.U.state;if(allAccounts.length>1){RouterController.I.push("Profile")}else{RouterController.I.push("AccountSettings")}}onBuyClick(){RouterController.I.push("OnRampProviders")}onSwapClick(){const activeChainNamespace=ChainController.W.state.activeChain;if(this.network?.caipNetworkId&&!utils_ConstantsUtil.oU.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)){RouterController.I.push("UnsupportedChain",{swapUnsupportedChain:true})}else{EventsController.E.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});RouterController.I.push("Swap")}}onReceiveClick(){RouterController.I.push("WalletReceive")}onSendClick(){const activeChainNamespace=ChainController.W.state.activeChain;EventsController.E.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});RouterController.I.push("WalletSend")}};W3mAccountWalletFeaturesWidget.styles=w3m_account_wallet_features_widget_styles;w3m_account_wallet_features_widget_decorate([(0,decorators.wk)()],W3mAccountWalletFeaturesWidget.prototype,"watchTokenBalance",void 0);w3m_account_wallet_features_widget_decorate([(0,decorators.wk)()],W3mAccountWalletFeaturesWidget.prototype,"address",void 0);w3m_account_wallet_features_widget_decorate([(0,decorators.wk)()],W3mAccountWalletFeaturesWidget.prototype,"profileImage",void 0);w3m_account_wallet_features_widget_decorate([(0,decorators.wk)()],W3mAccountWalletFeaturesWidget.prototype,"profileName",void 0);w3m_account_wallet_features_widget_decorate([(0,decorators.wk)()],W3mAccountWalletFeaturesWidget.prototype,"network",void 0);w3m_account_wallet_features_widget_decorate([(0,decorators.wk)()],W3mAccountWalletFeaturesWidget.prototype,"currentTab",void 0);w3m_account_wallet_features_widget_decorate([(0,decorators.wk)()],W3mAccountWalletFeaturesWidget.prototype,"tokenBalance",void 0);w3m_account_wallet_features_widget_decorate([(0,decorators.wk)()],W3mAccountWalletFeaturesWidget.prototype,"features",void 0);w3m_account_wallet_features_widget_decorate([(0,decorators.wk)()],W3mAccountWalletFeaturesWidget.prototype,"networkImage",void 0);W3mAccountWalletFeaturesWidget=w3m_account_wallet_features_widget_decorate([(0,esm_exports.EM)("w3m-account-wallet-features-widget")],W3mAccountWalletFeaturesWidget);var w3m_account_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAccountView=class W3mAccountView extends lit.WF{constructor(){super();this.unsubscribe=[];this.namespace=ChainController.W.state.activeChain;this.unsubscribe.push(ChainController.W.subscribeKey("activeChain",(namespace=>{this.namespace=namespace})))}render(){if(!this.namespace){return null}const connectorId=ConnectorController.a.getConnectorId(this.namespace);const authConnector=ConnectorController.a.getAuthConnector();return(0,lit.qy)`
      ${authConnector&&connectorId===ConstantsUtil.o.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return(0,lit.qy)`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return(0,lit.qy)`<w3m-account-default-widget></w3m-account-default-widget>`}};w3m_account_view_decorate([(0,decorators.wk)()],W3mAccountView.prototype,"namespace",void 0);W3mAccountView=w3m_account_view_decorate([(0,esm_exports.EM)("w3m-account-view")],W3mAccountView);var BlockchainApiController=__webpack_require__(45827);const wui_list_account_styles=(0,lit.AH)`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var wui_list_account_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListAccount=class WuiListAccount extends lit.WF{constructor(){super(...arguments);this.accountAddress="";this.accountType="";this.labels=AccountController.U.state.addressLabels;this.caipNetwork=ChainController.W.state.activeCaipNetwork;this.socialProvider=StorageUtil.i.getConnectedSocialProvider();this.balance=0;this.fetchingBalance=true;this.shouldShowIcon=false;this.selected=false}connectedCallback(){super.connectedCallback();BlockchainApiController.T.getBalance(this.accountAddress,this.caipNetwork?.caipNetworkId).then((response=>{let total=this.balance;if(response.balances.length>0){total=response.balances.reduce(((acc,balance)=>acc+(balance?.value||0)),0)}this.balance=total;this.fetchingBalance=false;this.requestUpdate()})).catch((()=>{this.fetchingBalance=false;this.requestUpdate()}))}render(){const label=this.getLabel();const namespace=ChainController.W.state.activeChain;const connectorId=ConnectorController.a.getConnectorId(namespace);this.shouldShowIcon=connectorId===ConstantsUtil.o.CONNECTOR_ID.AUTH;return(0,lit.qy)`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?(0,lit.qy)`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===W3mFrameConstants.Vl.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:(0,lit.qy)`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${UiHelperUtil.Z.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${label}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?(0,lit.qy)`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:(0,lit.qy)` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){let label=this.labels?.get(this.accountAddress);const namespace=ChainController.W.state.activeChain;const connectorId=ConnectorController.a.getConnectorId(namespace);if(!label&&connectorId===ConstantsUtil.o.CONNECTOR_ID.AUTH){label=`${this.accountType==="eoa"?this.socialProvider??"Email":"Smart"} Account`}else if(!label){label="EOA"}return label}};WuiListAccount.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_list_account_styles];wui_list_account_decorate([(0,decorators.MZ)()],WuiListAccount.prototype,"accountAddress",void 0);wui_list_account_decorate([(0,decorators.MZ)()],WuiListAccount.prototype,"accountType",void 0);wui_list_account_decorate([(0,decorators.MZ)({type:Boolean})],WuiListAccount.prototype,"selected",void 0);wui_list_account_decorate([(0,decorators.MZ)({type:Function})],WuiListAccount.prototype,"onSelect",void 0);WuiListAccount=wui_list_account_decorate([(0,WebComponentsUtil.E)("wui-list-account")],WuiListAccount);const w3m_profile_view_styles=(0,lit.AH)`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var w3m_profile_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mProfileView=class W3mProfileView extends lit.WF{constructor(){super();this.usubscribe=[];this.address=AccountController.U.state.address;this.profileImage=AccountController.U.state.profileImage;this.profileName=AccountController.U.state.profileName;this.accounts=AccountController.U.state.allAccounts;this.loading=false;this.usubscribe.push(AccountController.U.subscribeKey("address",(address=>{if(address){this.address=address}else{ModalController.W.close()}})));this.usubscribe.push(AccountController.U.subscribeKey("profileImage",(profileImage=>{this.profileImage=profileImage})));this.usubscribe.push(AccountController.U.subscribeKey("profileName",(profileName=>{this.profileName=profileName})))}disconnectedCallback(){this.usubscribe.forEach((unsubscribe=>unsubscribe()))}render(){if(!this.address){throw new Error("w3m-profile-view: No account provided")}return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${(0,if_defined.J)(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?esm_exports.Zv.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):esm_exports.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>RouterController.I.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return(0,lit.qy)`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((account=>this.accountTemplate(account)))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(account){const namespace=ChainController.W.state.activeCaipNetwork?.chainNamespace;this.loading=true;const emailConnector=ConnectorController.a.getAuthConnector();if(emailConnector){const type=account.type;await ConnectionController.x.setPreferredAccountType(type,namespace)}AccountController.U.setShouldUpdateToAddress(account.address,namespace);this.loading=false}accountTemplate(account){return(0,lit.qy)`<wui-list-account accountAddress=${account.address} accountType=${account.type}>
      ${account.address===this.address?"":(0,lit.qy)`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(account)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{if(this.address){CoreHelperUtil.w.copyToClopboard(this.address);SnackController.P.showSuccess("Address copied")}}catch{SnackController.P.showError("Failed to copy")}}};W3mProfileView.styles=w3m_profile_view_styles;w3m_profile_view_decorate([(0,decorators.wk)()],W3mProfileView.prototype,"address",void 0);w3m_profile_view_decorate([(0,decorators.wk)()],W3mProfileView.prototype,"profileImage",void 0);w3m_profile_view_decorate([(0,decorators.wk)()],W3mProfileView.prototype,"profileName",void 0);w3m_profile_view_decorate([(0,decorators.wk)()],W3mProfileView.prototype,"accounts",void 0);w3m_profile_view_decorate([(0,decorators.wk)()],W3mProfileView.prototype,"loading",void 0);W3mProfileView=w3m_profile_view_decorate([(0,esm_exports.EM)("w3m-profile-view")],W3mProfileView);const wui_banner_img_styles=(0,lit.AH)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var wui_banner_img_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiBannerImg=class WuiBannerImg extends lit.WF{constructor(){super(...arguments);this.imageSrc="";this.text="";this.size=""}render(){return(0,lit.qy)`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};WuiBannerImg.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_banner_img_styles];wui_banner_img_decorate([(0,decorators.MZ)()],WuiBannerImg.prototype,"imageSrc",void 0);wui_banner_img_decorate([(0,decorators.MZ)()],WuiBannerImg.prototype,"text",void 0);wui_banner_img_decorate([(0,decorators.MZ)()],WuiBannerImg.prototype,"size",void 0);WuiBannerImg=wui_banner_img_decorate([(0,WebComponentsUtil.E)("wui-banner-img")],WuiBannerImg);const w3m_switch_address_view_styles=(0,lit.AH)`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var w3m_switch_address_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mSwitchAddressView=class W3mSwitchAddressView extends lit.WF{constructor(){super();this.metadata=OptionsController.H.state.metadata;this.allAccounts=AccountController.U.state.allAccounts||[];this.balances={};this.labels=AccountController.U.state.addressLabels;this.currentAddress=AccountController.U.state.address||"";this.caipNetwork=ChainController.W.state.activeCaipNetwork;AccountController.U.subscribeKey("allAccounts",(allAccounts=>{this.allAccounts=allAccounts}))}connectedCallback(){super.connectedCallback();this.allAccounts.forEach((account=>{BlockchainApiController.T.getBalance(account.address,this.caipNetwork?.caipNetworkId).then((response=>{let total=this.balances[account.address]||0;if(response.balances.length>0){total=response.balances.reduce(((acc,balance)=>acc+(balance?.value||0)),0)}this.balances[account.address]=total;this.requestUpdate()}))}))}getAddressIcon(type){if(type==="smartAccount"){return"lightbulb"}return"mail"}render(){return(0,lit.qy)`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${(0,if_defined.J)(this.metadata?.icons[0])}
          text=${(0,if_defined.J)(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(((account,index)=>this.getAddressTemplate(account,index)))}
      </wui-flex>
    `}getAddressTemplate(account,index){const label=this.labels?.get(account.address);const namespace=ChainController.W.state.activeChain;const connectorId=ConnectorController.a.getConnectorId(namespace);const shouldShowIcon=connectorId===ConstantsUtil.o.CONNECTOR_ID.AUTH;return(0,lit.qy)`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${account.address}></wui-avatar>
          ${shouldShowIcon?(0,lit.qy)`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(account.type)}"
                ?border=${true}
              ></wui-icon-box>`:(0,lit.qy)`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${label?label:esm_exports.Zv.getTruncateString({string:account.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[account.address]==="number"?`$${this.balances[account.address]?.toFixed(2)}`:(0,lit.qy)`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${account.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":(0,lit.qy)`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${index}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(account.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(address){const caipNetwork=ChainController.W.state.activeCaipNetwork;const activeChainNamespace=caipNetwork?.chainNamespace;const caipAddress=`${activeChainNamespace}:${caipNetwork?.id}:${address}`;AccountController.U.setCaipAddress(caipAddress,activeChainNamespace);ModalController.W.close()}};W3mSwitchAddressView.styles=w3m_switch_address_view_styles;w3m_switch_address_view_decorate([(0,decorators.wk)()],W3mSwitchAddressView.prototype,"allAccounts",void 0);w3m_switch_address_view_decorate([(0,decorators.wk)()],W3mSwitchAddressView.prototype,"balances",void 0);W3mSwitchAddressView=w3m_switch_address_view_decorate([(0,esm_exports.EM)("w3m-switch-address-view")],W3mSwitchAddressView);var ref=__webpack_require__(3131);const wui_switch_styles=(0,lit.AH)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var wui_switch_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiSwitch=class WuiSwitch extends lit.WF{constructor(){super(...arguments);this.inputElementRef=(0,ref._)();this.checked=undefined}render(){return(0,lit.qy)`
      <label>
        <input
          ${(0,ref.K)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,if_defined.J)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:true,composed:true}))}};WuiSwitch.styles=[ThemeUtil.W5,ThemeUtil.fD,ThemeUtil.ck,wui_switch_styles];wui_switch_decorate([(0,decorators.MZ)({type:Boolean})],WuiSwitch.prototype,"checked",void 0);WuiSwitch=wui_switch_decorate([(0,WebComponentsUtil.E)("wui-switch")],WuiSwitch);const wui_certified_switch_styles=(0,lit.AH)`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var wui_certified_switch_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiCertifiedSwitch=class WuiCertifiedSwitch extends lit.WF{constructor(){super(...arguments);this.checked=undefined}render(){return(0,lit.qy)`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,if_defined.J)(this.checked)}></wui-switch>
      </button>
    `}};WuiCertifiedSwitch.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_certified_switch_styles];wui_certified_switch_decorate([(0,decorators.MZ)({type:Boolean})],WuiCertifiedSwitch.prototype,"checked",void 0);WuiCertifiedSwitch=wui_certified_switch_decorate([(0,WebComponentsUtil.E)("wui-certified-switch")],WuiCertifiedSwitch);const wui_input_element_styles=(0,lit.AH)`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var wui_input_element_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiInputElement=class WuiInputElement extends lit.WF{constructor(){super(...arguments);this.icon="copy"}render(){return(0,lit.qy)`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};WuiInputElement.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_input_element_styles];wui_input_element_decorate([(0,decorators.MZ)()],WuiInputElement.prototype,"icon",void 0);WuiInputElement=wui_input_element_decorate([(0,WebComponentsUtil.E)("wui-input-element")],WuiInputElement);var wui_input_text=__webpack_require__(72407);const wui_search_bar_styles=(0,lit.AH)`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var wui_search_bar_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiSearchBar=class WuiSearchBar extends lit.WF{constructor(){super(...arguments);this.inputComponentRef=(0,ref._)()}render(){return(0,lit.qy)`
      <wui-input-text
        ${(0,ref.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const inputComponent=this.inputComponentRef.value;const inputElement=inputComponent?.inputElementRef.value;if(inputElement){inputElement.value="";inputElement.focus();inputElement.dispatchEvent(new Event("input"))}}};WuiSearchBar.styles=[ThemeUtil.W5,wui_search_bar_styles];WuiSearchBar=wui_search_bar_decorate([(0,WebComponentsUtil.E)("wui-search-bar")],WuiSearchBar);var ApiController=__webpack_require__(56913);var networkMd=__webpack_require__(94832);var wui_shimmer=__webpack_require__(91630);const wui_card_select_loader_styles=(0,lit.AH)`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var wui_card_select_loader_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiCardSelectLoader=class WuiCardSelectLoader extends lit.WF{constructor(){super(...arguments);this.type="wallet"}render(){return(0,lit.qy)`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){if(this.type==="network"){return(0,lit.qy)` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${networkMd.a}`}return(0,lit.qy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};WuiCardSelectLoader.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_card_select_loader_styles];wui_card_select_loader_decorate([(0,decorators.MZ)()],WuiCardSelectLoader.prototype,"type",void 0);WuiCardSelectLoader=wui_card_select_loader_decorate([(0,WebComponentsUtil.E)("wui-card-select-loader")],WuiCardSelectLoader);const wui_grid_styles=(0,lit.AH)`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var wui_grid_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiGrid=class WuiGrid extends lit.WF{render(){this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&UiHelperUtil.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&UiHelperUtil.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&UiHelperUtil.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&UiHelperUtil.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&UiHelperUtil.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&UiHelperUtil.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&UiHelperUtil.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&UiHelperUtil.Z.getSpacingStyles(this.margin,3)};\n    `;return(0,lit.qy)`<slot></slot>`}};WuiGrid.styles=[ThemeUtil.W5,wui_grid_styles];wui_grid_decorate([(0,decorators.MZ)()],WuiGrid.prototype,"gridTemplateRows",void 0);wui_grid_decorate([(0,decorators.MZ)()],WuiGrid.prototype,"gridTemplateColumns",void 0);wui_grid_decorate([(0,decorators.MZ)()],WuiGrid.prototype,"justifyItems",void 0);wui_grid_decorate([(0,decorators.MZ)()],WuiGrid.prototype,"alignItems",void 0);wui_grid_decorate([(0,decorators.MZ)()],WuiGrid.prototype,"justifyContent",void 0);wui_grid_decorate([(0,decorators.MZ)()],WuiGrid.prototype,"alignContent",void 0);wui_grid_decorate([(0,decorators.MZ)()],WuiGrid.prototype,"columnGap",void 0);wui_grid_decorate([(0,decorators.MZ)()],WuiGrid.prototype,"rowGap",void 0);wui_grid_decorate([(0,decorators.MZ)()],WuiGrid.prototype,"gap",void 0);wui_grid_decorate([(0,decorators.MZ)()],WuiGrid.prototype,"padding",void 0);wui_grid_decorate([(0,decorators.MZ)()],WuiGrid.prototype,"margin",void 0);WuiGrid=wui_grid_decorate([(0,WebComponentsUtil.E)("wui-grid")],WuiGrid);var WalletUtil=__webpack_require__(20474);var exports_wui_shimmer=__webpack_require__(61306);var wui_wallet_image=__webpack_require__(72540);const w3m_all_wallets_list_item_styles=(0,lit.AH)`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var w3m_all_wallets_list_item_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAllWalletsListItem=class W3mAllWalletsListItem extends lit.WF{constructor(){super();this.observer=new IntersectionObserver((()=>undefined));this.visible=false;this.imageSrc=undefined;this.imageLoading=false;this.wallet=undefined;this.observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{if(entry.isIntersecting){this.visible=true;this.fetchImageSrc()}else{this.visible=false}}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const certified=this.wallet?.badge_type==="certified";return(0,lit.qy)`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,if_defined.J)(certified?"certified":undefined)}
            >${this.wallet?.name}</wui-text
          >
          ${certified?(0,lit.qy)`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){if(!this.visible&&!this.imageSrc||this.imageLoading){return this.shimmerTemplate()}return(0,lit.qy)`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,if_defined.J)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return(0,lit.qy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){if(!this.wallet){return}this.imageSrc=AssetUtil.$.getWalletImage(this.wallet);if(this.imageSrc){return}this.imageLoading=true;this.imageSrc=await AssetUtil.$.fetchWalletImage(this.wallet.image_id);this.imageLoading=false}};W3mAllWalletsListItem.styles=w3m_all_wallets_list_item_styles;w3m_all_wallets_list_item_decorate([(0,decorators.wk)()],W3mAllWalletsListItem.prototype,"visible",void 0);w3m_all_wallets_list_item_decorate([(0,decorators.wk)()],W3mAllWalletsListItem.prototype,"imageSrc",void 0);w3m_all_wallets_list_item_decorate([(0,decorators.wk)()],W3mAllWalletsListItem.prototype,"imageLoading",void 0);w3m_all_wallets_list_item_decorate([(0,decorators.MZ)()],W3mAllWalletsListItem.prototype,"wallet",void 0);W3mAllWalletsListItem=w3m_all_wallets_list_item_decorate([(0,esm_exports.EM)("w3m-all-wallets-list-item")],W3mAllWalletsListItem);const w3m_all_wallets_list_styles=(0,lit.AH)`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var w3m_all_wallets_list_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const PAGINATOR_ID="local-paginator";let W3mAllWalletsList=class W3mAllWalletsList extends lit.WF{constructor(){super();this.unsubscribe=[];this.paginationObserver=undefined;this.loading=!ApiController.N.state.wallets.length;this.wallets=ApiController.N.state.wallets;this.recommended=ApiController.N.state.recommended;this.featured=ApiController.N.state.featured;this.filteredWallets=ApiController.N.state.filteredWallets;this.unsubscribe.push(...[ApiController.N.subscribeKey("wallets",(val=>this.wallets=val)),ApiController.N.subscribeKey("recommended",(val=>this.recommended=val)),ApiController.N.subscribeKey("featured",(val=>this.featured=val)),ApiController.N.subscribeKey("filteredWallets",(val=>this.filteredWallets=val))])}firstUpdated(){this.initialFetch();this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()));this.paginationObserver?.disconnect()}render(){return(0,lit.qy)`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=true;const gridEl=this.shadowRoot?.querySelector("wui-grid");if(gridEl){await ApiController.N.fetchWalletsByPage({page:1});await gridEl.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished;this.loading=false;gridEl.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}shimmerTemplate(items,id){return[...Array(items)].map((()=>(0,lit.qy)`
        <wui-card-select-loader type="wallet" id=${(0,if_defined.J)(id)}></wui-card-select-loader>
      `))}walletsTemplate(){const wallets=this.filteredWallets?.length>0?CoreHelperUtil.w.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):CoreHelperUtil.w.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");const walletsWithInstalled=WalletUtil.A.markWalletsAsInstalled(wallets);return walletsWithInstalled.map((wallet=>(0,lit.qy)`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(wallet)}
          .wallet=${wallet}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets,recommended,featured,count}=ApiController.N.state;const columns=window.innerWidth<352?3:4;const currentWallets=wallets.length+recommended.length;const minimumRows=Math.ceil(currentWallets/columns);let shimmerCount=minimumRows*columns-currentWallets+columns;shimmerCount-=wallets.length?featured.length%columns:0;if(count===0&&featured.length>0){return null}if(count===0||[...featured,...wallets,...recommended].length<count){return this.shimmerTemplate(shimmerCount,PAGINATOR_ID)}return null}createPaginationObserver(){const loaderEl=this.shadowRoot?.querySelector(`#${PAGINATOR_ID}`);if(loaderEl){this.paginationObserver=new IntersectionObserver((([element])=>{if(element?.isIntersecting&&!this.loading){const{page,count,wallets}=ApiController.N.state;if(wallets.length<count){ApiController.N.fetchWalletsByPage({page:page+1})}}}));this.paginationObserver.observe(loaderEl)}}onConnectWallet(wallet){ConnectorController.a.selectWalletConnector(wallet)}};W3mAllWalletsList.styles=w3m_all_wallets_list_styles;w3m_all_wallets_list_decorate([(0,decorators.wk)()],W3mAllWalletsList.prototype,"loading",void 0);w3m_all_wallets_list_decorate([(0,decorators.wk)()],W3mAllWalletsList.prototype,"wallets",void 0);w3m_all_wallets_list_decorate([(0,decorators.wk)()],W3mAllWalletsList.prototype,"recommended",void 0);w3m_all_wallets_list_decorate([(0,decorators.wk)()],W3mAllWalletsList.prototype,"featured",void 0);w3m_all_wallets_list_decorate([(0,decorators.wk)()],W3mAllWalletsList.prototype,"filteredWallets",void 0);W3mAllWalletsList=w3m_all_wallets_list_decorate([(0,esm_exports.EM)("w3m-all-wallets-list")],W3mAllWalletsList);var exports_wui_loading_spinner=__webpack_require__(99941);const w3m_all_wallets_search_styles=(0,lit.AH)`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var w3m_all_wallets_search_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAllWalletsSearch=class W3mAllWalletsSearch extends lit.WF{constructor(){super(...arguments);this.prevQuery="";this.prevBadge=undefined;this.loading=true;this.query=""}render(){this.onSearch();return this.loading?(0,lit.qy)`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){if(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge){this.prevQuery=this.query;this.prevBadge=this.badge;this.loading=true;await ApiController.N.searchWallet({search:this.query,badge:this.badge});this.loading=false}}walletsTemplate(){const{search}=ApiController.N.state;const wallets=WalletUtil.A.markWalletsAsInstalled(search);if(!search.length){return(0,lit.qy)`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}return(0,lit.qy)`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${wallets.map((wallet=>(0,lit.qy)`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(wallet)}
              .wallet=${wallet}
              data-testid="wallet-search-item-${wallet.id}"
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `}onConnectWallet(wallet){ConnectorController.a.selectWalletConnector(wallet)}};W3mAllWalletsSearch.styles=w3m_all_wallets_search_styles;w3m_all_wallets_search_decorate([(0,decorators.wk)()],W3mAllWalletsSearch.prototype,"loading",void 0);w3m_all_wallets_search_decorate([(0,decorators.MZ)()],W3mAllWalletsSearch.prototype,"query",void 0);w3m_all_wallets_search_decorate([(0,decorators.MZ)()],W3mAllWalletsSearch.prototype,"badge",void 0);W3mAllWalletsSearch=w3m_all_wallets_search_decorate([(0,esm_exports.EM)("w3m-all-wallets-search")],W3mAllWalletsSearch);var w3m_all_wallets_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAllWalletsView=class W3mAllWalletsView extends lit.WF{constructor(){super(...arguments);this.search="";this.onDebouncedSearch=CoreHelperUtil.w.debounce((value=>{this.search=value}))}render(){const isSearch=this.search.length>=2;return(0,lit.qy)`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch||this.badge?(0,lit.qy)`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,if_defined.J)(this.badge)}
          ></w3m-all-wallets-search>`:(0,lit.qy)`<w3m-all-wallets-list badge=${(0,if_defined.J)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(event){this.onDebouncedSearch(event.detail)}onClick(){if(this.badge==="certified"){this.badge=undefined;return}this.badge="certified";SnackController.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){if(CoreHelperUtil.w.isMobile()){return(0,lit.qy)`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `}return null}onWalletConnectQr(){RouterController.I.push("ConnectingWalletConnect")}};w3m_all_wallets_view_decorate([(0,decorators.wk)()],W3mAllWalletsView.prototype,"search",void 0);w3m_all_wallets_view_decorate([(0,decorators.wk)()],W3mAllWalletsView.prototype,"badge",void 0);W3mAllWalletsView=w3m_all_wallets_view_decorate([(0,esm_exports.EM)("w3m-all-wallets-view")],W3mAllWalletsView);var state=__webpack_require__(50250);var class_map=__webpack_require__(67989);var OptionsStateController=__webpack_require__(30934);const wui_list_button_styles=(0,lit.AH)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var wui_list_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListButton=class WuiListButton extends lit.WF{constructor(){super(...arguments);this.text="";this.disabled=false;this.tabIdx=undefined}render(){return(0,lit.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,if_defined.J)(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};WuiListButton.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_list_button_styles];wui_list_button_decorate([(0,decorators.MZ)()],WuiListButton.prototype,"text",void 0);wui_list_button_decorate([(0,decorators.MZ)({type:Boolean})],WuiListButton.prototype,"disabled",void 0);wui_list_button_decorate([(0,decorators.MZ)()],WuiListButton.prototype,"tabIdx",void 0);WuiListButton=wui_list_button_decorate([(0,WebComponentsUtil.E)("wui-list-button")],WuiListButton);var wui_separator=__webpack_require__(97466);var src_ConstantsUtil=__webpack_require__(42462);var wui_email_input=__webpack_require__(64879);const w3m_email_login_widget_styles=(0,lit.AH)`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var w3m_email_login_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mEmailLoginWidget=class W3mEmailLoginWidget extends lit.WF{constructor(){super(...arguments);this.unsubscribe=[];this.formRef=(0,ref._)();this.email="";this.loading=false;this.error=""}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}firstUpdated(){this.formRef.value?.addEventListener("keydown",(event=>{if(event.key==="Enter"){this.onSubmitEmail(event)}}))}render(){return(0,lit.qy)`
      <form ${(0,ref.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,if_defined.J)(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){const showSubmit=!this.loading&&this.email.length>3;return showSubmit?(0,lit.qy)`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?(0,lit.qy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){if(this.error){return(0,lit.qy)`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`}return null}onEmailInputChange(event){this.email=event.detail.trim();this.error=""}async onSubmitEmail(event){const isAvailableChain=ConstantsUtil.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((chain=>chain===ChainController.W.state.activeChain));if(!isAvailableChain){const caipNetwork=ChainController.W.getFirstCaipNetworkSupportsAuthConnector();if(caipNetwork){RouterController.I.push("SwitchNetwork",{network:caipNetwork});return}}try{if(this.loading){return}this.loading=true;event.preventDefault();const authConnector=ConnectorController.a.getAuthConnector();if(!authConnector){throw new Error("w3m-email-login-widget: Auth connector not found")}const{action}=await authConnector.provider.connectEmail({email:this.email});EventsController.E.sendEvent({type:"track",event:"EMAIL_SUBMITTED"});if(action==="VERIFY_OTP"){EventsController.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"});RouterController.I.push("EmailVerifyOtp",{email:this.email})}else if(action==="VERIFY_DEVICE"){RouterController.I.push("EmailVerifyDevice",{email:this.email})}else if(action==="CONNECT"){await ConnectionController.x.connectExternal(authConnector,ChainController.W.state.activeChain);RouterController.I.replace("Account")}}catch(error){const parsedError=CoreHelperUtil.w.parseError(error);if(parsedError?.includes("Invalid email")){this.error="Invalid email. Try again."}else{SnackController.P.showError(error)}}finally{this.loading=false}}onFocusEvent(){EventsController.E.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};W3mEmailLoginWidget.styles=w3m_email_login_widget_styles;w3m_email_login_widget_decorate([(0,decorators.MZ)()],W3mEmailLoginWidget.prototype,"tabIdx",void 0);w3m_email_login_widget_decorate([(0,decorators.wk)()],W3mEmailLoginWidget.prototype,"email",void 0);w3m_email_login_widget_decorate([(0,decorators.wk)()],W3mEmailLoginWidget.prototype,"loading",void 0);w3m_email_login_widget_decorate([(0,decorators.wk)()],W3mEmailLoginWidget.prototype,"error",void 0);W3mEmailLoginWidget=w3m_email_login_widget_decorate([(0,esm_exports.EM)("w3m-email-login-widget")],W3mEmailLoginWidget);var w3m_legal_checkbox=__webpack_require__(25452);var w3m_legal_footer=__webpack_require__(78899);var AlertController=__webpack_require__(64767);var SocialsUtil=__webpack_require__(18001);var wui_list_social=__webpack_require__(35993);var wui_logo=__webpack_require__(73218);const wui_logo_select_styles=(0,lit.AH)`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var wui_logo_select_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLogoSelect=class WuiLogoSelect extends lit.WF{constructor(){super(...arguments);this.logo="google";this.disabled=false;this.tabIdx=undefined}render(){return(0,lit.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,if_defined.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};WuiLogoSelect.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_logo_select_styles];wui_logo_select_decorate([(0,decorators.MZ)()],WuiLogoSelect.prototype,"logo",void 0);wui_logo_select_decorate([(0,decorators.MZ)({type:Boolean})],WuiLogoSelect.prototype,"disabled",void 0);wui_logo_select_decorate([(0,decorators.MZ)()],WuiLogoSelect.prototype,"tabIdx",void 0);WuiLogoSelect=wui_logo_select_decorate([(0,WebComponentsUtil.E)("wui-logo-select")],WuiLogoSelect);var W3mFrameProvider=__webpack_require__(4048);const w3m_social_login_widget_styles=(0,lit.AH)`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var w3m_social_login_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const MAX_TOP_VIEW=2;const MAXIMUM_LENGTH=6;let W3mSocialLoginWidget=class W3mSocialLoginWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.walletGuide="get-started";this.tabIdx=undefined;this.connectors=ConnectorController.a.state.connectors;this.features=OptionsController.H.state.features;this.authConnector=this.connectors.find((c=>c.type==="AUTH"));this.isPwaLoading=false;this.unsubscribe.push(ConnectorController.a.subscribeKey("connectors",(val=>{this.connectors=val;this.authConnector=this.connectors.find((c=>c.type==="AUTH"))})),OptionsController.H.subscribeKey("features",(val=>this.features=val)))}connectedCallback(){super.connectedCallback();this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const isCreateWalletPage=this.walletGuide==="explore";let socials=this.features?.socials;if(!socials&&isCreateWalletPage){socials=utils_ConstantsUtil.oU.DEFAULT_FEATURES.socials;return this.renderTopViewContent(socials)}if(!socials){return null}return this.renderTopViewContent(socials)}renderTopViewContent(socials){if(socials.length===2){return(0,lit.qy)` <wui-flex gap="xs">
        ${socials.slice(0,MAX_TOP_VIEW).map((social=>(0,lit.qy)`<wui-logo-select
              data-testid=${`social-selector-${social}`}
              @click=${()=>{this.onSocialClick(social)}}
              logo=${social}
              tabIdx=${(0,if_defined.J)(this.tabIdx)}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`))}
      </wui-flex>`}return(0,lit.qy)` <wui-list-social
      data-testid=${`social-selector-${socials[0]}`}
      @click=${()=>{this.onSocialClick(socials[0])}}
      logo=${(0,if_defined.J)(socials[0])}
      align="center"
      name=${`Continue with ${socials[0]}`}
      tabIdx=${(0,if_defined.J)(this.tabIdx)}
      ?disabled=${this.isPwaLoading}
    ></wui-list-social>`}bottomViewTemplate(){let socials=this.features?.socials;const isCreateWalletPage=this.walletGuide==="explore";const isSocialDisabled=!this.authConnector||!socials||!socials?.length;if(isSocialDisabled&&isCreateWalletPage){socials=utils_ConstantsUtil.oU.DEFAULT_FEATURES.socials}if(!socials){return null}if(socials.length<=MAX_TOP_VIEW){return null}if(socials&&socials.length>MAXIMUM_LENGTH){return(0,lit.qy)`<wui-flex gap="xs">
        ${socials.slice(1,MAXIMUM_LENGTH-1).map((social=>(0,lit.qy)`<wui-logo-select
              data-testid=${`social-selector-${social}`}
              @click=${()=>{this.onSocialClick(social)}}
              logo=${social}
              tabIdx=${(0,if_defined.J)(this.tabIdx)}
              ?focusable=${this.tabIdx!==undefined&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`))}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,if_defined.J)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading}
        ></wui-logo-select>
      </wui-flex>`}if(!socials){return null}return(0,lit.qy)`<wui-flex gap="xs">
      ${socials.slice(1,socials.length).map((social=>(0,lit.qy)`<wui-logo-select
            data-testid=${`social-selector-${social}`}
            @click=${()=>{this.onSocialClick(social)}}
            logo=${social}
            tabIdx=${(0,if_defined.J)(this.tabIdx)}
            ?focusable=${this.tabIdx!==undefined&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading}
          ></wui-logo-select>`))}
    </wui-flex>`}onMoreSocialsClick(){RouterController.I.push("ConnectSocials")}async onSocialClick(socialProvider){const isAvailableChain=ConstantsUtil.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((chain=>chain===ChainController.W.state.activeChain));if(!isAvailableChain){const caipNetwork=ChainController.W.getFirstCaipNetworkSupportsAuthConnector();if(caipNetwork){RouterController.I.push("SwitchNetwork",{network:caipNetwork});return}}if(socialProvider){await(0,SocialsUtil.Up)(socialProvider)}}async handlePwaFrameLoad(){if(CoreHelperUtil.w.isPWA()){this.isPwaLoading=true;try{if(this.authConnector?.provider instanceof W3mFrameProvider.Y){await this.authConnector.provider.init()}}catch(error){AlertController.h.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:error.message},"error")}finally{this.isPwaLoading=false}}}};W3mSocialLoginWidget.styles=w3m_social_login_widget_styles;w3m_social_login_widget_decorate([(0,decorators.MZ)()],W3mSocialLoginWidget.prototype,"walletGuide",void 0);w3m_social_login_widget_decorate([(0,decorators.MZ)()],W3mSocialLoginWidget.prototype,"tabIdx",void 0);w3m_social_login_widget_decorate([(0,decorators.wk)()],W3mSocialLoginWidget.prototype,"connectors",void 0);w3m_social_login_widget_decorate([(0,decorators.wk)()],W3mSocialLoginWidget.prototype,"features",void 0);w3m_social_login_widget_decorate([(0,decorators.wk)()],W3mSocialLoginWidget.prototype,"authConnector",void 0);w3m_social_login_widget_decorate([(0,decorators.wk)()],W3mSocialLoginWidget.prototype,"isPwaLoading",void 0);W3mSocialLoginWidget=w3m_social_login_widget_decorate([(0,esm_exports.EM)("w3m-social-login-widget")],W3mSocialLoginWidget);var wui_chip=__webpack_require__(52990);const w3m_wallet_guide_styles=(0,lit.AH)`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var w3m_wallet_guide_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mWalletGuide=class W3mWalletGuide extends lit.WF{constructor(){super(...arguments);this.walletGuide="get-started"}render(){return this.walletGuide==="explore"?(0,lit.qy)`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:(0,lit.qy)`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${(0,if_defined.J)(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){RouterController.I.push("Create")}};W3mWalletGuide.styles=w3m_wallet_guide_styles;w3m_wallet_guide_decorate([(0,decorators.MZ)()],W3mWalletGuide.prototype,"tabIdx",void 0);w3m_wallet_guide_decorate([(0,decorators.MZ)()],W3mWalletGuide.prototype,"walletGuide",void 0);W3mWalletGuide=w3m_wallet_guide_decorate([(0,esm_exports.EM)("w3m-wallet-guide")],W3mWalletGuide);var composites_wui_wallet_image=__webpack_require__(24180);const wui_all_wallets_image_styles=(0,lit.AH)`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var wui_all_wallets_image_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const TOTAL_IMAGES=4;let WuiAllWalletsImage=class WuiAllWalletsImage extends lit.WF{constructor(){super(...arguments);this.walletImages=[]}render(){const isPlaceholders=this.walletImages.length<TOTAL_IMAGES;return(0,lit.qy)`${this.walletImages.slice(0,TOTAL_IMAGES).map((({src,walletName})=>(0,lit.qy)`
            <wui-wallet-image
              size="inherit"
              imageSrc=${src}
              name=${(0,if_defined.J)(walletName)}
            ></wui-wallet-image>
          `))}
      ${isPlaceholders?[...Array(TOTAL_IMAGES-this.walletImages.length)].map((()=>(0,lit.qy)` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};WuiAllWalletsImage.styles=[ThemeUtil.W5,wui_all_wallets_image_styles];wui_all_wallets_image_decorate([(0,decorators.MZ)({type:Array})],WuiAllWalletsImage.prototype,"walletImages",void 0);WuiAllWalletsImage=wui_all_wallets_image_decorate([(0,WebComponentsUtil.E)("wui-all-wallets-image")],WuiAllWalletsImage);const wui_list_wallet_styles=(0,lit.AH)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var wui_list_wallet_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListWallet=class WuiListWallet extends lit.WF{constructor(){super(...arguments);this.walletImages=[];this.imageSrc="";this.name="";this.tabIdx=undefined;this.installed=false;this.disabled=false;this.showAllWallets=false;this.loading=false;this.loadingSpinnerColor="accent-100"}render(){return(0,lit.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,if_defined.J)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){if(this.showAllWallets&&this.imageSrc){return(0,lit.qy)` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `}else if(this.showAllWallets&&this.walletIcon){return(0,lit.qy)` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `}return null}templateWalletImage(){if(!this.showAllWallets&&this.imageSrc){return(0,lit.qy)`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`}else if(!this.showAllWallets&&!this.imageSrc){return(0,lit.qy)`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}return null}templateStatus(){if(this.loading){return(0,lit.qy)`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`}else if(this.tagLabel&&this.tagVariant){return(0,lit.qy)`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`}else if(this.icon){return(0,lit.qy)`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`}return null}};WuiListWallet.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_list_wallet_styles];wui_list_wallet_decorate([(0,decorators.MZ)({type:Array})],WuiListWallet.prototype,"walletImages",void 0);wui_list_wallet_decorate([(0,decorators.MZ)()],WuiListWallet.prototype,"imageSrc",void 0);wui_list_wallet_decorate([(0,decorators.MZ)()],WuiListWallet.prototype,"name",void 0);wui_list_wallet_decorate([(0,decorators.MZ)()],WuiListWallet.prototype,"tagLabel",void 0);wui_list_wallet_decorate([(0,decorators.MZ)()],WuiListWallet.prototype,"tagVariant",void 0);wui_list_wallet_decorate([(0,decorators.MZ)()],WuiListWallet.prototype,"icon",void 0);wui_list_wallet_decorate([(0,decorators.MZ)()],WuiListWallet.prototype,"walletIcon",void 0);wui_list_wallet_decorate([(0,decorators.MZ)()],WuiListWallet.prototype,"tabIdx",void 0);wui_list_wallet_decorate([(0,decorators.MZ)({type:Boolean})],WuiListWallet.prototype,"installed",void 0);wui_list_wallet_decorate([(0,decorators.MZ)({type:Boolean})],WuiListWallet.prototype,"disabled",void 0);wui_list_wallet_decorate([(0,decorators.MZ)({type:Boolean})],WuiListWallet.prototype,"showAllWallets",void 0);wui_list_wallet_decorate([(0,decorators.MZ)({type:Boolean})],WuiListWallet.prototype,"loading",void 0);wui_list_wallet_decorate([(0,decorators.MZ)({type:String})],WuiListWallet.prototype,"loadingSpinnerColor",void 0);WuiListWallet=wui_list_wallet_decorate([(0,WebComponentsUtil.E)("wui-list-wallet")],WuiListWallet);var w3m_all_wallets_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAllWalletsWidget=class W3mAllWalletsWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.tabIdx=undefined;this.connectors=ConnectorController.a.state.connectors;this.count=ApiController.N.state.count;this.filteredCount=ApiController.N.state.filteredWallets.length;this.isFetchingRecommendedWallets=ApiController.N.state.isFetchingRecommendedWallets;this.unsubscribe.push(ConnectorController.a.subscribeKey("connectors",(val=>this.connectors=val)),ApiController.N.subscribeKey("count",(val=>this.count=val)),ApiController.N.subscribeKey("filteredWallets",(val=>this.filteredCount=val.length)),ApiController.N.subscribeKey("isFetchingRecommendedWallets",(val=>this.isFetchingRecommendedWallets=val)))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const wcConnector=this.connectors.find((c=>c.id==="walletConnect"));const{allWallets}=OptionsController.H.state;if(!wcConnector||allWallets==="HIDE"){return null}if(allWallets==="ONLY_MOBILE"&&!CoreHelperUtil.w.isMobile()){return null}const featuredCount=ApiController.N.state.featured.length;const rawCount=this.count+featuredCount;const roundedCount=rawCount<10?rawCount:Math.floor(rawCount/10)*10;const count=this.filteredCount>0?this.filteredCount:roundedCount;let tagLabel=`${count}`;if(this.filteredCount>0){tagLabel=`${this.filteredCount}`}else if(count<rawCount){tagLabel=`${count}+`}return(0,lit.qy)`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${tagLabel}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,if_defined.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){EventsController.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"});RouterController.I.push("AllWallets")}};w3m_all_wallets_widget_decorate([(0,decorators.MZ)()],W3mAllWalletsWidget.prototype,"tabIdx",void 0);w3m_all_wallets_widget_decorate([(0,decorators.wk)()],W3mAllWalletsWidget.prototype,"connectors",void 0);w3m_all_wallets_widget_decorate([(0,decorators.wk)()],W3mAllWalletsWidget.prototype,"count",void 0);w3m_all_wallets_widget_decorate([(0,decorators.wk)()],W3mAllWalletsWidget.prototype,"filteredCount",void 0);w3m_all_wallets_widget_decorate([(0,decorators.wk)()],W3mAllWalletsWidget.prototype,"isFetchingRecommendedWallets",void 0);W3mAllWalletsWidget=w3m_all_wallets_widget_decorate([(0,esm_exports.EM)("w3m-all-wallets-widget")],W3mAllWalletsWidget);var ConnectorUtil=__webpack_require__(11156);var w3m_connect_announced_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectAnnouncedWidget=class W3mConnectAnnouncedWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.tabIdx=undefined;this.connectors=ConnectorController.a.state.connectors;this.unsubscribe.push(ConnectorController.a.subscribeKey("connectors",(val=>this.connectors=val)))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const announcedConnectors=this.connectors.filter((connector=>connector.type==="ANNOUNCED"));if(!announcedConnectors?.length){this.style.cssText=`display: none`;return null}return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${announcedConnectors.filter(ConnectorUtil.g.showConnector).map((connector=>(0,lit.qy)`
              <wui-list-wallet
                imageSrc=${(0,if_defined.J)(AssetUtil.$.getConnectorImage(connector))}
                name=${connector.name??"Unknown"}
                @click=${()=>this.onConnector(connector)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${connector.id}`}
                .installed=${true}
                tabIdx=${(0,if_defined.J)(this.tabIdx)}
              >
              </wui-list-wallet>
            `))}
      </wui-flex>
    `}onConnector(connector){if(connector.id==="walletConnect"){if(CoreHelperUtil.w.isMobile()){RouterController.I.push("AllWallets")}else{RouterController.I.push("ConnectingWalletConnect")}}else{RouterController.I.push("ConnectingExternal",{connector})}}};w3m_connect_announced_widget_decorate([(0,decorators.MZ)()],W3mConnectAnnouncedWidget.prototype,"tabIdx",void 0);w3m_connect_announced_widget_decorate([(0,decorators.wk)()],W3mConnectAnnouncedWidget.prototype,"connectors",void 0);W3mConnectAnnouncedWidget=w3m_connect_announced_widget_decorate([(0,esm_exports.EM)("w3m-connect-announced-widget")],W3mConnectAnnouncedWidget);var w3m_connect_custom_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectCustomWidget=class W3mConnectCustomWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.tabIdx=undefined;this.connectors=ConnectorController.a.state.connectors;this.loading=false;this.unsubscribe.push(ConnectorController.a.subscribeKey("connectors",(val=>this.connectors=val)));if(CoreHelperUtil.w.isTelegram()&&CoreHelperUtil.w.isIos()){this.loading=!ConnectionController.x.state.wcUri;this.unsubscribe.push(ConnectionController.x.subscribeKey("wcUri",(val=>this.loading=!val)))}}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const{customWallets}=OptionsController.H.state;if(!customWallets?.length){this.style.cssText=`display: none`;return null}const wallets=this.filterOutDuplicateWallets(customWallets);return(0,lit.qy)`<wui-flex flexDirection="column" gap="xs">
      ${wallets.map((wallet=>(0,lit.qy)`
          <wui-list-wallet
            imageSrc=${(0,if_defined.J)(AssetUtil.$.getWalletImage(wallet))}
            name=${wallet.name??"Unknown"}
            @click=${()=>this.onConnectWallet(wallet)}
            data-testid=${`wallet-selector-${wallet.id}`}
            tabIdx=${(0,if_defined.J)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `))}
    </wui-flex>`}filterOutDuplicateWallets(wallets){const recent=StorageUtil.i.getRecentWallets();const connectorRDNSs=this.connectors.map((connector=>connector.info?.rdns)).filter(Boolean);const recentRDNSs=recent.map((wallet=>wallet.rdns)).filter(Boolean);const allRDNSs=connectorRDNSs.concat(recentRDNSs);if(allRDNSs.includes("io.metamask.mobile")&&CoreHelperUtil.w.isMobile()){const index=allRDNSs.indexOf("io.metamask.mobile");allRDNSs[index]="io.metamask"}const filtered=wallets.filter((wallet=>!allRDNSs.includes(String(wallet?.rdns))));return filtered}onConnectWallet(wallet){if(this.loading){return}RouterController.I.push("ConnectingWalletConnect",{wallet})}};w3m_connect_custom_widget_decorate([(0,decorators.MZ)()],W3mConnectCustomWidget.prototype,"tabIdx",void 0);w3m_connect_custom_widget_decorate([(0,decorators.wk)()],W3mConnectCustomWidget.prototype,"connectors",void 0);w3m_connect_custom_widget_decorate([(0,decorators.wk)()],W3mConnectCustomWidget.prototype,"loading",void 0);W3mConnectCustomWidget=w3m_connect_custom_widget_decorate([(0,esm_exports.EM)("w3m-connect-custom-widget")],W3mConnectCustomWidget);var w3m_connect_external_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectExternalWidget=class W3mConnectExternalWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.tabIdx=undefined;this.connectors=ConnectorController.a.state.connectors;this.unsubscribe.push(ConnectorController.a.subscribeKey("connectors",(val=>this.connectors=val)))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const externalConnectors=this.connectors.filter((connector=>connector.type==="EXTERNAL"));const filteredOutExcludedConnectors=externalConnectors.filter(ConnectorUtil.g.showConnector);const filteredOutCoinbaseConnectors=filteredOutExcludedConnectors.filter((connector=>connector.id!==ConstantsUtil.o.CONNECTOR_ID.COINBASE_SDK));if(!filteredOutCoinbaseConnectors?.length){this.style.cssText=`display: none`;return null}return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${filteredOutCoinbaseConnectors.map((connector=>(0,lit.qy)`
            <wui-list-wallet
              imageSrc=${(0,if_defined.J)(AssetUtil.$.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name??"Unknown"}
              data-testid=${`wallet-selector-external-${connector.id}`}
              @click=${()=>this.onConnector(connector)}
              tabIdx=${(0,if_defined.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnector(connector){RouterController.I.push("ConnectingExternal",{connector})}};w3m_connect_external_widget_decorate([(0,decorators.MZ)()],W3mConnectExternalWidget.prototype,"tabIdx",void 0);w3m_connect_external_widget_decorate([(0,decorators.wk)()],W3mConnectExternalWidget.prototype,"connectors",void 0);W3mConnectExternalWidget=w3m_connect_external_widget_decorate([(0,esm_exports.EM)("w3m-connect-external-widget")],W3mConnectExternalWidget);var w3m_connect_featured_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectFeaturedWidget=class W3mConnectFeaturedWidget extends lit.WF{constructor(){super(...arguments);this.tabIdx=undefined;this.wallets=[]}render(){if(!this.wallets.length){this.style.cssText=`display: none`;return null}return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((wallet=>(0,lit.qy)`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${wallet.id}`}
              imageSrc=${(0,if_defined.J)(AssetUtil.$.getWalletImage(wallet))}
              name=${wallet.name??"Unknown"}
              @click=${()=>this.onConnectWallet(wallet)}
              tabIdx=${(0,if_defined.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnectWallet(wallet){ConnectorController.a.selectWalletConnector(wallet)}};w3m_connect_featured_widget_decorate([(0,decorators.MZ)()],W3mConnectFeaturedWidget.prototype,"tabIdx",void 0);w3m_connect_featured_widget_decorate([(0,decorators.MZ)()],W3mConnectFeaturedWidget.prototype,"wallets",void 0);W3mConnectFeaturedWidget=w3m_connect_featured_widget_decorate([(0,esm_exports.EM)("w3m-connect-featured-widget")],W3mConnectFeaturedWidget);var w3m_connect_injected_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectInjectedWidget=class W3mConnectInjectedWidget extends lit.WF{constructor(){super(...arguments);this.tabIdx=undefined;this.connectors=[]}render(){const injectedConnectors=this.connectors.filter(ConnectorUtil.g.showConnector);if(injectedConnectors.length===0){this.style.cssText=`display: none`;return null}return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${injectedConnectors.map((connector=>(0,lit.qy)`
            <wui-list-wallet
              imageSrc=${(0,if_defined.J)(AssetUtil.$.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${connector.id}`}
              @click=${()=>this.onConnector(connector)}
              tabIdx=${(0,if_defined.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnector(connector){ConnectorController.a.setActiveConnector(connector);RouterController.I.push("ConnectingExternal",{connector})}};w3m_connect_injected_widget_decorate([(0,decorators.MZ)()],W3mConnectInjectedWidget.prototype,"tabIdx",void 0);w3m_connect_injected_widget_decorate([(0,decorators.MZ)()],W3mConnectInjectedWidget.prototype,"connectors",void 0);W3mConnectInjectedWidget=w3m_connect_injected_widget_decorate([(0,esm_exports.EM)("w3m-connect-injected-widget")],W3mConnectInjectedWidget);var w3m_connect_multi_chain_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectMultiChainWidget=class W3mConnectMultiChainWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.tabIdx=undefined;this.connectors=ConnectorController.a.state.connectors;this.unsubscribe.push(ConnectorController.a.subscribeKey("connectors",(val=>this.connectors=val)))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const multiChainConnectors=this.connectors.filter((connector=>connector.type==="MULTI_CHAIN"&&connector.name!=="WalletConnect"));if(!multiChainConnectors?.length){this.style.cssText=`display: none`;return null}return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${multiChainConnectors.map((connector=>(0,lit.qy)`
            <wui-list-wallet
              imageSrc=${(0,if_defined.J)(AssetUtil.$.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${connector.id}`}
              @click=${()=>this.onConnector(connector)}
              tabIdx=${(0,if_defined.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnector(connector){ConnectorController.a.setActiveConnector(connector);RouterController.I.push("ConnectingMultiChain")}};w3m_connect_multi_chain_widget_decorate([(0,decorators.MZ)()],W3mConnectMultiChainWidget.prototype,"tabIdx",void 0);w3m_connect_multi_chain_widget_decorate([(0,decorators.wk)()],W3mConnectMultiChainWidget.prototype,"connectors",void 0);W3mConnectMultiChainWidget=w3m_connect_multi_chain_widget_decorate([(0,esm_exports.EM)("w3m-connect-multi-chain-widget")],W3mConnectMultiChainWidget);var w3m_connect_recent_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectRecentWidget=class W3mConnectRecentWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.tabIdx=undefined;this.connectors=ConnectorController.a.state.connectors;this.loading=false;this.unsubscribe.push(ConnectorController.a.subscribeKey("connectors",(val=>this.connectors=val)));if(CoreHelperUtil.w.isTelegram()&&CoreHelperUtil.w.isIos()){this.loading=!ConnectionController.x.state.wcUri;this.unsubscribe.push(ConnectionController.x.subscribeKey("wcUri",(val=>this.loading=!val)))}}render(){const recentWallets=StorageUtil.i.getRecentWallets();const filteredRecentWallets=recentWallets.filter((wallet=>!WalletUtil.A.isExcluded(wallet))).filter((wallet=>!this.hasWalletConnector(wallet))).filter((wallet=>this.isWalletCompatibleWithCurrentChain(wallet)));if(!filteredRecentWallets.length){this.style.cssText=`display: none`;return null}return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${filteredRecentWallets.map((wallet=>(0,lit.qy)`
            <wui-list-wallet
              imageSrc=${(0,if_defined.J)(AssetUtil.$.getWalletImage(wallet))}
              name=${wallet.name??"Unknown"}
              @click=${()=>this.onConnectWallet(wallet)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,if_defined.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnectWallet(wallet){if(this.loading){return}ConnectorController.a.selectWalletConnector(wallet)}hasWalletConnector(wallet){return this.connectors.some((connector=>connector.id===wallet.id||connector.name===wallet.name))}isWalletCompatibleWithCurrentChain(wallet){const currentNamespace=ChainController.W.state.activeChain;if(currentNamespace&&wallet.chains){return wallet.chains.some((c=>{const chainNamespace=c.split(":")[0];return currentNamespace===chainNamespace}))}return true}};w3m_connect_recent_widget_decorate([(0,decorators.MZ)()],W3mConnectRecentWidget.prototype,"tabIdx",void 0);w3m_connect_recent_widget_decorate([(0,decorators.wk)()],W3mConnectRecentWidget.prototype,"connectors",void 0);w3m_connect_recent_widget_decorate([(0,decorators.wk)()],W3mConnectRecentWidget.prototype,"loading",void 0);W3mConnectRecentWidget=w3m_connect_recent_widget_decorate([(0,esm_exports.EM)("w3m-connect-recent-widget")],W3mConnectRecentWidget);var w3m_connect_recommended_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectRecommendedWidget=class W3mConnectRecommendedWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.tabIdx=undefined;this.wallets=[];this.loading=false;if(CoreHelperUtil.w.isTelegram()&&CoreHelperUtil.w.isIos()){this.loading=!ConnectionController.x.state.wcUri;this.unsubscribe.push(ConnectionController.x.subscribeKey("wcUri",(val=>this.loading=!val)))}}render(){const{connectors}=ConnectorController.a.state;const{customWallets,featuredWalletIds}=OptionsController.H.state;const recentWallets=StorageUtil.i.getRecentWallets();const wcConnector=connectors.find((c=>c.id==="walletConnect"));const injectedConnectors=connectors.filter((c=>c.type==="INJECTED"||c.type==="ANNOUNCED"||c.type==="MULTI_CHAIN"));const injectedWallets=injectedConnectors.filter((i=>i.name!=="Browser Wallet"));if(!wcConnector){return null}if(featuredWalletIds||customWallets||!this.wallets.length){this.style.cssText=`display: none`;return null}const overrideLength=injectedWallets.length+recentWallets.length;const maxRecommended=Math.max(0,2-overrideLength);const wallets=WalletUtil.A.filterOutDuplicateWallets(this.wallets).slice(0,maxRecommended);if(!wallets.length){this.style.cssText=`display: none`;return null}return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="xs">
        ${wallets.map((wallet=>(0,lit.qy)`
            <wui-list-wallet
              imageSrc=${(0,if_defined.J)(AssetUtil.$.getWalletImage(wallet))}
              name=${wallet?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(wallet)}
              tabIdx=${(0,if_defined.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnectWallet(wallet){if(this.loading){return}const connector=ConnectorController.a.getConnector(wallet.id,wallet.rdns);if(connector){RouterController.I.push("ConnectingExternal",{connector})}else{RouterController.I.push("ConnectingWalletConnect",{wallet})}}};w3m_connect_recommended_widget_decorate([(0,decorators.MZ)()],W3mConnectRecommendedWidget.prototype,"tabIdx",void 0);w3m_connect_recommended_widget_decorate([(0,decorators.MZ)()],W3mConnectRecommendedWidget.prototype,"wallets",void 0);w3m_connect_recommended_widget_decorate([(0,decorators.wk)()],W3mConnectRecommendedWidget.prototype,"loading",void 0);W3mConnectRecommendedWidget=w3m_connect_recommended_widget_decorate([(0,esm_exports.EM)("w3m-connect-recommended-widget")],W3mConnectRecommendedWidget);var w3m_connect_walletconnect_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectWalletConnectWidget=class W3mConnectWalletConnectWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.tabIdx=undefined;this.connectors=ConnectorController.a.state.connectors;this.connectorImages=AssetController.j.state.connectorImages;this.unsubscribe.push(ConnectorController.a.subscribeKey("connectors",(val=>this.connectors=val)),AssetController.j.subscribeKey("connectorImages",(val=>this.connectorImages=val)))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){if(CoreHelperUtil.w.isMobile()){this.style.cssText=`display: none`;return null}const connector=this.connectors.find((c=>c.id==="walletConnect"));if(!connector){this.style.cssText=`display: none`;return null}const connectorImage=connector.imageUrl||this.connectorImages[connector?.imageId??""];return(0,lit.qy)`
      <wui-list-wallet
        imageSrc=${(0,if_defined.J)(connectorImage)}
        name=${connector.name??"Unknown"}
        @click=${()=>this.onConnector(connector)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,if_defined.J)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(connector){ConnectorController.a.setActiveConnector(connector);RouterController.I.push("ConnectingWalletConnect")}};w3m_connect_walletconnect_widget_decorate([(0,decorators.MZ)()],W3mConnectWalletConnectWidget.prototype,"tabIdx",void 0);w3m_connect_walletconnect_widget_decorate([(0,decorators.wk)()],W3mConnectWalletConnectWidget.prototype,"connectors",void 0);w3m_connect_walletconnect_widget_decorate([(0,decorators.wk)()],W3mConnectWalletConnectWidget.prototype,"connectorImages",void 0);W3mConnectWalletConnectWidget=w3m_connect_walletconnect_widget_decorate([(0,esm_exports.EM)("w3m-connect-walletconnect-widget")],W3mConnectWalletConnectWidget);const w3m_connector_list_styles=(0,lit.AH)`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var w3m_connector_list_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectorList=class W3mConnectorList extends lit.WF{constructor(){super();this.unsubscribe=[];this.tabIdx=undefined;this.connectors=ConnectorController.a.state.connectors;this.recommended=ApiController.N.state.recommended;this.featured=ApiController.N.state.featured;this.unsubscribe.push(ConnectorController.a.subscribeKey("connectors",(val=>this.connectors=val)),ApiController.N.subscribeKey("recommended",(val=>this.recommended=val)),ApiController.N.subscribeKey("featured",(val=>this.featured=val)))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom,recent,announced,injected,multiChain,recommended,featured,external}=ConnectorUtil.g.getConnectorsByType(this.connectors,this.recommended,this.featured);const connectorTypeOrder=ConnectorUtil.g.getConnectorTypeOrder({custom,recent,announced,injected,multiChain,recommended,featured,external});return connectorTypeOrder.map((type=>{switch(type){case"injected":return(0,lit.qy)`
            ${multiChain.length?(0,lit.qy)`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,if_defined.J)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${announced.length?(0,lit.qy)`<w3m-connect-announced-widget
                  tabIdx=${(0,if_defined.J)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${injected.length?(0,lit.qy)`<w3m-connect-injected-widget
                  .connectors=${injected}
                  tabIdx=${(0,if_defined.J)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return(0,lit.qy)`<w3m-connect-walletconnect-widget
            tabIdx=${(0,if_defined.J)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return(0,lit.qy)`<w3m-connect-recent-widget
            tabIdx=${(0,if_defined.J)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return(0,lit.qy)`<w3m-connect-featured-widget
            .wallets=${featured}
            tabIdx=${(0,if_defined.J)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return(0,lit.qy)`<w3m-connect-custom-widget
            tabIdx=${(0,if_defined.J)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return(0,lit.qy)`<w3m-connect-external-widget
            tabIdx=${(0,if_defined.J)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return(0,lit.qy)`<w3m-connect-recommended-widget
            .wallets=${recommended}
            tabIdx=${(0,if_defined.J)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:console.warn(`Unknown connector type: ${type}`);return null}}))}};W3mConnectorList.styles=w3m_connector_list_styles;w3m_connector_list_decorate([(0,decorators.MZ)()],W3mConnectorList.prototype,"tabIdx",void 0);w3m_connector_list_decorate([(0,decorators.wk)()],W3mConnectorList.prototype,"connectors",void 0);w3m_connector_list_decorate([(0,decorators.wk)()],W3mConnectorList.prototype,"recommended",void 0);w3m_connector_list_decorate([(0,decorators.wk)()],W3mConnectorList.prototype,"featured",void 0);W3mConnectorList=w3m_connector_list_decorate([(0,esm_exports.EM)("w3m-connector-list")],W3mConnectorList);var w3m_wallet_login_list_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mWalletLoginList=class W3mWalletLoginList extends lit.WF{constructor(){super(...arguments);this.tabIdx=undefined}render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${(0,if_defined.J)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,if_defined.J)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};w3m_wallet_login_list_decorate([(0,decorators.MZ)()],W3mWalletLoginList.prototype,"tabIdx",void 0);W3mWalletLoginList=w3m_wallet_login_list_decorate([(0,esm_exports.EM)("w3m-wallet-login-list")],W3mWalletLoginList);const w3m_connect_view_styles=(0,lit.AH)`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var w3m_connect_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const SCROLL_THRESHOLD=470;let W3mConnectView=class W3mConnectView extends lit.WF{constructor(){super();this.unsubscribe=[];this.connectors=ConnectorController.a.state.connectors;this.authConnector=this.connectors.find((c=>c.type==="AUTH"));this.features=OptionsController.H.state.features;this.enableWallets=OptionsController.H.state.enableWallets;this.noAdapters=ChainController.W.state.noAdapters;this.walletGuide="get-started";this.checked=OptionsStateController.o.state.isLegalCheckboxChecked;this.isEmailEnabled=this.features?.email&&!ChainController.W.state.noAdapters;this.isSocialEnabled=this.features?.socials&&this.features.socials.length>0&&!ChainController.W.state.noAdapters;this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors);this.unsubscribe.push(ConnectorController.a.subscribeKey("connectors",(val=>{this.connectors=val;this.authConnector=this.connectors.find((c=>c.type==="AUTH"));this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})),OptionsController.H.subscribeKey("features",(val=>this.setEmailAndSocialEnableCheck(val,this.noAdapters))),OptionsController.H.subscribeKey("enableWallets",(val=>this.enableWallets=val)),ChainController.W.subscribeKey("noAdapters",(val=>this.setEmailAndSocialEnableCheck(this.features,val))),OptionsStateController.o.subscribeKey("isLegalCheckboxChecked",(val=>this.checked=val)))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()));this.resizeObserver?.disconnect();const connectEl=this.shadowRoot?.querySelector(".connect");connectEl?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const connectEl=this.shadowRoot?.querySelector(".connect");if(connectEl){requestAnimationFrame(this.handleConnectListScroll.bind(this));connectEl?.addEventListener("scroll",this.handleConnectListScroll.bind(this));this.resizeObserver=new ResizeObserver((()=>{this.handleConnectListScroll()}));this.resizeObserver?.observe(connectEl);this.handleConnectListScroll()}}render(){const{termsConditionsUrl,privacyPolicyUrl}=OptionsController.H.state;const isLegalCheckbox=OptionsController.H.state.features?.legalCheckbox;const legalUrl=termsConditionsUrl||privacyPolicyUrl;const isShowLegalCheckbox=Boolean(legalUrl)&&Boolean(isLegalCheckbox)&&this.walletGuide==="get-started";const isDisabled=isShowLegalCheckbox&&!this.checked;const classes={connect:true,disabled:isDisabled};const isEnableWalletGuide=OptionsController.H.state.enableWalletGuide;const isEnableWallets=this.enableWallets;const socialOrEmailLoginEnabled=this.isSocialEnabled||this.authConnector;const tabIndex=isDisabled?-1:undefined;return(0,lit.qy)`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${(0,class_map.H)(classes)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${socialOrEmailLoginEnabled&&isEnableWallets&&isEnableWalletGuide&&this.walletGuide==="get-started"?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(tabIndex)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(isDisabled)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(features,noAdapters){this.isEmailEnabled=features?.email&&!noAdapters;this.isSocialEnabled=features?.socials&&features.socials.length>0&&!noAdapters;this.features=features;this.noAdapters=noAdapters}checkIfAuthEnabled(connectors){const namespacesWithAuthConnector=connectors.filter((c=>c.type===src_ConstantsUtil.o.CONNECTOR_TYPE_AUTH)).map((i=>i.chain));const authSupportedNamespaces=ConstantsUtil.o.AUTH_CONNECTOR_SUPPORTED_CHAINS;return authSupportedNamespaces.some((ns=>namespacesWithAuthConnector.includes(ns)))}renderConnectMethod(tabIndex){const connectMethodsOrder=WalletUtil.A.getConnectOrderMethod(this.features,this.connectors);return(0,lit.qy)`${connectMethodsOrder.map(((method,index)=>{switch(method){case"email":return(0,lit.qy)`${this.emailTemplate(tabIndex)} ${this.separatorTemplate(index,"email")}`;case"social":return(0,lit.qy)`${this.socialListTemplate(tabIndex)}
          ${this.separatorTemplate(index,"social")}`;case"wallet":return(0,lit.qy)`${this.walletListTemplate(tabIndex)}
          ${this.separatorTemplate(index,"wallet")}`;default:return null}}))}`}checkMethodEnabled(name){switch(name){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(currentIndex){const connectMethodsOrder=WalletUtil.A.getConnectOrderMethod(this.features,this.connectors);const nextMethod=connectMethodsOrder[currentIndex+1];if(!nextMethod){return undefined}const isNextMethodEnabled=this.checkMethodEnabled(nextMethod);if(isNextMethodEnabled){return nextMethod}return this.checkIsThereNextMethod(currentIndex+1)}separatorTemplate(index,type){const nextEnabledMethod=this.checkIsThereNextMethod(index);const isExplore=this.walletGuide==="explore";switch(type){case"wallet":{const isWalletEnable=this.enableWallets;return isWalletEnable&&nextEnabledMethod&&!isExplore?(0,lit.qy)`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}case"email":{const isNextMethodSocial=nextEnabledMethod==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!isNextMethodSocial&&nextEnabledMethod?(0,lit.qy)`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const isNextMethodEmail=nextEnabledMethod==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!isNextMethodEmail&&nextEnabledMethod?(0,lit.qy)`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(tabIndex){if(!this.isEmailEnabled||!this.isAuthEnabled){return null}return(0,lit.qy)`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,if_defined.J)(tabIndex)}
    ></w3m-email-login-widget>`}socialListTemplate(tabIndex){if(!this.isSocialEnabled||!this.isAuthEnabled){return null}return(0,lit.qy)`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,if_defined.J)(tabIndex)}
    ></w3m-social-login-widget>`}walletListTemplate(tabIndex){const isEnableWallets=this.enableWallets;const isCollapseWalletsOldProp=this.features?.emailShowWallets===false;const isCollapseWallets=this.features?.collapseWallets;const shouldCollapseWallets=isCollapseWalletsOldProp||isCollapseWallets;if(!isEnableWallets){return null}if(CoreHelperUtil.w.isTelegram()&&(CoreHelperUtil.w.isSafari()||CoreHelperUtil.w.isIos())){ConnectionController.x.connectWalletConnect().catch((_e=>({})))}if(this.walletGuide==="explore"){return null}const hasOtherMethods=this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled);if(hasOtherMethods&&shouldCollapseWallets){return(0,lit.qy)`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,if_defined.J)(tabIndex)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`}return(0,lit.qy)`<w3m-wallet-login-list tabIdx=${(0,if_defined.J)(tabIndex)}></w3m-wallet-login-list>`}guideTemplate(disabled=false){const isEnableWalletGuide=OptionsController.H.state.enableWalletGuide;if(!isEnableWalletGuide){return null}const classes={guide:true,disabled};const tabIndex=disabled?-1:undefined;if(!this.authConnector&&!this.isSocialEnabled){return null}return(0,lit.qy)`
      ${this.walletGuide==="explore"&&!ChainController.W.state.noAdapters?(0,lit.qy)`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`:null}
      <w3m-wallet-guide
        class=${(0,class_map.H)(classes)}
        tabIdx=${(0,if_defined.J)(tabIndex)}
        walletGuide=${this.walletGuide}
      ></w3m-wallet-guide>
    `}legalCheckboxTemplate(){if(this.walletGuide==="explore"){return null}return(0,lit.qy)`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){const connectEl=this.shadowRoot?.querySelector(".connect");if(!connectEl){return}const shouldApplyMask=connectEl.scrollHeight>SCROLL_THRESHOLD;if(shouldApplyMask){connectEl.style.setProperty("--connect-mask-image",`linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 40px,\n          black calc(100% - 40px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )`);connectEl.style.setProperty("--connect-scroll--top-opacity",esm_exports.z8.interpolate([0,50],[0,1],connectEl.scrollTop).toString());connectEl.style.setProperty("--connect-scroll--bottom-opacity",esm_exports.z8.interpolate([0,50],[0,1],connectEl.scrollHeight-connectEl.scrollTop-connectEl.offsetHeight).toString())}else{connectEl.style.setProperty("--connect-mask-image","none");connectEl.style.setProperty("--connect-scroll--top-opacity","0");connectEl.style.setProperty("--connect-scroll--bottom-opacity","0")}}onContinueWalletClick(){RouterController.I.push("ConnectWallets")}};W3mConnectView.styles=w3m_connect_view_styles;w3m_connect_view_decorate([(0,state.w)()],W3mConnectView.prototype,"connectors",void 0);w3m_connect_view_decorate([(0,state.w)()],W3mConnectView.prototype,"authConnector",void 0);w3m_connect_view_decorate([(0,state.w)()],W3mConnectView.prototype,"features",void 0);w3m_connect_view_decorate([(0,state.w)()],W3mConnectView.prototype,"enableWallets",void 0);w3m_connect_view_decorate([(0,state.w)()],W3mConnectView.prototype,"noAdapters",void 0);w3m_connect_view_decorate([(0,decorators.MZ)()],W3mConnectView.prototype,"walletGuide",void 0);w3m_connect_view_decorate([(0,state.w)()],W3mConnectView.prototype,"checked",void 0);w3m_connect_view_decorate([(0,state.w)()],W3mConnectView.prototype,"isEmailEnabled",void 0);w3m_connect_view_decorate([(0,state.w)()],W3mConnectView.prototype,"isSocialEnabled",void 0);w3m_connect_view_decorate([(0,state.w)()],W3mConnectView.prototype,"isAuthEnabled",void 0);W3mConnectView=w3m_connect_view_decorate([(0,esm_exports.EM)("w3m-connect-view")],W3mConnectView);var ThemeController=__webpack_require__(35788);var wui_loading_thumbnail=__webpack_require__(51020);var wui_chip_button=__webpack_require__(85788);const wui_cta_button_styles=(0,lit.AH)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var wui_cta_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiCtaButton=class WuiCtaButton extends lit.WF{constructor(){super(...arguments);this.disabled=false;this.label="";this.buttonLabel=""}render(){return(0,lit.qy)`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};WuiCtaButton.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_cta_button_styles];wui_cta_button_decorate([(0,decorators.MZ)({type:Boolean})],WuiCtaButton.prototype,"disabled",void 0);wui_cta_button_decorate([(0,decorators.MZ)()],WuiCtaButton.prototype,"label",void 0);wui_cta_button_decorate([(0,decorators.MZ)()],WuiCtaButton.prototype,"buttonLabel",void 0);WuiCtaButton=wui_cta_button_decorate([(0,WebComponentsUtil.E)("wui-cta-button")],WuiCtaButton);const w3m_mobile_download_links_styles=(0,lit.AH)`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var w3m_mobile_download_links_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mMobileDownloadLinks=class W3mMobileDownloadLinks extends lit.WF{constructor(){super(...arguments);this.wallet=undefined}render(){if(!this.wallet){this.style.display="none";return null}const{name,app_store,play_store,chrome_store,homepage}=this.wallet;const isMobile=CoreHelperUtil.w.isMobile();const isIos=CoreHelperUtil.w.isIos();const isAndroid=CoreHelperUtil.w.isAndroid();const isMultiple=[app_store,play_store,homepage,chrome_store].filter(Boolean).length>1;const shortName=esm_exports.Zv.getTruncateString({string:name,charsStart:12,charsEnd:0,truncate:"end"});if(isMultiple&&!isMobile){return(0,lit.qy)`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${()=>RouterController.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `}if(!isMultiple&&homepage){return(0,lit.qy)`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `}if(app_store&&isIos){return(0,lit.qy)`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `}if(play_store&&isAndroid){return(0,lit.qy)`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `}this.style.display="none";return null}onAppStore(){if(this.wallet?.app_store){CoreHelperUtil.w.openHref(this.wallet.app_store,"_blank")}}onPlayStore(){if(this.wallet?.play_store){CoreHelperUtil.w.openHref(this.wallet.play_store,"_blank")}}onHomePage(){if(this.wallet?.homepage){CoreHelperUtil.w.openHref(this.wallet.homepage,"_blank")}}};W3mMobileDownloadLinks.styles=[w3m_mobile_download_links_styles];w3m_mobile_download_links_decorate([(0,decorators.MZ)({type:Object})],W3mMobileDownloadLinks.prototype,"wallet",void 0);W3mMobileDownloadLinks=w3m_mobile_download_links_decorate([(0,esm_exports.EM)("w3m-mobile-download-links")],W3mMobileDownloadLinks);const w3m_connecting_widget_styles=(0,lit.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var w3m_connecting_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};class W3mConnectingWidget extends lit.WF{constructor(){super();this.wallet=RouterController.I.state.data?.wallet;this.connector=RouterController.I.state.data?.connector;this.timeout=undefined;this.secondaryBtnIcon="refresh";this.onConnect=undefined;this.onRender=undefined;this.onAutoConnect=undefined;this.isWalletConnect=true;this.unsubscribe=[];this.imageSrc=AssetUtil.$.getWalletImage(this.wallet)??AssetUtil.$.getConnectorImage(this.connector);this.name=this.wallet?.name??this.connector?.name??"Wallet";this.isRetrying=false;this.uri=ConnectionController.x.state.wcUri;this.error=ConnectionController.x.state.wcError;this.ready=false;this.showRetry=false;this.secondaryBtnLabel="Try again";this.secondaryLabel="Accept connection request in the wallet";this.isLoading=false;this.isMobile=false;this.onRetry=undefined;this.unsubscribe.push(...[ConnectionController.x.subscribeKey("wcUri",(val=>{this.uri=val;if(this.isRetrying&&this.onRetry){this.isRetrying=false;this.onConnect?.()}})),ConnectionController.x.subscribeKey("wcError",(val=>this.error=val))]);if((CoreHelperUtil.w.isTelegram()||CoreHelperUtil.w.isSafari())&&CoreHelperUtil.w.isIos()&&ConnectionController.x.state.wcUri){this.onConnect?.()}}firstUpdated(){this.onAutoConnect?.();this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()));ConnectionController.x.setWcError(false);clearTimeout(this.timeout)}render(){this.onRender?.();this.onShowRetry();const subLabel=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let label=`Continue in ${this.name}`;if(this.error){label="Connection declined"}return(0,lit.qy)`
      <wui-flex
        data-error=${(0,if_defined.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,if_defined.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?(0,lit.qy)`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?(0,lit.qy)`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=true;const retryButton=this.shadowRoot?.querySelector("wui-button");retryButton?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){ConnectionController.x.setWcError(false);if(this.onRetry){this.isRetrying=true;this.onRetry?.()}else{this.onConnect?.()}}loaderTemplate(){const borderRadiusMaster=ThemeController.W.state.themeVariables["--w3m-border-radius-master"];const radius=borderRadiusMaster?parseInt(borderRadiusMaster.replace("px",""),10):4;return(0,lit.qy)`<wui-loading-thumbnail radius=${radius*9}></wui-loading-thumbnail>`}onCopyUri(){try{if(this.uri){CoreHelperUtil.w.copyToClopboard(this.uri);SnackController.P.showSuccess("Link copied")}}catch{SnackController.P.showError("Failed to copy")}}}W3mConnectingWidget.styles=w3m_connecting_widget_styles;w3m_connecting_widget_decorate([(0,decorators.wk)()],W3mConnectingWidget.prototype,"isRetrying",void 0);w3m_connecting_widget_decorate([(0,decorators.wk)()],W3mConnectingWidget.prototype,"uri",void 0);w3m_connecting_widget_decorate([(0,decorators.wk)()],W3mConnectingWidget.prototype,"error",void 0);w3m_connecting_widget_decorate([(0,decorators.wk)()],W3mConnectingWidget.prototype,"ready",void 0);w3m_connecting_widget_decorate([(0,decorators.wk)()],W3mConnectingWidget.prototype,"showRetry",void 0);w3m_connecting_widget_decorate([(0,decorators.wk)()],W3mConnectingWidget.prototype,"secondaryBtnLabel",void 0);w3m_connecting_widget_decorate([(0,decorators.wk)()],W3mConnectingWidget.prototype,"secondaryLabel",void 0);w3m_connecting_widget_decorate([(0,decorators.wk)()],W3mConnectingWidget.prototype,"isLoading",void 0);w3m_connecting_widget_decorate([(0,decorators.MZ)({type:Boolean})],W3mConnectingWidget.prototype,"isMobile",void 0);w3m_connecting_widget_decorate([(0,decorators.MZ)()],W3mConnectingWidget.prototype,"onRetry",void 0);var w3m_connecting_external_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingExternalView=class W3mConnectingExternalView extends W3mConnectingWidget{constructor(){super();this.externalViewUnsubscribe=[];if(!this.connector){throw new Error("w3m-connecting-view: No connector provided")}EventsController.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}});this.onConnect=this.onConnectProxy.bind(this);this.onAutoConnect=this.onConnectProxy.bind(this);this.isWalletConnect=false;this.externalViewUnsubscribe.push(ChainController.W.subscribeKey("activeCaipAddress",(val=>{if(val){ModalController.W.close()}})))}disconnectedCallback(){this.externalViewUnsubscribe.forEach((unsubscribe=>unsubscribe()))}async onConnectProxy(){try{this.error=false;if(this.connector){if(this.connector.id!==ConstantsUtil.o.CONNECTOR_ID.COINBASE_SDK||!this.error){await ConnectionController.x.connectExternal(this.connector,this.connector.chain);EventsController.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})}}}catch(error){EventsController.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:error?.message??"Unknown"}});this.error=true}}};W3mConnectingExternalView=w3m_connecting_external_view_decorate([(0,esm_exports.EM)("w3m-connecting-external-view")],W3mConnectingExternalView);const w3m_connecting_multi_chain_view_styles=(0,lit.AH)`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var w3m_connecting_multi_chain_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingMultiChainView=class W3mConnectingMultiChainView extends lit.WF{constructor(){super();this.unsubscribe=[];this.activeConnector=ConnectorController.a.state.activeConnector;this.unsubscribe.push(...[ConnectorController.a.subscribeKey("activeConnector",(val=>this.activeConnector=val))])}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,if_defined.J)(AssetUtil.$.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((connector=>connector.name?(0,lit.qy)`
            <wui-list-wallet
              imageSrc=${(0,if_defined.J)(AssetUtil.$.getChainImage(connector.chain))}
              name=${ConstantsUtil.o.CHAIN_NAME_MAP[connector.chain]}
              @click=${()=>this.onConnector(connector)}
              data-testid="wui-list-chain-${connector.chain}"
            ></wui-list-wallet>
          `:null))}onConnector(provider){const connector=this.activeConnector?.connectors?.find((p=>p.chain===provider.chain));if(!connector){SnackController.P.showError("Failed to find connector");return}if(connector.id==="walletConnect"){if(CoreHelperUtil.w.isMobile()){RouterController.I.push("AllWallets")}else{RouterController.I.push("ConnectingWalletConnect")}}else{RouterController.I.push("ConnectingExternal",{connector})}}};W3mConnectingMultiChainView.styles=w3m_connecting_multi_chain_view_styles;w3m_connecting_multi_chain_view_decorate([(0,decorators.wk)()],W3mConnectingMultiChainView.prototype,"activeConnector",void 0);W3mConnectingMultiChainView=w3m_connecting_multi_chain_view_decorate([(0,esm_exports.EM)("w3m-connecting-multi-chain-view")],W3mConnectingMultiChainView);var w3m_connecting_header_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingHeader=class W3mConnectingHeader extends lit.WF{constructor(){super(...arguments);this.platformTabs=[];this.unsubscribe=[];this.platforms=[];this.onSelectPlatfrom=undefined}disconnectCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const tabs=this.generateTabs();return(0,lit.qy)`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${tabs} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const tabs=this.platforms.map((platform=>{if(platform==="browser"){return{label:"Browser",icon:"extension",platform:"browser"}}else if(platform==="mobile"){return{label:"Mobile",icon:"mobile",platform:"mobile"}}else if(platform==="qrcode"){return{label:"Mobile",icon:"mobile",platform:"qrcode"}}else if(platform==="web"){return{label:"Webapp",icon:"browser",platform:"web"}}else if(platform==="desktop"){return{label:"Desktop",icon:"desktop",platform:"desktop"}}return{label:"Browser",icon:"extension",platform:"unsupported"}}));this.platformTabs=tabs.map((({platform})=>platform));return tabs}onTabChange(index){const tab=this.platformTabs[index];if(tab){this.onSelectPlatfrom?.(tab)}}};w3m_connecting_header_decorate([(0,decorators.MZ)({type:Array})],W3mConnectingHeader.prototype,"platforms",void 0);w3m_connecting_header_decorate([(0,decorators.MZ)()],W3mConnectingHeader.prototype,"onSelectPlatfrom",void 0);W3mConnectingHeader=w3m_connecting_header_decorate([(0,esm_exports.EM)("w3m-connecting-header")],W3mConnectingHeader);var w3m_connecting_wc_browser_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcBrowser=class W3mConnectingWcBrowser extends W3mConnectingWidget{constructor(){super();if(!this.wallet){throw new Error("w3m-connecting-wc-browser: No wallet provided")}this.onConnect=this.onConnectProxy.bind(this);this.onAutoConnect=this.onConnectProxy.bind(this);EventsController.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=false;const{connectors}=ConnectorController.a.state;const connector=connectors.find((c=>c.type==="ANNOUNCED"&&c.info?.rdns===this.wallet?.rdns||c.type==="INJECTED"||c.name===this.wallet?.name));if(connector){await ConnectionController.x.connectExternal(connector,connector.chain)}else{throw new Error("w3m-connecting-wc-browser: No connector found")}ModalController.W.close();EventsController.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(error){EventsController.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:error?.message??"Unknown"}});this.error=true}}};W3mConnectingWcBrowser=w3m_connecting_wc_browser_decorate([(0,esm_exports.EM)("w3m-connecting-wc-browser")],W3mConnectingWcBrowser);var w3m_connecting_wc_desktop_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcDesktop=class W3mConnectingWcDesktop extends W3mConnectingWidget{constructor(){super();if(!this.wallet){throw new Error("w3m-connecting-wc-desktop: No wallet provided")}this.onConnect=this.onConnectProxy.bind(this);this.onRender=this.onRenderProxy.bind(this);EventsController.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){if(!this.ready&&this.uri){this.ready=true;this.onConnect?.()}}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri){try{this.error=false;const{desktop_link,name}=this.wallet;const{redirect,href}=CoreHelperUtil.w.formatNativeUrl(desktop_link,this.uri);ConnectionController.x.setWcLinking({name,href});ConnectionController.x.setRecentWallet(this.wallet);CoreHelperUtil.w.openHref(redirect,"_blank")}catch{this.error=true}}}};W3mConnectingWcDesktop=w3m_connecting_wc_desktop_decorate([(0,esm_exports.EM)("w3m-connecting-wc-desktop")],W3mConnectingWcDesktop);var w3m_connecting_wc_mobile_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcMobile=class W3mConnectingWcMobile extends W3mConnectingWidget{constructor(){super();this.btnLabelTimeout=undefined;this.redirectDeeplink=undefined;this.redirectUniversalLink=undefined;this.target=undefined;this.preferUniversalLinks=OptionsController.H.state.experimental_preferUniversalLinks;this.isLoading=true;this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri){try{this.error=false;const{mobile_link,link_mode,name}=this.wallet;const{redirect,redirectUniversalLink,href}=CoreHelperUtil.w.formatNativeUrl(mobile_link,this.uri,link_mode);this.redirectDeeplink=redirect;this.redirectUniversalLink=redirectUniversalLink;this.target=CoreHelperUtil.w.isIframe()?"_top":"_self";ConnectionController.x.setWcLinking({name,href});ConnectionController.x.setRecentWallet(this.wallet);if(this.preferUniversalLinks&&this.redirectUniversalLink){CoreHelperUtil.w.openHref(this.redirectUniversalLink,this.target)}else{CoreHelperUtil.w.openHref(this.redirectDeeplink,this.target)}}catch(e){EventsController.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}});this.error=true}}};if(!this.wallet){throw new Error("w3m-connecting-wc-mobile: No wallet provided")}this.secondaryBtnLabel="Open";this.secondaryLabel=utils_ConstantsUtil.oU.CONNECT_LABELS.MOBILE;this.secondaryBtnIcon="externalLink";this.onHandleURI();this.unsubscribe.push(ConnectionController.x.subscribeKey("wcUri",(()=>{this.onHandleURI()})));EventsController.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback();clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri;if(!this.ready&&this.uri){this.ready=true;this.onConnect?.()}}onTryAgain(){ConnectionController.x.setWcError(false);this.onConnect?.()}};w3m_connecting_wc_mobile_decorate([(0,decorators.wk)()],W3mConnectingWcMobile.prototype,"redirectDeeplink",void 0);w3m_connecting_wc_mobile_decorate([(0,decorators.wk)()],W3mConnectingWcMobile.prototype,"redirectUniversalLink",void 0);w3m_connecting_wc_mobile_decorate([(0,decorators.wk)()],W3mConnectingWcMobile.prototype,"target",void 0);w3m_connecting_wc_mobile_decorate([(0,decorators.wk)()],W3mConnectingWcMobile.prototype,"preferUniversalLinks",void 0);w3m_connecting_wc_mobile_decorate([(0,decorators.wk)()],W3mConnectingWcMobile.prototype,"isLoading",void 0);W3mConnectingWcMobile=w3m_connecting_wc_mobile_decorate([(0,esm_exports.EM)("w3m-connecting-wc-mobile")],W3mConnectingWcMobile);var wui_qr_code=__webpack_require__(53443);var wui_ux_by_reown=__webpack_require__(48854);const w3m_connecting_wc_qrcode_styles=(0,lit.AH)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var w3m_connecting_wc_qrcode_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcQrcode=class W3mConnectingWcQrcode extends W3mConnectingWidget{constructor(){super();this.forceUpdate=()=>{this.requestUpdate()};window.addEventListener("resize",this.forceUpdate);EventsController.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback();this.unsubscribe?.forEach((unsub=>unsub()));window.removeEventListener("resize",this.forceUpdate)}render(){this.onRenderProxy();return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){if(!this.ready&&this.uri){this.timeout=setTimeout((()=>{this.ready=true}),200)}}qrCodeTemplate(){if(!this.uri||!this.ready){return null}const size=this.getBoundingClientRect().width-40;const alt=this.wallet?this.wallet.name:undefined;ConnectionController.x.setWcLinking(undefined);ConnectionController.x.setRecentWallet(this.wallet);return(0,lit.qy)` <wui-qr-code
      size=${size}
      theme=${ThemeController.W.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,if_defined.J)(AssetUtil.$.getWalletImage(this.wallet))}
      color=${(0,if_defined.J)(ThemeController.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,if_defined.J)(alt)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const inactive=!this.uri||!this.ready;return(0,lit.qy)`<wui-link
      .disabled=${inactive}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};W3mConnectingWcQrcode.styles=w3m_connecting_wc_qrcode_styles;W3mConnectingWcQrcode=w3m_connecting_wc_qrcode_decorate([(0,esm_exports.EM)("w3m-connecting-wc-qrcode")],W3mConnectingWcQrcode);var w3m_connecting_wc_unsupported_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcUnsupported=class W3mConnectingWcUnsupported extends lit.WF{constructor(){super();this.wallet=RouterController.I.state.data?.wallet;if(!this.wallet){throw new Error("w3m-connecting-wc-unsupported: No wallet provided")}EventsController.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,if_defined.J)(AssetUtil.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};W3mConnectingWcUnsupported=w3m_connecting_wc_unsupported_decorate([(0,esm_exports.EM)("w3m-connecting-wc-unsupported")],W3mConnectingWcUnsupported);var w3m_connecting_wc_web_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcWeb=class W3mConnectingWcWeb extends W3mConnectingWidget{constructor(){super();this.isLoading=true;if(!this.wallet){throw new Error("w3m-connecting-wc-web: No wallet provided")}this.onConnect=this.onConnectProxy.bind(this);this.secondaryBtnLabel="Open";this.secondaryLabel=utils_ConstantsUtil.oU.CONNECT_LABELS.MOBILE;this.secondaryBtnIcon="externalLink";this.updateLoadingState();this.unsubscribe.push(ConnectionController.x.subscribeKey("wcUri",(()=>{this.updateLoadingState()})));EventsController.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri){try{this.error=false;const{webapp_link,name}=this.wallet;const{redirect,href}=CoreHelperUtil.w.formatUniversalUrl(webapp_link,this.uri);ConnectionController.x.setWcLinking({name,href});ConnectionController.x.setRecentWallet(this.wallet);CoreHelperUtil.w.openHref(redirect,"_blank")}catch{this.error=true}}}};w3m_connecting_wc_web_decorate([(0,decorators.wk)()],W3mConnectingWcWeb.prototype,"isLoading",void 0);W3mConnectingWcWeb=w3m_connecting_wc_web_decorate([(0,esm_exports.EM)("w3m-connecting-wc-web")],W3mConnectingWcWeb);var w3m_connecting_wc_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcView=class W3mConnectingWcView extends lit.WF{constructor(){super();this.wallet=RouterController.I.state.data?.wallet;this.platform=undefined;this.platforms=[];this.isSiwxEnabled=Boolean(OptionsController.H.state.siwx);this.determinePlatforms();this.initializeConnection()}render(){return(0,lit.qy)`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(retry=false){if(this.platform==="browser"||OptionsController.H.state.manualWCControl&&!retry){return}try{const{wcPairingExpiry,status}=ConnectionController.x.state;if(retry||OptionsController.H.state.enableEmbedded||CoreHelperUtil.w.isPairingExpired(wcPairingExpiry)||status==="connecting"){await ConnectionController.x.connectWalletConnect();if(!this.isSiwxEnabled){ModalController.W.close()}}}catch(error){EventsController.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:error?.message??"Unknown"}});ConnectionController.x.setWcError(true);SnackController.P.showError(error.message??"Connection error");ConnectionController.x.resetWcConnection();RouterController.I.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode");this.platform="qrcode";return}if(this.platform){return}const{mobile_link,desktop_link,webapp_link,injected,rdns}=this.wallet;const injectedIds=injected?.map((({injected_id})=>injected_id)).filter(Boolean);const browserIds=[...rdns?[rdns]:injectedIds??[]];const isBrowser=OptionsController.H.state.isUniversalProvider?false:browserIds.length;const hasMobileWCLink=mobile_link;const isWebWc=webapp_link;const isBrowserInstalled=ConnectionController.x.checkInstalled(browserIds);const isBrowserWc=isBrowser&&isBrowserInstalled;const isDesktopWc=desktop_link&&!CoreHelperUtil.w.isMobile();if(isBrowserWc&&!ChainController.W.state.noAdapters){this.platforms.push("browser")}if(hasMobileWCLink){this.platforms.push(CoreHelperUtil.w.isMobile()?"mobile":"qrcode")}if(isWebWc){this.platforms.push("web")}if(isDesktopWc){this.platforms.push("desktop")}if(!isBrowserWc&&isBrowser&&!ChainController.W.state.noAdapters){this.platforms.push("unsupported")}this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,lit.qy)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return(0,lit.qy)`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return(0,lit.qy)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return(0,lit.qy)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,lit.qy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return(0,lit.qy)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){const multiPlatform=this.platforms.length>1;if(!multiPlatform){return null}return(0,lit.qy)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `}async onSelectPlatform(platform){const container=this.shadowRoot?.querySelector("div");if(container){await container.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished;this.platform=platform;container.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}};w3m_connecting_wc_view_decorate([(0,decorators.wk)()],W3mConnectingWcView.prototype,"platform",void 0);w3m_connecting_wc_view_decorate([(0,decorators.wk)()],W3mConnectingWcView.prototype,"platforms",void 0);w3m_connecting_wc_view_decorate([(0,decorators.wk)()],W3mConnectingWcView.prototype,"isSiwxEnabled",void 0);W3mConnectingWcView=w3m_connecting_wc_view_decorate([(0,esm_exports.EM)("w3m-connecting-wc-view")],W3mConnectingWcView);var w3m_connecting_wc_basic_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcBasicView=class W3mConnectingWcBasicView extends lit.WF{constructor(){super(...arguments);this.isMobile=CoreHelperUtil.w.isMobile()}render(){if(this.isMobile){const{featured,recommended}=ApiController.N.state;const{customWallets}=OptionsController.H.state;const recent=StorageUtil.i.getRecentWallets();const showConnectors=featured.length||recommended.length||customWallets?.length||recent.length;return(0,lit.qy)`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${showConnectors?(0,lit.qy)`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return(0,lit.qy)`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};w3m_connecting_wc_basic_view_decorate([(0,decorators.wk)()],W3mConnectingWcBasicView.prototype,"isMobile",void 0);W3mConnectingWcBasicView=w3m_connecting_wc_basic_view_decorate([(0,esm_exports.EM)("w3m-connecting-wc-basic-view")],W3mConnectingWcBasicView);var NavigationUtil=__webpack_require__(26599);const w3m_choose_account_name_view_styles=(0,lit.AH)`
  .continue-button-container {
    width: 100%;
  }
`;var w3m_choose_account_name_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mChooseAccountNameView=class W3mChooseAccountNameView extends lit.WF{constructor(){super(...arguments);this.loading=false}render(){return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{CoreHelperUtil.w.openHref(NavigationUtil.T.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return(0,lit.qy)` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return(0,lit.qy)`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){const activeChainNamespace=ChainController.W.state.activeChain;RouterController.I.push("RegisterAccountName");EventsController.E.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};W3mChooseAccountNameView.styles=w3m_choose_account_name_view_styles;w3m_choose_account_name_view_decorate([(0,decorators.wk)()],W3mChooseAccountNameView.prototype,"loading",void 0);W3mChooseAccountNameView=w3m_choose_account_name_view_decorate([(0,esm_exports.EM)("w3m-choose-account-name-view")],W3mChooseAccountNameView);var w3m_downloads_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mDownloadsView=class W3mDownloadsView extends lit.WF{constructor(){super(...arguments);this.wallet=RouterController.I.state.data?.wallet}render(){if(!this.wallet){throw new Error("w3m-downloads-view")}return(0,lit.qy)`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){if(!this.wallet?.chrome_store){return null}return(0,lit.qy)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`}iosTemplate(){if(!this.wallet?.app_store){return null}return(0,lit.qy)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`}androidTemplate(){if(!this.wallet?.play_store){return null}return(0,lit.qy)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`}homepageTemplate(){if(!this.wallet?.homepage){return null}return(0,lit.qy)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `}onChromeStore(){if(this.wallet?.chrome_store){CoreHelperUtil.w.openHref(this.wallet.chrome_store,"_blank")}}onAppStore(){if(this.wallet?.app_store){CoreHelperUtil.w.openHref(this.wallet.app_store,"_blank")}}onPlayStore(){if(this.wallet?.play_store){CoreHelperUtil.w.openHref(this.wallet.play_store,"_blank")}}onHomePage(){if(this.wallet?.homepage){CoreHelperUtil.w.openHref(this.wallet.homepage,"_blank")}}};W3mDownloadsView=w3m_downloads_view_decorate([(0,esm_exports.EM)("w3m-downloads-view")],W3mDownloadsView);var w3m_get_wallet_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const EXPLORER="https://walletconnect.com/explorer";let W3mGetWalletView=class W3mGetWalletView extends lit.WF{render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{CoreHelperUtil.w.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended,featured}=ApiController.N.state;const{customWallets}=OptionsController.H.state;const wallets=[...featured,...customWallets??[],...recommended].slice(0,4);return wallets.map((wallet=>(0,lit.qy)`
        <wui-list-wallet
          name=${wallet.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,if_defined.J)(AssetUtil.$.getWalletImage(wallet))}
          @click=${()=>{CoreHelperUtil.w.openHref(wallet.homepage??EXPLORER,"_blank")}}
        ></wui-list-wallet>
      `))}};W3mGetWalletView=w3m_get_wallet_view_decorate([(0,esm_exports.EM)("w3m-get-wallet-view")],W3mGetWalletView);var wui_visual=__webpack_require__(81932);var w3m_help_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mHelpWidget=class W3mHelpWidget extends lit.WF{constructor(){super(...arguments);this.data=[]}render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((item=>(0,lit.qy)`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${item.images.map((image=>(0,lit.qy)`<wui-visual name=${image}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${item.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${item.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};w3m_help_widget_decorate([(0,decorators.MZ)({type:Array})],W3mHelpWidget.prototype,"data",void 0);W3mHelpWidget=w3m_help_widget_decorate([(0,esm_exports.EM)("w3m-help-widget")],W3mHelpWidget);var w3m_what_is_a_wallet_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const data=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let W3mWhatIsAWalletView=class W3mWhatIsAWalletView extends lit.WF{render(){return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){EventsController.E.sendEvent({type:"track",event:"CLICK_GET_WALLET"});RouterController.I.push("GetWallet")}};W3mWhatIsAWalletView=w3m_what_is_a_wallet_view_decorate([(0,esm_exports.EM)("w3m-what-is-a-wallet-view")],W3mWhatIsAWalletView);const w3m_connect_wallets_view_styles=(0,lit.AH)`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var w3m_connect_wallets_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectWalletsView=class W3mConnectWalletsView extends lit.WF{constructor(){super();this.unsubscribe=[];this.checked=OptionsStateController.o.state.isLegalCheckboxChecked;this.unsubscribe.push(OptionsStateController.o.subscribeKey("isLegalCheckboxChecked",(val=>{this.checked=val})))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const{termsConditionsUrl,privacyPolicyUrl}=OptionsController.H.state;const legalCheckbox=OptionsController.H.state.features?.legalCheckbox;const legalUrl=termsConditionsUrl||privacyPolicyUrl;const showLegalCheckbox=Boolean(legalUrl)&&Boolean(legalCheckbox);const disabled=showLegalCheckbox&&!this.checked;const tabIndex=disabled?-1:undefined;return(0,lit.qy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${showLegalCheckbox?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,if_defined.J)(disabled?"disabled":undefined)}
      >
        <w3m-wallet-login-list tabIdx=${(0,if_defined.J)(tabIndex)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};W3mConnectWalletsView.styles=w3m_connect_wallets_view_styles;w3m_connect_wallets_view_decorate([(0,decorators.wk)()],W3mConnectWalletsView.prototype,"checked",void 0);W3mConnectWalletsView=w3m_connect_wallets_view_decorate([(0,esm_exports.EM)("w3m-connect-wallets-view")],W3mConnectWalletsView);const wui_loading_hexagon_styles=(0,lit.AH)`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var wui_loading_hexagon_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLoadingHexagon=class WuiLoadingHexagon extends lit.WF{render(){return(0,lit.qy)`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};WuiLoadingHexagon.styles=[ThemeUtil.W5,wui_loading_hexagon_styles];WuiLoadingHexagon=wui_loading_hexagon_decorate([(0,WebComponentsUtil.E)("wui-loading-hexagon")],WuiLoadingHexagon);var wui_network_image=__webpack_require__(69811);const w3m_network_switch_view_styles=(0,lit.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var w3m_network_switch_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mNetworkSwitchView=class W3mNetworkSwitchView extends lit.WF{constructor(){super();this.network=RouterController.I.state.data?.network;this.unsubscribe=[];this.showRetry=false;this.error=false}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network){throw new Error("w3m-network-switch-view: No network provided")}this.onShowRetry();const label=this.getLabel();const subLabel=this.getSubLabel();return(0,lit.qy)`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,if_defined.J)(AssetUtil.$.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:(0,lit.qy)`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${true}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${label}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const namespace=ChainController.W.state.activeChain;const connectorId=ConnectorController.a.getConnectorId(namespace);const authConnector=ConnectorController.a.getAuthConnector();if(authConnector&&connectorId===ConstantsUtil.o.CONNECTOR_ID.AUTH){return""}return this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const namespace=ChainController.W.state.activeChain;const connectorId=ConnectorController.a.getConnectorId(namespace);const authConnector=ConnectorController.a.getAuthConnector();if(authConnector&&connectorId===ConstantsUtil.o.CONNECTOR_ID.AUTH){return`Switching to ${this.network?.name??"Unknown"} network...`}return this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=true;const retryButton=this.shadowRoot?.querySelector("wui-button");retryButton?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=false;if(ChainController.W.state.activeChain!==this.network?.chainNamespace){ChainController.W.setIsSwitchingNamespace(true)}if(this.network){await ChainController.W.switchActiveNetwork(this.network)}}catch(error){this.error=true}}};W3mNetworkSwitchView.styles=w3m_network_switch_view_styles;w3m_network_switch_view_decorate([(0,decorators.wk)()],W3mNetworkSwitchView.prototype,"showRetry",void 0);w3m_network_switch_view_decorate([(0,decorators.wk)()],W3mNetworkSwitchView.prototype,"error",void 0);W3mNetworkSwitchView=w3m_network_switch_view_decorate([(0,esm_exports.EM)("w3m-network-switch-view")],W3mNetworkSwitchView);var exports_wui_input_text=__webpack_require__(72701);var composites_wui_network_image=__webpack_require__(94267);const wui_list_network_styles=(0,lit.AH)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var wui_list_network_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListNetwork=class WuiListNetwork extends lit.WF{constructor(){super(...arguments);this.imageSrc="";this.name="";this.disabled=false;this.selected=false;this.transparent=false}render(){return(0,lit.qy)`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){if(this.selected){return(0,lit.qy)`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`}return null}templateNetworkImage(){if(this.imageSrc){return(0,lit.qy)`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`}if(!this.imageSrc){return(0,lit.qy)`<wui-network-image
        ?round=${true}
        size="md"
        name=${this.name}
      ></wui-network-image>`}return null}};WuiListNetwork.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_list_network_styles];wui_list_network_decorate([(0,decorators.MZ)()],WuiListNetwork.prototype,"imageSrc",void 0);wui_list_network_decorate([(0,decorators.MZ)()],WuiListNetwork.prototype,"name",void 0);wui_list_network_decorate([(0,decorators.MZ)({type:Boolean})],WuiListNetwork.prototype,"disabled",void 0);wui_list_network_decorate([(0,decorators.MZ)({type:Boolean})],WuiListNetwork.prototype,"selected",void 0);wui_list_network_decorate([(0,decorators.MZ)({type:Boolean})],WuiListNetwork.prototype,"transparent",void 0);WuiListNetwork=wui_list_network_decorate([(0,WebComponentsUtil.E)("wui-list-network")],WuiListNetwork);const w3m_networks_view_styles=(0,lit.AH)`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var w3m_networks_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mNetworksView=class W3mNetworksView extends lit.WF{constructor(){super();this.unsubscribe=[];this.network=ChainController.W.state.activeCaipNetwork;this.requestedCaipNetworks=ChainController.W.getCaipNetworks();this.search="";this.onDebouncedSearch=CoreHelperUtil.w.debounce((value=>{this.search=value}),100);this.unsubscribe.push(AssetController.j.subscribeNetworkImages((()=>this.requestUpdate())),ChainController.W.subscribeKey("activeCaipNetwork",(val=>this.network=val)),ChainController.W.subscribe((()=>{this.requestedCaipNetworks=ChainController.W.getAllRequestedCaipNetworks()})))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return(0,lit.qy)`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(event){this.onDebouncedSearch(event.detail)}onNetworkHelp(){EventsController.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"});RouterController.I.push("WhatIsANetwork")}networksTemplate(){const approvedCaipNetworkIds=ChainController.W.getAllApprovedCaipNetworkIds();const sortedNetworks=CoreHelperUtil.w.sortRequestedNetworks(approvedCaipNetworkIds,this.requestedCaipNetworks);if(this.search){this.filteredNetworks=sortedNetworks?.filter((network=>network?.name?.toLowerCase().includes(this.search.toLowerCase())))}else{this.filteredNetworks=sortedNetworks}return this.filteredNetworks?.map((network=>(0,lit.qy)`
        <wui-list-network
          .selected=${this.network?.id===network.id}
          imageSrc=${(0,if_defined.J)(AssetUtil.$.getNetworkImage(network))}
          type="network"
          name=${network.name??network.id}
          @click=${()=>this.onSwitchNetwork(network)}
          .disabled=${this.getNetworkDisabled(network)}
          data-testid=${`w3m-network-switch-${network.name??network.id}`}
        ></wui-list-network>
      `))}getNetworkDisabled(network){const networkNamespace=network.chainNamespace;const isNextNamespaceConnected=AccountController.U.getCaipAddress(networkNamespace);const approvedCaipNetworkIds=ChainController.W.getAllApprovedCaipNetworkIds();const supportsAllNetworks=ChainController.W.getNetworkProp("supportsAllNetworks",networkNamespace)!==false;const connectorId=ConnectorController.a.getConnectorId(networkNamespace);const authConnector=ConnectorController.a.getAuthConnector();const isConnectedWithAuth=connectorId===ConstantsUtil.o.CONNECTOR_ID.AUTH&&authConnector;if(!isNextNamespaceConnected||supportsAllNetworks||isConnectedWithAuth){return false}return!approvedCaipNetworkIds?.includes(network.caipNetworkId)}onSwitchNetwork(network){const routerData=RouterController.I.state.data;const isSameNetwork=network.id===this.network?.id;if(isSameNetwork){return}const isDifferentNamespace=network.chainNamespace!==ChainController.W.state.activeChain;const isCurrentNamespaceConnected=AccountController.U.state.caipAddress;const isNextNamespaceConnected=AccountController.U.getCaipAddress(network.chainNamespace);const connectorId=ConnectorController.a.getConnectorId(ChainController.W.state.activeChain);const isConnectedWithAuth=connectorId===ConstantsUtil.o.CONNECTOR_ID.AUTH;const isSupportedForAuthConnector=ConstantsUtil.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((c=>c===network.chainNamespace));if(isCurrentNamespaceConnected){if(isConnectedWithAuth&&isSupportedForAuthConnector){RouterController.I.push("SwitchNetwork",{...routerData,network})}else if(isConnectedWithAuth&&!isSupportedForAuthConnector||isDifferentNamespace&&!isNextNamespaceConnected){RouterController.I.push("SwitchActiveChain",{switchToChain:network.chainNamespace,navigateTo:"Connect",navigateWithReplace:true,network})}else{RouterController.I.push("SwitchNetwork",{...routerData,network})}}else{RouterController.I.push("SwitchNetwork",{...routerData,network})}}};W3mNetworksView.styles=w3m_networks_view_styles;w3m_networks_view_decorate([(0,decorators.wk)()],W3mNetworksView.prototype,"network",void 0);w3m_networks_view_decorate([(0,decorators.wk)()],W3mNetworksView.prototype,"requestedCaipNetworks",void 0);w3m_networks_view_decorate([(0,decorators.wk)()],W3mNetworksView.prototype,"filteredNetworks",void 0);w3m_networks_view_decorate([(0,decorators.wk)()],W3mNetworksView.prototype,"search",void 0);W3mNetworksView=w3m_networks_view_decorate([(0,esm_exports.EM)("w3m-networks-view")],W3mNetworksView);const w3m_switch_active_chain_view_styles=(0,lit.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var w3m_switch_active_chain_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const chainIconNameMap={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:undefined};let W3mSwitchActiveChainView=class W3mSwitchActiveChainView extends lit.WF{constructor(){super(...arguments);this.unsubscribe=[];this.switchToChain=RouterController.I.state.data?.switchToChain;this.caipNetwork=RouterController.I.state.data?.network;this.activeChain=ChainController.W.state.activeChain}firstUpdated(){this.unsubscribe.push(ChainController.W.subscribeKey("activeChain",(val=>this.activeChain=val)))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const switchedChainNameString=this.switchToChain?ConstantsUtil.o.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain){return null}const nextChainName=ConstantsUtil.o.CHAIN_NAME_MAP[this.switchToChain];return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${(0,if_defined.J)(chainIconNameMap[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${nextChainName}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${nextChainName}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${switchedChainNameString} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){if(!this.switchToChain){return}ChainController.W.setIsSwitchingNamespace(true);ConnectorController.a.setFilterByNamespace(this.switchToChain);if(this.caipNetwork){await ChainController.W.switchActiveNetwork(this.caipNetwork)}else{ChainController.W.setActiveNamespace(this.switchToChain)}RouterController.I.reset("Connect")}};W3mSwitchActiveChainView.styles=w3m_switch_active_chain_view_styles;w3m_switch_active_chain_view_decorate([(0,decorators.MZ)()],W3mSwitchActiveChainView.prototype,"activeChain",void 0);W3mSwitchActiveChainView=w3m_switch_active_chain_view_decorate([(0,esm_exports.EM)("w3m-switch-active-chain-view")],W3mSwitchActiveChainView);var w3m_what_is_a_network_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const w3m_what_is_a_network_view_data=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let W3mWhatIsANetworkView=class W3mWhatIsANetworkView extends lit.WF{render(){return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${w3m_what_is_a_network_view_data}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{CoreHelperUtil.w.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};W3mWhatIsANetworkView=w3m_what_is_a_network_view_decorate([(0,esm_exports.EM)("w3m-what-is-a-network-view")],W3mWhatIsANetworkView);const w3m_unsupported_chain_view_styles=(0,lit.AH)`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var w3m_unsupported_chain_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mUnsupportedChainView=class W3mUnsupportedChainView extends lit.WF{constructor(){super();this.swapUnsupportedChain=RouterController.I.state.data?.swapUnsupportedChain;this.unsubscribe=[];this.disconecting=false;this.unsubscribe.push(AssetController.j.subscribeNetworkImages((()=>this.requestUpdate())))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){if(this.swapUnsupportedChain){return(0,lit.qy)`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `}return(0,lit.qy)`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const requestedCaipNetworks=ChainController.W.getAllRequestedCaipNetworks();const approvedCaipNetworkIds=ChainController.W.getAllApprovedCaipNetworkIds();const sortedNetworks=CoreHelperUtil.w.sortRequestedNetworks(approvedCaipNetworkIds,requestedCaipNetworks);const filteredNetworks=this.swapUnsupportedChain?sortedNetworks.filter((network=>utils_ConstantsUtil.oU.SWAP_SUPPORTED_NETWORKS.includes(network.caipNetworkId))):sortedNetworks;return filteredNetworks.map((network=>(0,lit.qy)`
        <wui-list-network
          imageSrc=${(0,if_defined.J)(AssetUtil.$.getNetworkImage(network))}
          name=${network.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(network)}
        >
        </wui-list-network>
      `))}async onDisconnect(){try{this.disconecting=true;await ConnectionController.x.disconnect();ModalController.W.close()}catch{EventsController.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"});SnackController.P.showError("Failed to disconnect")}finally{this.disconecting=false}}async onSwitchNetwork(network){const caipAddress=AccountController.U.state.caipAddress;const approvedCaipNetworkIds=ChainController.W.getAllApprovedCaipNetworkIds();const supportsAllNetworks=ChainController.W.getNetworkProp("supportsAllNetworks",network.chainNamespace);const routerData=RouterController.I.state.data;if(caipAddress){if(approvedCaipNetworkIds?.includes(network.caipNetworkId)){await ChainController.W.switchActiveNetwork(network)}else if(supportsAllNetworks){RouterController.I.push("SwitchNetwork",{...routerData,network})}else{RouterController.I.push("SwitchNetwork",{...routerData,network})}}else if(!caipAddress){ChainController.W.setActiveCaipNetwork(network);RouterController.I.push("Connect")}}};W3mUnsupportedChainView.styles=w3m_unsupported_chain_view_styles;w3m_unsupported_chain_view_decorate([(0,decorators.wk)()],W3mUnsupportedChainView.prototype,"disconecting",void 0);W3mUnsupportedChainView=w3m_unsupported_chain_view_decorate([(0,esm_exports.EM)("w3m-unsupported-chain-view")],W3mUnsupportedChainView);const wui_banner_styles=(0,lit.AH)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var wui_banner_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiBanner=class WuiBanner extends lit.WF{constructor(){super(...arguments);this.icon="externalLink";this.text=""}render(){return(0,lit.qy)`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};WuiBanner.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_banner_styles];wui_banner_decorate([(0,decorators.MZ)()],WuiBanner.prototype,"icon",void 0);wui_banner_decorate([(0,decorators.MZ)()],WuiBanner.prototype,"text",void 0);WuiBanner=wui_banner_decorate([(0,WebComponentsUtil.E)("wui-banner")],WuiBanner);const w3m_wallet_compatible_networks_view_styles=(0,lit.AH)`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var w3m_wallet_compatible_networks_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mWalletCompatibleNetworksView=class W3mWalletCompatibleNetworksView extends lit.WF{constructor(){super();this.unsubscribe=[];this.preferredAccountTypes=AccountController.U.state.preferredAccountTypes;this.unsubscribe.push(AccountController.U.subscribeKey("preferredAccountTypes",(val=>{this.preferredAccountTypes=val})))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const requestedCaipNetworks=ChainController.W.getAllRequestedCaipNetworks();const approvedCaipNetworkIds=ChainController.W.getAllApprovedCaipNetworkIds();const caipNetwork=ChainController.W.state.activeCaipNetwork;const isNetworkEnabledForSmartAccounts=ChainController.W.checkIfSmartAccountEnabled();let sortedNetworks=CoreHelperUtil.w.sortRequestedNetworks(approvedCaipNetworkIds,requestedCaipNetworks);if(isNetworkEnabledForSmartAccounts&&this.preferredAccountTypes?.[caipNetwork?.chainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT){if(!caipNetwork){return null}sortedNetworks=[caipNetwork]}const namespaceNetworks=sortedNetworks.filter((network=>network.chainNamespace===caipNetwork?.chainNamespace));return namespaceNetworks.map((network=>(0,lit.qy)`
        <wui-list-network
          imageSrc=${(0,if_defined.J)(AssetUtil.$.getNetworkImage(network))}
          name=${network.name??"Unknown"}
          ?transparent=${true}
        >
        </wui-list-network>
      `))}};W3mWalletCompatibleNetworksView.styles=w3m_wallet_compatible_networks_view_styles;w3m_wallet_compatible_networks_view_decorate([(0,decorators.wk)()],W3mWalletCompatibleNetworksView.prototype,"preferredAccountTypes",void 0);W3mWalletCompatibleNetworksView=w3m_wallet_compatible_networks_view_decorate([(0,esm_exports.EM)("w3m-wallet-compatible-networks-view")],W3mWalletCompatibleNetworksView);var SIWXUtil=__webpack_require__(94522);const wui_visual_thumbnail_styles=(0,lit.AH)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var wui_visual_thumbnail_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiVisualThumbnail=class WuiVisualThumbnail extends lit.WF{render(){this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`;return(0,lit.qy)`${this.templateVisual()}`}templateVisual(){if(this.imageSrc){return(0,lit.qy)`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`}return(0,lit.qy)`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};WuiVisualThumbnail.styles=[ThemeUtil.W5,wui_visual_thumbnail_styles];wui_visual_thumbnail_decorate([(0,decorators.MZ)()],WuiVisualThumbnail.prototype,"imageSrc",void 0);wui_visual_thumbnail_decorate([(0,decorators.MZ)()],WuiVisualThumbnail.prototype,"alt",void 0);wui_visual_thumbnail_decorate([(0,decorators.MZ)({type:Boolean})],WuiVisualThumbnail.prototype,"borderRadiusFull",void 0);WuiVisualThumbnail=wui_visual_thumbnail_decorate([(0,WebComponentsUtil.E)("wui-visual-thumbnail")],WuiVisualThumbnail);const w3m_siwx_sign_message_thumbnails_styles=(0,lit.AH)`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var w3m_siwx_sign_message_thumbnails_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mSIWXSignMessageThumbnails=class W3mSIWXSignMessageThumbnails extends lit.WF{constructor(){super(...arguments);this.dappImageUrl=OptionsController.H.state.metadata?.icons;this.walletImageUrl=AccountController.U.state.connectedWalletInfo?.icon}firstUpdated(){const visuals=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");if(visuals?.[0]){this.createAnimation(visuals[0],"translate(18px)")}if(visuals?.[1]){this.createAnimation(visuals[1],"translate(-18px)")}}render(){return(0,lit.qy)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${true}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(element,translation){element.animate([{transform:"translateX(0px)"},{transform:translation}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:Infinity})}};W3mSIWXSignMessageThumbnails.styles=w3m_siwx_sign_message_thumbnails_styles;W3mSIWXSignMessageThumbnails=w3m_siwx_sign_message_thumbnails_decorate([(0,esm_exports.EM)("w3m-siwx-sign-message-thumbnails")],W3mSIWXSignMessageThumbnails);var w3m_siwx_sign_message_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mSIWXSignMessageView=class W3mSIWXSignMessageView extends lit.WF{constructor(){super(...arguments);this.dappName=OptionsController.H.state.metadata?.name;this.isCancelling=false;this.isSigning=false}render(){return(0,lit.qy)`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=true;await SIWXUtil.U.requestSignMessage().finally((()=>this.isSigning=false))}async onCancel(){this.isCancelling=true;await SIWXUtil.U.cancelSignMessage().finally((()=>this.isCancelling=false))}};w3m_siwx_sign_message_view_decorate([(0,decorators.wk)()],W3mSIWXSignMessageView.prototype,"isCancelling",void 0);w3m_siwx_sign_message_view_decorate([(0,decorators.wk)()],W3mSIWXSignMessageView.prototype,"isSigning",void 0);W3mSIWXSignMessageView=w3m_siwx_sign_message_view_decorate([(0,esm_exports.EM)("w3m-siwx-sign-message-view")],W3mSIWXSignMessageView)}}]);