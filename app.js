(() => {
  const state={catalog:null,query:'',locale:'',storyStatus:'',assetStatus:'',sourceState:'',binaryFilter:'',tags:new Set()};
  const app=document.getElementById('app');
  const meta=document.getElementById('topbarMeta');
  const cardTemplate=document.getElementById('storyCardTemplate');
  const esc=(v='')=>String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
  const inline=s=>s.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*([^*]+)\*/g,'<em>$1</em>');

  const STATUS_LABELS={
    'godkänd':'Approved','ej godkänd':'Not approved','ej bedömd':'Not assessed',
    'släppt':'Released','publicerad':'Published','genererad':'Generated','planerad':'Planned','väntar':'Pending',
    'blockerad':'Blocked','behöver byggas om':'Rebuild required','underkänd':'Rejected','saknas':'Missing',
    'ofullständig':'Incomplete','genererad – ej publicerad':'Generated – not published','källa ej exporterbar':'Source not exportable',
    'källa ej återvinningsbar':'Source not recoverable','draft':'Draft','planned':'Planned','rendered':'Rendered',
    'qa_pass':'QA passed','locked':'Locked','pass':'Pass','rebuild_required':'Rebuild required',
    'source_not_exportable':'Source not recoverable','github_publish_failed':'GitHub publish failed',
    'complete + synced':'Complete + synced','synced':'Synced','published':'Published','released':'Released',
    'pending':'Pending','complete':'Complete','incomplete':'Incomplete','blocked':'Blocked','missing':'Missing',
    'unassessed':'Unassessed'
  };
  const SOURCE_LABELS={
    'EXACT_ORIGINAL':'Exact original',
    'CHAT_RECOVERED':'Recovered from chat',
    'PUBLISHED_UNCLASSIFIED':'Published · provenance unclassified',
    'GENERATED_NOT_RECOVERED':'Generated · not recovered',
    'SOURCE_NOT_EXPORTABLE':'Source not recoverable',
    'MISSING':'Missing'
  };
  const BINARY_LABELS={
    'has':'Has binary',
    'complete':'14/14 binaries',
    'nonapproved':'Has non-approved binary',
    'unassessed':'Has unassessed binary',
    'none':'No binaries'
  };
  const LOCALE_NAMES={
    'sv-SE':'Swedish','en-US':'English (US)','en-GB':'English (UK)','de-DE':'German','pl-PL':'Polish','hr-HR':'Croatian',
    'sr-RS':'Serbian','sr-Latn-RS':'Serbian (Latin)','fr-FR':'French','es-ES':'Spanish','it-IT':'Italian','nl-NL':'Dutch',
    'da-DK':'Danish','no-NO':'Norwegian','fi-FI':'Finnish'
  };
  const statusLabel=(value='')=>{
    const raw=String(value||'');
    const key=raw.toLocaleLowerCase('sv-SE');
    return STATUS_LABELS[key]||STATUS_LABELS[key.replaceAll(' ','_')]||raw.replaceAll('_',' ');
  };
  const sourceLabel=(value='')=>SOURCE_LABELS[value]||String(value||'').replaceAll('_',' ');
  const localeName=code=>LOCALE_NAMES[code]||code;
  const localeLabel=(story,code)=>`${localeName(code)} (${code})${code===story.masterLocale?' · Master':''}`;

  function markdown(text=''){
    const lines=esc(text).replace(/\r\n/g,'\n').split('\n');
    let out='',list=false,quote=false;
    for(const raw of lines){
      const line=raw.trimEnd();
      if(/^[-*] /.test(line)){
        if(quote){out+='</blockquote>';quote=false}
        if(!list){out+='<ul>';list=true}
        out+=`<li>${inline(line.replace(/^[-*] /,''))}</li>`;
        continue;
      }
      if(list){out+='</ul>';list=false}
      if(/^&gt;\s?/.test(line)){
        if(!quote){out+='<blockquote>';quote=true}
        out+=`<p>${inline(line.replace(/^&gt;\s?/,''))}</p>`;
        continue;
      }
      if(quote){out+='</blockquote>';quote=false}
      const h=line.match(/^(#{1,3})\s+(.+)$/);
      if(h){const n=h[1].length;out+=`<h${n}>${inline(h[2])}</h${n}>`}
      else if(line.trim()) out+=`<p>${inline(line)}</p>`;
    }
    if(list)out+='</ul>';
    if(quote)out+='</blockquote>';
    return out||'<p>No story text has been published yet.</p>';
  }

  const badge=s=>`<span class="badge status" data-status="${esc(s)}">${esc(statusLabel(s))}</span>`;
  const approvalBadge=s=>{const raw=s||'ej bedömd';return `<span class="badge approval" data-status="${esc(raw)}">${esc(statusLabel(raw))}</span>`};
  const sourceBadge=s=>`<span class="badge source" data-source="${esc(s||'MISSING')}">${esc(sourceLabel(s||'MISSING'))}</span>`;
  const binaryBadge=a=>a.image?'<span class="badge">Binary published</span>':'<span class="badge">No binary</span>';
  const localeByCode=(story,code)=>story.locales.find(l=>l.locale===code)||story.locales[0];

  function bestCover(story,localeCode){
    const loc=localeByCode(story,localeCode||story.masterLocale);
    const c=loc?.assets?.find(a=>a.id==='cover_00'&&a.image);
    if(c)return c.image;
    for(const l of story.locales){const a=l.assets?.find(x=>x.id==='cover_00'&&x.image);if(a)return a.image}
    return null;
  }

  function matchesBinary(story){
    if(!state.binaryFilter)return true;
    const locales=state.locale?story.locales.filter(l=>l.locale===state.locale):story.locales;
    const assets=locales.flatMap(l=>l.assets||[]);
    if(state.binaryFilter==='has')return assets.some(a=>!!a.image);
    if(state.binaryFilter==='complete')return locales.some(l=>(l.publishedAssetCount??(l.assets||[]).filter(a=>a.image).length)===14);
    if(state.binaryFilter==='nonapproved')return assets.some(a=>a.image&&a.approval==='ej godkänd');
    if(state.binaryFilter==='unassessed')return assets.some(a=>a.image&&a.approval!=='godkänd'&&a.approval!=='ej godkänd');
    if(state.binaryFilter==='none')return !assets.some(a=>!!a.image);
    return true;
  }

  function matches(story){
    const q=state.query.trim().toLocaleLowerCase('sv-SE');
    if(q&&!story.searchText.includes(q))return false;
    if(state.locale&&!story.locales.some(l=>l.locale===state.locale))return false;
    if(state.storyStatus&&story.status!==state.storyStatus&&!story.locales.some(l=>l.status===state.storyStatus))return false;
    if(state.assetStatus&&!story.locales.some(l=>l.assets.some(a=>a.status===state.assetStatus)))return false;
    if(state.sourceState&&!story.locales.some(l=>l.assets.some(a=>(a.sourceState||fallbackSource(a))===state.sourceState)))return false;
    if(!matchesBinary(story))return false;
    if(state.tags.size&&![...state.tags].every(t=>story.tags.includes(t)))return false;
    return true;
  }

  function fallbackSource(a){
    if(a.sourceState)return a.sourceState;
    if(a.image)return 'PUBLISHED_UNCLASSIFIED';
    if(a.availability==='known_unpublished')return 'GENERATED_NOT_RECOVERED';
    return 'MISSING';
  }

  function optionList(values,selected,label,formatter=(v)=>v){
    return `<option value="">${esc(label)}</option>`+(values||[]).map(v=>`<option value="${esc(v)}" ${v===selected?'selected':''}>${esc(formatter(v))}</option>`).join('');
  }

  function binaryOptions(){
    return `<option value="">All binary states</option>`+Object.entries(BINARY_LABELS).map(([v,l])=>`<option value="${v}" ${state.binaryFilter===v?'selected':''}>${esc(l)}</option>`).join('');
  }

  function route(){
    const m=(location.hash||'#/').match(/^#\/story\/([^/?]+)(?:\/([^/?]+))?/);
    if(m)renderDetail(decodeURIComponent(m[1]),m[2]?decodeURIComponent(m[2]):null);
    else renderLibrary();
  }

  function renderLibrary(){
    const c=state.catalog;if(!c)return;
    const stories=c.stories.filter(matches);
    app.innerHTML=`
      <section class="hero"><p class="eyebrow">COMIC STUDIO LIBRARY</p><h1>Every story. Every language. Every binary.</h1><p>Browse current image binaries whether approved, rejected, rebuild-required or unassessed. QA, approval and source provenance remain separate.</p></section>
      <section class="toolbar" aria-label="Filters">
        <div class="field"><label for="search">Search keywords</label><input id="search" type="search" placeholder="Title, story text, capability, person…" value="${esc(state.query)}"></div>
        <div class="field"><label for="locale">Language</label><select id="locale">${optionList(c.facets.locales,state.locale,'All languages',localeName)}</select></div>
        <div class="field"><label for="status">Story status</label><select id="status">${optionList(c.facets.storyStatuses,state.storyStatus,'All story statuses',statusLabel)}</select></div>
        <div class="field"><label for="assetStatus">Asset QA/status</label><select id="assetStatus">${optionList(c.facets.assetStatuses,state.assetStatus,'All asset statuses',statusLabel)}</select></div>
        <div class="field"><label for="sourceState">Image source</label><select id="sourceState">${optionList(c.facets.sourceStates||[],state.sourceState,'All source states',sourceLabel)}</select></div>
        <div class="field"><label for="binaryFilter">Binary files</label><select id="binaryFilter">${binaryOptions()}</select></div>
      </section>
      <section class="tag-filter-wrap"><div class="tag-filter-head"><strong>Tags</strong><button class="clear-button" id="clearFilters" type="button">Clear filters</button></div><div class="tag-filter">${c.facets.tags.map(t=>`<button type="button" class="tag-chip ${state.tags.has(t)?'active':''}" data-tag="${esc(t)}">${esc(t)}</button>`).join('')}</div></section>
      <div class="result-bar"><span>${stories.length} of ${c.stories.length} stories</span><span>Binary presence is independent of QA approval</span></div>
      <section class="story-grid" id="storyGrid"></section>${stories.length?'':'<div class="empty-state">No stories match the current filters.</div>'}
      <p class="footer-note"><strong>Portal rule:</strong> every current repository binary is shown, including draft, rejected and rebuild-required candidates. Publishing a binary never promotes it to PASS/LOCKED. QA, approval and provenance are displayed separately.</p>`;

    const grid=document.getElementById('storyGrid');
    for(const story of stories){
      const frag=cardTemplate.content.cloneNode(true);
      const btn=frag.querySelector('.story-card-button');
      const frame=frag.querySelector('.cover-frame');
      const cover=bestCover(story,state.locale);
      if(cover)frame.innerHTML=`<img src="${encodeURI(cover)}" alt="Cover for ${esc(story.title)}" loading="lazy">`;
      frag.querySelector('h2').textContent=story.title;
      frag.querySelector('.story-id').textContent=story.id;
      frag.querySelector('.badge-row').innerHTML=`${badge(story.status)} ${story.locales.slice(0,4).map(l=>`<span class="badge">${esc(l.locale)}${l.locale===story.masterLocale?' · Master':''}</span>`).join('')}`;
      frag.querySelector('.tag-row').innerHTML=story.tags.slice(0,5).map(t=>`<span class="tag-chip">${esc(t)}</span>`).join('');
      const loc=localeByCode(story,state.locale||story.masterLocale);
      const nonApproved=(loc?.assets||[]).filter(a=>a.image&&a.approval==='ej godkänd').length;
      const unassessed=(loc?.assets||[]).filter(a=>a.image&&a.approval!=='godkänd'&&a.approval!=='ej godkänd').length;
      frag.querySelector('.card-footer').innerHTML=`<span>${loc?.publishedAssetCount??0}/14 binaries</span><span>${nonApproved} non-approved · ${unassessed} unassessed</span>`;
      btn.addEventListener('click',()=>location.hash=`#/story/${encodeURIComponent(story.id)}/${encodeURIComponent(loc?.locale||story.masterLocale)}`);
      grid.appendChild(frag);
    }

    document.getElementById('search').addEventListener('input',e=>{state.query=e.target.value;renderLibrary();const n=document.getElementById('search');if(n){n.focus();n.setSelectionRange(n.value.length,n.value.length)}});
    document.getElementById('locale').addEventListener('change',e=>{state.locale=e.target.value;renderLibrary()});
    document.getElementById('status').addEventListener('change',e=>{state.storyStatus=e.target.value;renderLibrary()});
    document.getElementById('assetStatus').addEventListener('change',e=>{state.assetStatus=e.target.value;renderLibrary()});
    document.getElementById('sourceState').addEventListener('change',e=>{state.sourceState=e.target.value;renderLibrary()});
    document.getElementById('binaryFilter').addEventListener('change',e=>{state.binaryFilter=e.target.value;renderLibrary()});
    document.querySelectorAll('[data-tag]').forEach(el=>el.addEventListener('click',()=>{const t=el.dataset.tag;state.tags.has(t)?state.tags.delete(t):state.tags.add(t);renderLibrary()}));
    document.getElementById('clearFilters').addEventListener('click',()=>{state.query='';state.locale='';state.storyStatus='';state.assetStatus='';state.sourceState='';state.binaryFilter='';state.tags.clear();renderLibrary()});
  }

  function renderAsset(a){
    const pretty=a.id==='cover_00'?'Cover':a.id==='cta_13'?'CTA':a.id.replace('panel_','Panel ');
    const source=fallbackSource(a);
    let preview;
    if(a.image){
      preview=`<a href="${encodeURI(a.image)}" target="_blank" rel="noopener" title="Open current ${esc(pretty)}"><img src="${encodeURI(a.image)}" alt="${esc(pretty)}" loading="lazy"></a>`;
    }else if(source==='SOURCE_NOT_EXPORTABLE'){
      preview=`<div class="asset-empty"><div><strong>${esc(pretty)}</strong>Generation is known, but neither exact source bytes nor a recoverable source-chat render is currently available.</div></div>`;
    }else if(a.availability==='known_unpublished'||source==='GENERATED_NOT_RECOVERED'){
      preview=`<div class="asset-empty"><div><strong>${esc(pretty)}</strong>Generated according to metadata,<br>but no image binary has been recovered/published yet.</div></div>`;
    }else{
      preview=`<div class="asset-empty"><div><strong>${esc(pretty)}</strong>No published image binary yet.</div></div>`;
    }
    return `<article class="asset-card"><div class="asset-preview">${preview}</div><div class="asset-body"><div class="asset-title"><strong>${esc(a.id)}</strong><div class="asset-statuses">${binaryBadge(a)}${approvalBadge(a.approval)}${badge(a.status)}${sourceBadge(source)}</div></div>${a.image?`<div class="asset-actions"><a href="${encodeURI(a.image)}" download>Download current binary</a></div>`:''}</div></article>`;
  }

  function renderDetail(id,requestedLocale){
    const story=state.catalog?.stories.find(s=>s.id===id);
    if(!story){app.innerHTML='<div class="error-card">Story not found. <a href="#/">Back to library</a>.</div>';return}
    const locale=localeByCode(story,requestedLocale||story.masterLocale);
    const cover=bestCover(story,locale.locale);
    const knownUnpublished=locale.assets.filter(a=>a.availability==='known_unpublished').length;
    const missing=locale.assets.filter(a=>fallbackSource(a)==='MISSING').length;
    const approved=locale.approvedAssetCount??locale.assets.filter(a=>a.approval==='godkänd').length;
    const nonApproved=locale.assets.filter(a=>a.image&&a.approval==='ej godkänd').length;
    const unassessed=locale.assets.filter(a=>a.image&&a.approval!=='godkänd'&&a.approval!=='ej godkänd').length;
    const exact=locale.exactOriginalAssetCount??locale.assets.filter(a=>fallbackSource(a)==='EXACT_ORIGINAL').length;
    const recovered=locale.chatRecoveredAssetCount??locale.assets.filter(a=>fallbackSource(a)==='CHAT_RECOVERED').length;
    const original=story.originalStory?.text||'';
    const localized=locale.localizedStory?.text||'';

    app.innerHTML=`
      <div class="detail-toolbar"><a class="back-button" href="#/">← All stories</a><span class="badge">${esc(localeLabel(story,locale.locale))}</span></div>
      <section class="detail-head">
        <div class="detail-cover">${cover?`<img src="${encodeURI(cover)}" alt="Cover for ${esc(story.title)}">`:'<div class="cover-placeholder">NAVICHAIN<br><span>STORY</span></div>'}</div>
        <div class="detail-title"><div class="badge-row">${badge(story.status)} ${badge(locale.status)} ${story.storyLock?'<span class="badge">story locked</span>':''}</div><h1>${esc(story.title)}</h1><p class="story-id">${esc(story.id)}</p><div class="tag-row">${story.tags.map(t=>`<span class="tag-chip">${esc(t)}</span>`).join('')}</div><div class="detail-actions"><a class="button primary" href="${encodeURI(locale.package)}" download>Download story package</a>${story.originalStory?.path?`<a class="button" href="${encodeURI(story.originalStory.path)}" download>Download master story</a>`:''}</div></div>
        <p class="detail-summary">Every repository binary is visible here regardless of QA result. A draft, rejected or rebuild-required binary remains downloadable and is labeled with its actual QA/approval state. Binary publication never makes an asset approved or release-eligible.</p>
      </section>
      <nav class="locale-tabs" aria-label="Language editions">${story.locales.map(l=>`<button class="locale-tab ${l.locale===locale.locale?'active':''}" data-locale="${esc(l.locale)}" type="button">${esc(localeLabel(story,l.locale))} · ${esc(statusLabel(l.status))}</button>`).join('')}</nav>
      <section class="locale-overview">
        <div class="metric"><small>Language status</small><strong>${esc(statusLabel(locale.status))}</strong></div>
        <div class="metric"><small>Binaries</small><strong>${locale.publishedAssetCount}/14</strong></div>
        <div class="metric"><small>Approved</small><strong>${approved}/14</strong></div>
        <div class="metric"><small>Non-approved binaries</small><strong>${nonApproved}</strong></div>
        <div class="metric"><small>Unassessed binaries</small><strong>${unassessed}</strong></div>
        <div class="metric"><small>Exact original</small><strong>${exact}/14</strong></div>
        <div class="metric"><small>Chat recovered</small><strong>${recovered}/14</strong></div>
        <div class="metric"><small>Known generated</small><strong>${locale.knownGeneratedAssetCount}/14</strong></div>
        <div class="metric"><small>Missing</small><strong>${missing}/14</strong></div>
      </section>
      ${locale.releaseBlocker?`<p class="blocker"><strong>Release blocker:</strong> ${esc(locale.releaseBlocker)}</p>`:''}
      <section class="section"><div class="section-head"><h2>Assets</h2><span class="section-note">14 canonical slots · ${locale.publishedAssetCount} binaries · ${approved} approved · ${nonApproved} non-approved · ${unassessed} unassessed · ${knownUnpublished} known without file</span></div><div class="asset-grid">${locale.assets.map(renderAsset).join('')}</div></section>
      <section class="section"><div class="section-head"><h2>Swedish master story</h2>${story.originalStory?.path?`<a class="button ghost" href="${encodeURI(story.originalStory.path)}" download>Download .md</a>`:''}</div><article class="story-text">${markdown(original)}</article></section>
      ${localized?`<section class="section"><div class="section-head"><h2>Localized story text</h2><span class="section-note">${esc(localeLabel(story,locale.locale))}</span></div><article class="story-text">${markdown(localized)}</article></section>`:''}
      ${locale.files.length?`<section class="section"><div class="section-head"><h2>Other files</h2><span class="section-note">QA, manifest, PDF, social and sources when available</span></div><div class="file-list">${locale.files.map(f=>`<a class="file-link" href="${encodeURI(f.path)}"><span>${esc(f.name)}</span><span>Open ↗</span></a>`).join('')}</div></section>`:''}
      <p class="footer-note">Story packages contain material that actually exists in the repository. Non-approved binaries are archival/review candidates only and remain explicitly non-approved. Missing images are never creatively fabricated for archival purposes.</p>`;
    document.querySelectorAll('[data-locale]').forEach(el=>el.addEventListener('click',()=>location.hash=`#/story/${encodeURIComponent(story.id)}/${encodeURIComponent(el.dataset.locale)}`));
  }

  async function init(){
    try{
      const r=await fetch('catalog.json',{cache:'no-store'});
      if(!r.ok)throw new Error(`catalog ${r.status}`);
      state.catalog=await r.json();
      const localeCount=new Set(state.catalog.stories.flatMap(s=>s.locales.map(l=>l.locale))).size;
      const binaryCount=state.catalog.stories.flatMap(s=>s.locales).reduce((n,l)=>n+(l.publishedAssetCount||0),0);
      meta.textContent=`${state.catalog.stories.length} stories · ${localeCount} languages · ${binaryCount} binaries`;
      window.addEventListener('hashchange',route);
      route();
    }catch(err){
      console.error(err);
      meta.textContent='Story Portal';
      app.innerHTML='<div class="error-card"><strong>Could not load the story catalog.</strong><br>Please reload the page or try again after the current deployment finishes.</div>';
    }
  }

  init();
})();
