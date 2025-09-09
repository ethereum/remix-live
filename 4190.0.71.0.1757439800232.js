"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[4190],{424108:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{W3mTransactionsView:()=>W3mTransactionsView});var lit=__webpack_require__(784706);var esm_exports=__webpack_require__(679849);var wui_flex=__webpack_require__(290766);var w3m_activity_list=__webpack_require__(969464);const styles=(0,lit.AH)`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mTransactionsView=class W3mTransactionsView extends lit.WF{render(){return(0,lit.qy)`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};W3mTransactionsView.styles=styles;W3mTransactionsView=__decorate([(0,esm_exports.EM)("w3m-transactions-view")],W3mTransactionsView)},796616:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_composites_wui_icon_box_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(622992)},501764:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var if_defined=__webpack_require__(151133);var wui_text=__webpack_require__(35198);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
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
    `}};WuiLink.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiLink.prototype,"tabIdx",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiLink.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],WuiLink.prototype,"color",void 0);WuiLink=__decorate([(0,WebComponentsUtil.E)("wui-link")],WuiLink)},160804:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var wui_shimmer=__webpack_require__(591630);var wui_flex=__webpack_require__(480268);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTransactionListItemLoader=class WuiTransactionListItemLoader extends lit.WF{render(){return(0,lit.qy)`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};WuiTransactionListItemLoader.styles=[ThemeUtil.W5,styles];WuiTransactionListItemLoader=__decorate([(0,WebComponentsUtil.E)("wui-transaction-list-item-loader")],WuiTransactionListItemLoader)},162084:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
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
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiImage=class WuiImage extends lit.WF{constructor(){super(...arguments);this.src="./path/to/image.jpg";this.alt="Image";this.size=undefined}render(){this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `;return(0,lit.qy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:true,composed:true}))}};WuiImage.styles=[ThemeUtil.W5,ThemeUtil.ck,styles];__decorate([(0,decorators.MZ)()],WuiImage.prototype,"src",void 0);__decorate([(0,decorators.MZ)()],WuiImage.prototype,"alt",void 0);__decorate([(0,decorators.MZ)()],WuiImage.prototype,"size",void 0);WuiImage=__decorate([(0,WebComponentsUtil.E)("wui-image")],WuiImage)},591630:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
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
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiShimmer=class WuiShimmer extends lit.WF{constructor(){super(...arguments);this.width="";this.height="";this.borderRadius="m";this.variant="default"}render(){this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};\n    `;return(0,lit.qy)`<slot></slot>`}};WuiShimmer.styles=[styles];__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"width",void 0);__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"height",void 0);__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"borderRadius",void 0);__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"variant",void 0);WuiShimmer=__decorate([(0,WebComponentsUtil.E)("wui-shimmer")],WuiShimmer)},622992:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var wui_icon=__webpack_require__(218436);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
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
//# sourceMappingURL=4190.0.71.0.1757439800232.js.map