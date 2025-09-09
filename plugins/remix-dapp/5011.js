"use strict";(self["webpackChunkremix_dapp"]=self["webpackChunkremix_dapp"]||[]).push([[5011],{74518:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>TooltipController});var valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59095);var valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(39150);var _utils_withErrorBoundary_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2779);const state=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.BX)({message:"",open:false,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"});const controller={state,subscribe(callback){return(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.B1)(state,(()=>callback(state)))},subscribeKey(key,callback){return(0,valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__.u$)(state,key,callback)},showTooltip({message,triggerRect,variant}){state.open=true;state.message=message;state.triggerRect=triggerRect;state.variant=variant},hide(){state.open=false;state.message="";state.triggerRect={width:0,height:0,top:0,left:0}}};const TooltipController=(0,_utils_withErrorBoundary_js__WEBPACK_IMPORTED_MODULE_2__.X)(controller)},14198:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>W3mRouter});var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var RouterController=__webpack_require__(63348);var TooltipController=__webpack_require__(74518);var esm_exports=__webpack_require__(79849);var ConstantsUtil=__webpack_require__(2834);const styles=(0,lit.AH)`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mRouter=class W3mRouter extends lit.WF{constructor(){super();this.resizeObserver=undefined;this.prevHeight="0px";this.prevHistoryLength=1;this.unsubscribe=[];this.view=RouterController.I.state.view;this.viewDirection="";this.unsubscribe.push(RouterController.I.subscribeKey("view",(val=>this.onViewChange(val))))}firstUpdated(){this.resizeObserver=new ResizeObserver((([content])=>{const height=`${content?.contentRect.height}px`;if(this.prevHeight!=="0px"){this.style.setProperty("--prev-height",this.prevHeight);this.style.setProperty("--new-height",height);this.style.animation="w3m-view-height 150ms forwards ease";this.style.height="auto"}setTimeout((()=>{this.prevHeight=height;this.style.animation="unset"}),ConstantsUtil.o.ANIMATION_DURATIONS.ModalHeight)}));this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper());this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return(0,lit.qy)`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return(0,lit.qy)`<w3m-account-view></w3m-account-view>`;case"AllWallets":return(0,lit.qy)`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return(0,lit.qy)`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return(0,lit.qy)`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return(0,lit.qy)`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return(0,lit.qy)`<w3m-connect-view></w3m-connect-view>`;case"Create":return(0,lit.qy)`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return(0,lit.qy)`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return(0,lit.qy)`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return(0,lit.qy)`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return(0,lit.qy)`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return(0,lit.qy)`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return(0,lit.qy)`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return(0,lit.qy)`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return(0,lit.qy)`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return(0,lit.qy)`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return(0,lit.qy)`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return(0,lit.qy)`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return(0,lit.qy)`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return(0,lit.qy)`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return(0,lit.qy)`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return(0,lit.qy)`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return(0,lit.qy)`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return(0,lit.qy)`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return(0,lit.qy)`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return(0,lit.qy)`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return(0,lit.qy)`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return(0,lit.qy)`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return(0,lit.qy)`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return(0,lit.qy)`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return(0,lit.qy)`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return(0,lit.qy)`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return(0,lit.qy)`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return(0,lit.qy)`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return(0,lit.qy)`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return(0,lit.qy)`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return(0,lit.qy)`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return(0,lit.qy)`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return(0,lit.qy)`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return(0,lit.qy)`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return(0,lit.qy)`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return(0,lit.qy)`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return(0,lit.qy)`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return(0,lit.qy)`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return(0,lit.qy)`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return(0,lit.qy)`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return(0,lit.qy)`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return(0,lit.qy)`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return(0,lit.qy)`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return(0,lit.qy)`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return(0,lit.qy)`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return(0,lit.qy)`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return(0,lit.qy)`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return(0,lit.qy)`<w3m-pay-loading-view></w3m-pay-loading-view>`;default:return(0,lit.qy)`<w3m-connect-view></w3m-connect-view>`}}onViewChange(newView){TooltipController.I.hide();let direction=ConstantsUtil.o.VIEW_DIRECTION.Next;const{history}=RouterController.I.state;if(history.length<this.prevHistoryLength){direction=ConstantsUtil.o.VIEW_DIRECTION.Prev}this.prevHistoryLength=history.length;this.viewDirection=direction;setTimeout((()=>{this.view=newView}),ConstantsUtil.o.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};W3mRouter.styles=styles;__decorate([(0,decorators.wk)()],W3mRouter.prototype,"view",void 0);__decorate([(0,decorators.wk)()],W3mRouter.prototype,"viewDirection",void 0);W3mRouter=__decorate([(0,esm_exports.EM)("w3m-router")],W3mRouter)},33331:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var TooltipController=__webpack_require__(74518);var esm_exports=__webpack_require__(79849);var wui_flex=__webpack_require__(90766);var wui_icon=__webpack_require__(24188);var wui_text=__webpack_require__(42762);const styles=(0,lit.AH)`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
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
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mTooltip=class W3mTooltip extends lit.WF{constructor(){super();this.unsubscribe=[];this.open=TooltipController.I.state.open;this.message=TooltipController.I.state.message;this.triggerRect=TooltipController.I.state.triggerRect;this.variant=TooltipController.I.state.variant;this.unsubscribe.push(...[TooltipController.I.subscribe((newState=>{this.open=newState.open;this.message=newState.message;this.triggerRect=newState.triggerRect;this.variant=newState.variant}))])}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){this.dataset["variant"]=this.variant;const topValue=this.triggerRect.top;const leftValue=this.triggerRect.left;this.style.cssText=`\n    --w3m-tooltip-top: ${topValue}px;\n    --w3m-tooltip-left: ${leftValue}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `;return(0,lit.qy)`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};W3mTooltip.styles=[styles];__decorate([(0,decorators.wk)()],W3mTooltip.prototype,"open",void 0);__decorate([(0,decorators.wk)()],W3mTooltip.prototype,"message",void 0);__decorate([(0,decorators.wk)()],W3mTooltip.prototype,"triggerRect",void 0);__decorate([(0,decorators.wk)()],W3mTooltip.prototype,"variant",void 0);W3mTooltip=__decorate([(0,esm_exports.EM)("w3m-tooltip"),(0,esm_exports.EM)("w3m-tooltip")],W3mTooltip)},1552:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var wui_icon=__webpack_require__(18436);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const styles=(0,lit.AH)`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiIconLink=class WuiIconLink extends lit.WF{constructor(){super(...arguments);this.size="md";this.disabled=false;this.icon="copy";this.iconColor="inherit"}render(){const borderRadius=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs";const padding=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";this.style.cssText=`\n    --local-border-radius: var(${borderRadius});\n    --local-padding: var(${padding});\n`;return(0,lit.qy)`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};WuiIconLink.styles=[ThemeUtil.W5,ThemeUtil.fD,ThemeUtil.ck,styles];__decorate([(0,decorators.MZ)()],WuiIconLink.prototype,"size",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiIconLink.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],WuiIconLink.prototype,"icon",void 0);__decorate([(0,decorators.MZ)()],WuiIconLink.prototype,"iconColor",void 0);WuiIconLink=__decorate([(0,WebComponentsUtil.E)("wui-icon-link")],WuiIconLink)},8469:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_composites_wui_tag_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(98220)},98220:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var wui_text=__webpack_require__(35198);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const styles=(0,lit.AH)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTag=class WuiTag extends lit.WF{constructor(){super(...arguments);this.variant="main";this.size="lg"}render(){this.dataset["variant"]=this.variant;this.dataset["size"]=this.size;const textVariant=this.size==="md"?"mini-700":"micro-700";return(0,lit.qy)`
      <wui-text data-variant=${this.variant} variant=${textVariant} color="inherit">
        <slot></slot>
      </wui-text>
    `}};WuiTag.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)()],WuiTag.prototype,"variant",void 0);__decorate([(0,decorators.MZ)()],WuiTag.prototype,"size",void 0);WuiTag=__decorate([(0,WebComponentsUtil.E)("wui-tag")],WuiTag)}}]);