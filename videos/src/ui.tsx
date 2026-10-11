import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C,SANS,SERIF,MONO,lerp} from './brand';
export const G={bar:'#E7EAF3',bar2:'#D9DDEA'};
// stage: tint ground, content floats centered with generous margin
export const Stage=({children,w=380}:{children:React.ReactNode;w?:number})=>(
  <AbsoluteFill style={{background:C.tint,alignItems:'center',justifyContent:'center',fontFamily:SANS}}>
    <div style={{width:w,display:'flex',flexDirection:'column',gap:10}}>{children}</div>
  </AbsoluteFill>);
export const Panel=({children,p=16,style={}}:{children:React.ReactNode;p?:number;style?:React.CSSProperties})=>(
  <div style={{background:C.paper,borderRadius:14,padding:p,...style}}>{children}</div>);
export const Fade=({p,children,dy=8}:{p:number;children:React.ReactNode;dy?:number})=>(
  <div style={{opacity:p,transform:`translateY(${lerp(dy,0,p)}px)`}}>{children}</div>);
export const Label=({children,color=C.muted}:{children:React.ReactNode;color?:string})=>(
  <div style={{fontFamily:MONO,fontSize:12,letterSpacing:'.04em',color}}>{children}</div>);
export const Name=({children,size=22}:{children:React.ReactNode;size?:number})=>(
  <div style={{fontFamily:SERIF,fontSize:size,lineHeight:1,color:C.ink}}>{children}</div>);
export const Bar=({w,h=8,c=G.bar}:{w:number|string;h?:number;c?:string})=>(<div style={{width:w,height:h,borderRadius:h/2,background:c}}/>);
