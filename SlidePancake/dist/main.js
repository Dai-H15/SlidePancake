(()=>{let e=document.getElementsByTagName("svg"),t=document.querySelectorAll('[class$="-caption"]')[0],n=document.getElementsByClassName("punch-viewer-content")[0],i=t.getAttribute("aria-setsize"),a="",l="",o=trustedTypes.createPolicy("forceInner",{createHTML:e=>e});confirm("SlidePancakeからの通知\nスライドの複製を開始しますか？\n⚠️著作権に細心の注意を払い、個人用途にとどめてください。\nSlidePancake作者は一切の責任を負いません。")&&function r(c){let d=document.createElement("div"),m=document.createElement("div");d.style="break-after: page; width: 90%;break-inside: avoid; margin-bottom: 40px;border-bottom: solid gray;padding-bottom: 40px;";let s=e[0].outerHTML,u="";if(c&&(m.style="width: 70%;float: right;"),m.innerHTML=o.createHTML(s),d.appendChild(m),c){let e=document.getElementsByTagName("g");for(const t of e)null!=t.ariaLabel&&(u+=t.ariaLabel+"\t");if(""!=u){let e=document.createElement("small");e.style="width: 20%;float: left;margin: 20px;",e.innerText=u,d.appendChild(e)}}d.childNodes.length>0&&(a+=d.outerHTML),(l=t.getAttribute("aria-posinset"))==i?(document.write(o.createHTML(a)),document.body.style="display: flex;flex-direction: column;align-items: center;",confirm("PDFとして保存/印刷を行いますか？")&&window.print()):(n.click(),setTimeout(r,10,c))}(confirm("スライドに埋め込まれた文章も一緒に出力しますか？\nスライド画像のみ出力する場合は'キャンセル'を選択してください。"))})();