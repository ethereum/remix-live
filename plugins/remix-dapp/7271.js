"use strict";(self["webpackChunkremix_dapp"]=self["webpackChunkremix_dapp"]||[]).push([[7271],{67271:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{W3mSendSelectTokenView:()=>W3mSendSelectTokenView,W3mWalletSendPreviewView:()=>W3mWalletSendPreviewView,W3mWalletSendView:()=>W3mWalletSendView});var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var SendController=__webpack_require__(57652);var SwapController=__webpack_require__(32056);var RouterController=__webpack_require__(63348);var CoreHelperUtil=__webpack_require__(10526);var ChainController=__webpack_require__(64096);var esm_exports=__webpack_require__(79849);var wui_button=__webpack_require__(75541);var wui_flex=__webpack_require__(90766);var wui_icon_box=__webpack_require__(96616);var ref=__webpack_require__(3131);var ConnectionController=__webpack_require__(27617);var wui_icon=__webpack_require__(24188);var wui_text=__webpack_require__(42762);const styles=(0,lit.AH)`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mInputAddress=class W3mInputAddress extends lit.WF{constructor(){super(...arguments);this.inputElementRef=(0,ref._)();this.instructionElementRef=(0,ref._)();this.instructionHidden=Boolean(this.value);this.pasting=false;this.onDebouncedSearch=CoreHelperUtil.w.debounce((async value=>{if(!value.length){this.setReceiverAddress("");return}const activeChain=ChainController.W.state.activeChain;const isValidAddress=CoreHelperUtil.w.isAddress(value,activeChain);if(isValidAddress){this.setReceiverAddress(value);return}try{const resolvedAddress=await ConnectionController.x.getEnsAddress(value);if(resolvedAddress){SendController.R.setReceiverProfileName(value);SendController.R.setReceiverAddress(resolvedAddress);const avatar=await ConnectionController.x.getEnsAvatar(value);SendController.R.setReceiverProfileImageUrl(avatar||undefined)}}catch(error){this.setReceiverAddress(value)}finally{SendController.R.setLoading(false)}}))}firstUpdated(){if(this.value){this.instructionHidden=true}this.checkHidden()}render(){return(0,lit.qy)` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${(0,ref.K)(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${(0,ref.K)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){if(this.instructionElementRef.value){this.instructionHidden=true;await this.toggleInstructionFocus(false);this.instructionElementRef.value.style.pointerEvents="none";this.inputElementRef.value?.focus();if(this.inputElementRef.value){this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length}}}async focusInstruction(){if(this.instructionElementRef.value){this.instructionHidden=false;await this.toggleInstructionFocus(true);this.instructionElementRef.value.style.pointerEvents="auto";this.inputElementRef.value?.blur()}}async toggleInstructionFocus(focus){if(this.instructionElementRef.value){await this.instructionElementRef.value.animate([{opacity:focus?0:1},{opacity:focus?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}}onBoxClick(){if(!this.value&&!this.instructionHidden){this.focusInput()}}onBlur(){if(!this.value&&this.instructionHidden&&!this.pasting){this.focusInstruction()}}checkHidden(){if(this.instructionHidden){this.focusInput()}}async onPasteClick(){this.pasting=true;const text=await navigator.clipboard.readText();SendController.R.setReceiverAddress(text);this.focusInput()}onInputChange(e){const element=e.target;this.pasting=false;this.value=e.target?.value;if(element.value&&!this.instructionHidden){this.focusInput()}SendController.R.setLoading(true);this.onDebouncedSearch(element.value)}setReceiverAddress(address){SendController.R.setReceiverAddress(address);SendController.R.setReceiverProfileName(undefined);SendController.R.setReceiverProfileImageUrl(undefined);SendController.R.setLoading(false)}};W3mInputAddress.styles=styles;__decorate([(0,decorators.MZ)()],W3mInputAddress.prototype,"value",void 0);__decorate([(0,decorators.wk)()],W3mInputAddress.prototype,"instructionHidden",void 0);__decorate([(0,decorators.wk)()],W3mInputAddress.prototype,"pasting",void 0);W3mInputAddress=__decorate([(0,esm_exports.EM)("w3m-input-address")],W3mInputAddress);var NumberUtil=__webpack_require__(72359);var ConstantsUtil=__webpack_require__(9109);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const wui_input_amount_styles=(0,lit.AH)`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;var wui_input_amount_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiInputAmount=class WuiInputAmount extends lit.WF{constructor(){super(...arguments);this.inputElementRef=(0,ref._)();this.disabled=false;this.value="";this.placeholder="0"}render(){if(this.inputElementRef?.value&&this.value){this.inputElementRef.value.value=this.value}return(0,lit.qy)`<input
      ${(0,ref.K)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){const inputChar=e.data;if(inputChar&&this.inputElementRef?.value){if(inputChar===","){const inputValue=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=inputValue;this.value=`${this.value}${inputValue}`}else if(!ConstantsUtil.Ky.test(inputChar)){this.inputElementRef.value.value=this.value.replace(new RegExp(inputChar.replace(ConstantsUtil.PG,"\\$&"),"gu"),"")}}this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:true,composed:true}))}};WuiInputAmount.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_input_amount_styles];wui_input_amount_decorate([(0,decorators.MZ)({type:Boolean})],WuiInputAmount.prototype,"disabled",void 0);wui_input_amount_decorate([(0,decorators.MZ)({type:String})],WuiInputAmount.prototype,"value",void 0);wui_input_amount_decorate([(0,decorators.MZ)({type:String})],WuiInputAmount.prototype,"placeholder",void 0);WuiInputAmount=wui_input_amount_decorate([(0,WebComponentsUtil.E)("wui-input-amount")],WuiInputAmount);var wui_link=__webpack_require__(1764);var wui_token_button=__webpack_require__(16662);const w3m_input_token_styles=(0,lit.AH)`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var w3m_input_token_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mInputToken=class W3mInputToken extends lit.WF{render(){return(0,lit.qy)` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&true}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){if(this.token){return(0,lit.qy)`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`}return(0,lit.qy)`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){RouterController.I.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const price=this.token.price;const totalValue=price*this.sendTokenAmount;return(0,lit.qy)`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${totalValue?`$${esm_exports.Zv.formatNumberToLocalString(totalValue,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){if(this.token){if(this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)){return(0,lit.qy)` <wui-text variant="small-400" color="error-100">
          ${esm_exports.Zv.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`}return(0,lit.qy)` <wui-text variant="small-400" color="fg-200">
        ${esm_exports.Zv.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`}return null}actionTemplate(){if(this.token){if(this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)){return(0,lit.qy)`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`}return(0,lit.qy)`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`}return null}onInputChange(event){SendController.R.setTokenAmount(event.detail)}onMaxClick(){if(this.token){const maxValue=NumberUtil.S.bigNumber(this.token.quantity.numeric);SendController.R.setTokenAmount(Number(maxValue.toFixed(20)))}}onBuyClick(){RouterController.I.push("OnRampProviders")}};W3mInputToken.styles=w3m_input_token_styles;w3m_input_token_decorate([(0,decorators.MZ)({type:Object})],W3mInputToken.prototype,"token",void 0);w3m_input_token_decorate([(0,decorators.MZ)({type:Number})],W3mInputToken.prototype,"sendTokenAmount",void 0);W3mInputToken=w3m_input_token_decorate([(0,esm_exports.EM)("w3m-input-token")],W3mInputToken);const w3m_wallet_send_view_styles=(0,lit.AH)`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var w3m_wallet_send_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mWalletSendView=class W3mWalletSendView extends lit.WF{constructor(){super();this.unsubscribe=[];this.token=SendController.R.state.token;this.sendTokenAmount=SendController.R.state.sendTokenAmount;this.receiverAddress=SendController.R.state.receiverAddress;this.receiverProfileName=SendController.R.state.receiverProfileName;this.loading=SendController.R.state.loading;this.message="Preview Send";this.fetchNetworkPrice();this.fetchBalances();this.unsubscribe.push(...[SendController.R.subscribe((val=>{this.token=val.token;this.sendTokenAmount=val.sendTokenAmount;this.receiverAddress=val.receiverAddress;this.receiverProfileName=val.receiverProfileName;this.loading=val.loading}))])}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){this.getMessage();return(0,lit.qy)` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchBalances(){await SendController.R.fetchTokenBalance();SendController.R.fetchNetworkBalance()}async fetchNetworkPrice(){await SwapController.GN.getNetworkTokenPrice()}onButtonClick(){RouterController.I.push("WalletSendPreview")}getMessage(){this.message="Preview Send";if(this.receiverAddress&&!CoreHelperUtil.w.isAddress(this.receiverAddress,ChainController.W.state.activeChain)){this.message="Invalid Address"}if(!this.receiverAddress){this.message="Add Address"}if(this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)){this.message="Insufficient Funds"}if(!this.sendTokenAmount){this.message="Add Amount"}if(this.sendTokenAmount&&this.token?.price){const value=this.sendTokenAmount*this.token.price;if(!value){this.message="Incorrect Value"}}if(!this.token){this.message="Select Token"}}};W3mWalletSendView.styles=w3m_wallet_send_view_styles;w3m_wallet_send_view_decorate([(0,decorators.wk)()],W3mWalletSendView.prototype,"token",void 0);w3m_wallet_send_view_decorate([(0,decorators.wk)()],W3mWalletSendView.prototype,"sendTokenAmount",void 0);w3m_wallet_send_view_decorate([(0,decorators.wk)()],W3mWalletSendView.prototype,"receiverAddress",void 0);w3m_wallet_send_view_decorate([(0,decorators.wk)()],W3mWalletSendView.prototype,"receiverProfileName",void 0);w3m_wallet_send_view_decorate([(0,decorators.wk)()],W3mWalletSendView.prototype,"loading",void 0);w3m_wallet_send_view_decorate([(0,decorators.wk)()],W3mWalletSendView.prototype,"message",void 0);W3mWalletSendView=w3m_wallet_send_view_decorate([(0,esm_exports.EM)("w3m-wallet-send-view")],W3mWalletSendView);var wui_input_text=__webpack_require__(72701);var wui_list_token=__webpack_require__(36766);var wui_separator=__webpack_require__(97466);const w3m_wallet_send_select_token_view_styles=(0,lit.AH)`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var w3m_wallet_send_select_token_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mSendSelectTokenView=class W3mSendSelectTokenView extends lit.WF{constructor(){super();this.unsubscribe=[];this.tokenBalances=SendController.R.state.tokenBalances;this.search="";this.onDebouncedSearch=CoreHelperUtil.w.debounce((value=>{this.search=value}));this.unsubscribe.push(...[SendController.R.subscribe((val=>{this.tokenBalances=val.tokenBalances}))])}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return(0,lit.qy)`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){this.tokens=this.tokenBalances?.filter((token=>token.chainId===ChainController.W.state.activeCaipNetwork?.caipNetworkId));if(this.search){this.filteredTokens=this.tokenBalances?.filter((token=>token.name.toLowerCase().includes(this.search.toLowerCase())))}else{this.filteredTokens=this.tokens}return(0,lit.qy)`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map((token=>(0,lit.qy)`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,token)}
                    ?clickable=${true}
                    tokenName=${token.name}
                    tokenImageUrl=${token.iconUrl}
                    tokenAmount=${token.quantity.numeric}
                    tokenValue=${token.value}
                    tokenCurrency=${token.symbol}
                  ></wui-list-token>`)):(0,lit.qy)`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
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
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){RouterController.I.push("OnRampProviders")}onInputChange(event){this.onDebouncedSearch(event.detail)}handleTokenClick(token){SendController.R.setToken(token);SendController.R.setTokenAmount(undefined);RouterController.I.goBack()}};W3mSendSelectTokenView.styles=w3m_wallet_send_select_token_view_styles;w3m_wallet_send_select_token_view_decorate([(0,decorators.wk)()],W3mSendSelectTokenView.prototype,"tokenBalances",void 0);w3m_wallet_send_select_token_view_decorate([(0,decorators.wk)()],W3mSendSelectTokenView.prototype,"tokens",void 0);w3m_wallet_send_select_token_view_decorate([(0,decorators.wk)()],W3mSendSelectTokenView.prototype,"filteredTokens",void 0);w3m_wallet_send_select_token_view_decorate([(0,decorators.wk)()],W3mSendSelectTokenView.prototype,"search",void 0);W3mSendSelectTokenView=w3m_wallet_send_select_token_view_decorate([(0,esm_exports.EM)("w3m-wallet-send-select-token-view")],W3mSendSelectTokenView);var SnackController=__webpack_require__(48375);var EventsController=__webpack_require__(28304);var AccountController=__webpack_require__(1218);var components_wui_icon=__webpack_require__(18436);var wui_image=__webpack_require__(62084);var components_wui_text=__webpack_require__(35198);var layout_wui_flex=__webpack_require__(80268);var wui_avatar=__webpack_require__(24128);const wui_preview_item_styles=(0,lit.AH)`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var wui_preview_item_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiPreviewItem=class WuiPreviewItem extends lit.WF{constructor(){super(...arguments);this.text="";this.address="";this.isAddress=false}render(){return(0,lit.qy)`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){if(this.isAddress){return(0,lit.qy)`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`}else if(this.imageSrc){return(0,lit.qy)`<wui-image src=${this.imageSrc}></wui-image>`}return(0,lit.qy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};WuiPreviewItem.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_preview_item_styles];wui_preview_item_decorate([(0,decorators.MZ)()],WuiPreviewItem.prototype,"text",void 0);wui_preview_item_decorate([(0,decorators.MZ)()],WuiPreviewItem.prototype,"address",void 0);wui_preview_item_decorate([(0,decorators.MZ)()],WuiPreviewItem.prototype,"imageSrc",void 0);wui_preview_item_decorate([(0,decorators.MZ)({type:Boolean})],WuiPreviewItem.prototype,"isAddress",void 0);WuiPreviewItem=wui_preview_item_decorate([(0,WebComponentsUtil.E)("wui-preview-item")],WuiPreviewItem);var W3mFrameConstants=__webpack_require__(11536);var if_defined=__webpack_require__(51133);var AssetUtil=__webpack_require__(74681);const wui_list_content_styles=(0,lit.AH)`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var wui_list_content_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListContent=class WuiListContent extends lit.WF{constructor(){super(...arguments);this.imageSrc=undefined;this.textTitle="";this.textValue=undefined}render(){return(0,lit.qy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){if(this.imageSrc){return(0,lit.qy)`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`}else if(this.textValue){return(0,lit.qy)` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`}return(0,lit.qy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};WuiListContent.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_list_content_styles];wui_list_content_decorate([(0,decorators.MZ)()],WuiListContent.prototype,"imageSrc",void 0);wui_list_content_decorate([(0,decorators.MZ)()],WuiListContent.prototype,"textTitle",void 0);wui_list_content_decorate([(0,decorators.MZ)()],WuiListContent.prototype,"textValue",void 0);WuiListContent=wui_list_content_decorate([(0,WebComponentsUtil.E)("wui-list-content")],WuiListContent);const w3m_wallet_send_details_styles=(0,lit.AH)`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;var w3m_wallet_send_details_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mWalletSendDetails=class W3mWalletSendDetails extends lit.WF{render(){return(0,lit.qy)` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content
          textTitle="Address"
          textValue=${esm_exports.Zv.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){if(this.caipNetwork?.name){return(0,lit.qy)` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,if_defined.J)(AssetUtil.$.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`}return null}onNetworkClick(network){if(network){RouterController.I.push("Networks",{network})}}};W3mWalletSendDetails.styles=w3m_wallet_send_details_styles;w3m_wallet_send_details_decorate([(0,decorators.MZ)()],W3mWalletSendDetails.prototype,"receiverAddress",void 0);w3m_wallet_send_details_decorate([(0,decorators.MZ)({type:Object})],W3mWalletSendDetails.prototype,"caipNetwork",void 0);W3mWalletSendDetails=w3m_wallet_send_details_decorate([(0,esm_exports.EM)("w3m-wallet-send-details")],W3mWalletSendDetails);const w3m_wallet_send_preview_view_styles=(0,lit.AH)`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var w3m_wallet_send_preview_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mWalletSendPreviewView=class W3mWalletSendPreviewView extends lit.WF{constructor(){super();this.unsubscribe=[];this.token=SendController.R.state.token;this.sendTokenAmount=SendController.R.state.sendTokenAmount;this.receiverAddress=SendController.R.state.receiverAddress;this.receiverProfileName=SendController.R.state.receiverProfileName;this.receiverProfileImageUrl=SendController.R.state.receiverProfileImageUrl;this.caipNetwork=ChainController.W.state.activeCaipNetwork;this.loading=SendController.R.state.loading;this.unsubscribe.push(...[SendController.R.subscribe((val=>{this.token=val.token;this.sendTokenAmount=val.sendTokenAmount;this.receiverAddress=val.receiverAddress;this.receiverProfileName=val.receiverProfileName;this.receiverProfileImageUrl=val.receiverProfileImageUrl;this.loading=val.loading})),ChainController.W.subscribeKey("activeCaipNetwork",(val=>this.caipNetwork=val))])}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?esm_exports.Zv.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?esm_exports.Zv.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):esm_exports.Zv.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??undefined}
            .isAddress=${true}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const price=this.token.price;const totalValue=price*this.sendTokenAmount;return(0,lit.qy)`<wui-text variant="paragraph-400" color="fg-100"
        >$${totalValue.toFixed(2)}</wui-text
      >`}return null}async onSendClick(){if(!this.sendTokenAmount||!this.receiverAddress){SnackController.P.showError("Please enter a valid amount and receiver address");return}try{await SendController.R.sendToken();SnackController.P.showSuccess("Transaction started");RouterController.I.replace("Account")}catch(error){SnackController.P.showError("Failed to send transaction. Please try again.");console.error("SendController:sendToken - failed to send transaction",error);const activeChainNamespace=ChainController.W.state.activeChain;const errorMessage=error instanceof Error?error.message:"Unknown error";EventsController.E.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:errorMessage,isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.token?.symbol||"",amount:this.sendTokenAmount,network:ChainController.W.state.activeCaipNetwork?.caipNetworkId||""}})}}onCancelClick(){RouterController.I.goBack()}};W3mWalletSendPreviewView.styles=w3m_wallet_send_preview_view_styles;w3m_wallet_send_preview_view_decorate([(0,decorators.wk)()],W3mWalletSendPreviewView.prototype,"token",void 0);w3m_wallet_send_preview_view_decorate([(0,decorators.wk)()],W3mWalletSendPreviewView.prototype,"sendTokenAmount",void 0);w3m_wallet_send_preview_view_decorate([(0,decorators.wk)()],W3mWalletSendPreviewView.prototype,"receiverAddress",void 0);w3m_wallet_send_preview_view_decorate([(0,decorators.wk)()],W3mWalletSendPreviewView.prototype,"receiverProfileName",void 0);w3m_wallet_send_preview_view_decorate([(0,decorators.wk)()],W3mWalletSendPreviewView.prototype,"receiverProfileImageUrl",void 0);w3m_wallet_send_preview_view_decorate([(0,decorators.wk)()],W3mWalletSendPreviewView.prototype,"caipNetwork",void 0);w3m_wallet_send_preview_view_decorate([(0,decorators.wk)()],W3mWalletSendPreviewView.prototype,"loading",void 0);W3mWalletSendPreviewView=w3m_wallet_send_preview_view_decorate([(0,esm_exports.EM)("w3m-wallet-send-preview-view")],W3mWalletSendPreviewView)},96616:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_composites_wui_icon_box_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(22992)},1764:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var if_defined=__webpack_require__(51133);var wui_text=__webpack_require__(35198);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const styles=(0,lit.AH)`
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
    `}};WuiLink.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiLink.prototype,"tabIdx",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiLink.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],WuiLink.prototype,"color",void 0);WuiLink=__decorate([(0,WebComponentsUtil.E)("wui-link")],WuiLink)},9109:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C5:()=>REOWN_URL,Ky:()=>numbersRegex,PG:()=>specialCharactersRegex});const specialCharactersRegex=/[.*+?^${}()|[\]\\]/gu;const numbersRegex=/[0-9,.]/u;const REOWN_URL="https://reown.com"}}]);