"use strict";(self["webpackChunkremix_dapp"]=self["webpackChunkremix_dapp"]||[]).push([[6329],{31352:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{W3mBuyInProgressView:()=>W3mBuyInProgressView,W3mOnRampActivityView:()=>W3mOnRampActivityView,W3mOnRampProvidersView:()=>W3mOnRampProvidersView,W3mOnrampFiatSelectView:()=>W3mOnrampFiatSelectView,W3mOnrampTokensView:()=>W3mOnrampTokensView,W3mOnrampWidget:()=>W3mOnrampWidget,W3mWhatIsABuyView:()=>W3mWhatIsABuyView});var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var if_defined=__webpack_require__(51133);var DateUtil=__webpack_require__(92337);var vanilla=__webpack_require__(59095);var utils=__webpack_require__(39150);var ConstantsUtil=__webpack_require__(49024);var utils_ConstantsUtil=__webpack_require__(96184);var withErrorBoundary=__webpack_require__(2779);var AccountController=__webpack_require__(1218);var ApiController=__webpack_require__(56913);var BlockchainApiController=__webpack_require__(45827);var ChainController=__webpack_require__(64096);const USDC_CURRENCY_DEFAULT={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]};const USD_CURRENCY_DEFAULT={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]};const defaultState={providers:utils_ConstantsUtil.tM,selectedProvider:null,error:null,purchaseCurrency:USDC_CURRENCY_DEFAULT,paymentCurrency:USD_CURRENCY_DEFAULT,purchaseCurrencies:[USDC_CURRENCY_DEFAULT],paymentCurrencies:[],quotesLoading:false};const state=(0,vanilla.BX)(defaultState);const controller={state,subscribe(callback){return(0,vanilla.B1)(state,(()=>callback(state)))},subscribeKey(key,callback){return(0,utils.u$)(state,key,callback)},setSelectedProvider(provider){if(provider&&provider.name==="meld"){const currency=ChainController.W.state.activeChain===ConstantsUtil.o.CHAIN.SOLANA?"SOL":"USDC";const address=AccountController.U.state.address??"";const url=new URL(provider.url);url.searchParams.append("publicKey",utils_ConstantsUtil.Db);url.searchParams.append("destinationCurrencyCode",currency);url.searchParams.append("walletAddress",address);provider.url=url.toString()}state.selectedProvider=provider},setPurchaseCurrency(currency){state.purchaseCurrency=currency},setPaymentCurrency(currency){state.paymentCurrency=currency},setPurchaseAmount(amount){OnRampController.state.purchaseAmount=amount},setPaymentAmount(amount){OnRampController.state.paymentAmount=amount},async getAvailableCurrencies(){const options=await BlockchainApiController.T.getOnrampOptions();state.purchaseCurrencies=options.purchaseCurrencies;state.paymentCurrencies=options.paymentCurrencies;state.paymentCurrency=options.paymentCurrencies[0]||USD_CURRENCY_DEFAULT;state.purchaseCurrency=options.purchaseCurrencies[0]||USDC_CURRENCY_DEFAULT;await ApiController.N.fetchCurrencyImages(options.paymentCurrencies.map((currency=>currency.id)));await ApiController.N.fetchTokenImages(options.purchaseCurrencies.map((currency=>currency.symbol)))},async getQuote(){state.quotesLoading=true;try{const quote=await BlockchainApiController.T.getOnrampQuote({purchaseCurrency:state.purchaseCurrency,paymentCurrency:state.paymentCurrency,amount:state.paymentAmount?.toString()||"0",network:state.purchaseCurrency?.symbol});state.quotesLoading=false;state.purchaseAmount=Number(quote?.purchaseAmount.amount);return quote}catch(error){state.error=error.message;state.quotesLoading=false;return null}finally{state.quotesLoading=false}},resetState(){state.providers=utils_ConstantsUtil.tM;state.selectedProvider=null;state.error=null;state.purchaseCurrency=USDC_CURRENCY_DEFAULT;state.paymentCurrency=USD_CURRENCY_DEFAULT;state.purchaseCurrencies=[USDC_CURRENCY_DEFAULT];state.paymentCurrencies=[];state.paymentAmount=undefined;state.purchaseAmount=undefined;state.quotesLoading=false}};const OnRampController=(0,withErrorBoundary.X)(controller);var TransactionsController=__webpack_require__(19088);var AssetController=__webpack_require__(49953);var OptionsController=__webpack_require__(19717);var esm_exports=__webpack_require__(79849);var wui_flex=__webpack_require__(90766);var wui_text=__webpack_require__(42762);var wui_transaction_list_item_loader=__webpack_require__(60804);var wui_icon_box=__webpack_require__(96616);var wui_image=__webpack_require__(66004);var wui_loading_spinner=__webpack_require__(99941);const styles=(0,lit.AH)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mOnRampActivityItem=class W3mOnRampActivityItem extends lit.WF{constructor(){super(...arguments);this.disabled=false;this.color="inherit";this.label="Bought";this.purchaseValue="";this.purchaseCurrency="";this.date="";this.completed=false;this.inProgress=false;this.failed=false;this.onClick=null;this.symbol=""}firstUpdated(){if(!this.icon){this.fetchTokenImage()}}render(){return(0,lit.qy)`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?(0,lit.qy)`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:(0,lit.qy)`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await ApiController.N._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){if(this.inProgress){return null}return this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return(0,lit.qy)`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const icon=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return(0,lit.qy)`<wui-flex class="purchase-image-container">
      <wui-image src=${icon}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return(0,lit.qy)`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};W3mOnRampActivityItem.styles=[styles];__decorate([(0,decorators.MZ)({type:Boolean})],W3mOnRampActivityItem.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],W3mOnRampActivityItem.prototype,"color",void 0);__decorate([(0,decorators.MZ)()],W3mOnRampActivityItem.prototype,"label",void 0);__decorate([(0,decorators.MZ)()],W3mOnRampActivityItem.prototype,"purchaseValue",void 0);__decorate([(0,decorators.MZ)()],W3mOnRampActivityItem.prototype,"purchaseCurrency",void 0);__decorate([(0,decorators.MZ)()],W3mOnRampActivityItem.prototype,"date",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],W3mOnRampActivityItem.prototype,"completed",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],W3mOnRampActivityItem.prototype,"inProgress",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],W3mOnRampActivityItem.prototype,"failed",void 0);__decorate([(0,decorators.MZ)()],W3mOnRampActivityItem.prototype,"onClick",void 0);__decorate([(0,decorators.MZ)()],W3mOnRampActivityItem.prototype,"symbol",void 0);__decorate([(0,decorators.MZ)()],W3mOnRampActivityItem.prototype,"icon",void 0);W3mOnRampActivityItem=__decorate([(0,esm_exports.EM)("w3m-onramp-activity-item")],W3mOnRampActivityItem);const w3m_onramp_activity_view_styles=(0,lit.AH)`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var w3m_onramp_activity_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const LOADING_ITEM_COUNT=7;let W3mOnRampActivityView=class W3mOnRampActivityView extends lit.WF{constructor(){super();this.unsubscribe=[];this.selectedOnRampProvider=OnRampController.state.selectedProvider;this.loading=false;this.coinbaseTransactions=TransactionsController.W.state.coinbaseTransactions;this.tokenImages=AssetController.j.state.tokenImages;this.unsubscribe.push(...[OnRampController.subscribeKey("selectedProvider",(val=>{this.selectedOnRampProvider=val})),AssetController.j.subscribeKey("tokenImages",(val=>this.tokenImages=val)),()=>{clearTimeout(this.refetchTimeout)},TransactionsController.W.subscribe((val=>{this.coinbaseTransactions={...val.coinbaseTransactions}}))]);TransactionsController.W.clearCursor();this.fetchTransactions()}render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(transactions){return transactions?.map((transaction=>{const date=DateUtil.r.formatDate(transaction?.metadata?.minedAt);const transfer=transaction.transfers[0];const fungibleInfo=transfer?.fungible_info;if(!fungibleInfo){return null}const icon=fungibleInfo?.icon?.url||this.tokenImages?.[fungibleInfo.symbol||""];return(0,lit.qy)`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${transaction.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${transaction.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${transaction.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${(0,if_defined.J)(fungibleInfo.symbol)}
          purchaseValue=${transfer.quantity.numeric}
          date=${date}
          icon=${(0,if_defined.J)(icon)}
          symbol=${(0,if_defined.J)(fungibleInfo.symbol)}
        ></w3m-onramp-activity-item>
      `}))}templateTransactionsByYear(){const sortedYearKeys=Object.keys(this.coinbaseTransactions).sort().reverse();return sortedYearKeys.map((year=>{const yearInt=parseInt(year,10);const sortedMonthIndexes=new Array(12).fill(null).map(((_,idx)=>idx)).reverse();return sortedMonthIndexes.map((month=>{const groupTitle=esm_exports.tt.getTransactionGroupTitle(yearInt,month);const transactions=this.coinbaseTransactions[yearInt]?.[month];if(!transactions){return null}return(0,lit.qy)`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${groupTitle}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(transactions)}
            </wui-flex>
          </wui-flex>
        `}))}))}async fetchTransactions(){const provider="coinbase";if(provider==="coinbase"){await this.fetchCoinbaseTransactions()}}async fetchCoinbaseTransactions(){const address=AccountController.U.state.address;const projectId=OptionsController.H.state.projectId;if(!address){throw new Error("No address found")}if(!projectId){throw new Error("No projectId found")}this.loading=true;await TransactionsController.W.fetchTransactions(address,"coinbase");this.loading=false;this.refetchLoadingTransactions()}refetchLoadingTransactions(){const today=new Date;const currentMonthTxs=this.coinbaseTransactions[today.getFullYear()]?.[today.getMonth()]||[];const loadingTransactions=currentMonthTxs.filter((transaction=>transaction.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"));if(loadingTransactions.length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout((async()=>{const address=AccountController.U.state.address;await TransactionsController.W.fetchTransactions(address,"coinbase");this.refetchLoadingTransactions()}),3e3)}templateLoading(){return Array(LOADING_ITEM_COUNT).fill((0,lit.qy)` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((item=>item))}};W3mOnRampActivityView.styles=w3m_onramp_activity_view_styles;w3m_onramp_activity_view_decorate([(0,decorators.wk)()],W3mOnRampActivityView.prototype,"selectedOnRampProvider",void 0);w3m_onramp_activity_view_decorate([(0,decorators.wk)()],W3mOnRampActivityView.prototype,"loading",void 0);w3m_onramp_activity_view_decorate([(0,decorators.wk)()],W3mOnRampActivityView.prototype,"coinbaseTransactions",void 0);w3m_onramp_activity_view_decorate([(0,decorators.wk)()],W3mOnRampActivityView.prototype,"tokenImages",void 0);W3mOnRampActivityView=w3m_onramp_activity_view_decorate([(0,esm_exports.EM)("w3m-onramp-activity-view")],W3mOnRampActivityView);var OptionsStateController=__webpack_require__(30934);var ModalController=__webpack_require__(66084);var wui_list_item=__webpack_require__(75429);var w3m_legal_checkbox=__webpack_require__(25452);var w3m_legal_footer=__webpack_require__(78899);const w3m_onramp_fiat_select_view_styles=(0,lit.AH)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var w3m_onramp_fiat_select_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mOnrampFiatSelectView=class W3mOnrampFiatSelectView extends lit.WF{constructor(){super();this.unsubscribe=[];this.selectedCurrency=OnRampController.state.paymentCurrency;this.currencies=OnRampController.state.paymentCurrencies;this.currencyImages=AssetController.j.state.currencyImages;this.checked=OptionsStateController.o.state.isLegalCheckboxChecked;this.unsubscribe.push(...[OnRampController.subscribe((val=>{this.selectedCurrency=val.paymentCurrency;this.currencies=val.paymentCurrencies})),AssetController.j.subscribeKey("currencyImages",(val=>this.currencyImages=val)),OptionsStateController.o.subscribeKey("isLegalCheckboxChecked",(val=>{this.checked=val}))])}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const{termsConditionsUrl,privacyPolicyUrl}=OptionsController.H.state;const legalCheckbox=OptionsController.H.state.features?.legalCheckbox;const legalUrl=termsConditionsUrl||privacyPolicyUrl;const showLegalCheckbox=Boolean(legalUrl)&&Boolean(legalCheckbox);const disabled=showLegalCheckbox&&!this.checked;return(0,lit.qy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,if_defined.J)(disabled?"disabled":undefined)}
      >
        ${this.currenciesTemplate(disabled)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(disabled=false){return this.currencies.map((currency=>(0,lit.qy)`
        <wui-list-item
          imageSrc=${(0,if_defined.J)(this.currencyImages?.[currency.id])}
          @click=${()=>this.selectCurrency(currency)}
          variant="image"
          tabIdx=${(0,if_defined.J)(disabled?-1:undefined)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${currency.id}</wui-text>
        </wui-list-item>
      `))}selectCurrency(currency){if(!currency){return}OnRampController.setPaymentCurrency(currency);ModalController.W.close()}};W3mOnrampFiatSelectView.styles=w3m_onramp_fiat_select_view_styles;w3m_onramp_fiat_select_view_decorate([(0,decorators.wk)()],W3mOnrampFiatSelectView.prototype,"selectedCurrency",void 0);w3m_onramp_fiat_select_view_decorate([(0,decorators.wk)()],W3mOnrampFiatSelectView.prototype,"currencies",void 0);w3m_onramp_fiat_select_view_decorate([(0,decorators.wk)()],W3mOnrampFiatSelectView.prototype,"currencyImages",void 0);w3m_onramp_fiat_select_view_decorate([(0,decorators.wk)()],W3mOnrampFiatSelectView.prototype,"checked",void 0);W3mOnrampFiatSelectView=w3m_onramp_fiat_select_view_decorate([(0,esm_exports.EM)("w3m-onramp-fiat-select-view")],W3mOnrampFiatSelectView);var RouterController=__webpack_require__(63348);var CoreHelperUtil=__webpack_require__(10526);var EventsController=__webpack_require__(28304);var W3mFrameConstants=__webpack_require__(11536);var AssetUtil=__webpack_require__(74681);var wui_icon=__webpack_require__(24188);var wui_visual=__webpack_require__(81932);const w3m_onramp_provider_item_styles=(0,lit.AH)`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var w3m_onramp_provider_item_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mOnRampProviderItem=class W3mOnRampProviderItem extends lit.WF{constructor(){super(...arguments);this.disabled=false;this.color="inherit";this.label="";this.feeRange="";this.loading=false;this.onClick=null}render(){return(0,lit.qy)`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0,if_defined.J)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?(0,lit.qy)`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:(0,lit.qy)`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){const requestedCaipNetworks=ChainController.W.getAllRequestedCaipNetworks();const slicedNetworks=requestedCaipNetworks?.filter((network=>network?.assets?.imageId))?.slice(0,5);return(0,lit.qy)`
      <wui-flex class="networks">
        ${slicedNetworks?.map((network=>(0,lit.qy)`
            <wui-flex class="network-icon">
              <wui-image src=${(0,if_defined.J)(AssetUtil.$.getNetworkImage(network))}></wui-image>
            </wui-flex>
          `))}
      </wui-flex>
    `}};W3mOnRampProviderItem.styles=[w3m_onramp_provider_item_styles];w3m_onramp_provider_item_decorate([(0,decorators.MZ)({type:Boolean})],W3mOnRampProviderItem.prototype,"disabled",void 0);w3m_onramp_provider_item_decorate([(0,decorators.MZ)()],W3mOnRampProviderItem.prototype,"color",void 0);w3m_onramp_provider_item_decorate([(0,decorators.MZ)()],W3mOnRampProviderItem.prototype,"name",void 0);w3m_onramp_provider_item_decorate([(0,decorators.MZ)()],W3mOnRampProviderItem.prototype,"label",void 0);w3m_onramp_provider_item_decorate([(0,decorators.MZ)()],W3mOnRampProviderItem.prototype,"feeRange",void 0);w3m_onramp_provider_item_decorate([(0,decorators.MZ)({type:Boolean})],W3mOnRampProviderItem.prototype,"loading",void 0);w3m_onramp_provider_item_decorate([(0,decorators.MZ)()],W3mOnRampProviderItem.prototype,"onClick",void 0);W3mOnRampProviderItem=w3m_onramp_provider_item_decorate([(0,esm_exports.EM)("w3m-onramp-provider-item")],W3mOnRampProviderItem);var wui_link=__webpack_require__(1764);const w3m_onramp_providers_footer_styles=(0,lit.AH)`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var w3m_onramp_providers_footer_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mOnRampProvidersFooter=class W3mOnRampProvidersFooter extends lit.WF{render(){const{termsConditionsUrl,privacyPolicyUrl}=OptionsController.H.state;if(!termsConditionsUrl&&!privacyPolicyUrl){return null}return(0,lit.qy)`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return(0,lit.qy)` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){const activeChainNamespace=ChainController.W.state.activeChain;EventsController.E.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});RouterController.I.push("WhatIsABuy")}};W3mOnRampProvidersFooter.styles=[w3m_onramp_providers_footer_styles];W3mOnRampProvidersFooter=w3m_onramp_providers_footer_decorate([(0,esm_exports.EM)("w3m-onramp-providers-footer")],W3mOnRampProvidersFooter);var w3m_onramp_providers_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mOnRampProvidersView=class W3mOnRampProvidersView extends lit.WF{constructor(){super();this.unsubscribe=[];this.providers=OnRampController.state.providers;this.unsubscribe.push(...[OnRampController.subscribeKey("providers",(val=>{this.providers=val}))])}firstUpdated(){const urlPromises=this.providers.map((async provider=>{if(provider.name==="coinbase"){return await this.getCoinbaseOnRampURL()}return Promise.resolve(provider?.url)}));Promise.all(urlPromises).then((urls=>{this.providers=this.providers.map(((provider,index)=>({...provider,url:urls[index]||""})))}))}render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter((provider=>provider.supportedChains.includes(ChainController.W.state.activeChain??"eip155"))).map((provider=>(0,lit.qy)`
          <w3m-onramp-provider-item
            label=${provider.label}
            name=${provider.name}
            feeRange=${provider.feeRange}
            @click=${()=>{this.onClickProvider(provider)}}
            ?disabled=${!provider.url}
          ></w3m-onramp-provider-item>
        `))}onClickProvider(provider){const activeChainNamespace=ChainController.W.state.activeChain;OnRampController.setSelectedProvider(provider);RouterController.I.push("BuyInProgress");CoreHelperUtil.w.openHref(provider.url,"popupWindow","width=600,height=800,scrollbars=yes");EventsController.E.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:provider.name,isSmartAccount:AccountController.U.state.preferredAccountTypes?.[activeChainNamespace]===W3mFrameConstants.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const address=AccountController.U.state.address;const network=ChainController.W.state.activeCaipNetwork;if(!address){throw new Error("No address found")}if(!network?.name){throw new Error("No network found")}const defaultNetwork=utils_ConstantsUtil.oU.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[network.name]??utils_ConstantsUtil.oU.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN;const purchaseCurrency=OnRampController.state.purchaseCurrency;const assets=purchaseCurrency?[purchaseCurrency.symbol]:OnRampController.state.purchaseCurrencies.map((currency=>currency.symbol));return await BlockchainApiController.T.generateOnRampURL({defaultNetwork,destinationWallets:[{address,blockchains:utils_ConstantsUtil.oU.WC_COINBASE_PAY_SDK_CHAINS,assets}],partnerUserId:address,purchaseAmount:OnRampController.state.purchaseAmount})}};w3m_onramp_providers_view_decorate([(0,decorators.wk)()],W3mOnRampProvidersView.prototype,"providers",void 0);W3mOnRampProvidersView=w3m_onramp_providers_view_decorate([(0,esm_exports.EM)("w3m-onramp-providers-view")],W3mOnRampProvidersView);const w3m_onramp_tokens_select_view_styles=(0,lit.AH)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var w3m_onramp_tokens_select_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mOnrampTokensView=class W3mOnrampTokensView extends lit.WF{constructor(){super();this.unsubscribe=[];this.selectedCurrency=OnRampController.state.purchaseCurrencies;this.tokens=OnRampController.state.purchaseCurrencies;this.tokenImages=AssetController.j.state.tokenImages;this.checked=OptionsStateController.o.state.isLegalCheckboxChecked;this.unsubscribe.push(...[OnRampController.subscribe((val=>{this.selectedCurrency=val.purchaseCurrencies;this.tokens=val.purchaseCurrencies})),AssetController.j.subscribeKey("tokenImages",(val=>this.tokenImages=val)),OptionsStateController.o.subscribeKey("isLegalCheckboxChecked",(val=>{this.checked=val}))])}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const{termsConditionsUrl,privacyPolicyUrl}=OptionsController.H.state;const legalCheckbox=OptionsController.H.state.features?.legalCheckbox;const legalUrl=termsConditionsUrl||privacyPolicyUrl;const showLegalCheckbox=Boolean(legalUrl)&&Boolean(legalCheckbox);const disabled=showLegalCheckbox&&!this.checked;return(0,lit.qy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,if_defined.J)(disabled?"disabled":undefined)}
      >
        ${this.currenciesTemplate(disabled)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(disabled=false){return this.tokens.map((token=>(0,lit.qy)`
        <wui-list-item
          imageSrc=${(0,if_defined.J)(this.tokenImages?.[token.symbol])}
          @click=${()=>this.selectToken(token)}
          variant="image"
          tabIdx=${(0,if_defined.J)(disabled?-1:undefined)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${token.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${token.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `))}selectToken(currency){if(!currency){return}OnRampController.setPurchaseCurrency(currency);ModalController.W.close()}};W3mOnrampTokensView.styles=w3m_onramp_tokens_select_view_styles;w3m_onramp_tokens_select_view_decorate([(0,decorators.wk)()],W3mOnrampTokensView.prototype,"selectedCurrency",void 0);w3m_onramp_tokens_select_view_decorate([(0,decorators.wk)()],W3mOnrampTokensView.prototype,"tokens",void 0);w3m_onramp_tokens_select_view_decorate([(0,decorators.wk)()],W3mOnrampTokensView.prototype,"tokenImages",void 0);w3m_onramp_tokens_select_view_decorate([(0,decorators.wk)()],W3mOnrampTokensView.prototype,"checked",void 0);W3mOnrampTokensView=w3m_onramp_tokens_select_view_decorate([(0,esm_exports.EM)("w3m-onramp-token-select-view")],W3mOnrampTokensView);var ConnectionController=__webpack_require__(27617);var SnackController=__webpack_require__(48375);var ThemeController=__webpack_require__(35788);var wui_button=__webpack_require__(75541);var wui_loading_thumbnail=__webpack_require__(51020);const w3m_buy_in_progress_view_styles=(0,lit.AH)`
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
`;var w3m_buy_in_progress_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mBuyInProgressView=class W3mBuyInProgressView extends lit.WF{constructor(){super();this.unsubscribe=[];this.selectedOnRampProvider=OnRampController.state.selectedProvider;this.uri=ConnectionController.x.state.wcUri;this.ready=false;this.showRetry=false;this.buffering=false;this.error=false;this.startTime=null;this.isMobile=false;this.onRetry=undefined;this.unsubscribe.push(...[OnRampController.subscribeKey("selectedProvider",(val=>{this.selectedOnRampProvider=val}))]);this.watchTransactions()}disconnectedCallback(){if(this.intervalId){clearInterval(this.intervalId)}}render(){let label="Continue in external window";if(this.error){label="Buy failed"}else if(this.selectedOnRampProvider){label=`Buy in ${this.selectedOnRampProvider?.label}`}const subLabel=this.error?"Buy can be declined from your side or due to and error on the provider app":`We’ll notify you once your Buy is processed`;return(0,lit.qy)`
      <wui-flex
        data-error=${(0,if_defined.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,if_defined.J)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

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

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(!this.selectedOnRampProvider){return}switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now();this.initializeCoinbaseTransactions();break;default:break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions();this.intervalId=setInterval((()=>this.watchCoinbaseTransactions()),4e3)}async watchCoinbaseTransactions(){try{const address=AccountController.U.state.address;if(!address){throw new Error("No address found")}const coinbaseResponse=await BlockchainApiController.T.fetchTransactions({account:address,onramp:"coinbase"});const newTransactions=coinbaseResponse.data.filter((tx=>new Date(tx.metadata.minedAt)>new Date(this.startTime)||tx.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"));if(newTransactions.length){clearInterval(this.intervalId);RouterController.I.replace("OnRampActivity")}else if(this.startTime&&Date.now()-this.startTime>=18e4){clearInterval(this.intervalId);this.error=true}}catch(error){SnackController.P.showError(error)}}onTryAgain(){if(!this.selectedOnRampProvider){return}this.error=false;CoreHelperUtil.w.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes")}tryAgainTemplate(){if(!this.selectedOnRampProvider?.url){return null}return(0,lit.qy)`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`}loaderTemplate(){const borderRadiusMaster=ThemeController.W.state.themeVariables["--w3m-border-radius-master"];const radius=borderRadiusMaster?parseInt(borderRadiusMaster.replace("px",""),10):4;return(0,lit.qy)`<wui-loading-thumbnail radius=${radius*9}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){SnackController.P.showError("No link found");RouterController.I.goBack();return}try{CoreHelperUtil.w.copyToClopboard(this.selectedOnRampProvider.url);SnackController.P.showSuccess("Link copied")}catch{SnackController.P.showError("Failed to copy")}}};W3mBuyInProgressView.styles=w3m_buy_in_progress_view_styles;w3m_buy_in_progress_view_decorate([(0,decorators.wk)()],W3mBuyInProgressView.prototype,"intervalId",void 0);w3m_buy_in_progress_view_decorate([(0,decorators.wk)()],W3mBuyInProgressView.prototype,"selectedOnRampProvider",void 0);w3m_buy_in_progress_view_decorate([(0,decorators.wk)()],W3mBuyInProgressView.prototype,"uri",void 0);w3m_buy_in_progress_view_decorate([(0,decorators.wk)()],W3mBuyInProgressView.prototype,"ready",void 0);w3m_buy_in_progress_view_decorate([(0,decorators.wk)()],W3mBuyInProgressView.prototype,"showRetry",void 0);w3m_buy_in_progress_view_decorate([(0,decorators.wk)()],W3mBuyInProgressView.prototype,"buffering",void 0);w3m_buy_in_progress_view_decorate([(0,decorators.wk)()],W3mBuyInProgressView.prototype,"error",void 0);w3m_buy_in_progress_view_decorate([(0,decorators.wk)()],W3mBuyInProgressView.prototype,"startTime",void 0);w3m_buy_in_progress_view_decorate([(0,decorators.MZ)({type:Boolean})],W3mBuyInProgressView.prototype,"isMobile",void 0);w3m_buy_in_progress_view_decorate([(0,decorators.MZ)()],W3mBuyInProgressView.prototype,"onRetry",void 0);W3mBuyInProgressView=w3m_buy_in_progress_view_decorate([(0,esm_exports.EM)("w3m-buy-in-progress-view")],W3mBuyInProgressView);var w3m_what_is_a_buy_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mWhatIsABuyView=class W3mWhatIsABuyView extends lit.WF{render(){return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${RouterController.I.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};W3mWhatIsABuyView=w3m_what_is_a_buy_view_decorate([(0,esm_exports.EM)("w3m-what-is-a-buy-view")],W3mWhatIsABuyView);var wui_input_text=__webpack_require__(72701);const w3m_onramp_input_styles=(0,lit.AH)`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var w3m_onramp_input_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mInputCurrency=class W3mInputCurrency extends lit.WF{constructor(){super();this.unsubscribe=[];this.type="Token";this.value=0;this.currencies=[];this.selectedCurrency=this.currencies?.[0];this.currencyImages=AssetController.j.state.currencyImages;this.tokenImages=AssetController.j.state.tokenImages;this.unsubscribe.push(OnRampController.subscribeKey("purchaseCurrency",(val=>{if(!val||this.type==="Fiat"){return}this.selectedCurrency=this.formatPurchaseCurrency(val)})),OnRampController.subscribeKey("paymentCurrency",(val=>{if(!val||this.type==="Token"){return}this.selectedCurrency=this.formatPaymentCurrency(val)})),OnRampController.subscribe((val=>{if(this.type==="Fiat"){this.currencies=val.purchaseCurrencies.map(this.formatPurchaseCurrency)}else{this.currencies=val.paymentCurrencies.map(this.formatPaymentCurrency)}})),AssetController.j.subscribe((val=>{this.currencyImages={...val.currencyImages};this.tokenImages={...val.tokenImages}})))}firstUpdated(){OnRampController.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const symbol=this.selectedCurrency?.symbol||"";const image=this.currencyImages[symbol]||this.tokenImages[symbol];return(0,lit.qy)`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?(0,lit.qy)` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>ModalController.W.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,if_defined.J)(image)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:(0,lit.qy)`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(currency){return{name:currency.id,symbol:currency.id}}formatPurchaseCurrency(currency){return{name:currency.name,symbol:currency.symbol}}};W3mInputCurrency.styles=w3m_onramp_input_styles;w3m_onramp_input_decorate([(0,decorators.MZ)({type:String})],W3mInputCurrency.prototype,"type",void 0);w3m_onramp_input_decorate([(0,decorators.MZ)({type:Number})],W3mInputCurrency.prototype,"value",void 0);w3m_onramp_input_decorate([(0,decorators.wk)()],W3mInputCurrency.prototype,"currencies",void 0);w3m_onramp_input_decorate([(0,decorators.wk)()],W3mInputCurrency.prototype,"selectedCurrency",void 0);w3m_onramp_input_decorate([(0,decorators.wk)()],W3mInputCurrency.prototype,"currencyImages",void 0);w3m_onramp_input_decorate([(0,decorators.wk)()],W3mInputCurrency.prototype,"tokenImages",void 0);W3mInputCurrency=w3m_onramp_input_decorate([(0,esm_exports.EM)("w3m-onramp-input")],W3mInputCurrency);const w3m_onramp_widget_styles=(0,lit.AH)`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var w3m_onramp_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const PAYMENT_CURRENCY_SYMBOLS={USD:"$",EUR:"€",GBP:"£"};const BUY_PRESET_AMOUNTS=[100,250,500,1e3];let W3mOnrampWidget=class W3mOnrampWidget extends lit.WF{constructor(){super();this.unsubscribe=[];this.disabled=false;this.caipAddress=ChainController.W.state.activeCaipAddress;this.loading=ModalController.W.state.loading;this.paymentCurrency=OnRampController.state.paymentCurrency;this.paymentAmount=OnRampController.state.paymentAmount;this.purchaseAmount=OnRampController.state.purchaseAmount;this.quoteLoading=OnRampController.state.quotesLoading;this.unsubscribe.push(...[ChainController.W.subscribeKey("activeCaipAddress",(val=>this.caipAddress=val)),ModalController.W.subscribeKey("loading",(val=>{this.loading=val})),OnRampController.subscribe((val=>{this.paymentCurrency=val.paymentCurrency;this.paymentAmount=val.paymentAmount;this.purchaseAmount=val.purchaseAmount;this.quoteLoading=val.quotesLoading}))])}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${BUY_PRESET_AMOUNTS.map((amount=>(0,lit.qy)`<wui-button
                  variant=${this.paymentAmount===amount?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(amount)}
                  >${`${PAYMENT_CURRENCY_SYMBOLS[this.paymentCurrency?.id||"USD"]} ${amount}`}</wui-button
                >`))}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?(0,lit.qy)`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:(0,lit.qy)`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){if(!this.loading){ModalController.W.open({view:"OnRampProviders"})}}openModal(){ModalController.W.open({view:"Connect"})}async onPaymentAmountChange(event){OnRampController.setPaymentAmount(Number(event.detail));await OnRampController.getQuote()}async selectPresetAmount(amount){OnRampController.setPaymentAmount(amount);await OnRampController.getQuote()}};W3mOnrampWidget.styles=w3m_onramp_widget_styles;w3m_onramp_widget_decorate([(0,decorators.MZ)({type:Boolean})],W3mOnrampWidget.prototype,"disabled",void 0);w3m_onramp_widget_decorate([(0,decorators.wk)()],W3mOnrampWidget.prototype,"caipAddress",void 0);w3m_onramp_widget_decorate([(0,decorators.wk)()],W3mOnrampWidget.prototype,"loading",void 0);w3m_onramp_widget_decorate([(0,decorators.wk)()],W3mOnrampWidget.prototype,"paymentCurrency",void 0);w3m_onramp_widget_decorate([(0,decorators.wk)()],W3mOnrampWidget.prototype,"paymentAmount",void 0);w3m_onramp_widget_decorate([(0,decorators.wk)()],W3mOnrampWidget.prototype,"purchaseAmount",void 0);w3m_onramp_widget_decorate([(0,decorators.wk)()],W3mOnrampWidget.prototype,"quoteLoading",void 0);W3mOnrampWidget=w3m_onramp_widget_decorate([(0,esm_exports.EM)("w3m-onramp-widget")],W3mOnrampWidget)},62084:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(84706);var decorators=__webpack_require__(5507);var ThemeUtil=__webpack_require__(35989);var WebComponentsUtil=__webpack_require__(67662);const styles=(0,lit.AH)`
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
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiImage=class WuiImage extends lit.WF{constructor(){super(...arguments);this.src="./path/to/image.jpg";this.alt="Image";this.size=undefined}render(){this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `;return(0,lit.qy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:true,composed:true}))}};WuiImage.styles=[ThemeUtil.W5,ThemeUtil.ck,styles];__decorate([(0,decorators.MZ)()],WuiImage.prototype,"src",void 0);__decorate([(0,decorators.MZ)()],WuiImage.prototype,"alt",void 0);__decorate([(0,decorators.MZ)()],WuiImage.prototype,"size",void 0);WuiImage=__decorate([(0,WebComponentsUtil.E)("wui-image")],WuiImage)}}]);