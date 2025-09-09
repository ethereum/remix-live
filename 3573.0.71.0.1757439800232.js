"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[3573],{243573:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{W3mWalletReceiveView:()=>W3mWalletReceiveView});var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var if_defined=__webpack_require__(151133);var AccountController=__webpack_require__(101218);var ChainController=__webpack_require__(264096);var SnackController=__webpack_require__(648375);var AssetUtil=__webpack_require__(374681);var ThemeController=__webpack_require__(235788);var RouterController=__webpack_require__(463348);var CoreHelperUtil=__webpack_require__(910526);var esm_exports=__webpack_require__(679849);var wui_chip_button=__webpack_require__(985788);var wui_icon=__webpack_require__(218436);var wui_image=__webpack_require__(162084);var wui_text=__webpack_require__(35198);var wui_flex=__webpack_require__(480268);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiCompatibleNetwork=class WuiCompatibleNetwork extends lit.WF{constructor(){super(...arguments);this.networkImages=[""];this.text=""}render(){return(0,lit.qy)`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const slicedNetworks=this.networkImages.slice(0,5);return(0,lit.qy)` <wui-flex class="networks">
      ${slicedNetworks?.map((network=>(0,lit.qy)` <wui-flex class="network-icon"> <wui-image src=${network}></wui-image> </wui-flex>`))}
    </wui-flex>`}};WuiCompatibleNetwork.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)({type:Array})],WuiCompatibleNetwork.prototype,"networkImages",void 0);__decorate([(0,decorators.MZ)()],WuiCompatibleNetwork.prototype,"text",void 0);WuiCompatibleNetwork=__decorate([(0,WebComponentsUtil.E)("wui-compatible-network")],WuiCompatibleNetwork);var exports_wui_flex=__webpack_require__(290766);var wui_qr_code=__webpack_require__(353443);var exports_wui_text=__webpack_require__(342762);var W3mFrameConstants=__webpack_require__(511536);const w3m_wallet_receive_view_styles=(0,lit.AH)`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var w3m_wallet_receive_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mWalletReceiveView=class W3mWalletReceiveView extends lit.WF{constructor(){super();this.unsubscribe=[];this.address=AccountController.U.state.address;this.profileName=AccountController.U.state.profileName;this.network=ChainController.W.state.activeCaipNetwork;this.preferredAccountTypes=AccountController.U.state.preferredAccountTypes;this.unsubscribe.push(...[AccountController.U.subscribe((val=>{if(val.address){this.address=val.address;this.profileName=val.profileName;this.preferredAccountTypes=val.preferredAccountTypes}else{SnackController.P.showError("Account not found")}}))],ChainController.W.subscribeKey("activeCaipNetwork",(val=>{if(val?.id){this.network=val}})))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){if(!this.address){throw new Error("w3m-wallet-receive-view: No account provided")}const networkImage=AssetUtil.$.getNetworkImage(this.network);return(0,lit.qy)` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${esm_exports.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${networkImage?networkImage:""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${ThemeController.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${true}
          color=${(0,if_defined.J)(ThemeController.W.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const requestedCaipNetworks=ChainController.W.getAllRequestedCaipNetworks();const isNetworkEnabledForSmartAccounts=ChainController.W.checkIfSmartAccountEnabled();const caipNetwork=ChainController.W.state.activeCaipNetwork;const namespaceNetworks=requestedCaipNetworks.filter((network=>network?.chainNamespace===caipNetwork?.chainNamespace));if(this.preferredAccountTypes?.[caipNetwork?.chainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&isNetworkEnabledForSmartAccounts){if(!caipNetwork){return null}return(0,lit.qy)`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[AssetUtil.$.getNetworkImage(caipNetwork)??""]}
      ></wui-compatible-network>`}const slicedNetworks=namespaceNetworks?.filter((network=>network?.assets?.imageId))?.slice(0,5);const imagesArray=slicedNetworks.map(AssetUtil.$.getNetworkImage).filter(Boolean);return(0,lit.qy)`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${imagesArray}
    ></wui-compatible-network>`}onReceiveClick(){RouterController.I.push("WalletCompatibleNetworks")}onCopyClick(){try{if(this.address){CoreHelperUtil.w.copyToClopboard(this.address);SnackController.P.showSuccess("Address copied")}}catch{SnackController.P.showError("Failed to copy")}}};W3mWalletReceiveView.styles=w3m_wallet_receive_view_styles;w3m_wallet_receive_view_decorate([(0,decorators.wk)()],W3mWalletReceiveView.prototype,"address",void 0);w3m_wallet_receive_view_decorate([(0,decorators.wk)()],W3mWalletReceiveView.prototype,"profileName",void 0);w3m_wallet_receive_view_decorate([(0,decorators.wk)()],W3mWalletReceiveView.prototype,"network",void 0);w3m_wallet_receive_view_decorate([(0,decorators.wk)()],W3mWalletReceiveView.prototype,"preferredAccountTypes",void 0);W3mWalletReceiveView=w3m_wallet_receive_view_decorate([(0,esm_exports.EM)("w3m-wallet-receive-view")],W3mWalletReceiveView)}}]);
//# sourceMappingURL=3573.0.71.0.1757439800232.js.map