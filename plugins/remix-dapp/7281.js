"use strict";(self["webpackChunkremix_dapp"]=self["webpackChunkremix_dapp"]||[]).push([[7281],{72640:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{W3mApproveTransactionView:()=>W3mApproveTransactionView,W3mRegisterAccountNameSuccess:()=>W3mRegisterAccountNameSuccess,W3mRegisterAccountNameView:()=>W3mRegisterAccountNameView,W3mUpgradeWalletView:()=>W3mUpgradeWalletView});var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var ThemeUtil=__webpack_require__(96464);var ModalController=__webpack_require__(66084);var ConnectorController=__webpack_require__(58217);var ThemeController=__webpack_require__(35788);var esm_exports=__webpack_require__(79849);const styles=(0,lit.AH)`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const PAGE_HEIGHT=600;const PAGE_WIDTH=360;const HEADER_HEIGHT=64;let W3mApproveTransactionView=class W3mApproveTransactionView extends lit.WF{constructor(){super();this.bodyObserver=undefined;this.unsubscribe=[];this.iframe=document.getElementById("w3m-iframe");this.ready=false;this.unsubscribe.push(...[ModalController.W.subscribeKey("open",(isOpen=>{if(!isOpen){this.onHideIframe()}})),ModalController.W.subscribeKey("shake",(val=>{if(val){this.iframe.style.animation=`w3m-shake 500ms var(--wui-ease-out-power-2)`}else{this.iframe.style.animation="none"}}))])}disconnectedCallback(){this.onHideIframe();this.unsubscribe.forEach((unsubscribe=>unsubscribe()));this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme();this.iframe.style.display="block";const container=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver((entries=>{const contentBoxSize=entries?.[0]?.contentBoxSize;const width=contentBoxSize?.[0]?.inlineSize;this.iframe.style.height=`${PAGE_HEIGHT}px`;container.style.height=`${PAGE_HEIGHT}px`;if(width&&width<=430){this.iframe.style.width="100%";this.iframe.style.left="0px";this.iframe.style.bottom="0px";this.iframe.style.top="unset"}else{this.iframe.style.width=`${PAGE_WIDTH}px`;this.iframe.style.left=`calc(50% - ${PAGE_WIDTH/2}px)`;this.iframe.style.top=`calc(50% - ${PAGE_HEIGHT/2}px + ${HEADER_HEIGHT/2}px)`;this.iframe.style.bottom="unset"}this.ready=true;this.onShowIframe()}));this.bodyObserver.observe(window.document.body)}render(){return(0,lit.qy)`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const isMobile=window.innerWidth<=430;this.iframe.style.animation=isMobile?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none";this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){const authConnector=ConnectorController.a.getAuthConnector();if(authConnector){const themeMode=ThemeController.W.getSnapshot().themeMode;const themeVariables=ThemeController.W.getSnapshot().themeVariables;await authConnector.provider.syncTheme({themeVariables,w3mThemeVariables:(0,ThemeUtil.o)(themeVariables,themeMode)})}}};W3mApproveTransactionView.styles=styles;__decorate([(0,decorators.wk)()],W3mApproveTransactionView.prototype,"ready",void 0);W3mApproveTransactionView=__decorate([(0,esm_exports.EM)("w3m-approve-transaction-view")],W3mApproveTransactionView);var ConstantsUtil=__webpack_require__(96184);var wui_chip=__webpack_require__(52990);var wui_flex=__webpack_require__(90766);var wui_text=__webpack_require__(42762);var w3m_upgrade_wallet_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mUpgradeWalletView=class W3mUpgradeWalletView extends lit.WF{render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${ConstantsUtil.oU.SECURE_SITE_DASHBOARD}
          imageSrc=${ConstantsUtil.oU.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};W3mUpgradeWalletView=w3m_upgrade_wallet_view_decorate([(0,esm_exports.EM)("w3m-upgrade-wallet-view")],W3mUpgradeWalletView);var ref=__webpack_require__(3131);var utils_ConstantsUtil=__webpack_require__(49024);var EnsController=__webpack_require__(57523);var AccountController=__webpack_require__(1218);var CoreHelperUtil=__webpack_require__(10526);var ChainController=__webpack_require__(64096);var EventsController=__webpack_require__(28304);var SnackController=__webpack_require__(48375);var if_defined=__webpack_require__(51133);var wui_loading_spinner=__webpack_require__(37447);var components_wui_text=__webpack_require__(35198);var utils_ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);var wui_input_text=__webpack_require__(72407);const wui_ens_input_styles=(0,lit.AH)`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var wui_ens_input_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiEnsInput=class WuiEnsInput extends lit.WF{constructor(){super(...arguments);this.disabled=false;this.loading=false}render(){return(0,lit.qy)`
      <wui-input-text
        value=${(0,if_defined.J)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return(0,lit.qy)`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${utils_ConstantsUtil.o.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?(0,lit.qy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){if(this.errorMessage){return(0,lit.qy)`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`}return null}};WuiEnsInput.styles=[utils_ThemeUtil.W5,wui_ens_input_styles];wui_ens_input_decorate([(0,decorators.MZ)()],WuiEnsInput.prototype,"errorMessage",void 0);wui_ens_input_decorate([(0,decorators.MZ)({type:Boolean})],WuiEnsInput.prototype,"disabled",void 0);wui_ens_input_decorate([(0,decorators.MZ)()],WuiEnsInput.prototype,"value",void 0);wui_ens_input_decorate([(0,decorators.MZ)({type:Boolean})],WuiEnsInput.prototype,"loading",void 0);WuiEnsInput=wui_ens_input_decorate([(0,WebComponentsUtil.E)("wui-ens-input")],WuiEnsInput);var wui_icon=__webpack_require__(24188);var wui_icon_link=__webpack_require__(1552);var exports_wui_loading_spinner=__webpack_require__(99941);var wui_tag=__webpack_require__(8469);var W3mFrameConstants=__webpack_require__(11536);const w3m_register_account_name_view_styles=(0,lit.AH)`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;var w3m_register_account_name_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mRegisterAccountNameView=class W3mRegisterAccountNameView extends lit.WF{constructor(){super();this.formRef=(0,ref._)();this.usubscribe=[];this.name="";this.error="";this.loading=EnsController.f.state.loading;this.suggestions=EnsController.f.state.suggestions;this.registered=false;this.profileName=AccountController.U.state.profileName;this.onDebouncedNameInputChange=CoreHelperUtil.w.debounce((value=>{if(EnsController.f.validateName(value)){this.error="";this.name=value;EnsController.f.getSuggestions(value);EnsController.f.isNameRegistered(value).then((registered=>{this.registered=registered}))}else if(value.length<4){this.error="Name must be at least 4 characters long"}else{this.error="Can only contain letters, numbers and - characters"}}));this.usubscribe.push(...[EnsController.f.subscribe((val=>{this.suggestions=val.suggestions;this.loading=val.loading})),AccountController.U.subscribeKey("profileName",(val=>{this.profileName=val;if(val){this.error="You already own a name"}}))])}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback();this.usubscribe.forEach((unsub=>unsub()));this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${(0,ref.K)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){const showSubmit=this.isAllowedToSubmit();return showSubmit?(0,lit.qy)`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(name){return()=>{this.name=name;this.registered=false;this.requestUpdate()}}onNameInputChange(event){this.onDebouncedNameInputChange(event.detail)}nameSuggestionTagTemplate(){if(this.loading){return(0,lit.qy)`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`}return this.registered?(0,lit.qy)`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:(0,lit.qy)`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error){return null}const suggestions=this.registered?this.suggestions.filter((s=>s.name!==this.name)):[];return(0,lit.qy)`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
        @click=${this.onSubmitName.bind(this)}
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${suggestions.map((suggestion=>this.availableNameTemplate(suggestion.name)))}
    </wui-flex>`}availableNameTemplate(suggestion){return(0,lit.qy)` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(suggestion)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${suggestion}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&EnsController.f.validateName(this.name)}async onSubmitName(){const activeChainNamespace=ChainController.W.state.activeChain;try{if(!this.isAllowedToSubmit()){return}const ensName=`${this.name}${utils_ConstantsUtil.o.WC_NAME_SUFFIX}`;EventsController.E.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName}});await EnsController.f.registerName(ensName);EventsController.E.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName}})}catch(error){SnackController.P.showError(error.message);EventsController.E.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:`${this.name}${utils_ConstantsUtil.o.WC_NAME_SUFFIX}`,error:error?.message||"Unknown error"}})}}onEnterKey(event){if(event.key==="Enter"&&this.isAllowedToSubmit()){this.onSubmitName()}}};W3mRegisterAccountNameView.styles=w3m_register_account_name_view_styles;w3m_register_account_name_view_decorate([(0,decorators.MZ)()],W3mRegisterAccountNameView.prototype,"errorMessage",void 0);w3m_register_account_name_view_decorate([(0,decorators.wk)()],W3mRegisterAccountNameView.prototype,"name",void 0);w3m_register_account_name_view_decorate([(0,decorators.wk)()],W3mRegisterAccountNameView.prototype,"error",void 0);w3m_register_account_name_view_decorate([(0,decorators.wk)()],W3mRegisterAccountNameView.prototype,"loading",void 0);w3m_register_account_name_view_decorate([(0,decorators.wk)()],W3mRegisterAccountNameView.prototype,"suggestions",void 0);w3m_register_account_name_view_decorate([(0,decorators.wk)()],W3mRegisterAccountNameView.prototype,"registered",void 0);w3m_register_account_name_view_decorate([(0,decorators.wk)()],W3mRegisterAccountNameView.prototype,"profileName",void 0);W3mRegisterAccountNameView=w3m_register_account_name_view_decorate([(0,esm_exports.EM)("w3m-register-account-name-view")],W3mRegisterAccountNameView);var NavigationUtil=__webpack_require__(26599);var RouterController=__webpack_require__(63348);var wui_button=__webpack_require__(75541);var wui_icon_box=__webpack_require__(96616);var wui_link=__webpack_require__(1764);const w3m_register_account_name_success_view_styles=(0,lit.AH)`
  .continue-button-container {
    width: 100%;
  }
`;var w3m_register_account_name_success_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mRegisterAccountNameSuccess=class W3mRegisterAccountNameSuccess extends lit.WF{render(){return(0,lit.qy)`
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
          Learn more
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
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return(0,lit.qy)`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){RouterController.I.replace("Account")}};W3mRegisterAccountNameSuccess.styles=w3m_register_account_name_success_view_styles;W3mRegisterAccountNameSuccess=w3m_register_account_name_success_view_decorate([(0,esm_exports.EM)("w3m-register-account-name-success-view")],W3mRegisterAccountNameSuccess)},96616:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_composites_wui_icon_box_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(22992)},1552:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var wui_icon=__webpack_require__(18436);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const styles=(0,lit.AH)`
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
    `}};WuiIconLink.styles=[ThemeUtil.W5,ThemeUtil.fD,ThemeUtil.ck,styles];__decorate([(0,decorators.MZ)()],WuiIconLink.prototype,"size",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiIconLink.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],WuiIconLink.prototype,"icon",void 0);__decorate([(0,decorators.MZ)()],WuiIconLink.prototype,"iconColor",void 0);WuiIconLink=__decorate([(0,WebComponentsUtil.E)("wui-icon-link")],WuiIconLink)},24188:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_components_wui_icon_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18436)},1764:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var if_defined=__webpack_require__(51133);var wui_text=__webpack_require__(35198);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const styles=(0,lit.AH)`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLink=class WuiLink extends lit.WF{constructor(){super(...arguments);this.tabIdx=undefined;this.disabled=false;this.color="inherit"}render(){return(0,lit.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,if_defined.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};WuiLink.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiLink.prototype,"tabIdx",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiLink.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],WuiLink.prototype,"color",void 0);WuiLink=__decorate([(0,WebComponentsUtil.E)("wui-link")],WuiLink)},99941:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_components_wui_loading_spinner_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(37447)},8469:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_composites_wui_tag_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(98220)},62084:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const styles=(0,lit.AH)`
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
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiImage=class WuiImage extends lit.WF{constructor(){super(...arguments);this.src="./path/to/image.jpg";this.alt="Image";this.size=undefined}render(){this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `;return(0,lit.qy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:true,composed:true}))}};WuiImage.styles=[ThemeUtil.W5,ThemeUtil.ck,styles];__decorate([(0,decorators.MZ)()],WuiImage.prototype,"src",void 0);__decorate([(0,decorators.MZ)()],WuiImage.prototype,"alt",void 0);__decorate([(0,decorators.MZ)()],WuiImage.prototype,"size",void 0);WuiImage=__decorate([(0,WebComponentsUtil.E)("wui-image")],WuiImage)},98220:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var wui_text=__webpack_require__(35198);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const styles=(0,lit.AH)`
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