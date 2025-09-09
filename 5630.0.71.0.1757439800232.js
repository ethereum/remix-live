"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[5630],{167079:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{AppKitModal:()=>AppKitModal,W3mModal:()=>W3mModal,W3mModalBase:()=>W3mModalBase});var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var if_defined=__webpack_require__(151133);var ConstantsUtil=__webpack_require__(549024);var OptionsController=__webpack_require__(919717);var ModalController=__webpack_require__(166084);var ChainController=__webpack_require__(264096);var ConnectorController=__webpack_require__(458217);var ApiController=__webpack_require__(756913);var RouterController=__webpack_require__(463348);var SIWXUtil=__webpack_require__(994522);var ThemeController=__webpack_require__(235788);var SnackController=__webpack_require__(648375);var CoreHelperUtil=__webpack_require__(910526);var esm_exports=__webpack_require__(679849);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiCard=class WuiCard extends lit.WF{render(){return(0,lit.qy)`<slot></slot>`}};WuiCard.styles=[ThemeUtil.W5,styles];WuiCard=__decorate([(0,WebComponentsUtil.E)("wui-card")],WuiCard);var wui_flex=__webpack_require__(290766);var AlertController=__webpack_require__(264767);var wui_icon=__webpack_require__(218436);var wui_text=__webpack_require__(35198);var layout_wui_flex=__webpack_require__(480268);const wui_alertbar_styles=(0,lit.AH)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var wui_alertbar_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiAlertBar=class WuiAlertBar extends lit.WF{constructor(){super(...arguments);this.message="";this.backgroundColor="accent-100";this.iconColor="accent-100";this.icon="info"}render(){this.style.cssText=`\n      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});\n   `;return(0,lit.qy)`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){AlertController.h.close()}};WuiAlertBar.styles=[ThemeUtil.W5,wui_alertbar_styles];wui_alertbar_decorate([(0,decorators.MZ)()],WuiAlertBar.prototype,"message",void 0);wui_alertbar_decorate([(0,decorators.MZ)()],WuiAlertBar.prototype,"backgroundColor",void 0);wui_alertbar_decorate([(0,decorators.MZ)()],WuiAlertBar.prototype,"iconColor",void 0);wui_alertbar_decorate([(0,decorators.MZ)()],WuiAlertBar.prototype,"icon",void 0);WuiAlertBar=wui_alertbar_decorate([(0,WebComponentsUtil.E)("wui-alertbar")],WuiAlertBar);const w3m_alertbar_styles=(0,lit.AH)`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var w3m_alertbar_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const presets={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let W3mAlertBar=class W3mAlertBar extends lit.WF{constructor(){super();this.unsubscribe=[];this.open=AlertController.h.state.open;this.onOpen(true);this.unsubscribe.push(AlertController.h.subscribeKey("open",(val=>{this.open=val;this.onOpen(false)})))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const{message,variant}=AlertController.h.state;const preset=presets[variant];return(0,lit.qy)`
      <wui-alertbar
        message=${message}
        backgroundColor=${preset?.backgroundColor}
        iconColor=${preset?.iconColor}
        icon=${preset?.icon}
      ></wui-alertbar>
    `}onOpen(isMounted){if(this.open){this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"});this.style.cssText=`pointer-events: auto`}else if(!isMounted){this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"});this.style.cssText=`pointer-events: none`}}};W3mAlertBar.styles=w3m_alertbar_styles;w3m_alertbar_decorate([(0,decorators.wk)()],W3mAlertBar.prototype,"open",void 0);W3mAlertBar=w3m_alertbar_decorate([(0,esm_exports.EM)("w3m-alertbar")],W3mAlertBar);var AccountController=__webpack_require__(101218);var AssetUtil=__webpack_require__(374681);var AssetController=__webpack_require__(449953);var EventsController=__webpack_require__(128304);var wui_icon_link=__webpack_require__(701552);var wui_image=__webpack_require__(162084);var wui_icon_box=__webpack_require__(622992);const wui_select_styles=(0,lit.AH)`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var wui_select_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiSelect=class WuiSelect extends lit.WF{constructor(){super(...arguments);this.imageSrc=""}render(){return(0,lit.qy)`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){if(this.imageSrc){return(0,lit.qy)`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`}return(0,lit.qy)`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};WuiSelect.styles=[ThemeUtil.W5,ThemeUtil.fD,ThemeUtil.ck,wui_select_styles];wui_select_decorate([(0,decorators.MZ)()],WuiSelect.prototype,"imageSrc",void 0);WuiSelect=wui_select_decorate([(0,WebComponentsUtil.E)("wui-select")],WuiSelect);var wui_tag=__webpack_require__(208469);var exports_wui_text=__webpack_require__(342762);var utils_ConstantsUtil=__webpack_require__(2834);const w3m_header_styles=(0,lit.AH)`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var w3m_header_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const BETA_SCREENS=["SmartSessionList"];function headings(){const connectorName=RouterController.I.state.data?.connector?.name;const walletName=RouterController.I.state.data?.wallet?.name;const networkName=RouterController.I.state.data?.network?.name;const name=walletName??connectorName;const connectors=ConnectorController.a.getConnectors();const isEmail=connectors.length===1&&connectors[0]?.id==="w3m-email";return{Connect:`Connect ${isEmail?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:undefined,Account:undefined,AccountSettings:undefined,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:name??"Connect Wallet",ConnectingWalletConnect:name??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:name?`Get ${name}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:undefined,SwitchNetwork:networkName??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:AccountController.U.state.socialProvider?AccountController.U.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:undefined,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let W3mHeader=class W3mHeader extends lit.WF{constructor(){super();this.unsubscribe=[];this.heading=headings()[RouterController.I.state.view];this.network=ChainController.W.state.activeCaipNetwork;this.networkImage=AssetUtil.$.getNetworkImage(this.network);this.showBack=false;this.prevHistoryLength=1;this.view=RouterController.I.state.view;this.viewDirection="";this.headerText=headings()[RouterController.I.state.view];this.unsubscribe.push(AssetController.j.subscribeNetworkImages((()=>{this.networkImage=AssetUtil.$.getNetworkImage(this.network)})),RouterController.I.subscribeKey("view",(val=>{setTimeout((()=>{this.view=val;this.headerText=headings()[val]}),utils_ConstantsUtil.o.ANIMATION_DURATIONS.HeaderText);this.onViewChange();this.onHistoryChange()})),ChainController.W.subscribeKey("activeCaipNetwork",(val=>{this.network=val;this.networkImage=AssetUtil.$.getNetworkImage(this.network)})))}disconnectCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){EventsController.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"});RouterController.I.push("WhatIsAWallet")}async onClose(){const isUnsupportedChain=RouterController.I.state.view==="UnsupportedChain";if(isUnsupportedChain||await SIWXUtil.U.isSIWXCloseDisabled()){ModalController.W.shake()}else{ModalController.W.close(true)}}rightHeaderTemplate(){const isSmartSessionsEnabled=OptionsController.H?.state?.features?.smartSessions;if(RouterController.I.state.view!=="Account"||!isSmartSessionsEnabled){return this.closeButtonTemplate()}return(0,lit.qy)`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>RouterController.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return(0,lit.qy)`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const isBeta=BETA_SCREENS.includes(this.view);return(0,lit.qy)`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${isBeta?(0,lit.qy)`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view}=RouterController.I.state;const isConnectHelp=view==="Connect";const isEmbeddedEnable=OptionsController.H.state.enableEmbedded;const isApproveTransaction=view==="ApproveTransaction";const isConnectingSIWEView=view==="ConnectingSiwe";const isAccountView=view==="Account";const enableNetworkSwitch=OptionsController.H.state.enableNetworkSwitch;const shouldHideBack=isApproveTransaction||isConnectingSIWEView||isConnectHelp&&isEmbeddedEnable;if(isAccountView&&enableNetworkSwitch){return(0,lit.qy)`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,if_defined.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,if_defined.J)(this.networkImage)}
      ></wui-select>`}if(this.showBack&&!shouldHideBack){return(0,lit.qy)`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`}return(0,lit.qy)`<wui-icon-link
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){if(this.isAllowedNetworkSwitch()){EventsController.E.sendEvent({type:"track",event:"CLICK_NETWORKS"});RouterController.I.push("Networks")}}isAllowedNetworkSwitch(){const requestedCaipNetworks=ChainController.W.getAllRequestedCaipNetworks();const isMultiNetwork=requestedCaipNetworks?requestedCaipNetworks.length>1:false;const isValidNetwork=requestedCaipNetworks?.find((({id})=>id===this.network?.id));return isMultiNetwork||!isValidNetwork}getPadding(){if(this.heading){return["l","2l","l","2l"]}return["0","2l","0","2l"]}onViewChange(){const{history}=RouterController.I.state;let direction=utils_ConstantsUtil.o.VIEW_DIRECTION.Next;if(history.length<this.prevHistoryLength){direction=utils_ConstantsUtil.o.VIEW_DIRECTION.Prev}this.prevHistoryLength=history.length;this.viewDirection=direction}async onHistoryChange(){const{history}=RouterController.I.state;const buttonEl=this.shadowRoot?.querySelector("#dynamic");if(history.length>1&&!this.showBack&&buttonEl){await buttonEl.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished;this.showBack=true;buttonEl.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}else if(history.length<=1&&this.showBack&&buttonEl){await buttonEl.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished;this.showBack=false;buttonEl.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}onGoBack(){RouterController.I.goBack()}};W3mHeader.styles=w3m_header_styles;w3m_header_decorate([(0,decorators.wk)()],W3mHeader.prototype,"heading",void 0);w3m_header_decorate([(0,decorators.wk)()],W3mHeader.prototype,"network",void 0);w3m_header_decorate([(0,decorators.wk)()],W3mHeader.prototype,"networkImage",void 0);w3m_header_decorate([(0,decorators.wk)()],W3mHeader.prototype,"showBack",void 0);w3m_header_decorate([(0,decorators.wk)()],W3mHeader.prototype,"prevHistoryLength",void 0);w3m_header_decorate([(0,decorators.wk)()],W3mHeader.prototype,"view",void 0);w3m_header_decorate([(0,decorators.wk)()],W3mHeader.prototype,"viewDirection",void 0);w3m_header_decorate([(0,decorators.wk)()],W3mHeader.prototype,"headerText",void 0);W3mHeader=w3m_header_decorate([(0,esm_exports.EM)("w3m-header")],W3mHeader);var wui_loading_spinner=__webpack_require__(737447);const wui_snackbar_styles=(0,lit.AH)`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var wui_snackbar_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiSnackbar=class WuiSnackbar extends lit.WF{constructor(){super(...arguments);this.backgroundColor="accent-100";this.iconColor="accent-100";this.icon="checkmark";this.message="";this.loading=false;this.iconType="default"}render(){return(0,lit.qy)`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){if(this.loading){return(0,lit.qy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`}if(this.iconType==="default"){return(0,lit.qy)`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`}return(0,lit.qy)`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};WuiSnackbar.styles=[ThemeUtil.W5,wui_snackbar_styles];wui_snackbar_decorate([(0,decorators.MZ)()],WuiSnackbar.prototype,"backgroundColor",void 0);wui_snackbar_decorate([(0,decorators.MZ)()],WuiSnackbar.prototype,"iconColor",void 0);wui_snackbar_decorate([(0,decorators.MZ)()],WuiSnackbar.prototype,"icon",void 0);wui_snackbar_decorate([(0,decorators.MZ)()],WuiSnackbar.prototype,"message",void 0);wui_snackbar_decorate([(0,decorators.MZ)()],WuiSnackbar.prototype,"loading",void 0);wui_snackbar_decorate([(0,decorators.MZ)()],WuiSnackbar.prototype,"iconType",void 0);WuiSnackbar=wui_snackbar_decorate([(0,WebComponentsUtil.E)("wui-snackbar")],WuiSnackbar);const w3m_snackbar_styles=(0,lit.AH)`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var w3m_snackbar_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const w3m_snackbar_presets={loading:undefined,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let W3mSnackBar=class W3mSnackBar extends lit.WF{constructor(){super();this.unsubscribe=[];this.timeout=undefined;this.open=SnackController.P.state.open;this.unsubscribe.push(SnackController.P.subscribeKey("open",(val=>{this.open=val;this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout);this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const{message,variant,svg}=SnackController.P.state;const preset=w3m_snackbar_presets[variant];const{icon,iconColor}=svg??preset??{};return(0,lit.qy)`
      <wui-snackbar
        message=${message}
        backgroundColor=${preset?.backgroundColor}
        iconColor=${iconColor}
        icon=${icon}
        .loading=${variant==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout);if(this.open){this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"});if(this.timeout){clearTimeout(this.timeout)}if(SnackController.P.state.autoClose){this.timeout=setTimeout((()=>SnackController.P.hide()),2500)}}else{this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}}};W3mSnackBar.styles=w3m_snackbar_styles;w3m_snackbar_decorate([(0,decorators.wk)()],W3mSnackBar.prototype,"open",void 0);W3mSnackBar=w3m_snackbar_decorate([(0,esm_exports.EM)("w3m-snackbar")],W3mSnackBar);var w3m_tooltip=__webpack_require__(388569);var w3m_router=__webpack_require__(214198);const w3m_modal_styles=(0,lit.AH)`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var w3m_modal_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const SCROLL_LOCK="scroll-lock";class W3mModalBase extends lit.WF{constructor(){super();this.unsubscribe=[];this.abortController=undefined;this.hasPrefetched=false;this.enableEmbedded=OptionsController.H.state.enableEmbedded;this.open=ModalController.W.state.open;this.caipAddress=ChainController.W.state.activeCaipAddress;this.caipNetwork=ChainController.W.state.activeCaipNetwork;this.shake=ModalController.W.state.shake;this.filterByNamespace=ConnectorController.a.state.filterByNamespace;this.initializeTheming();ApiController.N.prefetchAnalyticsConfig();this.unsubscribe.push(...[ModalController.W.subscribeKey("open",(val=>val?this.onOpen():this.onClose())),ModalController.W.subscribeKey("shake",(val=>this.shake=val)),ChainController.W.subscribeKey("activeCaipNetwork",(val=>this.onNewNetwork(val))),ChainController.W.subscribeKey("activeCaipAddress",(val=>this.onNewAddress(val))),OptionsController.H.subscribeKey("enableEmbedded",(val=>this.enableEmbedded=val)),ConnectorController.a.subscribeKey("filterByNamespace",(val=>{if(this.filterByNamespace!==val&&!ChainController.W.getAccountData(val)?.caipAddress){ApiController.N.fetchRecommendedWallets();this.filterByNamespace=val}}))])}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){ModalController.W.close();this.prefetch();return}this.onNewAddress(this.caipAddress)}if(this.open){this.onOpen()}if(this.enableEmbedded){this.prefetch()}}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()));this.onRemoveKeyboardListener()}render(){this.style.cssText=`\n      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};\n    `;if(this.enableEmbedded){return(0,lit.qy)`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `}return this.open?(0,lit.qy)`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return(0,lit.qy)` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,if_defined.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(event){if(event.target===event.currentTarget){await this.handleClose()}}async handleClose(){const isUnsupportedChain=RouterController.I.state.view==="UnsupportedChain";if(isUnsupportedChain||await SIWXUtil.U.isSIWXCloseDisabled()){ModalController.W.shake()}else{ModalController.W.close()}}initializeTheming(){const{themeVariables,themeMode}=ThemeController.W.state;const defaultThemeMode=esm_exports.Zv.getColorTheme(themeMode);(0,esm_exports.RF)(themeVariables,defaultThemeMode)}onClose(){this.open=false;this.classList.remove("open");this.onScrollUnlock();SnackController.P.hide();this.onRemoveKeyboardListener()}onOpen(){this.open=true;this.classList.add("open");this.onScrollLock();this.onAddKeyboardListener()}onScrollLock(){const styleTag=document.createElement("style");styleTag.dataset["w3m"]=SCROLL_LOCK;styleTag.textContent=`\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    `;document.head.appendChild(styleTag)}onScrollUnlock(){const styleTag=document.head.querySelector(`style[data-w3m="${SCROLL_LOCK}"]`);if(styleTag){styleTag.remove()}}onAddKeyboardListener(){this.abortController=new AbortController;const card=this.shadowRoot?.querySelector("wui-card");card?.focus();window.addEventListener("keydown",(event=>{if(event.key==="Escape"){this.handleClose()}else if(event.key==="Tab"){const{tagName}=event.target;if(tagName&&!tagName.includes("W3M-")&&!tagName.includes("WUI-")){card?.focus()}}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort();this.abortController=undefined}async onNewAddress(caipAddress){const isSwitchingNamespace=ChainController.W.state.isSwitchingNamespace;const nextConnected=CoreHelperUtil.w.getPlainAddress(caipAddress);const isDisconnectedInSameNamespace=!nextConnected&&!isSwitchingNamespace;const isSwitchingNamespaceAndConnected=isSwitchingNamespace&&nextConnected;if(isDisconnectedInSameNamespace){ModalController.W.close()}else if(isSwitchingNamespaceAndConnected){RouterController.I.goBack()}await SIWXUtil.U.initializeIfEnabled();this.caipAddress=caipAddress;ChainController.W.setIsSwitchingNamespace(false)}onNewNetwork(nextCaipNetwork){const prevCaipNetwork=this.caipNetwork;const prevCaipNetworkId=prevCaipNetwork?.caipNetworkId?.toString();const prevChainNamespace=prevCaipNetwork?.chainNamespace;const nextNetworkId=nextCaipNetwork?.caipNetworkId?.toString();const nextChainNamespace=nextCaipNetwork?.chainNamespace;const networkIdChanged=prevCaipNetworkId!==nextNetworkId;const namespaceChanged=prevChainNamespace!==nextChainNamespace;const isNetworkChangedInSameNamespace=networkIdChanged&&!namespaceChanged;const wasUnsupportedNetwork=prevCaipNetwork?.name===ConstantsUtil.o.UNSUPPORTED_NETWORK_NAME;const isConnectingExternal=RouterController.I.state.view==="ConnectingExternal";const isNotConnected=!this.caipAddress;const isUnsupportedNetworkScreen=RouterController.I.state.view==="UnsupportedChain";const isModalOpen=ModalController.W.state.open;let shouldGoBack=false;if(isModalOpen&&!isConnectingExternal){if(isNotConnected){if(networkIdChanged){shouldGoBack=true}}else if(isUnsupportedNetworkScreen){shouldGoBack=true}else if(isNetworkChangedInSameNamespace&&!wasUnsupportedNetwork){shouldGoBack=true}}if(shouldGoBack&&RouterController.I.state.view!=="SIWXSignMessage"){RouterController.I.goBack()}this.caipNetwork=nextCaipNetwork}prefetch(){if(!this.hasPrefetched){ApiController.N.prefetch();ApiController.N.fetchWalletsByPage({page:1});this.hasPrefetched=true}}}W3mModalBase.styles=w3m_modal_styles;w3m_modal_decorate([(0,decorators.MZ)({type:Boolean})],W3mModalBase.prototype,"enableEmbedded",void 0);w3m_modal_decorate([(0,decorators.wk)()],W3mModalBase.prototype,"open",void 0);w3m_modal_decorate([(0,decorators.wk)()],W3mModalBase.prototype,"caipAddress",void 0);w3m_modal_decorate([(0,decorators.wk)()],W3mModalBase.prototype,"caipNetwork",void 0);w3m_modal_decorate([(0,decorators.wk)()],W3mModalBase.prototype,"shake",void 0);w3m_modal_decorate([(0,decorators.wk)()],W3mModalBase.prototype,"filterByNamespace",void 0);let W3mModal=class W3mModal extends W3mModalBase{};W3mModal=w3m_modal_decorate([(0,esm_exports.EM)("w3m-modal")],W3mModal);let AppKitModal=class AppKitModal extends W3mModalBase{};AppKitModal=w3m_modal_decorate([(0,esm_exports.EM)("appkit-modal")],AppKitModal)},124188:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_components_wui_icon_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(218436)},162084:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiImage=class WuiImage extends lit.WF{constructor(){super(...arguments);this.src="./path/to/image.jpg";this.alt="Image";this.size=undefined}render(){this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `;return(0,lit.qy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:true,composed:true}))}};WuiImage.styles=[ThemeUtil.W5,ThemeUtil.ck,styles];__decorate([(0,decorators.MZ)()],WuiImage.prototype,"src",void 0);__decorate([(0,decorators.MZ)()],WuiImage.prototype,"alt",void 0);__decorate([(0,decorators.MZ)()],WuiImage.prototype,"size",void 0);WuiImage=__decorate([(0,WebComponentsUtil.E)("wui-image")],WuiImage)},737447:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLoadingSpinner=class WuiLoadingSpinner extends lit.WF{constructor(){super(...arguments);this.color="accent-100";this.size="lg"}render(){this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`;this.dataset["size"]=this.size;return(0,lit.qy)`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};WuiLoadingSpinner.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)()],WuiLoadingSpinner.prototype,"color",void 0);__decorate([(0,decorators.MZ)()],WuiLoadingSpinner.prototype,"size",void 0);WuiLoadingSpinner=__decorate([(0,WebComponentsUtil.E)("wui-loading-spinner")],WuiLoadingSpinner)},622992:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var wui_icon=__webpack_require__(218436);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiIconBox=class WuiIconBox extends lit.WF{constructor(){super(...arguments);this.size="md";this.backgroundColor="accent-100";this.iconColor="accent-100";this.background="transparent";this.border=false;this.borderColor="wui-color-bg-125";this.icon="copy"}render(){const iconSize=this.iconSize||this.size;const isLg=this.size==="lg";const isXl=this.size==="xl";const bgMix=isLg?"12%":"16%";const borderRadius=isLg?"xxs":isXl?"s":"3xl";const isGray=this.background==="gray";const isOpaque=this.background==="opaque";const isColorChange=this.backgroundColor==="accent-100"&&isOpaque||this.backgroundColor==="success-100"&&isOpaque||this.backgroundColor==="error-100"&&isOpaque||this.backgroundColor==="inverse-100"&&isOpaque;let bgValueVariable=`var(--wui-color-${this.backgroundColor})`;if(isColorChange){bgValueVariable=`var(--wui-icon-box-bg-${this.backgroundColor})`}else if(isGray){bgValueVariable=`var(--wui-color-gray-${this.backgroundColor})`}this.style.cssText=`\n       --local-bg-value: ${bgValueVariable};\n       --local-bg-mix: ${isColorChange||isGray?`100%`:bgMix};\n       --local-border-radius: var(--wui-border-radius-${borderRadius});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${this.borderColor==="wui-color-bg-125"?`2px`:`1px`} solid ${this.border?`var(--${this.borderColor})`:`transparent`}\n   `;return(0,lit.qy)` <wui-icon color=${this.iconColor} size=${iconSize} name=${this.icon}></wui-icon> `}};WuiIconBox.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"size",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"backgroundColor",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"iconColor",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"iconSize",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"background",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiIconBox.prototype,"border",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"borderColor",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"icon",void 0);WuiIconBox=__decorate([(0,WebComponentsUtil.E)("wui-icon-box")],WuiIconBox)}}]);
//# sourceMappingURL=5630.0.71.0.1757439800232.js.map