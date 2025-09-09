"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[7459],{930934:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>OptionsStateController});var valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(959095);var valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(839150);const state=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.BX)({isLegalCheckboxChecked:false});const OptionsStateController={state,subscribe(callback){return(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.B1)(state,(()=>callback(state)))},subscribeKey(key,callback){return(0,valtio_vanilla_utils__WEBPACK_IMPORTED_MODULE_1__.u$)(state,key,callback)},setIsLegalCheckboxChecked(isLegalCheckboxChecked){state.isLegalCheckboxChecked=isLegalCheckboxChecked}}},525452:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var OptionsStateController=__webpack_require__(930934);var OptionsController=__webpack_require__(919717);var esm_exports=__webpack_require__(679849);var if_defined=__webpack_require__(151133);var ref=__webpack_require__(703131);var wui_icon=__webpack_require__(218436);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiCheckBox=class WuiCheckBox extends lit.WF{constructor(){super(...arguments);this.inputElementRef=(0,ref._)();this.checked=undefined}render(){return(0,lit.qy)`
      <label>
        <input
          ${(0,ref.K)(this.inputElementRef)}
          ?checked=${(0,if_defined.J)(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:true,composed:true}))}};WuiCheckBox.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)({type:Boolean})],WuiCheckBox.prototype,"checked",void 0);WuiCheckBox=__decorate([(0,WebComponentsUtil.E)("wui-checkbox")],WuiCheckBox);var wui_text=__webpack_require__(342762);const w3m_legal_checkbox_styles=(0,lit.AH)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var w3m_legal_checkbox_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mLegalCheckbox=class W3mLegalCheckbox extends lit.WF{constructor(){super();this.unsubscribe=[];this.checked=OptionsStateController.o.state.isLegalCheckboxChecked;this.unsubscribe.push(OptionsStateController.o.subscribeKey("isLegalCheckboxChecked",(val=>{this.checked=val})))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const{termsConditionsUrl,privacyPolicyUrl}=OptionsController.H.state;const legalCheckbox=OptionsController.H.state.features?.legalCheckbox;if(!termsConditionsUrl&&!privacyPolicyUrl){return null}if(!legalCheckbox){return null}return(0,lit.qy)`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl,privacyPolicyUrl}=OptionsController.H.state;return termsConditionsUrl&&privacyPolicyUrl?"and":""}termsTemplate(){const{termsConditionsUrl}=OptionsController.H.state;if(!termsConditionsUrl){return null}return(0,lit.qy)`<a rel="noreferrer" target="_blank" href=${termsConditionsUrl}>terms of service</a>`}privacyTemplate(){const{privacyPolicyUrl}=OptionsController.H.state;if(!privacyPolicyUrl){return null}return(0,lit.qy)`<a rel="noreferrer" target="_blank" href=${privacyPolicyUrl}>privacy policy</a>`}onCheckboxChange(){OptionsStateController.o.setIsLegalCheckboxChecked(!this.checked)}};W3mLegalCheckbox.styles=[w3m_legal_checkbox_styles];w3m_legal_checkbox_decorate([(0,decorators.wk)()],W3mLegalCheckbox.prototype,"checked",void 0);W3mLegalCheckbox=w3m_legal_checkbox_decorate([(0,esm_exports.EM)("w3m-legal-checkbox")],W3mLegalCheckbox)},378899:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var OptionsController=__webpack_require__(919717);var esm_exports=__webpack_require__(679849);var wui_flex=__webpack_require__(290766);var wui_text=__webpack_require__(342762);var wui_ux_by_reown=__webpack_require__(926473);const styles=(0,lit.AH)`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: var(--wui-spacing-m);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mLegalFooter=class W3mLegalFooter extends lit.WF{render(){const{termsConditionsUrl,privacyPolicyUrl}=OptionsController.H.state;const legalCheckbox=OptionsController.H.state.features?.legalCheckbox;const showOnlyBranding=!termsConditionsUrl&&!privacyPolicyUrl||legalCheckbox;if(showOnlyBranding){return(0,lit.qy)`
        <wui-flex flexDirection="column">
          <wui-ux-by-reown class="branding-only"></wui-ux-by-reown>
        </wui-flex>
      `}return(0,lit.qy)`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl,privacyPolicyUrl}=OptionsController.H.state;return termsConditionsUrl&&privacyPolicyUrl?"and":""}termsTemplate(){const{termsConditionsUrl}=OptionsController.H.state;if(!termsConditionsUrl){return null}return(0,lit.qy)`<a href=${termsConditionsUrl}>Terms of Service</a>`}privacyTemplate(){const{privacyPolicyUrl}=OptionsController.H.state;if(!privacyPolicyUrl){return null}return(0,lit.qy)`<a href=${privacyPolicyUrl}>Privacy Policy</a>`}};W3mLegalFooter.styles=[styles];W3mLegalFooter=__decorate([(0,esm_exports.EM)("w3m-legal-footer")],W3mLegalFooter)},796616:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_composites_wui_icon_box_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(622992)},124188:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _src_components_wui_icon_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(218436)},501764:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var if_defined=__webpack_require__(151133);var wui_text=__webpack_require__(35198);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
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
    `}};WuiLink.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiLink.prototype,"tabIdx",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiLink.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],WuiLink.prototype,"color",void 0);WuiLink=__decorate([(0,WebComponentsUtil.E)("wui-link")],WuiLink)},851020:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
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
    `}};WuiLoadingThumbnail.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)({type:Number})],WuiLoadingThumbnail.prototype,"radius",void 0);WuiLoadingThumbnail=__decorate([(0,WebComponentsUtil.E)("wui-loading-thumbnail")],WuiLoadingThumbnail)},926473:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var wui_icon=__webpack_require__(218436);var wui_text=__webpack_require__(35198);var wui_flex=__webpack_require__(480268);var ConstantsUtil=__webpack_require__(309109);var ThemeUtil=__webpack_require__(735989);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiUxByReown=class WuiUxByReown extends lit.WF{render(){return(0,lit.qy)`
      <a href=${ConstantsUtil.C5} rel="noreferrer" target="_blank" style="text-decoration: none;">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};WuiUxByReown.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];WuiUxByReown=__decorate([(0,WebComponentsUtil.E)("wui-ux-by-reown")],WuiUxByReown)},591630:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__(784706);var decorators=__webpack_require__(405507);var WebComponentsUtil=__webpack_require__(767662);const styles=(0,lit.AH)`
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
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiShimmer=class WuiShimmer extends lit.WF{constructor(){super(...arguments);this.width="";this.height="";this.borderRadius="m";this.variant="default"}render(){this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};\n    `;return(0,lit.qy)`<slot></slot>`}};WuiShimmer.styles=[styles];__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"width",void 0);__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"height",void 0);__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"borderRadius",void 0);__decorate([(0,decorators.MZ)()],WuiShimmer.prototype,"variant",void 0);WuiShimmer=__decorate([(0,WebComponentsUtil.E)("wui-shimmer")],WuiShimmer)},309109:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C5:()=>REOWN_URL,Ky:()=>numbersRegex,PG:()=>specialCharactersRegex});const specialCharactersRegex=/[.*+?^${}()|[\]\\]/gu;const numbersRegex=/[0-9,.]/u;const REOWN_URL="https://reown.com"}}]);
//# sourceMappingURL=7459.0.71.0.1757439800232.js.map