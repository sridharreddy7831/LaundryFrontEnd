import"./style-CWPg30Uh.js";import"./EntryFile-BS4wfFeh.js";import"./EntryFile-B8x209MB.js";import"./EntryFile-B5fBQVjD.js";import{S as s}from"./EntryFile-0QZuJqKI.js";let o=async()=>{document.getElementById("RefreshBSTableId").click()};const i="binSecured",u="Openings",b={routePath:i,tableName:u};let d=async()=>{let t=jVarGlobalTableName,a=`/${b.routePath}/${t}/DataOnly`;return await await fetch(a)},h=t=>{let e=t;var a=$("#table");a.bootstrapTable("load",e)},m=async()=>{let t=await d();t.status===200&&h(await t.json())},S=()=>{let t=document.getElementById("RefreshBSTableId");t!==null&&t.addEventListener("click",m)},L=()=>{S()};const f={"data-toolbar":"#toolbar","data-search":"true","data-searchable":"true","data-id-field":"pk"},j={tableAttributes:f},F=()=>{var t=$("#table");t.attr(j.tableAttributes)},R="AlterWithDL.html",w={RedirectToUrl:R},V=(t,e,a)=>{if(console.log("current field: ",a),a==="Alter"){const l=new URL(window.location.href),n=new URLSearchParams(l.search);let c=new URL(`./${jVarGlobalTableName}${w.RedirectToUrl}`,l);const r=new URL(`${c.href}?${n}`);r.searchParams.append("inRowPk",t.pk),window.location.href=r.href}},p=()=>{F(),T().then()},T=async()=>{var t=$("#table");t.bootstrapTable({data:[],onClickRow:V})},I=()=>{p(),L()},U=()=>{I(),s({inSuccessFunc:o})&&o().then()};U();