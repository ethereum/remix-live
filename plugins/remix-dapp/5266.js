"use strict";(self["webpackChunkremix_dapp"]=self["webpackChunkremix_dapp"]||[]).push([[5266],{54817:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{W3mConnectSocialsView:()=>W3mConnectSocialsView,W3mConnectingFarcasterView:()=>W3mConnectingFarcasterView,W3mConnectingSocialView:()=>W3mConnectingSocialView});var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var if_defined=__webpack_require__(51133);var OptionsStateController=__webpack_require__(30934);var OptionsController=__webpack_require__(19717);var esm_exports=__webpack_require__(79849);var wui_flex=__webpack_require__(90766);var w3m_legal_checkbox=__webpack_require__(25452);var w3m_legal_footer=__webpack_require__(78899);var ConnectorController=__webpack_require__(58217);var RouterController=__webpack_require__(63348);var ConstantsUtil=__webpack_require__(96184);var AlertController=__webpack_require__(64767);var SocialsUtil=__webpack_require__(18001);var CoreHelperUtil=__webpack_require__(10526);var wui_list_social=__webpack_require__(35993);var W3mFrameProvider=__webpack_require__(4048);const styles=(0,lit.AH)`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mSocialLoginList=class W3mSocialLoginList extends lit.WF{constructor(){super();this.unsubscribe=[];this.tabIdx=undefined;this.connectors=ConnectorController.a.state.connectors;this.authConnector=this.connectors.find((c=>c.type==="AUTH"));this.features=OptionsController.H.state.features;this.isPwaLoading=false;this.unsubscribe.push(ConnectorController.a.subscribeKey("connectors",(val=>{this.connectors=val;this.authConnector=this.connectors.find((c=>c.type==="AUTH"))})),OptionsController.H.subscribeKey("features",(val=>this.features=val)))}connectedCallback(){super.connectedCallback();this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){let socials=this.features?.socials||[];const isAuthConnectorExist=Boolean(this.authConnector);const isSocialsEnabled=socials?.length;const isConnectSocialsView=RouterController.I.state.view==="ConnectSocials";if((!isAuthConnectorExist||!isSocialsEnabled)&&!isConnectSocialsView){return null}if(isConnectSocialsView&&!isSocialsEnabled){socials=ConstantsUtil.oU.DEFAULT_FEATURES.socials}return(0,lit.qy)` <wui-flex flexDirection="column" gap="xs">
      ${socials.map((social=>(0,lit.qy)`<wui-list-social
            @click=${()=>{this.onSocialClick(social)}}
            data-testid=${`social-selector-${social}`}
            name=${social}
            logo=${social}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`))}
    </wui-flex>`}async onSocialClick(socialProvider){if(socialProvider){await(0,SocialsUtil.Up)(socialProvider)}}async handlePwaFrameLoad(){if(CoreHelperUtil.w.isPWA()){this.isPwaLoading=true;try{if(this.authConnector?.provider instanceof W3mFrameProvider.Y){await this.authConnector.provider.init()}}catch(error){AlertController.h.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:error.message},"error")}finally{this.isPwaLoading=false}}}};W3mSocialLoginList.styles=styles;__decorate([(0,decorators.MZ)()],W3mSocialLoginList.prototype,"tabIdx",void 0);__decorate([(0,decorators.wk)()],W3mSocialLoginList.prototype,"connectors",void 0);__decorate([(0,decorators.wk)()],W3mSocialLoginList.prototype,"authConnector",void 0);__decorate([(0,decorators.wk)()],W3mSocialLoginList.prototype,"features",void 0);__decorate([(0,decorators.wk)()],W3mSocialLoginList.prototype,"isPwaLoading",void 0);W3mSocialLoginList=__decorate([(0,esm_exports.EM)("w3m-social-login-list")],W3mSocialLoginList);const w3m_connect_socials_view_styles=(0,lit.AH)`
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
`;var w3m_connect_socials_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectSocialsView=class W3mConnectSocialsView extends lit.WF{constructor(){super();this.unsubscribe=[];this.checked=OptionsStateController.o.state.isLegalCheckboxChecked;this.unsubscribe.push(OptionsStateController.o.subscribeKey("isLegalCheckboxChecked",(val=>{this.checked=val})))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const{termsConditionsUrl,privacyPolicyUrl}=OptionsController.H.state;const legalCheckbox=OptionsController.H.state.features?.legalCheckbox;const legalUrl=termsConditionsUrl||privacyPolicyUrl;const showLegalCheckbox=Boolean(legalUrl)&&Boolean(legalCheckbox);const disabled=showLegalCheckbox&&!this.checked;const tabIndex=disabled?-1:undefined;return(0,lit.qy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${showLegalCheckbox?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,if_defined.J)(disabled?"disabled":undefined)}
      >
        <w3m-social-login-list tabIdx=${(0,if_defined.J)(tabIndex)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};W3mConnectSocialsView.styles=w3m_connect_socials_view_styles;w3m_connect_socials_view_decorate([(0,decorators.wk)()],W3mConnectSocialsView.prototype,"checked",void 0);W3mConnectSocialsView=w3m_connect_socials_view_decorate([(0,esm_exports.EM)("w3m-connect-socials-view")],W3mConnectSocialsView);var AccountController=__webpack_require__(1218);var ChainController=__webpack_require__(64096);var EventsController=__webpack_require__(28304);var ConnectionController=__webpack_require__(27617);var StorageUtil=__webpack_require__(16812);var SnackController=__webpack_require__(48375);var ModalController=__webpack_require__(66084);var ThemeController=__webpack_require__(35788);var wui_icon_box=__webpack_require__(96616);var wui_loading_thumbnail=__webpack_require__(51020);var wui_logo=__webpack_require__(73218);var wui_text=__webpack_require__(42762);var ErrorUtil=__webpack_require__(82641);var utils_ConstantsUtil=__webpack_require__(2834);const w3m_connecting_social_view_styles=(0,lit.AH)`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
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
  .capitalize {
    text-transform: capitalize;
  }
`;var w3m_connecting_social_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingSocialView=class W3mConnectingSocialView extends lit.WF{constructor(){super();this.unsubscribe=[];this.socialProvider=AccountController.U.state.socialProvider;this.socialWindow=AccountController.U.state.socialWindow;this.error=false;this.connecting=false;this.message="Connect in the provider window";this.authConnector=ConnectorController.a.getAuthConnector();this.handleSocialConnection=async event=>{if(event.data?.resultUri){if(event.origin===utils_ConstantsUtil.o.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,false);try{if(this.authConnector&&!this.connecting){if(this.socialWindow){this.socialWindow.close();AccountController.U.setSocialWindow(undefined,ChainController.W.state.activeChain)}this.connecting=true;this.updateMessage();const uri=event.data.resultUri;if(this.socialProvider){EventsController.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})}await ConnectionController.x.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:uri},this.authConnector.chain);if(this.socialProvider){StorageUtil.i.setConnectedSocialProvider(this.socialProvider);EventsController.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}})}}}catch(error){this.error=true;this.updateMessage();if(this.socialProvider){EventsController.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}}else{RouterController.I.goBack();SnackController.P.showError("Untrusted Origin");if(this.socialProvider){EventsController.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}}};const abortController=ErrorUtil.R.EmbeddedWalletAbortController;abortController.signal.addEventListener("abort",(()=>{if(this.socialWindow){this.socialWindow.close();AccountController.U.setSocialWindow(undefined,ChainController.W.state.activeChain)}}));this.unsubscribe.push(...[AccountController.U.subscribe((val=>{if(val.socialProvider){this.socialProvider=val.socialProvider}if(val.socialWindow){this.socialWindow=val.socialWindow}if(val.address){if(ModalController.W.state.open||OptionsController.H.state.enableEmbedded){ModalController.W.close()}}}))]);if(this.authConnector){this.connectSocial()}}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()));window.removeEventListener("message",this.handleSocialConnection,false);this.socialWindow?.close();AccountController.U.setSocialWindow(undefined,ChainController.W.state.activeChain)}render(){return(0,lit.qy)`
      <wui-flex
        data-error=${(0,if_defined.J)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,if_defined.J)(this.socialProvider)}></wui-logo>
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
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const borderRadiusMaster=ThemeController.W.state.themeVariables["--w3m-border-radius-master"];const radius=borderRadiusMaster?parseInt(borderRadiusMaster.replace("px",""),10):4;return(0,lit.qy)`<wui-loading-thumbnail radius=${radius*9}></wui-loading-thumbnail>`}connectSocial(){const interval=setInterval((()=>{if(this.socialWindow?.closed){if(!this.connecting&&RouterController.I.state.view==="ConnectingSocial"){if(this.socialProvider){EventsController.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}})}RouterController.I.goBack()}clearInterval(interval)}}),1e3);window.addEventListener("message",this.handleSocialConnection,false)}updateMessage(){if(this.error){this.message="Something went wrong"}else if(this.connecting){this.message="Retrieving user data"}else{this.message="Connect in the provider window"}}};W3mConnectingSocialView.styles=w3m_connecting_social_view_styles;w3m_connecting_social_view_decorate([(0,decorators.wk)()],W3mConnectingSocialView.prototype,"socialProvider",void 0);w3m_connecting_social_view_decorate([(0,decorators.wk)()],W3mConnectingSocialView.prototype,"socialWindow",void 0);w3m_connecting_social_view_decorate([(0,decorators.wk)()],W3mConnectingSocialView.prototype,"error",void 0);w3m_connecting_social_view_decorate([(0,decorators.wk)()],W3mConnectingSocialView.prototype,"connecting",void 0);w3m_connecting_social_view_decorate([(0,decorators.wk)()],W3mConnectingSocialView.prototype,"message",void 0);W3mConnectingSocialView=w3m_connecting_social_view_decorate([(0,esm_exports.EM)("w3m-connecting-social-view")],W3mConnectingSocialView);var wui_button=__webpack_require__(75541);var wui_icon=__webpack_require__(24188);var wui_link=__webpack_require__(1764);var wui_qr_code=__webpack_require__(53443);var wui_shimmer=__webpack_require__(61306);const w3m_connecting_farcaster_view_styles=(0,lit.AH)`
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

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var w3m_connecting_farcaster_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingFarcasterView=class W3mConnectingFarcasterView extends lit.WF{constructor(){super();this.unsubscribe=[];this.timeout=undefined;this.socialProvider=AccountController.U.state.socialProvider;this.uri=AccountController.U.state.farcasterUrl;this.ready=false;this.loading=false;this.authConnector=ConnectorController.a.getAuthConnector();this.forceUpdate=()=>{this.requestUpdate()};this.unsubscribe.push(...[AccountController.U.subscribeKey("farcasterUrl",(val=>{if(val){this.uri=val;this.connectFarcaster()}})),AccountController.U.subscribeKey("socialProvider",(val=>{if(val){this.socialProvider=val}}))]);window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback();clearTimeout(this.timeout);window.removeEventListener("resize",this.forceUpdate)}render(){this.onRenderProxy();return(0,lit.qy)`${this.platformTemplate()}`}platformTemplate(){if(CoreHelperUtil.w.isMobile()){return(0,lit.qy)`${this.mobileTemplate()}`}return(0,lit.qy)`${this.desktopTemplate()}`}desktopTemplate(){if(this.loading){return(0,lit.qy)`${this.loadingTemplate()}`}return(0,lit.qy)`${this.qrTemplate()}`}qrTemplate(){return(0,lit.qy)` <wui-flex
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
    </wui-flex>`}loadingTemplate(){return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
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
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return(0,lit.qy)` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
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
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const borderRadiusMaster=ThemeController.W.state.themeVariables["--w3m-border-radius-master"];const radius=borderRadiusMaster?parseInt(borderRadiusMaster.replace("px",""),10):4;return(0,lit.qy)`<wui-loading-thumbnail radius=${radius*9}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector){try{await(this.authConnector?.provider.connectFarcaster());if(this.socialProvider){StorageUtil.i.setConnectedSocialProvider(this.socialProvider);EventsController.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})}this.loading=true;await ConnectionController.x.connectExternal(this.authConnector,this.authConnector.chain);if(this.socialProvider){EventsController.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}})}this.loading=false;ModalController.W.close()}catch(error){if(this.socialProvider){EventsController.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}RouterController.I.goBack();SnackController.P.showError(error)}}}mobileLinkTemplate(){return(0,lit.qy)`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{if(this.uri){CoreHelperUtil.w.openHref(this.uri,"_blank")}}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){if(!this.ready&&this.uri){this.timeout=setTimeout((()=>{this.ready=true}),200)}}qrCodeTemplate(){if(!this.uri||!this.ready){return null}const size=this.getBoundingClientRect().width-40;return(0,lit.qy)` <wui-qr-code
      size=${size}
      theme=${ThemeController.W.state.themeMode}
      uri=${this.uri}
      ?farcaster=${true}
      data-testid="wui-qr-code"
      color=${(0,if_defined.J)(ThemeController.W.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const inactive=!this.uri||!this.ready;return(0,lit.qy)`<wui-link
      .disabled=${inactive}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{if(this.uri){CoreHelperUtil.w.copyToClopboard(this.uri);SnackController.P.showSuccess("Link copied")}}catch{SnackController.P.showError("Failed to copy")}}};W3mConnectingFarcasterView.styles=w3m_connecting_farcaster_view_styles;w3m_connecting_farcaster_view_decorate([(0,decorators.wk)()],W3mConnectingFarcasterView.prototype,"socialProvider",void 0);w3m_connecting_farcaster_view_decorate([(0,decorators.wk)()],W3mConnectingFarcasterView.prototype,"uri",void 0);w3m_connecting_farcaster_view_decorate([(0,decorators.wk)()],W3mConnectingFarcasterView.prototype,"ready",void 0);w3m_connecting_farcaster_view_decorate([(0,decorators.wk)()],W3mConnectingFarcasterView.prototype,"loading",void 0);W3mConnectingFarcasterView=w3m_connecting_farcaster_view_decorate([(0,esm_exports.EM)("w3m-connecting-farcaster-view")],W3mConnectingFarcasterView)},75541:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_composites_wui_button_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(57199)},37447:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const styles=(0,lit.AH)`
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
    </svg>`}};WuiLoadingSpinner.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)()],WuiLoadingSpinner.prototype,"color",void 0);__decorate([(0,decorators.MZ)()],WuiLoadingSpinner.prototype,"size",void 0);WuiLoadingSpinner=__decorate([(0,WebComponentsUtil.E)("wui-loading-spinner")],WuiLoadingSpinner)},57199:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var wui_loading_spinner=__webpack_require__(37447);var wui_text=__webpack_require__(35198);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const styles=(0,lit.AH)`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const SPINNER_COLOR_BY_VARIANT={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"};const TEXT_VARIANT_BY_SIZE={lg:"paragraph-600",md:"small-600"};const SPINNER_SIZE_BY_SIZE={lg:"md",md:"md"};let WuiButton=class WuiButton extends lit.WF{constructor(){super(...arguments);this.size="lg";this.disabled=false;this.fullWidth=false;this.loading=false;this.variant="main";this.hasIconLeft=false;this.hasIconRight=false;this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const textVariant=this.textVariant??TEXT_VARIANT_BY_SIZE[this.size];return(0,lit.qy)`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${textVariant} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=true}handleSlotRightChange(){this.hasIconRight=true}loadingTemplate(){if(this.loading){const size=SPINNER_SIZE_BY_SIZE[this.size];const color=this.disabled?SPINNER_COLOR_BY_VARIANT["disabled"]:SPINNER_COLOR_BY_VARIANT[this.variant];return(0,lit.qy)`<wui-loading-spinner color=${color} size=${size}></wui-loading-spinner>`}return(0,lit.qy)``}};WuiButton.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiButton.prototype,"size",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiButton.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiButton.prototype,"fullWidth",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiButton.prototype,"loading",void 0);__decorate([(0,decorators.MZ)()],WuiButton.prototype,"variant",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiButton.prototype,"hasIconLeft",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiButton.prototype,"hasIconRight",void 0);__decorate([(0,decorators.MZ)()],WuiButton.prototype,"borderRadius",void 0);__decorate([(0,decorators.MZ)()],WuiButton.prototype,"textVariant",void 0);WuiButton=__decorate([(0,WebComponentsUtil.E)("wui-button")],WuiButton)},22992:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var wui_icon=__webpack_require__(18436);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const styles=(0,lit.AH)`
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
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiIconBox=class WuiIconBox extends lit.WF{constructor(){super(...arguments);this.size="md";this.backgroundColor="accent-100";this.iconColor="accent-100";this.background="transparent";this.border=false;this.borderColor="wui-color-bg-125";this.icon="copy"}render(){const iconSize=this.iconSize||this.size;const isLg=this.size==="lg";const isXl=this.size==="xl";const bgMix=isLg?"12%":"16%";const borderRadius=isLg?"xxs":isXl?"s":"3xl";const isGray=this.background==="gray";const isOpaque=this.background==="opaque";const isColorChange=this.backgroundColor==="accent-100"&&isOpaque||this.backgroundColor==="success-100"&&isOpaque||this.backgroundColor==="error-100"&&isOpaque||this.backgroundColor==="inverse-100"&&isOpaque;let bgValueVariable=`var(--wui-color-${this.backgroundColor})`;if(isColorChange){bgValueVariable=`var(--wui-icon-box-bg-${this.backgroundColor})`}else if(isGray){bgValueVariable=`var(--wui-color-gray-${this.backgroundColor})`}this.style.cssText=`\n       --local-bg-value: ${bgValueVariable};\n       --local-bg-mix: ${isColorChange||isGray?`100%`:bgMix};\n       --local-border-radius: var(--wui-border-radius-${borderRadius});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${this.borderColor==="wui-color-bg-125"?`2px`:`1px`} solid ${this.border?`var(--${this.borderColor})`:`transparent`}\n   `;return(0,lit.qy)` <wui-icon color=${this.iconColor} size=${iconSize} name=${this.icon}></wui-icon> `}};WuiIconBox.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"size",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"backgroundColor",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"iconColor",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"iconSize",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"background",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiIconBox.prototype,"border",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"borderColor",void 0);__decorate([(0,decorators.MZ)()],WuiIconBox.prototype,"icon",void 0);WuiIconBox=__decorate([(0,WebComponentsUtil.E)("wui-icon-box")],WuiIconBox)},3131:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>e,K:()=>n});var lit_html=__webpack_require__(79448);var async_directive=__webpack_require__(83585);var directive=__webpack_require__(55764);const e=()=>new h;class h{}const o=new WeakMap,n=(0,directive.u$)(class extends async_directive.Kq{render(i){return lit_html.s6}update(i,[s]){const e=s!==this.G;return e&&void 0!==this.G&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),lit_html.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const i=this.ht??globalThis;let s=o.get(i);void 0===s&&(s=new WeakMap,o.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ht,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?o.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})}}]);