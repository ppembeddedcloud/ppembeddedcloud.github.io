!function(){var e=document.createElement("style");e.innerHTML=".tron-container[data-v-6144080c]{font-size:.28rem;background-color:#f4f5f5;min-height:100vh;padding:.2rem .3rem 1rem}.tron-container .mt-10[data-v-6144080c]{margin-top:.2rem}.tron-container .t-card[data-v-6144080c]{background:#FFFFFF;border-radius:.12rem;padding:.3rem .2rem .2rem}.tron-container .font-1[data-v-6144080c]{font-size:.32rem;color:#333;letter-spacing:0;font-weight:500}.tron-container .font-2[data-v-6144080c]{font-size:.24rem;color:#333;font-weight:400}.tron-container .font-3[data-v-6144080c]{font-size:.24rem;color:#999;font-weight:400}.tron-container .flex-between-center[data-v-6144080c]{display:flex;justify-content:space-between;align-items:center}.tron-container .range-c[data-v-6144080c]{position:relative;background:#99BDFF;border-radius:.36rem;height:.28rem;display:flex;justify-content:center;font-size:.24rem;color:#fff;font-weight:400;overflow:hidden;margin-bottom:.36rem}.tron-container .range-c .range-v[data-v-6144080c]{position:absolute;left:0;top:0;height:100%;width:0;background-color:#3f80f7;z-index:1}.tron-container .range-c .range-t[data-v-6144080c]{position:relative;z-index:2}.tron-container .tabs[data-v-6144080c]{--van-radio-size: .48rem;font-size:.32rem;display:flex;justify-content:center;margin-bottom:.36rem}.tron-container .tabs-b[data-v-6144080c]{margin-top:.3rem;margin-bottom:.4rem}.tron-container .tabs-b button[data-v-6144080c]{background:#F4F5F5;border-radius:.32rem 0 0 .32rem;font-size:.28rem;color:#323233;letter-spacing:0;text-align:center;line-height:.32rem;font-weight:400;border:none;padding:.14rem .5rem}.tron-container .tabs-b button.active[data-v-6144080c]{background:#3F80F7;color:#fff}.tron-container .tabs-b button[data-v-6144080c]:last-child{border-radius:0 .32rem .32rem 0}.tron-container .input-n[data-v-6144080c]{--van-cell-background-color: #fff;border:.02rem solid rgb(230,231,232);border-radius:.16rem;padding:.16rem .2rem;line-height:1;margin-top:.14rem;margin-bottom:.14rem}.tron-container .input-n[data-v-6144080c] .van-field__left-icon{display:flex;align-items:center}.tron-container .d-line[data-v-6144080c]{height:80%;border-right:.02rem solid #ccc;margin:0 .2rem}.tron-container .pb-15[data-v-6144080c]{padding-bottom:.3rem}.tron-container .btn-36[data-v-6144080c]{height:.72rem;margin-top:.4rem;font-size:.28rem}\n",document.head.appendChild(e),System.register(["./index-legacy.37b6fe49.js","./tron-legacy.8dd865dd.js","./ethers-legacy.9737219e.js"],(function(e){"use strict";var t,n,r,a,o,c,i,s,l,u,d,f,m,h,b,g,v,z,p,_,R,y;return{setters:[function(e){t=e._,n=e.a3,r=e.r,a=e.o,o=e.c,c=e.b,i=e.w,s=e.k,l=e.i,u=e.t,d=e.n,f=e.m,m=e.p,h=e.F,b=e.e,g=e.l,v=e.q,z=e.u},function(e){p=e.u,_=e.g,R=e.a},function(e){y=e.f}],execute:function(){const A={name:"TronBandwidth&Energy",data:()=>({utils:p,tabActive:1,resource:"BANDWIDTH",value:"",tabActive2:1,address:"",accountResource:{freeNetUsed:0,freeNetLimit:0,NetUsed:0,NetLimit:0,TotalNetLimit:0,EnergyUsed:0,EnergyLimit:0,TotalEnergyLimit:0,TotalEnergyWeight:0},account:{acquired_delegated_frozen_balance_for_bandwidth:0,delegated_frozen_balance_for_bandwidth:0,frozen:[],balance:0},frozenAmount:"",unfrozenAmount:"",receiverAddress:"",loading:!1}),computed:{BPrice(){return this.accountResource.TotalNetWeight?this.accountResource.TotalNetLimit/this.accountResource.TotalNetWeight:0},freeB(){return(this.accountResource.freeNetLimit||0)-(this.accountResource.freeNetUsed||0)},NetB(){return(this.accountResource.NetLimit||0)-(this.accountResource.NetUsed||0)},totalB(){return this.freeB+this.NetB},totalAllB(){return(this.accountResource.freeNetLimit||0)+(this.accountResource.NetLimit||0)},pB(){return this.totalAllB?100*this.totalB/this.totalAllB:0},EnergyBalance(){return(this.accountResource.EnergyLimit||0)-(this.accountResource.EnergyUsed||0)},EnergyPrice(){return this.accountResource.TotalEnergyWeight?this.accountResource.TotalEnergyLimit/this.accountResource.TotalEnergyWeight:0},pE(){return this.accountResource.EnergyLimit?100*this.EnergyBalance/(this.accountResource.EnergyLimit||0):0},lockBTRX(){return this.accountResource.TotalNetLimit?(this.accountResource.TotalNetWeight||0)*(this.accountResource.NetLimit||0)/this.accountResource.TotalNetLimit:0},frozenBTRX(){return this.account?.frozen?.reduce?.(((e,t)=>t.frozen_balance+e),0)||0},totalFrozenBTRX(){return y(this.frozenBTRX+(this.account.acquired_delegated_frozen_balance_for_bandwidth||0),6)},totalFrozenETRX(){return y((this.account?.account_resource?.frozen_balance_for_energy?.frozen_balance||0)+(this.account?.account_resource?.acquired_delegated_frozen_balance_for_energy||0),6)},unfreezableBTRX(){let e=this.account?.frozen?.filter((e=>Date.now()>e.expire_time))||[];return y(e.reduce?.(((e,t)=>(t?.frozen_balance||0)+e),0),6)||0},unfreezableETRX(){let e=this.account?.account_resource?.frozen_balance_for_energy;return e&&e?.frozen_balance&&Date.now()>e.expire_time?y(e?.frozen_balance||0,6):0},disabled(){let e=y(this.account?.balance||0,6),t=this.unfreezableBTRX||0,r=this.unfreezableETRX||0;return console.log("unfreezableBTRX",t),console.log("unfreezableETRX",r),1===this.tabActive&&(!this.frozenAmount||new n(this.frozenAmount).gt(e))||2===this.tabActive&&("BANDWIDTH"===this.resource&&new n(t).lte(0)||"ENERGY"===this.resource&&new n(r).lte(0))},errMessage(){if(1===this.tabActive){let e=y(this.account?.balance||0,6);return this.frozenAmount&&new n(this.frozenAmount).gt(e)?this.$t("insufficientBalance"):""}{let e=this.unfreezableBTRX||0,t=this.unfreezableETRX||0;return this.unfrozenAmount&&("BANDWIDTH"===this.resource&&new n(this.unfrozenAmount).gt(e)||"ENERGY"===this.resource&&new n(this.unfrozenAmount).gt(t))?this.$t("insufficientBalance"):""}}},methods:{async init(){this.address=await this.$f.callApp("getWalletAddress")||"",console.log("address",this.address),this.getAccountResource(),this.getAccount()},getAccountResource(){this.address&&_(this.address).then((e=>{this.accountResource=e}))},getAccount(){this.address&&R(this.address).then((e=>{console.log(e),this.account=e}))},freezeBalance(){this.$dialog.alert({title:this.$t("tips"),message:this.$t("tronUpdateTips"),confirmButtonText:this.$t("confirm1"),confirmButtonColor:"#3F80F7"})},unfreezeBalance(){let e={owner_address:this.address,frozen_duration:3,resource:this.resource,receiver_address:2===this.tabActive2?this.receiverAddress:void 0,visible:!0};this.loading=!0,console.log("unfreezeBalance",e),this.$f.callApp("unfreezeBalance",e).then((e=>{console.log("unfreezeBalance---result",e),e&&(this.getAccountResource(),this.getAccount())})).catch((e=>{console.log(e)})).finally((()=>{this.loading=!1}))},onSubmit(){1===this.tabActive?this.freezeBalance():this.unfreezeBalance()}},activated(){this.init()}},T=e=>(v("data-v-6144080c"),e=e(),z(),e),B={key:0,class:"tron-switch-version"},$={class:"tron-container"},N={class:"t-card"},w={class:"flex-between-center"},E={class:"font-1"},X={class:"font-3"},k={class:"range-c"},x={class:"range-t"},F={class:"flex-between-center"},L={class:"font-2"},D={class:"font-3"},U={class:"flex-between-center mt-10"},W={class:"font-1"},V={class:"font-3"},H={class:"t-card mt-10"},I={class:"flex-between-center"},j={class:"font-1"},q={class:"font-3"},C={class:"range-c"},P={class:"range-t"},Y={class:"flex-between-center"},G={class:"font-2"},S={class:"font-3"},M={class:"flex-between-center mt-10"},J={class:"font-1"},K={class:"font-3"},O={class:"t-card mt-10 pb-15"},Q={class:"tabs"},Z={class:"font-2"},ee={class:"font-3"},te={class:"tabs-b"},ne={class:"font-2"},re={key:1,class:"font-2"},ae={key:2,class:"font-3"},oe={class:"flex-between-center mt-10"},ce=T((()=>l("i",{class:"iconfont icon-tongxunlu",style:{"font-size":"0.36rem",color:"#ccc"}},null,-1))),ie=T((()=>l("div",{class:"d-line"},null,-1)));e("default",t(A,[["render",function(e,t,n,v,z,p){const _=r("router-link"),R=r("van-divider"),y=r("van-radio"),A=r("van-radio-group"),T=r("van-field"),se=r("van-button");return a(),o(h,null,["Tron"!==e.$route.name?(a(),o("div",B,[c(_,{to:"/tron_v2",class:"link"},{default:i((()=>[g(u(e.$t("switch"))+" Stake2.0 >",1)])),_:1})])):s("",!0),l("div",$,[l("div",N,[l("div",w,[l("span",E,u(e.$t("bandwidth")),1),l("span",X,u(e.$t("price"))+": "+u(e.$f.formatNumber2(p.BPrice))+" B/TRX",1)]),c(R,{style:{"--van-divider-margin":"0.2rem 0"}}),l("div",k,[l("div",{class:"range-v",style:d({width:p.pB+"%"})},null,4),l("div",x,u(e.$t("available"))+": "+u(e.$f.formatNumber2(p.totalB))+"/"+u(e.$f.formatNumber2(p.totalAllB))+"B",1)]),l("div",F,[l("span",L,u(e.$t("frozen")),1),l("span",D,u(e.$t("freezeYourself"))+": "+u(e.$f.formatNumber2(z.utils.formatUnits(p.frozenBTRX,6)))+" TRX",1)]),l("div",U,[l("span",W,u(e.$f.formatNumber2(p.totalFrozenBTRX))+" TRX",1),l("span",V,u(e.$t("others-frozen"))+": "+u(z.account.acquired_delegated_frozen_balance_for_bandwidth||0)+" TRX",1)])]),l("div",H,[l("div",I,[l("span",j,u(e.$t("energy")),1),l("span",q,u(e.$t("price"))+": "+u(e.$f.formatNumber2(p.EnergyPrice))+" µs/TRX",1)]),c(R,{style:{"--van-divider-margin":"0.2rem 0"}}),l("div",C,[l("div",{class:"range-v",style:d({width:p.pE+"%"})},null,4),l("div",P,u(e.$t("available"))+": "+u(e.$f.formatNumber2(p.EnergyBalance))+"/"+u(e.$f.formatNumber2(z.accountResource.EnergyLimit||0))+"µs",1)]),l("div",Y,[l("span",G,u(e.$t("frozen")),1),l("span",S,u(e.$t("freezeYourself"))+": "+u(e.$f.formatNumber2(z.utils.formatUnits(z.account?.account_resource?.frozen_balance_for_energy?.frozen_balance||0,6)))+" TRX",1)]),l("div",M,[l("span",J,u(e.$f.formatNumber2(p.totalFrozenETRX))+" TRX",1),l("span",K,u(e.$t("others-frozen"))+": "+u(e.$f.formatNumber2(z.utils.formatUnits(z.account?.account_resource?.acquired_delegated_frozen_balance_for_energy||0,6)))+" TRX",1)])]),l("div",O,[l("div",Q,[c(A,{modelValue:z.tabActive,"onUpdate:modelValue":t[0]||(t[0]=e=>z.tabActive=e),direction:"horizontal"},{default:i((()=>[c(y,{name:1},{default:i((()=>[g(u(e.$t("freeze")),1)])),_:1}),c(y,{name:2},{default:i((()=>[g(u(e.$t("unfrozen")),1)])),_:1})])),_:1},8,["modelValue"])]),l("div",null,[l("span",Z,u(e.$t("selectFreezeType")),1),l("span",ee," ("+u(e.$t("freezeTips"))+")",1)]),l("div",te,[l("button",{class:f({active:"BANDWIDTH"===z.resource}),type:"button",onClick:t[1]||(t[1]=m((e=>z.resource="BANDWIDTH"),["stop"]))},u(e.$t("bandwidth")),3),l("button",{class:f({active:"ENERGY"===z.resource}),type:"button",onClick:t[2]||(t[2]=m((e=>z.resource="ENERGY"),["stop"]))},u(e.$t("energy")),3)]),1===z.tabActive?(a(),o(h,{key:0},[l("div",ne,u(e.$t("balance"))+": "+u(z.utils.formatUnits(z.account?.balance||0,6))+" TRX",1),c(T,{class:"input-n",modelValue:z.frozenAmount,"onUpdate:modelValue":t[3]||(t[3]=e=>z.frozenAmount=e),label:"",clearable:"",placeholder:e.$t("plsEnterAmount"),type:"number"},{button:i((()=>[g("TRX")])),_:1},8,["modelValue","placeholder"])],64)):s("",!0),2===z.tabActive?(a(),o("div",re,u(e.$t("unfreezable"))+": "+u(e.$f.formatNumber2("BANDWIDTH"===z.resource?p.unfreezableBTRX||0:p.unfreezableETRX||0))+" TRX",1)):s("",!0),1===z.tabActive?(a(),o("div",ae,"≈ "+u(e.$f.formatNumber2("BANDWIDTH"===z.resource?p.BPrice*(z.frozenAmount||0):p.EnergyPrice*(z.frozenAmount||0)))+" "+u(z.resource),1)):s("",!0),l("div",oe,[l("span",null,u(e.$t("receivingAccount")),1),c(A,{modelValue:z.tabActive2,"onUpdate:modelValue":t[4]||(t[4]=e=>z.tabActive2=e),direction:"horizontal"},{default:i((()=>[c(y,{name:1},{default:i((()=>[g(u(e.$t("self")),1)])),_:1}),c(y,{name:2},{default:i((()=>[g(u(e.$t("other1")),1)])),_:1})])),_:1},8,["modelValue"])]),2===z.tabActive2?(a(),b(T,{key:3,class:"input-n",modelValue:z.receiverAddress,"onUpdate:modelValue":t[5]||(t[5]=e=>z.receiverAddress=e),label:"",clearable:"",placeholder:e.$t("receivingAddress")},{"left-icon":i((()=>[ce,ie])),_:1},8,["modelValue","placeholder"])):s("",!0)]),c(se,{class:"btn-36",round:"",block:"",type:"primary",size:"small",disabled:p.disabled,loading:z.loading,onClick:m(p.onSubmit,["stop"])},{default:i((()=>[g(u(p.errMessage||e.$t("confirm")),1)])),_:1},8,["disabled","loading","onClick"])])],64)}],["__scopeId","data-v-6144080c"]]))}}}))}();
