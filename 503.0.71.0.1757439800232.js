"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[503],{370503:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{W3mPayLoadingView:()=>W3mPayLoadingView,W3mPayView:()=>W3mPayView,baseETH:()=>baseETH,baseSepoliaETH:()=>baseSepoliaETH,baseUSDC:()=>baseUSDC,getExchanges:()=>client_getExchanges,getIsPaymentInProgress:()=>getIsPaymentInProgress,getPayError:()=>getPayError,getPayResult:()=>getPayResult,openPay:()=>openPay});var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var if_defined=__webpack_require__(151133);var AccountController=__webpack_require__(101218);var ChainController=__webpack_require__(264096);var ModalController=__webpack_require__(166084);var CoreHelperUtil=__webpack_require__(910526);var SnackController=__webpack_require__(648375);var ConnectionController=__webpack_require__(327617);var esm_exports=__webpack_require__(679849);var wui_button=__webpack_require__(575541);var wui_flex=__webpack_require__(290766);var wui_icon=__webpack_require__(124188);var wui_icon_button=__webpack_require__(568933);var wui_icon_link=__webpack_require__(701552);var wui_image=__webpack_require__(366004);var wui_list_item=__webpack_require__(375429);var wui_loading_spinner=__webpack_require__(799941);var wui_network_image=__webpack_require__(469811);var wui_separator=__webpack_require__(297466);var wui_text=__webpack_require__(342762);var wui_wallet_image=__webpack_require__(972540);var vanilla=__webpack_require__(959095);var utils=__webpack_require__(839150);var ParseUtil=__webpack_require__(446174);var ConstantsUtil=__webpack_require__(549024);var EventsController=__webpack_require__(128304);var RouterController=__webpack_require__(463348);var ProviderUtil=__webpack_require__(32566);const AppKitPayErrorCodes={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS"};const AppKitPayErrorMessages={[AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[AppKitPayErrorCodes.INVALID_RECIPIENT]:"Invalid recipient address",[AppKitPayErrorCodes.INVALID_ASSET]:"Invalid asset specified",[AppKitPayErrorCodes.INVALID_AMOUNT]:"Invalid payment amount",[AppKitPayErrorCodes.UNKNOWN_ERROR]:"Unknown payment error occurred",[AppKitPayErrorCodes.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[AppKitPayErrorCodes.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[AppKitPayErrorCodes.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[AppKitPayErrorCodes.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[AppKitPayErrorCodes.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status"};class AppKitPayError extends Error{get message(){return AppKitPayErrorMessages[this.code]}constructor(code,details){super(AppKitPayErrorMessages[code]);this.name="AppKitPayError";this.code=code;this.details=details;if(Error.captureStackTrace){Error.captureStackTrace(this,AppKitPayError)}}}function createAppKitPayError(code,details){const errorCode=code||AppKitPayErrorCodes.UNKNOWN_ERROR;return new AppKitPayError(errorCode,details)}var OptionsController=__webpack_require__(919717);const API_URL="https://rpc.walletconnect.org/v1/json-rpc";class JsonRpcError extends Error{}function getApiUrl(){const projectId=OptionsController.H.getSnapshot().projectId;return`${API_URL}?projectId=${projectId}`}async function sendRequest(method,params){const url=getApiUrl();const requestBody={jsonrpc:"2.0",id:1,method,params};const response=await fetch(url,{method:"POST",body:JSON.stringify(requestBody),headers:{"Content-Type":"application/json"}});const json=await response.json();if(json.error){throw new JsonRpcError(json.error.message)}return json}async function getExchanges(params){const response=await sendRequest("reown_getExchanges",params);return response.result}async function getPayUrl(params){const response=await sendRequest("reown_getExchangePayUrl",params);return response.result}async function getBuyStatus(params){const response=await sendRequest("reown_getExchangeBuyStatus",params);return response.result}const CHAIN_ASSET_INFO_MAP={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"}};function formatCaip19Asset(caipNetworkId,asset){const{chainNamespace,chainId}=ParseUtil.C.parseCaipNetworkId(caipNetworkId);const chainInfo=CHAIN_ASSET_INFO_MAP[chainNamespace];if(!chainInfo){throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${chainNamespace}`)}let assetNamespace=chainInfo.native.assetNamespace;let assetReference=chainInfo.native.assetReference;if(asset!=="native"){assetNamespace=chainInfo.defaultTokenNamespace;assetReference=asset}const networkPart=`${chainNamespace}:${chainId}`;return`${networkPart}/${assetNamespace}:${assetReference}`}var ContractUtil=__webpack_require__(577978);async function ensureCorrectNetwork(options){const{paymentAssetNetwork,activeCaipNetwork,approvedCaipNetworkIds,requestedCaipNetworks}=options;const sortedNetworks=CoreHelperUtil.w.sortRequestedNetworks(approvedCaipNetworkIds,requestedCaipNetworks);const assetCaipNetwork=sortedNetworks.find((network=>network.caipNetworkId===paymentAssetNetwork));if(!assetCaipNetwork){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG)}if(assetCaipNetwork.caipNetworkId===activeCaipNetwork.caipNetworkId){return}const isSupportingAllNetworks=ChainController.W.getNetworkProp("supportsAllNetworks",assetCaipNetwork.chainNamespace);const isSwitchAllowed=approvedCaipNetworkIds?.includes(assetCaipNetwork.caipNetworkId)||isSupportingAllNetworks;if(!isSwitchAllowed){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG)}try{await ChainController.W.switchActiveNetwork(assetCaipNetwork)}catch(error){throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR,error)}}async function processEvmNativePayment(paymentAsset,chainNamespace,params){if(chainNamespace!==ConstantsUtil.o.CHAIN.EVM){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE)}if(!params.fromAddress){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.")}const amountValue=typeof params.amount==="string"?parseFloat(params.amount):params.amount;if(isNaN(amountValue)){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG)}const decimals=paymentAsset.metadata?.decimals??18;const amountBigInt=ConnectionController.x.parseUnits(amountValue.toString(),decimals);if(typeof amountBigInt!=="bigint"){throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR)}const txResponse=await ConnectionController.x.sendTransaction({chainNamespace,to:params.recipient,address:params.fromAddress,value:amountBigInt,data:"0x"});return txResponse??undefined}async function processEvmErc20Payment(paymentAsset,params){if(!params.fromAddress){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.")}const tokenAddress=paymentAsset.asset;const recipientAddress=params.recipient;const decimals=Number(paymentAsset.metadata.decimals);const amountBigInt=ConnectionController.x.parseUnits(params.amount.toString(),decimals);if(amountBigInt===undefined){throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR)}const txResponse=await ConnectionController.x.writeContract({fromAddress:params.fromAddress,tokenAddress,args:[recipientAddress,amountBigInt],method:"transfer",abi:ContractUtil.v.getERC20Abi(tokenAddress),chainNamespace:ConstantsUtil.o.CHAIN.EVM});return txResponse??undefined}const DEFAULT_PAGE=0;const DEFAULT_PAYMENT_ID="unknown";const state=(0,vanilla.BX)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:false,error:null,isPaymentInProgress:false,exchanges:[],isLoading:false,openInNewTab:true,redirectUrl:undefined,payWithExchange:undefined,currentPayment:undefined,analyticsSet:false,paymentId:undefined});const PayController_PayController={state,subscribe(callback){return(0,vanilla.B1)(state,(()=>callback(state)))},subscribeKey(key,callback){return(0,utils.u$)(state,key,callback)},async handleOpenPay(options){this.resetState();this.setPaymentConfig(options);this.subscribeEvents();this.initializeAnalytics();state.isConfigured=true;EventsController.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:state.exchanges,configuration:{network:state.paymentAsset.network,asset:state.paymentAsset.asset,recipient:state.recipient,amount:state.amount}}});await ModalController.W.open({view:"Pay"})},resetState(){state.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}};state.recipient="0x0";state.amount=0;state.isConfigured=false;state.error=null;state.isPaymentInProgress=false;state.isLoading=false;state.currentPayment=undefined},setPaymentConfig(config){if(!config.paymentAsset){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG)}try{state.paymentAsset=config.paymentAsset;state.recipient=config.recipient;state.amount=config.amount;state.openInNewTab=config.openInNewTab??true;state.redirectUrl=config.redirectUrl;state.payWithExchange=config.payWithExchange;state.error=null}catch(error){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG,error.message)}},getPaymentAsset(){return state.paymentAsset},getExchanges(){return state.exchanges},async fetchExchanges(){try{state.isLoading=true;const response=await getExchanges({page:DEFAULT_PAGE,asset:formatCaip19Asset(state.paymentAsset.network,state.paymentAsset.asset),amount:state.amount.toString()});state.exchanges=response.exchanges.slice(0,2)}catch(error){SnackController.P.showError(AppKitPayErrorMessages.UNABLE_TO_GET_EXCHANGES);throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_EXCHANGES)}finally{state.isLoading=false}},async getAvailableExchanges(params){try{const asset=params?.asset&&params?.network?formatCaip19Asset(params.network,params.asset):undefined;const response=await getExchanges({page:params?.page??DEFAULT_PAGE,asset,amount:params?.amount?.toString()});return response}catch(error){throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(exchangeId,params,headless=false){try{const numericAmount=Number(params.amount);const response=await getPayUrl({exchangeId,asset:formatCaip19Asset(params.network,params.asset),amount:numericAmount.toString(),recipient:`${params.network}:${params.recipient}`});EventsController.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:exchangeId},configuration:{network:params.network,asset:params.asset,recipient:params.recipient,amount:numericAmount},currentPayment:{type:"exchange",exchangeId},headless}});if(headless){this.initiatePayment();EventsController.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{paymentId:state.paymentId||DEFAULT_PAYMENT_ID,configuration:{network:params.network,asset:params.asset,recipient:params.recipient,amount:numericAmount},currentPayment:{type:"exchange",exchangeId}}})}return response}catch(error){if(error instanceof Error&&error.message.includes("is not supported")){throw new AppKitPayError(AppKitPayErrorCodes.ASSET_NOT_SUPPORTED)}throw new Error(error.message)}},async openPayUrl(openParams,params,headless=false){try{const payUrl=await this.getPayUrl(openParams.exchangeId,params,headless);if(!payUrl){throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_PAY_URL)}const shouldOpenInNewTab=openParams.openInNewTab??true;const target=shouldOpenInNewTab?"_blank":"_self";CoreHelperUtil.w.openHref(payUrl.url,target);return payUrl}catch(error){if(error instanceof AppKitPayError){state.error=error.message}else{state.error=AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR}throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_PAY_URL)}},subscribeEvents(){if(state.isConfigured){return}ProviderUtil.A.subscribeProviders((async _=>{const chainNamespace=ChainController.W.state.activeChain;const provider=ProviderUtil.A.getProvider(chainNamespace);if(!provider){return}await this.handlePayment()}));AccountController.U.subscribeKey("caipAddress",(async caipAddress=>{if(!caipAddress){return}await this.handlePayment()}))},async handlePayment(){state.currentPayment={type:"wallet",status:"IN_PROGRESS"};const caipAddress=AccountController.U.state.caipAddress;if(!caipAddress){return}const{chainId,address}=ParseUtil.C.parseCaipAddress(caipAddress);const chainNamespace=ChainController.W.state.activeChain;if(!address||!chainId||!chainNamespace){return}const provider=ProviderUtil.A.getProvider(chainNamespace);if(!provider){return}const caipNetwork=ChainController.W.state.activeCaipNetwork;if(!caipNetwork){return}if(state.isPaymentInProgress){return}try{this.initiatePayment();const requestedCaipNetworks=ChainController.W.getAllRequestedCaipNetworks();const approvedCaipNetworkIds=ChainController.W.getAllApprovedCaipNetworkIds();await ensureCorrectNetwork({paymentAssetNetwork:state.paymentAsset.network,activeCaipNetwork:caipNetwork,approvedCaipNetworkIds,requestedCaipNetworks});await ModalController.W.open({view:"PayLoading"});switch(chainNamespace){case ConstantsUtil.o.CHAIN.EVM:if(state.paymentAsset.asset==="native"){state.currentPayment.result=await processEvmNativePayment(state.paymentAsset,chainNamespace,{recipient:state.recipient,amount:state.amount,fromAddress:address})}if(state.paymentAsset.asset.startsWith("0x")){state.currentPayment.result=await processEvmErc20Payment(state.paymentAsset,{recipient:state.recipient,amount:state.amount,fromAddress:address})}state.currentPayment.status="SUCCESS";break;default:throw new AppKitPayError(AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE)}}catch(error){if(error instanceof AppKitPayError){state.error=error.message}else{state.error=AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR}state.currentPayment.status="FAILED";SnackController.P.showError(state.error)}finally{state.isPaymentInProgress=false}},getExchangeById(exchangeId){return state.exchanges.find((exchange=>exchange.id===exchangeId))},validatePayConfig(config){const{paymentAsset,recipient,amount}=config;if(!paymentAsset){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG)}if(!recipient){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_RECIPIENT)}if(!paymentAsset.asset){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_ASSET)}if(amount===undefined||amount===null||amount<=0){throw new AppKitPayError(AppKitPayErrorCodes.INVALID_AMOUNT)}},handlePayWithWallet(){const caipAddress=AccountController.U.state.caipAddress;if(!caipAddress){RouterController.I.push("Connect");return}const{chainId,address}=ParseUtil.C.parseCaipAddress(caipAddress);const chainNamespace=ChainController.W.state.activeChain;if(!address||!chainId||!chainNamespace){RouterController.I.push("Connect");return}this.handlePayment()},async handlePayWithExchange(exchangeId){try{state.currentPayment={type:"exchange",exchangeId};const{network,asset}=state.paymentAsset;const payUrlParams={network,asset,amount:state.amount,recipient:state.recipient};const payUrl=await this.getPayUrl(exchangeId,payUrlParams);if(!payUrl){throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_INITIATE_PAYMENT)}state.currentPayment.sessionId=payUrl.sessionId;state.currentPayment.status="IN_PROGRESS";state.currentPayment.exchangeId=exchangeId;this.initiatePayment();return{url:payUrl.url,openInNewTab:state.openInNewTab}}catch(error){if(error instanceof AppKitPayError){state.error=error.message}else{state.error=AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR}state.isPaymentInProgress=false;SnackController.P.showError(state.error);return null}},async getBuyStatus(exchangeId,sessionId){try{const status=await getBuyStatus({sessionId,exchangeId});if(status.status==="SUCCESS"||status.status==="FAILED"){EventsController.E.sendEvent({type:"track",event:status.status==="SUCCESS"?"PAY_SUCCESS":"PAY_ERROR",properties:{paymentId:state.paymentId||DEFAULT_PAYMENT_ID,configuration:{network:state.paymentAsset.network,asset:state.paymentAsset.asset,recipient:state.recipient,amount:state.amount},currentPayment:{type:"exchange",exchangeId:state.currentPayment?.exchangeId,sessionId:state.currentPayment?.sessionId,result:status.txHash}}})}return status}catch(error){throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_BUY_STATUS)}},async updateBuyStatus(exchangeId,sessionId){try{const status=await this.getBuyStatus(exchangeId,sessionId);if(state.currentPayment){state.currentPayment.status=status.status;state.currentPayment.result=status.txHash}if(status.status==="SUCCESS"||status.status==="FAILED"){state.isPaymentInProgress=false}}catch(error){throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_BUY_STATUS)}},initiatePayment(){state.isPaymentInProgress=true;state.paymentId=crypto.randomUUID()},initializeAnalytics(){if(state.analyticsSet){return}state.analyticsSet=true;this.subscribeKey("isPaymentInProgress",(_=>{if(state.currentPayment?.status&&state.currentPayment.status!=="UNKNOWN"){const eventType={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[state.currentPayment.status];EventsController.E.sendEvent({type:"track",event:eventType,properties:{paymentId:state.paymentId||DEFAULT_PAYMENT_ID,configuration:{network:state.paymentAsset.network,asset:state.paymentAsset.asset,recipient:state.recipient,amount:state.amount},currentPayment:{type:state.currentPayment.type,exchangeId:state.currentPayment.exchangeId,sessionId:state.currentPayment.sessionId,result:state.currentPayment.result}}})}}))}};const styles=(0,lit.AH)`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  .token-display {
    padding: var(--wui-spacing-s) var(--wui-spacing-m);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-bg-125);
    margin-top: var(--wui-spacing-s);
    margin-bottom: var(--wui-spacing-s);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--wui-spacing-xs);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mPayView=class W3mPayView extends lit.WF{constructor(){super();this.unsubscribe=[];this.amount="";this.tokenSymbol="";this.networkName="";this.exchanges=PayController_PayController.state.exchanges;this.isLoading=PayController_PayController.state.isLoading;this.loadingExchangeId=null;this.connectedWalletInfo=AccountController.U.state.connectedWalletInfo;this.initializePaymentDetails();this.unsubscribe.push(PayController_PayController.subscribeKey("exchanges",(val=>this.exchanges=val)));this.unsubscribe.push(PayController_PayController.subscribeKey("isLoading",(val=>this.isLoading=val)));this.unsubscribe.push(AccountController.U.subscribe((newState=>this.connectedWalletInfo=newState.connectedWalletInfo)));PayController_PayController.fetchExchanges()}get isWalletConnected(){return AccountController.U.state.status==="connected"}render(){return(0,lit.qy)`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="s">
            <wui-flex flexDirection="column" gap="s">
              ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
            </wui-flex>
            <wui-separator text="or"></wui-separator>
            ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){const paymentAsset=PayController_PayController.getPaymentAsset();this.networkName=paymentAsset.network;this.tokenSymbol=paymentAsset.metadata.symbol;this.amount=PayController_PayController.state.amount.toString()}renderPaymentHeader(){let displayNetworkName=this.networkName;if(this.networkName){const allNetworks=ChainController.W.getAllRequestedCaipNetworks();const targetNetwork=allNetworks.find((net=>net.caipNetworkId===this.networkName));if(targetNetwork){displayNetworkName=targetNetwork.name}}return(0,lit.qy)`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="large-700" color="fg-100">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="xxs">
            <wui-text variant="paragraph-600" color="fg-100">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${displayNetworkName?(0,lit.qy)`
                  <wui-text variant="small-500" color="fg-200"> on ${displayNetworkName} </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){const walletName=this.connectedWalletInfo?.name||"connected wallet";return(0,lit.qy)`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${true}
        data-testid="wallet-payment-option"
      >
        <wui-flex alignItems="center" gap="s">
          <wui-wallet-image
            size="sm"
            imageSrc=${(0,if_defined.J)(this.connectedWalletInfo?.icon)}
            name=${(0,if_defined.J)(this.connectedWalletInfo?.name)}
          ></wui-wallet-image>
          <wui-text variant="paragraph-500" color="inherit">Pay with ${walletName}</wui-text>
        </wui-flex>
      </wui-list-item>

      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="disconnect"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${false}
      >
        <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return(0,lit.qy)`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="walletPlaceholder"
      @click=${this.onWalletPayment}
      ?chevron=${true}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="paragraph-500" color="inherit">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){if(this.isLoading){return(0,lit.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`}if(this.exchanges.length===0){return(0,lit.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-100">No exchanges available</wui-text>
      </wui-flex>`}return this.exchanges.map((exchange=>(0,lit.qy)`
        <wui-list-item
          @click=${()=>this.onExchangePayment(exchange.id)}
          data-testid="exchange-option-${exchange.id}"
          ?chevron=${true}
          ?disabled=${this.loadingExchangeId!==null}
        >
          <wui-flex alignItems="center" gap="s">
            ${this.loadingExchangeId===exchange.id?(0,lit.qy)`<wui-loading-spinner color="accent-100" size="md"></wui-loading-spinner>`:(0,lit.qy)`<wui-wallet-image
                  size="sm"
                  imageSrc=${(0,if_defined.J)(exchange.imageUrl)}
                  name=${exchange.name}
                ></wui-wallet-image>`}
            <wui-text flexGrow="1" variant="paragraph-500" color="inherit"
              >Pay with ${exchange.name} <wui-spinner size="sm" color="fg-200"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `))}onWalletPayment(){PayController_PayController.handlePayWithWallet()}async onExchangePayment(exchangeId){try{this.loadingExchangeId=exchangeId;const result=await PayController_PayController.handlePayWithExchange(exchangeId);if(result){await ModalController.W.open({view:"PayLoading"});CoreHelperUtil.w.openHref(result.url,result.openInNewTab?"_blank":"_self")}}catch(error){console.error("Failed to pay with exchange",error);SnackController.P.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await ConnectionController.x.disconnect();ModalController.W.close()}catch{console.error("Failed to disconnect");SnackController.P.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}};W3mPayView.styles=styles;__decorate([(0,decorators.wk)()],W3mPayView.prototype,"amount",void 0);__decorate([(0,decorators.wk)()],W3mPayView.prototype,"tokenSymbol",void 0);__decorate([(0,decorators.wk)()],W3mPayView.prototype,"networkName",void 0);__decorate([(0,decorators.wk)()],W3mPayView.prototype,"exchanges",void 0);__decorate([(0,decorators.wk)()],W3mPayView.prototype,"isLoading",void 0);__decorate([(0,decorators.wk)()],W3mPayView.prototype,"loadingExchangeId",void 0);__decorate([(0,decorators.wk)()],W3mPayView.prototype,"connectedWalletInfo",void 0);W3mPayView=__decorate([(0,esm_exports.EM)("w3m-pay-view")],W3mPayView);var ThemeController=__webpack_require__(235788);var wui_loading_thumbnail=__webpack_require__(851020);const w3m_pay_loading_view_styles=(0,lit.AH)`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }
`;var w3m_pay_loading_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const EXCHANGE_STATUS_CHECK_INTERVAL=4e3;let W3mPayLoadingView=class W3mPayLoadingView extends lit.WF{constructor(){super();this.loadingMessage="";this.subMessage="";this.paymentState="in-progress";this.paymentState=PayController_PayController.state.isPaymentInProgress?"in-progress":"completed";this.updateMessages();this.setupSubscription();this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return(0,lit.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed";this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed";this.subMessage="There was an error processing your transaction";break;case"in-progress":default:if(PayController_PayController.state.currentPayment?.type==="exchange"){this.loadingMessage="Payment initiated";this.subMessage=`Please complete the payment on the exchange`}else{this.loadingMessage="Awaiting payment confirmation";this.subMessage="Please confirm the payment transaction in your wallet"}break}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();case"in-progress":default:return this.loaderTemplate()}}setupExchangeSubscription(){if(PayController_PayController.state.currentPayment?.type!=="exchange"){return}this.exchangeSubscription=setInterval((async()=>{const exchangeId=PayController_PayController.state.currentPayment?.exchangeId;const sessionId=PayController_PayController.state.currentPayment?.sessionId;if(exchangeId&&sessionId){await PayController_PayController.updateBuyStatus(exchangeId,sessionId);if(PayController_PayController.state.currentPayment?.status==="SUCCESS"){clearInterval(this.exchangeSubscription)}}}),EXCHANGE_STATUS_CHECK_INTERVAL)}setupSubscription(){PayController_PayController.subscribeKey("isPaymentInProgress",(inProgress=>{if(!inProgress&&this.paymentState==="in-progress"){if(PayController_PayController.state.error||!PayController_PayController.state.currentPayment?.result){this.paymentState="error"}else{this.paymentState="completed"}this.updateMessages();setTimeout((()=>{if(ConnectionController.x.state.status==="disconnected"){return}ModalController.W.close()}),3e3)}}));PayController_PayController.subscribeKey("error",(error=>{if(error&&this.paymentState==="in-progress"){this.paymentState="error";this.updateMessages()}}))}loaderTemplate(){const borderRadiusMaster=ThemeController.W.state.themeVariables["--w3m-border-radius-master"];const radius=borderRadiusMaster?parseInt(borderRadiusMaster.replace("px",""),10):4;return(0,lit.qy)`<wui-loading-thumbnail radius=${radius*9}></wui-loading-thumbnail>`}successTemplate(){return(0,lit.qy)`<wui-icon size="xl" color="success-100" name="checkmark"></wui-icon>`}errorTemplate(){return(0,lit.qy)`<wui-icon size="xl" color="error-100" name="close"></wui-icon>`}};W3mPayLoadingView.styles=w3m_pay_loading_view_styles;w3m_pay_loading_view_decorate([(0,decorators.wk)()],W3mPayLoadingView.prototype,"loadingMessage",void 0);w3m_pay_loading_view_decorate([(0,decorators.wk)()],W3mPayLoadingView.prototype,"subMessage",void 0);w3m_pay_loading_view_decorate([(0,decorators.wk)()],W3mPayLoadingView.prototype,"paymentState",void 0);W3mPayLoadingView=w3m_pay_loading_view_decorate([(0,esm_exports.EM)("w3m-pay-loading-view")],W3mPayLoadingView);async function openPay(options){return PayController_PayController.handleOpenPay(options)}function getAvailableExchanges(params){return PayController.getAvailableExchanges(params)}function client_getPayUrl(exchangeId,params){return PayController.getPayUrl(exchangeId,params,true)}function openPayUrl(exchangeId,params,openInNewTab){return PayController.openPayUrl({exchangeId,openInNewTab},params,true)}function client_getExchanges(){return PayController_PayController.getExchanges()}function getPayResult(){return PayController_PayController.state.currentPayment?.result}function getPayError(){return PayController_PayController.state.error}function getIsPaymentInProgress(){return PayController_PayController.state.isPaymentInProgress}function subscribeStateKey(key,callback){return PayController.subscribeKey(key,callback)}const baseETH={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}};const baseUSDC={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}};const baseSepoliaETH={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}}},575541:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_composites_wui_button_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(957199)},701552:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var wui_icon=__webpack_require__(218436);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
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
    `}};WuiIconLink.styles=[ThemeUtil.W5,ThemeUtil.fD,ThemeUtil.ck,styles];__decorate([(0,decorators.MZ)()],WuiIconLink.prototype,"size",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiIconLink.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],WuiIconLink.prototype,"icon",void 0);__decorate([(0,decorators.MZ)()],WuiIconLink.prototype,"iconColor",void 0);WuiIconLink=__decorate([(0,WebComponentsUtil.E)("wui-icon-link")],WuiIconLink)},124188:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_components_wui_icon_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(218436)},375429:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var if_defined=__webpack_require__(151133);var wui_icon=__webpack_require__(218436);var wui_image=__webpack_require__(162084);var wui_loading_spinner=__webpack_require__(737447);var wui_text=__webpack_require__(35198);var wui_flex=__webpack_require__(480268);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);var wui_icon_box=__webpack_require__(622992);const styles=(0,lit.AH)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListItem=class WuiListItem extends lit.WF{constructor(){super(...arguments);this.tabIdx=undefined;this.variant="icon";this.disabled=false;this.imageSrc=undefined;this.alt=undefined;this.chevron=false;this.loading=false}render(){return(0,lit.qy)`
      <button
        ?disabled=${this.loading?true:Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,if_defined.J)(this.iconVariant)}
        tabindex=${(0,if_defined.J)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc){return(0,lit.qy)`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`}if(this.iconVariant==="square"&&this.icon&&this.variant==="icon"){return(0,lit.qy)`<wui-icon name=${this.icon}></wui-icon>`}if(this.variant==="icon"&&this.icon&&this.iconVariant){const color=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200";const size=this.iconVariant==="square-blue"?"mdl":"md";const iconSize=this.iconSize?this.iconSize:size;return(0,lit.qy)`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${iconSize}
          background="transparent"
          iconColor=${color}
          backgroundColor=${color}
          size=${size}
        ></wui-icon-box>
      `}return null}loadingTemplate(){if(this.loading){return(0,lit.qy)`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`}return(0,lit.qy)``}chevronTemplate(){if(this.chevron){return(0,lit.qy)`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`}return null}};WuiListItem.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiListItem.prototype,"icon",void 0);__decorate([(0,decorators.MZ)()],WuiListItem.prototype,"iconSize",void 0);__decorate([(0,decorators.MZ)()],WuiListItem.prototype,"tabIdx",void 0);__decorate([(0,decorators.MZ)()],WuiListItem.prototype,"variant",void 0);__decorate([(0,decorators.MZ)()],WuiListItem.prototype,"iconVariant",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiListItem.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],WuiListItem.prototype,"imageSrc",void 0);__decorate([(0,decorators.MZ)()],WuiListItem.prototype,"alt",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiListItem.prototype,"chevron",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiListItem.prototype,"loading",void 0);WuiListItem=__decorate([(0,WebComponentsUtil.E)("wui-list-item")],WuiListItem)},799941:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_components_wui_loading_spinner_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(737447)},851020:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLoadingThumbnail=class WuiLoadingThumbnail extends lit.WF{constructor(){super(...arguments);this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const radius=this.radius>50?50:this.radius;const standardValue=36;const radiusFactor=standardValue-radius;const dashArrayStart=116+radiusFactor;const dashArrayEnd=245+radiusFactor;const dashOffset=360+radiusFactor*1.75;return(0,lit.qy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${radius}
          stroke-dasharray="${dashArrayStart} ${dashArrayEnd}"
          stroke-dashoffset=${dashOffset}
        />
      </svg>
    `}};WuiLoadingThumbnail.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)({type:Number})],WuiLoadingThumbnail.prototype,"radius",void 0);WuiLoadingThumbnail=__decorate([(0,WebComponentsUtil.E)("wui-loading-thumbnail")],WuiLoadingThumbnail)},162084:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
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
    </svg>`}};WuiLoadingSpinner.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)()],WuiLoadingSpinner.prototype,"color",void 0);__decorate([(0,decorators.MZ)()],WuiLoadingSpinner.prototype,"size",void 0);WuiLoadingSpinner=__decorate([(0,WebComponentsUtil.E)("wui-loading-spinner")],WuiLoadingSpinner)},957199:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var wui_loading_spinner=__webpack_require__(737447);var wui_text=__webpack_require__(35198);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
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
    `}handleSlotLeftChange(){this.hasIconLeft=true}handleSlotRightChange(){this.hasIconRight=true}loadingTemplate(){if(this.loading){const size=SPINNER_SIZE_BY_SIZE[this.size];const color=this.disabled?SPINNER_COLOR_BY_VARIANT["disabled"]:SPINNER_COLOR_BY_VARIANT[this.variant];return(0,lit.qy)`<wui-loading-spinner color=${color} size=${size}></wui-loading-spinner>`}return(0,lit.qy)``}};WuiButton.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiButton.prototype,"size",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiButton.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiButton.prototype,"fullWidth",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiButton.prototype,"loading",void 0);__decorate([(0,decorators.MZ)()],WuiButton.prototype,"variant",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiButton.prototype,"hasIconLeft",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiButton.prototype,"hasIconRight",void 0);__decorate([(0,decorators.MZ)()],WuiButton.prototype,"borderRadius",void 0);__decorate([(0,decorators.MZ)()],WuiButton.prototype,"textVariant",void 0);WuiButton=__decorate([(0,WebComponentsUtil.E)("wui-button")],WuiButton)},622992:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var wui_icon=__webpack_require__(218436);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
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
//# sourceMappingURL=503.0.71.0.1757439800232.js.map