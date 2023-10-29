import{b5 as e,b6 as ye,b7 as J,b8 as Ce,b9 as be,r as g,ba as se,bb as je,bc as Se,bd as we,be as Ne,bf as Te,bg as Le,bh as ke}from"./vendor-f4aa6f85.js";import{S as qe,E as Ie,a as Pe,b as Re,D as Ee,c as Ae}from"./fluentui-icons-df61cf1f.js";import{S as v,I as X,P as Me,T as D,a as Be,b as z,c as ne,d as ze,D as $e,e as Qe,C as $,f as Oe}from"./fluentui-react-d3a943c3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))h(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&h(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}})();const De="modulepreload",Fe=function(t){return"/"+t},Y={},Z=function(s,o,h){if(!o||o.length===0)return s();const a=document.getElementsByTagName("link");return Promise.all(o.map(n=>{if(n=Fe(n),n in Y)return;Y[n]=!0;const r=n.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(!!h)for(let l=a.length-1;l>=0;l--){const _=a[l];if(_.href===n&&(!r||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${u}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":De,r||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),r)return new Promise((l,_)=>{c.addEventListener("load",l),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>s()).catch(n=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=n,window.dispatchEvent(r),!r.defaultPrevented)throw n})};const He="/assets/github-fab00c2d.svg",Ge="_layout_o4bzc_1",Ue="_header_o4bzc_13",Ke="_headerContainer_o4bzc_23",Ve="_headerTitleContainer_o4bzc_39",We="_headerLogo_o4bzc_55",Je="_headerTitle_o4bzc_39",Xe="_headerNavList_o4bzc_73",Ye="_headerNavPageLink_o4bzc_85",Ze="_headerNavPageLinkActive_o4bzc_113",et="_headerNavLeftMargin_o4bzc_123",tt="_headerRightText_o4bzc_131",st="_microsoftLogo_o4bzc_141",nt="_githubLogo_o4bzc_151",x={layout:Ge,header:Ue,headerContainer:Ke,headerTitleContainer:Ve,headerLogo:We,headerTitle:Je,headerNavList:Xe,headerNavPageLink:Ye,headerNavPageLinkActive:Ze,headerNavLeftMargin:et,headerRightText:tt,microsoftLogo:st,githubLogo:nt},at=()=>e.jsxs("div",{className:x.layout,children:[e.jsx("header",{className:x.header,role:"banner",children:e.jsxs("div",{className:x.headerContainer,children:[e.jsx(ye,{to:"/",className:x.headerTitleContainer,children:e.jsx("h3",{className:x.headerTitle,children:"GPT + Enterprise data | Sample"})}),e.jsx("nav",{children:e.jsxs("ul",{className:x.headerNavList,children:[e.jsx("li",{children:e.jsx(J,{to:"/",className:({isActive:t})=>t?x.headerNavPageLinkActive:x.headerNavPageLink,children:"Chat"})}),e.jsx("li",{className:x.headerNavLeftMargin,children:e.jsx(J,{to:"/qa",className:({isActive:t})=>t?x.headerNavPageLinkActive:x.headerNavPageLink,children:"Ask a question"})}),e.jsx("li",{className:x.headerNavLeftMargin,children:e.jsx("a",{href:"https://aka.ms/entgptsearch",target:"_blank",title:"Github repository link",children:e.jsx("img",{src:He,alt:"Github logo","aria-label":"Link to github repository",width:"20px",height:"20px",className:x.githubLogo})})})]})}),e.jsx("h4",{className:x.headerRightText,children:"Azure OpenAI + Cognitive Search"})]})}),e.jsx(Ce,{})]}),ot="_container_1qf1y_1",rt="_chatRoot_1qf1y_15",it="_chatContainer_1qf1y_25",ct="_chatEmptyState_1qf1y_41",lt="_chatEmptyStateTitle_1qf1y_61",ut="_chatEmptyStateSubtitle_1qf1y_75",dt="_chatMessageStream_1qf1y_107",ht="_chatMessageGpt_1qf1y_131",pt="_chatMessageGptMinWidth_1qf1y_145",mt="_chatInput_1qf1y_155",gt="_chatAnalysisPanel_1qf1y_181",_t="_chatSettingsSeparator_1qf1y_197",xt="_loadingLogo_1qf1y_205",ft="_commandsContainer_1qf1y_213",vt="_commandButton_1qf1y_223",p={container:ot,chatRoot:rt,chatContainer:it,chatEmptyState:ct,chatEmptyStateTitle:lt,chatEmptyStateSubtitle:ut,chatMessageStream:dt,chatMessageGpt:ht,chatMessageGptMinWidth:pt,chatInput:mt,chatAnalysisPanel:gt,chatSettingsSeparator:_t,loadingLogo:xt,commandsContainer:ft,commandButton:vt};async function fs(t){var h,a,n,r,u,m,c,l,_;const s=await fetch("/ask",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.question,approach:t.approach,overrides:{retrieval_mode:(h=t.overrides)==null?void 0:h.retrievalMode,semantic_ranker:(a=t.overrides)==null?void 0:a.semanticRanker,semantic_captions:(n=t.overrides)==null?void 0:n.semanticCaptions,top:(r=t.overrides)==null?void 0:r.top,temperature:(u=t.overrides)==null?void 0:u.temperature,prompt_template:(m=t.overrides)==null?void 0:m.promptTemplate,prompt_template_prefix:(c=t.overrides)==null?void 0:c.promptTemplatePrefix,prompt_template_suffix:(l=t.overrides)==null?void 0:l.promptTemplateSuffix,exclude_category:(_=t.overrides)==null?void 0:_.excludeCategory}})}),o=await s.json();if(s.status>299||!s.ok)throw Error(o.error||"Unknown error");return o}async function yt(t){var h,a,n,r,u,m,c,l,_,N;const s=await fetch("/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({history:t.history,approach:t.approach,overrides:{retrieval_mode:(h=t.overrides)==null?void 0:h.retrievalMode,semantic_ranker:(a=t.overrides)==null?void 0:a.semanticRanker,semantic_captions:(n=t.overrides)==null?void 0:n.semanticCaptions,top:(r=t.overrides)==null?void 0:r.top,temperature:(u=t.overrides)==null?void 0:u.temperature,prompt_template:(m=t.overrides)==null?void 0:m.promptTemplate,prompt_template_prefix:(c=t.overrides)==null?void 0:c.promptTemplatePrefix,prompt_template_suffix:(l=t.overrides)==null?void 0:l.promptTemplateSuffix,exclude_category:(_=t.overrides)==null?void 0:_.excludeCategory,suggest_followup_questions:(N=t.overrides)==null?void 0:N.suggestFollowupQuestions}})}),o=await s.json();if(s.status>299||!s.ok)throw Error(o.error||"Unknown error");return o}function ae(t){return`/content/${t}`}var oe=(t=>(t.RetrieveThenRead="rtr",t.ReadRetrieveRead="rrr",t.ReadDecomposeAsk="rda",t))(oe||{}),y=(t=>(t.Hybrid="hybrid",t.Vectors="vectors",t.Text="text",t))(y||{});const Ct="_answerContainer_1bfq8_1",bt="_answerLogo_1bfq8_17",jt="_answerText_1bfq8_25",St="_selected_1bfq8_63",wt="_citationLearnMore_1bfq8_71",Nt="_citation_1bfq8_71",Tt="_followupQuestionsList_1bfq8_115",Lt="_followupQuestionLearnMore_1bfq8_123",kt="_followupQuestion_1bfq8_115",qt="_supContainer_1bfq8_161",It="_retryButton_1bfq8_219",Pt="_loadingdots_1bfq8_263",Rt="_loading_1bfq8_263",f={answerContainer:Ct,answerLogo:bt,answerText:jt,selected:St,citationLearnMore:wt,citation:Nt,followupQuestionsList:Tt,followupQuestionLearnMore:Lt,followupQuestion:kt,supContainer:qt,retryButton:It,loadingdots:Pt,loading:Rt};function Et(t,s){const o=[],h=[];let a=t.replace(/<<([^>>]+)>>/g,(u,m)=>(h.push(m),""));return a=a.trim(),{answerHtml:a.split(/\[([^\]]+)\]/g).map((u,m)=>{if(m%2===0)return u;{let c;o.indexOf(u)!==-1?c=o.indexOf(u)+1:(o.push(u),c=o.length);const l=ae(u);return be(e.jsx("a",{className:"supContainer",title:u,onClick:()=>s(l),children:e.jsx("sup",{children:c})}))}}).join(""),citations:o,followupQuestions:h}}const re=()=>e.jsx(qe,{primaryFill:"rgba(115, 118, 225, 1)","aria-hidden":"true","aria-label":"Answer logo"}),At=({answer:t,isSelected:s,onCitationClicked:o,onThoughtProcessClicked:h,onSupportingContentClicked:a,onFollowupQuestionClicked:n,showFollowupQuestions:r})=>{const u=g.useMemo(()=>Et(t.answer,o),[t]),m=se.sanitize(u.answerHtml);return e.jsxs(v,{className:`${f.answerContainer} ${s&&f.selected}`,verticalAlign:"space-between",children:[e.jsx(v.Item,{children:e.jsxs(v,{horizontal:!0,horizontalAlign:"space-between",children:[e.jsx(re,{}),e.jsxs("div",{children:[e.jsx(X,{style:{color:"black"},iconProps:{iconName:"Lightbulb"},title:"Show thought process",ariaLabel:"Show thought process",onClick:()=>h(),disabled:!t.thoughts}),e.jsx(X,{style:{color:"black"},iconProps:{iconName:"ClipboardList"},title:"Show supporting content",ariaLabel:"Show supporting content",onClick:()=>a(),disabled:!t.data_points.length})]})]})}),e.jsx(v.Item,{grow:!0,children:e.jsx("div",{className:f.answerText,dangerouslySetInnerHTML:{__html:m}})}),!!u.citations.length&&e.jsx(v.Item,{children:e.jsxs(v,{horizontal:!0,wrap:!0,tokens:{childrenGap:5},children:[e.jsx("span",{className:f.citationLearnMore,children:"Citations:"}),u.citations.map((c,l)=>{const _=ae(c);return e.jsx("a",{className:f.citation,title:c,onClick:()=>o(_),children:`${++l}. ${c}`},l)})]})}),!!u.followupQuestions.length&&r&&n&&e.jsx(v.Item,{children:e.jsxs(v,{horizontal:!0,wrap:!0,className:`${u.citations.length?f.followupQuestionsList:""}`,tokens:{childrenGap:6},children:[e.jsx("span",{className:f.followupQuestionLearnMore,children:"Follow-up questions:"}),u.followupQuestions.map((c,l)=>e.jsx("a",{className:f.followupQuestion,title:c,onClick:()=>n(c),children:`${c}`},l))]})})]})},Mt=()=>{const t=je({from:{opacity:0},to:{opacity:1}});return e.jsx(Se.div,{style:{...t},children:e.jsxs(v,{className:f.answerContainer,verticalAlign:"space-between",children:[e.jsx(re,{}),e.jsx(v.Item,{grow:!0,children:e.jsxs("p",{className:f.answerText,children:["Generating answer",e.jsx("span",{className:f.loadingdots})]})})]})})},Bt=({error:t,onRetry:s})=>e.jsxs(v,{className:f.answerContainer,verticalAlign:"space-between",children:[e.jsx(Ie,{"aria-hidden":"true","aria-label":"Error icon",primaryFill:"red"}),e.jsx(v.Item,{grow:!0,children:e.jsx("p",{className:f.answerText,children:t})}),e.jsx(Me,{className:f.retryButton,onClick:s,text:"Retry"})]}),zt="_questionInputContainer_wokwf_1",$t="_questionInputTextArea_wokwf_19",Qt="_questionInputButtonsContainer_wokwf_29",Ot="_questionInputSendButton_wokwf_41",Dt="_questionInputSendButtonDisabled_wokwf_49",k={questionInputContainer:zt,questionInputTextArea:$t,questionInputButtonsContainer:Qt,questionInputSendButton:Ot,questionInputSendButtonDisabled:Dt},Ft=({onSend:t,disabled:s,placeholder:o,clearOnSend:h})=>{const[a,n]=g.useState(""),r=()=>{s||!a.trim()||(t(a),h&&n(""))},u=l=>{l.key==="Enter"&&!l.shiftKey&&(l.preventDefault(),r())},m=(l,_)=>{_?_.length<=1e3&&n(_):n("")},c=s||!a.trim();return e.jsxs(v,{horizontal:!0,className:k.questionInputContainer,children:[e.jsx(D,{className:k.questionInputTextArea,placeholder:o,multiline:!0,resizable:!1,borderless:!0,value:a,onChange:m,onKeyDown:u}),e.jsx("div",{className:k.questionInputButtonsContainer,children:e.jsx("div",{className:`${k.questionInputSendButton} ${c?k.questionInputSendButtonDisabled:""}`,"aria-label":"Ask question button",onClick:r,children:e.jsx(Pe,{primaryFill:"rgba(115, 118, 225, 1)"})})})]})},Ht="_examplesNavList_v5q0z_1",Gt="_example_v5q0z_1",Ut="_exampleText_v5q0z_53",F={examplesNavList:Ht,example:Gt,exampleText:Ut},Kt=({text:t,value:s,onClick:o})=>e.jsx("div",{className:F.example,onClick:()=>o(s),children:e.jsx("p",{className:F.exampleText,children:t})}),Vt=[{text:"水素ハイブリッド電車とはなんですか",value:"水素ハイブリッド電車とはなんですか"},{text:"水素供給システムについて教えてください",value:"水素供給システムについて教えてください"},{text:"車両の運行ルート最適化について説明してください",value:"車両の運行ルート最適化について説明してください"}],Wt=({onExampleClicked:t})=>e.jsx("ul",{className:F.examplesNavList,children:Vt.map((s,o)=>e.jsx("li",{children:e.jsx(Kt,{text:s.text,value:s.value,onClick:t})},o))}),Jt="_container_u4tj7_1",Xt="_message_u4tj7_17",ee={container:Jt,message:Xt},Q=({message:t})=>e.jsx("div",{className:ee.container,children:e.jsx("div",{className:ee.message,children:t})}),Yt="_thoughtProcess_exr0t_1",Zt={thoughtProcess:Yt};function es(t){const s=t.split(": "),o=s[0],h=s.slice(1).join(": ");return{title:o,content:h}}const ts="_supportingContentNavList_ekyxv_1",ss="_supportingContentItem_ekyxv_17",ns="_supportingContentItemHeader_ekyxv_41",as="_supportingContentItemText_ekyxv_49",R={supportingContentNavList:ts,supportingContentItem:ss,supportingContentItemHeader:ns,supportingContentItemText:as},os=({supportingContent:t})=>e.jsx("ul",{className:R.supportingContentNavList,children:t.map((s,o)=>{const h=es(s);return e.jsxs("li",{className:R.supportingContentItem,children:[e.jsx("h4",{className:R.supportingContentItemHeader,children:h.title}),e.jsx("p",{className:R.supportingContentItemText,children:h.content})]})})});var C=(t=>(t.ThoughtProcessTab="thoughtProcess",t.SupportingContentTab="supportingContent",t.CitationTab="citation",t))(C||{});const O={disabled:!0,style:{color:"grey"}},rs=({answer:t,activeTab:s,activeCitation:o,citationHeight:h,className:a,onActiveTabChanged:n})=>{const r=!t.thoughts,u=!t.data_points.length,m=!o,c=se.sanitize(t.thoughts);return e.jsxs(Be,{className:a,selectedKey:s,onLinkClick:l=>l&&n(l.props.itemKey),children:[e.jsx(z,{itemKey:C.ThoughtProcessTab,headerText:"Thought process",headerButtonProps:r?O:void 0,children:e.jsx("div",{className:Zt.thoughtProcess,dangerouslySetInnerHTML:{__html:c}})}),e.jsx(z,{itemKey:C.SupportingContentTab,headerText:"Supporting content",headerButtonProps:u?O:void 0,children:e.jsx(os,{supportingContent:t.data_points})}),e.jsx(z,{itemKey:C.CitationTab,headerText:"Citation",headerButtonProps:m?O:void 0,children:e.jsx("iframe",{title:"Citation",src:o,width:"100%",height:h})})]})},is="_container_1k5c7_1",cs={container:is},ls=({className:t,onClick:s})=>e.jsxs("div",{className:`${cs.container} ${t??""}`,onClick:s,children:[e.jsx(Re,{}),e.jsx(ne,{children:"Developer settings"})]}),us="_container_7708a_1",ds="_disabled_7708a_15",te={container:us,disabled:ds},hs=({className:t,disabled:s,onClick:o})=>e.jsxs("div",{className:`${te.container} ${t??""} ${s&&te.disabled}`,onClick:o,children:[e.jsx(Ee,{}),e.jsx(ne,{children:"Clear chat"})]}),ps=()=>{const[t,s]=g.useState(!1),[o,h]=g.useState(""),[a,n]=g.useState(3),[r,u]=g.useState(y.Hybrid),[m,c]=g.useState(!0),[l,_]=g.useState(!1),[N,ie]=g.useState(""),[E,ce]=g.useState(!1),b=g.useRef(""),H=g.useRef(null),[q,G]=g.useState(!1),[I,A]=g.useState(),[U,M]=g.useState(),[T,j]=g.useState(void 0),[L,K]=g.useState(0),[S,V]=g.useState([]),P=async d=>{b.current=d,I&&A(void 0),G(!0),M(void 0),j(void 0);try{const w={history:[...S.map(W=>({user:W[0],bot:W[1].answer})),{user:d,bot:void 0}],approach:oe.ReadRetrieveRead,overrides:{promptTemplate:o.length===0?void 0:o,excludeCategory:N.length===0?void 0:N,top:a,retrievalMode:r,semanticRanker:m,semanticCaptions:l,suggestFollowupQuestions:E}},ve=await yt(w);V([...S,[d,ve]])}catch(i){A(i)}finally{G(!1)}},le=()=>{b.current="",I&&A(void 0),M(void 0),j(void 0),V([])};g.useEffect(()=>{var d;return(d=H.current)==null?void 0:d.scrollIntoView({behavior:"smooth"})},[q]);const ue=(d,i)=>{h(i||"")},de=(d,i)=>{n(parseInt(i||"1"))},he=(d,i,w)=>{u((i==null?void 0:i.data)||y.Hybrid)},pe=(d,i)=>{c(!!i)},me=(d,i)=>{_(!!i)},ge=(d,i)=>{ie(i||"")},_e=(d,i)=>{ce(!!i)},xe=d=>{P(d)},fe=(d,i)=>{U===d&&T===C.CitationTab&&L===i?j(void 0):(M(d),j(C.CitationTab)),K(i)},B=(d,i)=>{j(T===d&&L===i?void 0:d),K(i)};return e.jsxs("div",{className:p.container,children:[e.jsxs("div",{className:p.commandsContainer,children:[e.jsx(hs,{className:p.commandButton,onClick:le,disabled:!b.current||q}),e.jsx(ls,{className:p.commandButton,onClick:()=>s(!t)})]}),e.jsxs("div",{className:p.chatRoot,children:[e.jsxs("div",{className:p.chatContainer,children:[b.current?e.jsxs("div",{className:p.chatMessageStream,children:[S.map((d,i)=>e.jsxs("div",{children:[e.jsx(Q,{message:d[0]}),e.jsx("div",{className:p.chatMessageGpt,children:e.jsx(At,{answer:d[1],isSelected:L===i&&T!==void 0,onCitationClicked:w=>fe(w,i),onThoughtProcessClicked:()=>B(C.ThoughtProcessTab,i),onSupportingContentClicked:()=>B(C.SupportingContentTab,i),onFollowupQuestionClicked:w=>P(w),showFollowupQuestions:E&&S.length-1===i},i)})]},i)),q&&e.jsxs(e.Fragment,{children:[e.jsx(Q,{message:b.current}),e.jsx("div",{className:p.chatMessageGptMinWidth,children:e.jsx(Mt,{})})]}),I?e.jsxs(e.Fragment,{children:[e.jsx(Q,{message:b.current}),e.jsx("div",{className:p.chatMessageGptMinWidth,children:e.jsx(Bt,{error:I.toString(),onRetry:()=>P(b.current)})})]}):null,e.jsx("div",{ref:H})]}):e.jsxs("div",{className:p.chatEmptyState,children:[e.jsx(Ae,{fontSize:"120px",primaryFill:"rgba(115, 118, 225, 1)","aria-hidden":"true","aria-label":"Chat logo"}),e.jsx("h1",{className:p.chatEmptyStateTitle,children:"Chat with your data"}),e.jsx("h2",{className:p.chatEmptyStateSubtitle,children:"Ask anything or try an example"}),e.jsx(Wt,{onExampleClicked:xe})]}),e.jsx("div",{className:p.chatInput,children:e.jsx(Ft,{clearOnSend:!0,placeholder:"Type a new question (e.g. does my plan cover annual eye exams?)",disabled:q,onSend:d=>P(d)})})]}),S.length>0&&T&&e.jsx(rs,{className:p.chatAnalysisPanel,activeCitation:U,onActiveTabChanged:d=>B(d,L),citationHeight:"810px",answer:S[L][1],activeTab:T}),e.jsxs(ze,{headerText:"Configure answer generation",isOpen:t,isBlocking:!1,onDismiss:()=>s(!1),closeButtonAriaLabel:"Close",onRenderFooterContent:()=>e.jsx($e,{onClick:()=>s(!1),children:"Close"}),isFooterAtBottom:!0,children:[e.jsx(D,{className:p.chatSettingsSeparator,defaultValue:o,label:"Override prompt template",multiline:!0,autoAdjustHeight:!0,onChange:ue}),e.jsx(Qe,{className:p.chatSettingsSeparator,label:"Retrieve this many documents from search:",min:1,max:50,defaultValue:a.toString(),onChange:de}),e.jsx(D,{className:p.chatSettingsSeparator,label:"Exclude category",onChange:ge}),e.jsx($,{className:p.chatSettingsSeparator,checked:m,label:"Use semantic ranker for retrieval",onChange:pe}),e.jsx($,{className:p.chatSettingsSeparator,checked:l,label:"Use query-contextual summaries instead of whole documents",onChange:me,disabled:!m}),e.jsx($,{className:p.chatSettingsSeparator,checked:E,label:"Suggest follow-up questions",onChange:_e}),e.jsx(Oe,{className:p.chatSettingsSeparator,label:"Retrieval mode",options:[{key:"hybrid",text:"Vectors + Text (Hybrid)",selected:r==y.Hybrid,data:y.Hybrid},{key:"vectors",text:"Vectors",selected:r==y.Vectors,data:y.Vectors},{key:"text",text:"Text",selected:r==y.Text,data:y.Text}],required:!0,onChange:he})]})]})]})};we();const ms=Ne([{path:"/",element:e.jsx(at,{}),children:[{index:!0,element:e.jsx(ps,{})},{path:"qa",lazy:()=>Z(()=>import("./OneShot-1c4ac548.js"),["assets/OneShot-1c4ac548.js","assets/vendor-f4aa6f85.js","assets/fluentui-react-d3a943c3.js","assets/fluentui-icons-df61cf1f.js","assets/OneShot-0a57a895.css"])},{path:"*",lazy:()=>Z(()=>import("./NoPage-d0bd4518.js"),["assets/NoPage-d0bd4518.js","assets/vendor-f4aa6f85.js"])}]}]);Te.createRoot(document.getElementById("root")).render(e.jsx(Le.StrictMode,{children:e.jsx(ke,{router:ms})}));export{oe as A,Wt as E,Ft as Q,y as R,ls as S,At as a,C as b,Bt as c,rs as d,fs as e};
//# sourceMappingURL=index-ff4f990e.js.map