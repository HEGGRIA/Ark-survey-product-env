import{I as K,a as re,m as oe,f as te,b as ue}from"./PageContainer.8b28e058.js";import{b as l,j as e,T as S,S as se,af as E,F as I,V as ce,ag as ae,p as Z,y as le,r as f,u as _,P as ne,G as k,c as g,z as N,Y as ie,H as de,q as he,s as pe,e as fe,d as B,R as me}from"./index.5cc7f48e.js";import{u as Ee,P as M}from"./useEnvSelect.e7498b68.js";import{C as ge}from"./index.cbd0ef98.js";import{u as xe,D as T}from"./DraggableCharContainer.396d5508.js";import"./Container.6b698acb.js";import"./get-floating-position.ffb3658e.js";import"./use-uncontrolled.4d59325d.js";function Ce(){return l(K,{children:[e(S,{order:5,children:"\u5E72\u5458\u5404\u79CD\u6570\u636E\u7684\u6392\u884C"}),e(se,{h:5}),l(E,{children:[e(E.Item,{children:"\u67E5\u770B\u5BF9\u5E94\u8868\u5355\u7684\u7EDF\u8BA1\u6570\u636E"}),e(E.Item,{children:"\u70B9\u51FB\u5E72\u5458\u5934\u50CF\u53EF\u4EE5\u5C55\u5F00\u8BE6\u7EC6\u6570\u636E"}),e(E.Item,{children:"\u7EC3\u5EA6\u7EDF\u8BA1\u6570\u636E\u6B63\u5728\u5F00\u53D1\u4E2D"})]})]})}function ve({inside:t,onInsideChange:o}){const{envLabel:n,EnvSelectContent:c}=Ee({onClickEnvButton:s=>{console.log("onClickEnvButton",s),o==null||o(!0,s)}});return l(I,{children:[e(re,{title:t?n:"\u5E72\u5458\u6392\u884C",inside:t,children:e(ce,{size:"md",children:e(ae,{onClick:()=>o==null?void 0:o(!1)})})}),!t&&l(I,{children:[e(Ce,{}),e(K,{children:c})]})]})}class Fe{constructor(){this.serviceName="tierListStatistics"}getLatest(o){return Z(this.serviceName,"getLatest",o)}getStatisticsByKey(o){return Z(this.serviceName,"getStatisticsByKey",o)}}function ye({char:t,statistic:o,sx:n,index:c,all:s}){var V,x;const{setting:r}=le(),[b,w]=f.exports.useState(!1),A=xe(()=>w(!1),["mouseup","touchend"]),{t:L}=_();return e(ne,{ref:A,shadow:"sm",radius:"xl",sx:{...n,transition:"all 0.3s",backgroundColor:o!=null&&o.count?void 0:"#fff",width:b?"120px":"40px",overflow:"hidden",cursor:"pointer"},onClick:()=>w(D=>!D),children:l(k,{noWrap:!0,spacing:4,position:"apart",children:[e(ge,{mini:!0,readonly:!0,charKey:t.key,charName:t.name,nameDisplay:r.nameDisplay}),e(g,{children:o!=null&&o.count?"#"+(c+1):""}),l(N,{spacing:0,sx:{fontSize:"12px",marginRight:"10px",transform:"scale(0.8)"},children:[e(g,{sx:{width:"100%",whiteSpace:"nowrap"},children:o!=null&&o.count?(V=o==null?void 0:o.avgValue)==null?void 0:V.toFixed(2):L("no-ratings-yet")}),e(g,{children:(x=o==null?void 0:o.count)!=null?x:0})]})]})})}const ee=ie(t=>({statisticsKey:"",setStatisticsKey:o=>t(()=>({statisticsKey:o}))}));function Se(){var x,D;const[t,o]=f.exports.useState(),{charMap:n}=de(),{statisticsKey:c}=ee(),{t:s}=_(),r=he(),[b,w]=f.exports.useState(!1),A=f.exports.useCallback(async()=>await new Fe().getLatest({keys:[c]}),[c]),L=f.exports.useCallback(async()=>{const{data:u}=await A();u[c]?(Object.keys(n).forEach(h=>{var m,i,C,p,a,d;u[c].charStatistics[h]={char:n[h],statistic:{count:(C=(i=(m=u[c])==null?void 0:m.charStatistics)==null?void 0:i[h])==null?void 0:C.count,avgValue:(d=(a=(p=u[c])==null?void 0:p.charStatistics)==null?void 0:a[h])==null?void 0:d.avgValue}}}),o(u[c]),pe(s("statistics.updated-successfully"))):(o(u[c]),fe(s("statistics.key-not-found")))},[n,c,A,s]);f.exports.useEffect(()=>{const u=setTimeout(()=>L(),100);return()=>clearTimeout(u)},[c]);const V=f.exports.useMemo(()=>{var C;const u=oe((C=t==null?void 0:t.charStatistics)!=null?C:{}).filter(p=>{var a,d;return((d=(a=p.char)==null?void 0:a.rarity)!=null?d:0)>4}).sort((p,a)=>{var d,v,F,y;return((v=(d=a.statistic)==null?void 0:d.avgValue)!=null?v:0)-((y=(F=p.statistic)==null?void 0:F.avgValue)!=null?y:0)}),h=[r.colors.grape[3],r.colors.grape[2],r.colors.grape[1],r.colors.pink[3],r.colors.pink[2],r.colors.pink[1],r.colors.red[3],r.colors.red[2],r.colors.red[1],r.colors.orange[3],r.colors.orange[2],r.colors.orange[1],r.colors.yellow[3],r.colors.yellow[2],r.colors.yellow[1],r.colors.lime[3],r.colors.lime[2],r.colors.lime[1],r.colors.green[3],r.colors.green[2],r.colors.green[1],r.colors.teal[3],r.colors.teal[2],r.colors.teal[1],r.colors.cyan[3],r.colors.cyan[2],r.colors.cyan[1],r.colors.blue[3],r.colors.blue[2],r.colors.blue[1],r.colors.violet[3],r.colors.violet[2],r.colors.violet[1],r.colors.gray[3],r.colors.gray[2],r.colors.gray[1]],m=[[]];let i=0;return u.forEach((p,a)=>{var d,v,F,y,$,z,j,O,P,R,X,H,W,G,q,Y,J,Q,U;u[a-1]&&u[a-2]&&(((v=(d=u[a-1].statistic)==null?void 0:d.avgValue)!=null?v:0)+((y=(F=u[a-2].statistic)==null?void 0:F.avgValue)!=null?y:0))/2-((z=($=u[a].statistic)==null?void 0:$.avgValue)!=null?z:0)>.08&&((O=(j=u[a-1].statistic)==null?void 0:j.avgValue)!=null?O:0)-((R=(P=u[a].statistic)==null?void 0:P.avgValue)!=null?R:0)>.05&&(++i,i%3===0&&m.push([]),(i+1)%3===0&&((H=(X=u[a-1].statistic)==null?void 0:X.avgValue)!=null?H:0)-((G=(W=u[a].statistic)==null?void 0:W.avgValue)!=null?G:0)>.2&&(m.push([]),++i),(i+2)%3===0&&((Y=(q=u[a-1].statistic)==null?void 0:q.avgValue)!=null?Y:0)-((Q=(J=u[a].statistic)==null?void 0:J.avgValue)!=null?Q:0)>.2&&(m.push([]),i+=2)),m[Math.floor(i/3)].push(e(ye,{char:p.char,index:a,all:Math.floor((U=t==null?void 0:t.validCount)!=null?U:0),sx:{background:h[i]},statistic:p.statistic},a))}),m},[t,r.colors]);return l(I,{children:[e(K,{children:e(k,{position:"center",sx:{textAlign:"center"},children:t!=null&&t.createdDate?l(I,{children:[l(g,{sx:{flex:1},children:[e(S,{order:3,children:(x=t==null?void 0:t.count)!=null?x:s("statistics.key-not-found")}),e(B,{children:s("statistics.count")})]}),e(T,{sx:{height:"55px"},orientation:"vertical"}),l(g,{sx:{flex:1},children:[e(S,{order:3,children:(D=t==null?void 0:t.validCount)!=null?D:s("statistics.key-not-found")}),l(M,{opened:b,children:[e(M.Target,{children:e(B,{sx:{userSelect:"none",cursor:"pointer"},onClick:()=>w(u=>!u),children:s("statistics.validCount")})}),e(M.Dropdown,{children:l(E,{sx:{fontSize:"14px"},children:[e(E.Item,{children:"\u4EE5\u4E0B\u60C5\u51B5\u8BA1\u5165\u6709\u6548\u6837\u672C\uFF1A\u7B49\u7EA7\u6570\u5927\u4E8E2\uFF0C\u5E72\u5458\u8BC4\u4EF7\u6570\u5927\u4E8E7\uFF0C\u4E14\u4E0A\u6B21\u4FDD\u5B58\u65F6\u95F4\u572814\u5929\u4EE5\u5185"}),e(E.Item,{children:"\u5206\u6570\u8BA1\u7B97\u89C4\u5219\uFF1A\u5C06\u6709\u6548\u6837\u672C\u7684\u8BC4\u4EF7\u7B49\u6BD4\u53CD\u5411\u6620\u5C04\u5230[0,5]\uFF0C\u6C42\u51FA\u5E73\u5747\u503C"}),e(E.Item,{children:"\u5206\u5C42\u6309\u7B97\u6CD5\u81EA\u52A8\u5212\u5206\uFF0C\u7EDF\u8BA1\u6570\u636E\u6BCF\u5341\u5206\u949F\u66F4\u65B0\u4E00\u6B21"})]})})]})]}),e(T,{sx:{height:"55px"},orientation:"vertical"}),l(g,{sx:{flex:1},children:[e(S,{order:6,children:t!=null&&t.createdDate?te(new Date(parseInt(t.createdDate,10)),"yyyy-MM-dd HH:mm:ss"):"-"}),e(B,{children:"\u66F4\u65B0\u65F6\u95F4"})]})]}):e(S,{order:3,children:s("statistics.key-not-found")})})}),e(N,{spacing:0,sx:{width:"100%"},children:V.map((u,h)=>u.length>0&&l(me.Fragment,{children:[e(T,{variant:"dashed",label:we(h+1)}),e(k,{px:20,children:u})]},h))})]})}const Be=f.exports.forwardRef(({image:t,label:o,description:n,...c},s)=>e("div",{ref:s,...c,children:e(k,{noWrap:!0,children:l("div",{children:[e(B,{size:"sm",children:o}),e(B,{size:"xs",color:"dimmed",children:n})]})})}));Be.displayName="SelectItem";function we(t){let o=t;const n={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};let c="";for(let s in n)for(;o>=n[s];)c+=s,o-=n[s];return c}function Te(){const[t,o]=f.exports.useState(!1),{setStatisticsKey:n}=ee();return e(ue,{children:l(N,{children:[e(ve,{inside:t,onInsideChange:(c,s)=>{o(c),n(s!=null?s:"")}}),t&&e(g,{sx:{display:"flex",gap:"20px",flexWrap:"wrap"},children:e(Se,{})})]})})}export{Te as default};
