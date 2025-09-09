"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[6585],{474518:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>TooltipController});var valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(959095);var valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(839150);var _utils_withErrorBoundary_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(702779);const state=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.BX)({message:"",open:false,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"});const controller={state,subscribe(callback){return(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.B1)(state,(()=>callback(state)))},subscribeKey(key,callback){return(0,valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__.u$)(state,key,callback)},showTooltip({message,triggerRect,variant}){state.open=true;state.message=message;state.triggerRect=triggerRect;state.variant=variant},hide(){state.open=false;state.message="";state.triggerRect={width:0,height:0,top:0,left:0}}};const TooltipController=(0,_utils_withErrorBoundary_js__WEBPACK_IMPORTED_MODULE_2__.X)(controller)},2122:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{W3mSwapPreviewView:()=>W3mSwapPreviewView,W3mSwapSelectTokenView:()=>W3mSwapSelectTokenView,W3mSwapView:()=>W3mSwapView});var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var NumberUtil=__webpack_require__(172359);var RouterController=__webpack_require__(463348);var AccountController=__webpack_require__(101218);var ChainController=__webpack_require__(264096);var SwapController=__webpack_require__(332056);var CoreHelperUtil=__webpack_require__(910526);var ModalController=__webpack_require__(166084);var EventsController=__webpack_require__(128304);var esm_exports=__webpack_require__(679849);var wui_button=__webpack_require__(575541);var wui_flex=__webpack_require__(290766);var wui_icon=__webpack_require__(124188);var wui_text=__webpack_require__(342762);var W3mFrameConstants=__webpack_require__(511536);var ConstantsUtil=__webpack_require__(396184);var w3m_tooltip_trigger=__webpack_require__(112882);var w3m_tooltip=__webpack_require__(388569);const styles=(0,lit.AH)`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const slippageRate=ConstantsUtil.oU.CONVERT_SLIPPAGE_TOLERANCE;let WuiSwapDetails=class WuiSwapDetails extends lit.WF{constructor(){super();this.unsubscribe=[];this.networkName=ChainController.W.state.activeCaipNetwork?.name;this.detailsOpen=false;this.sourceToken=SwapController.GN.state.sourceToken;this.toToken=SwapController.GN.state.toToken;this.toTokenAmount=SwapController.GN.state.toTokenAmount;this.sourceTokenPriceInUSD=SwapController.GN.state.sourceTokenPriceInUSD;this.toTokenPriceInUSD=SwapController.GN.state.toTokenPriceInUSD;this.priceImpact=SwapController.GN.state.priceImpact;this.maxSlippage=SwapController.GN.state.maxSlippage;this.networkTokenSymbol=SwapController.GN.state.networkTokenSymbol;this.inputError=SwapController.GN.state.inputError;this.unsubscribe.push(...[SwapController.GN.subscribe((newState=>{this.sourceToken=newState.sourceToken;this.toToken=newState.toToken;this.toTokenAmount=newState.toTokenAmount;this.priceImpact=newState.priceImpact;this.maxSlippage=newState.maxSlippage;this.sourceTokenPriceInUSD=newState.sourceTokenPriceInUSD;this.toTokenPriceInUSD=newState.toTokenPriceInUSD;this.inputError=newState.inputError}))])}render(){const minReceivedAmount=this.toTokenAmount&&this.maxSlippage?NumberUtil.S.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError){return null}const toTokenSwappedAmount=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return(0,lit.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${esm_exports.Zv.formatNumberToLocalString(toTokenSwappedAmount,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${esm_exports.Zv.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?(0,lit.qy)`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  ${this.priceImpact?(0,lit.qy)` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${esm_exports.Zv.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?(0,lit.qy)`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${minReceivedAmount?`Transaction will be reversed if you receive less than ${esm_exports.Zv.formatNumberToLocalString(minReceivedAmount,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${esm_exports.Zv.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};WuiSwapDetails.styles=[styles];__decorate([(0,decorators.wk)()],WuiSwapDetails.prototype,"networkName",void 0);__decorate([(0,decorators.MZ)()],WuiSwapDetails.prototype,"detailsOpen",void 0);__decorate([(0,decorators.wk)()],WuiSwapDetails.prototype,"sourceToken",void 0);__decorate([(0,decorators.wk)()],WuiSwapDetails.prototype,"toToken",void 0);__decorate([(0,decorators.wk)()],WuiSwapDetails.prototype,"toTokenAmount",void 0);__decorate([(0,decorators.wk)()],WuiSwapDetails.prototype,"sourceTokenPriceInUSD",void 0);__decorate([(0,decorators.wk)()],WuiSwapDetails.prototype,"toTokenPriceInUSD",void 0);__decorate([(0,decorators.wk)()],WuiSwapDetails.prototype,"priceImpact",void 0);__decorate([(0,decorators.wk)()],WuiSwapDetails.prototype,"maxSlippage",void 0);__decorate([(0,decorators.wk)()],WuiSwapDetails.prototype,"networkTokenSymbol",void 0);__decorate([(0,decorators.wk)()],WuiSwapDetails.prototype,"inputError",void 0);WuiSwapDetails=__decorate([(0,esm_exports.EM)("w3m-swap-details")],WuiSwapDetails);var wui_shimmer=__webpack_require__(161306);const w3m_swap_input_skeleton_styles=(0,lit.AH)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var w3m_swap_input_skeleton_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mSwapInputSkeleton=class W3mSwapInputSkeleton extends lit.WF{constructor(){super(...arguments);this.target="sourceToken"}render(){return(0,lit.qy)`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return(0,lit.qy)`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};W3mSwapInputSkeleton.styles=[w3m_swap_input_skeleton_styles];w3m_swap_input_skeleton_decorate([(0,decorators.MZ)()],W3mSwapInputSkeleton.prototype,"target",void 0);W3mSwapInputSkeleton=w3m_swap_input_skeleton_decorate([(0,esm_exports.EM)("w3m-swap-input-skeleton")],W3mSwapInputSkeleton);const InputUtil={numericInputKeyDown(event,currentValue,onChange){const allowedKeys=["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"];const controlPressed=event.metaKey||event.ctrlKey;const eventKey=event.key;const lowercaseEventKey=eventKey.toLocaleLowerCase();const selectAll=lowercaseEventKey==="a";const copyKey=lowercaseEventKey==="c";const pasteKey=lowercaseEventKey==="v";const cutKey=lowercaseEventKey==="x";const isComma=eventKey===",";const isDot=eventKey===".";const isNumericKey=eventKey>="0"&&eventKey<="9";if(!controlPressed&&(selectAll||copyKey||pasteKey||cutKey)){event.preventDefault()}if(currentValue==="0"&&!isComma&&!isDot&&eventKey==="0"){event.preventDefault()}if(currentValue==="0"&&isNumericKey){onChange(eventKey);event.preventDefault()}if(isComma||isDot){if(!currentValue){onChange("0.");event.preventDefault()}if(currentValue?.includes(".")||currentValue?.includes(",")){event.preventDefault()}}if(!isNumericKey&&!allowedKeys.includes(eventKey)&&!isDot&&!isComma){event.preventDefault()}}};var wui_token_button=__webpack_require__(516662);const w3m_swap_input_styles=(0,lit.AH)`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
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

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var w3m_swap_input_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const MINIMUM_USD_VALUE_TO_CONVERT=5e-5;let W3mSwapInput=class W3mSwapInput extends lit.WF{constructor(){super(...arguments);this.focused=false;this.price=0;this.target="sourceToken";this.onSetAmount=null;this.onSetMaxValue=null}render(){const marketValue=this.marketValue||"0";const isMarketValueGreaterThanZero=NumberUtil.S.bigNumber(marketValue).gt("0");return(0,lit.qy)`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(true)}
            @focusout=${()=>this.onFocusChange(false)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${isMarketValueGreaterThanZero?`$${esm_exports.Zv.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(event){return InputUtil.numericInputKeyDown(event,this.value,(value=>this.onSetAmount?.(this.target,value)))}dispatchInputChangeEvent(event){if(!this.onSetAmount){return}const value=event.target.value.replace(/[^0-9.]/gu,"");if(value===","||value==="."){this.onSetAmount(this.target,"0.")}else if(value.endsWith(",")){this.onSetAmount(this.target,value.replace(",","."))}else{this.onSetAmount(this.target,value)}}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){if(!this.token){return(0,lit.qy)` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}return(0,lit.qy)`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `}tokenBalanceTemplate(){const balanceValueInUSD=NumberUtil.S.multiply(this.balance,this.price);const haveBalance=balanceValueInUSD?balanceValueInUSD?.gt(MINIMUM_USD_VALUE_TO_CONVERT):false;return(0,lit.qy)`
      ${haveBalance?(0,lit.qy)`<wui-text variant="small-400" color="fg-200">
            ${esm_exports.Zv.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(haveBalance):null}
    `}tokenActionButtonTemplate(haveBalance){if(haveBalance){return(0,lit.qy)` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`}return(0,lit.qy)` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(state){this.focused=state}onSelectToken(){EventsController.E.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"});RouterController.I.push("SwapSelectToken",{target:this.target})}onBuyToken(){RouterController.I.push("OnRampProviders")}};W3mSwapInput.styles=[w3m_swap_input_styles];w3m_swap_input_decorate([(0,decorators.MZ)()],W3mSwapInput.prototype,"focused",void 0);w3m_swap_input_decorate([(0,decorators.MZ)()],W3mSwapInput.prototype,"balance",void 0);w3m_swap_input_decorate([(0,decorators.MZ)()],W3mSwapInput.prototype,"value",void 0);w3m_swap_input_decorate([(0,decorators.MZ)()],W3mSwapInput.prototype,"price",void 0);w3m_swap_input_decorate([(0,decorators.MZ)()],W3mSwapInput.prototype,"marketValue",void 0);w3m_swap_input_decorate([(0,decorators.MZ)()],W3mSwapInput.prototype,"disabled",void 0);w3m_swap_input_decorate([(0,decorators.MZ)()],W3mSwapInput.prototype,"target",void 0);w3m_swap_input_decorate([(0,decorators.MZ)()],W3mSwapInput.prototype,"token",void 0);w3m_swap_input_decorate([(0,decorators.MZ)()],W3mSwapInput.prototype,"onSetAmount",void 0);w3m_swap_input_decorate([(0,decorators.MZ)()],W3mSwapInput.prototype,"onSetMaxValue",void 0);W3mSwapInput=w3m_swap_input_decorate([(0,esm_exports.EM)("w3m-swap-input")],W3mSwapInput);const w3m_swap_view_styles=(0,lit.AH)`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var w3m_swap_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mSwapView=class W3mSwapView extends lit.WF{constructor(){super();this.unsubscribe=[];this.initialParams=RouterController.I.state.data?.swap;this.detailsOpen=false;this.caipAddress=AccountController.U.state.caipAddress;this.caipNetworkId=ChainController.W.state.activeCaipNetwork?.caipNetworkId;this.initialized=SwapController.GN.state.initialized;this.loadingQuote=SwapController.GN.state.loadingQuote;this.loadingPrices=SwapController.GN.state.loadingPrices;this.loadingTransaction=SwapController.GN.state.loadingTransaction;this.sourceToken=SwapController.GN.state.sourceToken;this.sourceTokenAmount=SwapController.GN.state.sourceTokenAmount;this.sourceTokenPriceInUSD=SwapController.GN.state.sourceTokenPriceInUSD;this.toToken=SwapController.GN.state.toToken;this.toTokenAmount=SwapController.GN.state.toTokenAmount;this.toTokenPriceInUSD=SwapController.GN.state.toTokenPriceInUSD;this.inputError=SwapController.GN.state.inputError;this.fetchError=SwapController.GN.state.fetchError;this.onDebouncedGetSwapCalldata=CoreHelperUtil.w.debounce((async()=>{await SwapController.GN.swapTokens()}),200);ChainController.W.subscribeKey("activeCaipNetwork",(newCaipNetwork=>this.onCaipNetworkChange({newCaipNetwork,resetSwapState:true,initializeSwapState:false})));AccountController.U.subscribeKey("caipAddress",(newCaipAddress=>this.onCaipAddressChange({newCaipAddress,resetSwapState:true,initializeSwapState:false})));this.unsubscribe.push(...[ChainController.W.subscribeKey("activeCaipNetwork",(newCaipNetwork=>this.onCaipNetworkChange({newCaipNetwork,resetSwapState:false,initializeSwapState:true}))),AccountController.U.subscribeKey("caipAddress",(newCaipAddress=>this.onCaipAddressChange({newCaipAddress,resetSwapState:false,initializeSwapState:true}))),ModalController.W.subscribeKey("open",(isOpen=>{if(!isOpen){SwapController.GN.resetState()}})),RouterController.I.subscribeKey("view",(newRoute=>{if(!newRoute.includes("Swap")){SwapController.GN.resetValues()}})),SwapController.GN.subscribe((newState=>{this.initialized=newState.initialized;this.loadingQuote=newState.loadingQuote;this.loadingPrices=newState.loadingPrices;this.loadingTransaction=newState.loadingTransaction;this.sourceToken=newState.sourceToken;this.sourceTokenAmount=newState.sourceTokenAmount;this.sourceTokenPriceInUSD=newState.sourceTokenPriceInUSD;this.toToken=newState.toToken;this.toTokenAmount=newState.toTokenAmount;this.toTokenPriceInUSD=newState.toTokenPriceInUSD;this.inputError=newState.inputError;this.fetchError=newState.fetchError}))])}async firstUpdated(){SwapController.GN.initializeState();this.watchTokensAndValues();await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe?.()));clearInterval(this.interval)}render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval((()=>{SwapController.GN.getNetworkTokenPrice();SwapController.GN.getMyTokensWithBalance();SwapController.GN.swapTokens()}),1e4)}templateSwap(){return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){if(this.fetchError){return"Swap"}if(!this.sourceToken||!this.toToken){return"Select token"}if(!this.sourceTokenAmount){return"Enter amount"}if(this.inputError){return this.inputError}return"Review swap"}templateReplaceTokensButton(){return(0,lit.qy)`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(target,token){const myToken=SwapController.GN.state.myTokensWithBalance?.find((ct=>ct?.address===token?.address));const amount=target==="toToken"?this.toTokenAmount:this.sourceTokenAmount;const price=target==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;const marketValue=NumberUtil.S.parseLocalStringToNumber(amount)*price;return(0,lit.qy)`<w3m-swap-input
      .value=${target==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${target==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${target}
      .token=${token}
      .balance=${myToken?.quantity?.numeric}
      .price=${myToken?.price}
      .marketValue=${marketValue}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(target,balance){const maxValue=NumberUtil.S.bigNumber(balance||"0");this.handleChangeAmount(target,maxValue.gt(0)?maxValue.toFixed(20):"0")}templateDetails(){if(!this.sourceToken||!this.toToken||this.inputError){return null}return(0,lit.qy)`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(target,value){SwapController.GN.clearError();if(target==="sourceToken"){SwapController.GN.setSourceTokenAmount(value)}else{SwapController.GN.setToTokenAmount(value)}this.onDebouncedGetSwapCalldata()}templateActionButton(){const haveNoTokenSelected=!this.toToken||!this.sourceToken;const haveNoAmount=!this.sourceTokenAmount;const loading=this.loadingQuote||this.loadingPrices||this.loadingTransaction;const disabled=loading||haveNoTokenSelected||haveNoAmount||this.inputError;return(0,lit.qy)` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${haveNoTokenSelected?"neutral":"main"}
        .loading=${loading}
        .disabled=${disabled}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){SwapController.GN.switchTokens()}async onSwapPreview(){const activeChainNamespace=ChainController.W.state.activeChain;if(this.fetchError){await SwapController.GN.swapTokens()}EventsController.E.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});RouterController.I.push("SwapPreview")}async handleSwapParameters(){if(!this.initialParams){return}if(!SwapController.GN.state.initialized){const waitForInitialization=new Promise((resolve=>{const unsubscribe=SwapController.GN.subscribeKey("initialized",(initialized=>{if(initialized){unsubscribe?.();resolve()}}))}));await waitForInitialization}await this.setSwapParameters(this.initialParams)}async setSwapParameters({amount,fromToken,toToken}){if(!SwapController.GN.state.tokens||!SwapController.GN.state.myTokensWithBalance){const waitForTokens=new Promise((resolve=>{const unsubscribe=SwapController.GN.subscribeKey("myTokensWithBalance",(tokens=>{if(tokens&&tokens.length>0){unsubscribe?.();resolve()}}));setTimeout((()=>{unsubscribe?.();resolve()}),5e3)}));await waitForTokens}const allTokens=[...SwapController.GN.state.tokens||[],...SwapController.GN.state.myTokensWithBalance||[]];if(fromToken){const token=allTokens.find((t=>t.symbol.toLowerCase()===fromToken.toLowerCase()));if(token){SwapController.GN.setSourceToken(token)}}if(toToken){const token=allTokens.find((t=>t.symbol.toLowerCase()===toToken.toLowerCase()));if(token){SwapController.GN.setToToken(token)}}if(amount&&!isNaN(Number(amount))){SwapController.GN.setSourceTokenAmount(amount)}}onCaipAddressChange({newCaipAddress,resetSwapState,initializeSwapState}){if(this.caipAddress!==newCaipAddress){this.caipAddress=newCaipAddress;if(resetSwapState){SwapController.GN.resetState()}if(initializeSwapState){SwapController.GN.initializeState()}}}onCaipNetworkChange({newCaipNetwork,resetSwapState,initializeSwapState}){if(this.caipNetworkId!==newCaipNetwork?.caipNetworkId){this.caipNetworkId=newCaipNetwork?.caipNetworkId;if(resetSwapState){SwapController.GN.resetState()}if(initializeSwapState){SwapController.GN.initializeState()}}}};W3mSwapView.styles=w3m_swap_view_styles;w3m_swap_view_decorate([(0,decorators.MZ)({type:Object})],W3mSwapView.prototype,"initialParams",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"interval",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"detailsOpen",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"caipAddress",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"caipNetworkId",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"initialized",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"loadingQuote",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"loadingPrices",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"loadingTransaction",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"sourceToken",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"sourceTokenAmount",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"sourceTokenPriceInUSD",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"toToken",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"toTokenAmount",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"toTokenPriceInUSD",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"inputError",void 0);w3m_swap_view_decorate([(0,decorators.wk)()],W3mSwapView.prototype,"fetchError",void 0);W3mSwapView=w3m_swap_view_decorate([(0,esm_exports.EM)("w3m-swap-view")],W3mSwapView);const w3m_swap_preview_view_styles=(0,lit.AH)`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var w3m_swap_preview_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mSwapPreviewView=class W3mSwapPreviewView extends lit.WF{constructor(){super();this.unsubscribe=[];this.detailsOpen=true;this.approvalTransaction=SwapController.GN.state.approvalTransaction;this.swapTransaction=SwapController.GN.state.swapTransaction;this.sourceToken=SwapController.GN.state.sourceToken;this.sourceTokenAmount=SwapController.GN.state.sourceTokenAmount??"";this.sourceTokenPriceInUSD=SwapController.GN.state.sourceTokenPriceInUSD;this.toToken=SwapController.GN.state.toToken;this.toTokenAmount=SwapController.GN.state.toTokenAmount??"";this.toTokenPriceInUSD=SwapController.GN.state.toTokenPriceInUSD;this.caipNetwork=ChainController.W.state.activeCaipNetwork;this.balanceSymbol=AccountController.U.state.balanceSymbol;this.inputError=SwapController.GN.state.inputError;this.loadingQuote=SwapController.GN.state.loadingQuote;this.loadingApprovalTransaction=SwapController.GN.state.loadingApprovalTransaction;this.loadingBuildTransaction=SwapController.GN.state.loadingBuildTransaction;this.loadingTransaction=SwapController.GN.state.loadingTransaction;this.unsubscribe.push(...[AccountController.U.subscribeKey("balanceSymbol",(newBalanceSymbol=>{if(this.balanceSymbol!==newBalanceSymbol){RouterController.I.goBack()}})),ChainController.W.subscribeKey("activeCaipNetwork",(newCaipNetwork=>{if(this.caipNetwork!==newCaipNetwork){this.caipNetwork=newCaipNetwork}})),SwapController.GN.subscribe((newState=>{this.approvalTransaction=newState.approvalTransaction;this.swapTransaction=newState.swapTransaction;this.sourceToken=newState.sourceToken;this.toToken=newState.toToken;this.toTokenPriceInUSD=newState.toTokenPriceInUSD;this.sourceTokenAmount=newState.sourceTokenAmount??"";this.toTokenAmount=newState.toTokenAmount??"";this.inputError=newState.inputError;if(newState.inputError){RouterController.I.goBack()}this.loadingQuote=newState.loadingQuote;this.loadingApprovalTransaction=newState.loadingApprovalTransaction;this.loadingBuildTransaction=newState.loadingBuildTransaction;this.loadingTransaction=newState.loadingTransaction}))])}firstUpdated(){SwapController.GN.getTransaction();this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe?.()));clearInterval(this.interval)}render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval((()=>{if(!SwapController.GN.getApprovalLoadingState()){SwapController.GN.getTransaction()}}),1e4)}templateSwap(){const sourceTokenText=`${esm_exports.Zv.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`;const toTokenText=`${esm_exports.Zv.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`;const sourceTokenValue=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD;const toTokenValue=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD;const sentPrice=esm_exports.Zv.formatNumberToLocalString(sourceTokenValue);const receivePrice=esm_exports.Zv.formatNumberToLocalString(toTokenValue);const loading=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return(0,lit.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${sentPrice}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${sourceTokenText}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${receivePrice}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${toTokenText}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${loading}
            ?disabled=${loading}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){if(!this.sourceToken||!this.toToken||this.inputError){return null}return(0,lit.qy)`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){if(this.loadingApprovalTransaction){return"Approving..."}if(this.approvalTransaction){return"Approve"}return"Swap"}onCancelTransaction(){RouterController.I.goBack()}onSendTransaction(){if(this.approvalTransaction){SwapController.GN.sendTransactionForApproval(this.approvalTransaction)}else{SwapController.GN.sendTransactionForSwap(this.swapTransaction)}}};W3mSwapPreviewView.styles=w3m_swap_preview_view_styles;w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"interval",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"detailsOpen",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"approvalTransaction",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"swapTransaction",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"sourceToken",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"sourceTokenAmount",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"sourceTokenPriceInUSD",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"toToken",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"toTokenAmount",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"toTokenPriceInUSD",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"caipNetwork",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"balanceSymbol",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"inputError",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"loadingQuote",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"loadingApprovalTransaction",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"loadingBuildTransaction",void 0);w3m_swap_preview_view_decorate([(0,decorators.wk)()],W3mSwapPreviewView.prototype,"loadingTransaction",void 0);W3mSwapPreviewView=w3m_swap_preview_view_decorate([(0,esm_exports.EM)("w3m-swap-preview-view")],W3mSwapPreviewView);var wui_input_text=__webpack_require__(572701);var components_wui_icon=__webpack_require__(218436);var wui_image=__webpack_require__(162084);var components_wui_text=__webpack_require__(35198);var layout_wui_flex=__webpack_require__(480268);var ThemeUtil=__webpack_require__(735989);var UiHelperUtil=__webpack_require__(13127);var WebComponentsUtil=__webpack_require__(767662);const wui_token_list_item_styles=(0,lit.AH)`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var wui_token_list_item_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTokenListItem=class WuiTokenListItem extends lit.WF{constructor(){super();this.observer=new IntersectionObserver((()=>undefined));this.imageSrc=undefined;this.name=undefined;this.symbol=undefined;this.price=undefined;this.amount=undefined;this.visible=false;this.imageError=false;this.observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{if(entry.isIntersecting){this.visible=true}else{this.visible=false}}))}),{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible){return null}const value=this.amount&&this.price?NumberUtil.S.multiply(this.price,this.amount)?.toFixed(3):null;return(0,lit.qy)`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${value?(0,lit.qy)`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${UiHelperUtil.Z.formatNumberToLocalString(value,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?(0,lit.qy)`<wui-text variant="small-400" color="fg-200">
                  ${UiHelperUtil.Z.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){if(this.imageError){return(0,lit.qy)`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`}if(this.imageSrc){return(0,lit.qy)`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`}return null}imageLoadError(){this.imageError=true}};WuiTokenListItem.styles=[ThemeUtil.W5,ThemeUtil.fD,wui_token_list_item_styles];wui_token_list_item_decorate([(0,decorators.MZ)()],WuiTokenListItem.prototype,"imageSrc",void 0);wui_token_list_item_decorate([(0,decorators.MZ)()],WuiTokenListItem.prototype,"name",void 0);wui_token_list_item_decorate([(0,decorators.MZ)()],WuiTokenListItem.prototype,"symbol",void 0);wui_token_list_item_decorate([(0,decorators.MZ)()],WuiTokenListItem.prototype,"price",void 0);wui_token_list_item_decorate([(0,decorators.MZ)()],WuiTokenListItem.prototype,"amount",void 0);wui_token_list_item_decorate([(0,decorators.wk)()],WuiTokenListItem.prototype,"visible",void 0);wui_token_list_item_decorate([(0,decorators.wk)()],WuiTokenListItem.prototype,"imageError",void 0);WuiTokenListItem=wui_token_list_item_decorate([(0,WebComponentsUtil.E)("wui-token-list-item")],WuiTokenListItem);const w3m_swap_select_token_view_styles=(0,lit.AH)`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var w3m_swap_select_token_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mSwapSelectTokenView=class W3mSwapSelectTokenView extends lit.WF{constructor(){super();this.unsubscribe=[];this.targetToken=RouterController.I.state.data?.target;this.sourceToken=SwapController.GN.state.sourceToken;this.sourceTokenAmount=SwapController.GN.state.sourceTokenAmount;this.toToken=SwapController.GN.state.toToken;this.myTokensWithBalance=SwapController.GN.state.myTokensWithBalance;this.popularTokens=SwapController.GN.state.popularTokens;this.searchValue="";this.unsubscribe.push(...[SwapController.GN.subscribe((newState=>{this.sourceToken=newState.sourceToken;this.toToken=newState.toToken;this.myTokensWithBalance=newState.myTokensWithBalance}))])}updated(){const suggestedTokensContainer=this.renderRoot?.querySelector(".suggested-tokens-container");suggestedTokensContainer?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const tokensList=this.renderRoot?.querySelector(".tokens");tokensList?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();const suggestedTokensContainer=this.renderRoot?.querySelector(".suggested-tokens-container");const tokensList=this.renderRoot?.querySelector(".tokens");suggestedTokensContainer?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));tokensList?.removeEventListener("scroll",this.handleTokenListScroll.bind(this));clearInterval(this.interval)}render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(token){if(this.targetToken==="sourceToken"){SwapController.GN.setSourceToken(token)}else{SwapController.GN.setToToken(token);if(this.sourceToken&&this.sourceTokenAmount){SwapController.GN.swapTokens()}}RouterController.I.goBack()}templateSearchInput(){return(0,lit.qy)`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const yourTokens=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[];const tokens=this.popularTokens?this.popularTokens:[];const filteredYourTokens=this.filterTokensWithText(yourTokens,this.searchValue);const filteredTokens=this.filterTokensWithText(tokens,this.searchValue);return(0,lit.qy)`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${filteredYourTokens?.length>0?(0,lit.qy)`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${filteredYourTokens.map((token=>{const selected=token.symbol===this.sourceToken?.symbol||token.symbol===this.toToken?.symbol;return(0,lit.qy)`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${token.symbol}"
                      name=${token.name}
                      ?disabled=${selected}
                      symbol=${token.symbol}
                      price=${token?.price}
                      amount=${token?.quantity?.numeric}
                      imageSrc=${token.logoUri}
                      @click=${()=>{if(!selected){this.onSelectToken(token)}}}
                    >
                    </wui-token-list-item>
                  `}))}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${filteredTokens?.length>0?filteredTokens.map((token=>(0,lit.qy)`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${token.symbol}"
                    name=${token.name}
                    symbol=${token.symbol}
                    imageSrc=${token.logoUri}
                    @click=${()=>this.onSelectToken(token)}
                  >
                  </wui-token-list-item>
                `)):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const tokens=SwapController.GN.state.suggestedTokens?SwapController.GN.state.suggestedTokens.slice(0,8):null;if(!tokens){return null}return(0,lit.qy)`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${tokens.map((token=>(0,lit.qy)`
            <wui-token-button
              text=${token.symbol}
              imageSrc=${token.logoUri}
              @click=${()=>this.onSelectToken(token)}
            >
            </wui-token-button>
          `))}
      </wui-flex>
    `}onSearchInputChange(event){this.searchValue=event.detail}handleSuggestedTokensScroll(){const container=this.renderRoot?.querySelector(".suggested-tokens-container");if(!container){return}container.style.setProperty("--suggested-tokens-scroll--left-opacity",esm_exports.z8.interpolate([0,100],[0,1],container.scrollLeft).toString());container.style.setProperty("--suggested-tokens-scroll--right-opacity",esm_exports.z8.interpolate([0,100],[0,1],container.scrollWidth-container.scrollLeft-container.offsetWidth).toString())}handleTokenListScroll(){const container=this.renderRoot?.querySelector(".tokens");if(!container){return}container.style.setProperty("--tokens-scroll--top-opacity",esm_exports.z8.interpolate([0,100],[0,1],container.scrollTop).toString());container.style.setProperty("--tokens-scroll--bottom-opacity",esm_exports.z8.interpolate([0,100],[0,1],container.scrollHeight-container.scrollTop-container.offsetHeight).toString())}filterTokensWithText(tokens,text){return tokens.filter((token=>`${token.symbol} ${token.name} ${token.address}`.toLowerCase().includes(text.toLowerCase())))}};W3mSwapSelectTokenView.styles=w3m_swap_select_token_view_styles;w3m_swap_select_token_view_decorate([(0,decorators.wk)()],W3mSwapSelectTokenView.prototype,"interval",void 0);w3m_swap_select_token_view_decorate([(0,decorators.wk)()],W3mSwapSelectTokenView.prototype,"targetToken",void 0);w3m_swap_select_token_view_decorate([(0,decorators.wk)()],W3mSwapSelectTokenView.prototype,"sourceToken",void 0);w3m_swap_select_token_view_decorate([(0,decorators.wk)()],W3mSwapSelectTokenView.prototype,"sourceTokenAmount",void 0);w3m_swap_select_token_view_decorate([(0,decorators.wk)()],W3mSwapSelectTokenView.prototype,"toToken",void 0);w3m_swap_select_token_view_decorate([(0,decorators.wk)()],W3mSwapSelectTokenView.prototype,"myTokensWithBalance",void 0);w3m_swap_select_token_view_decorate([(0,decorators.wk)()],W3mSwapSelectTokenView.prototype,"popularTokens",void 0);w3m_swap_select_token_view_decorate([(0,decorators.wk)()],W3mSwapSelectTokenView.prototype,"searchValue",void 0);W3mSwapSelectTokenView=w3m_swap_select_token_view_decorate([(0,esm_exports.EM)("w3m-swap-select-token-view")],W3mSwapSelectTokenView)},388569:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var TooltipController=__webpack_require__(474518);var esm_exports=__webpack_require__(679849);var wui_flex=__webpack_require__(290766);var wui_icon=__webpack_require__(124188);var wui_text=__webpack_require__(342762);const styles=(0,lit.AH)`
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
    </wui-flex>`}};W3mTooltip.styles=[styles];__decorate([(0,decorators.wk)()],W3mTooltip.prototype,"open",void 0);__decorate([(0,decorators.wk)()],W3mTooltip.prototype,"message",void 0);__decorate([(0,decorators.wk)()],W3mTooltip.prototype,"triggerRect",void 0);__decorate([(0,decorators.wk)()],W3mTooltip.prototype,"variant",void 0);W3mTooltip=__decorate([(0,esm_exports.EM)("w3m-tooltip"),(0,esm_exports.EM)("w3m-tooltip")],W3mTooltip)},591630:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiShimmer=class WuiShimmer extends lit.WF{constructor(){super(...arguments);this.width="";this.height="";this.borderRadius="m";this.variant="default"}render(){this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};\n    `;return(0,lit.qy)`<slot></slot>`}};WuiShimmer.styles=[styles];__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"width",void 0);__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"height",void 0);__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"borderRadius",void 0);__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"variant",void 0);WuiShimmer=__decorate([(0,WebComponentsUtil.E)("wui-shimmer")],WuiShimmer)}}]);
//# sourceMappingURL=6585.0.71.0.1757439800232.js.map