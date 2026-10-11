import {useCurrentFrame} from 'remotion';
import {C,MONO,t,outro} from './brand';
import {Stage,Panel,Fade,Name,Bar,G} from './ui';
export const GoLive=()=>{
  const f=useCurrentFrame(),o=outro(f);
  const live=t(f,56,66)*o, site=t(f,62,84)*o;
  return (<Stage>
    <Fade p={t(f,0,18)*o}><Panel p={12} style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingLeft:16}}>
      <span style={{fontFamily:MONO,fontSize:13,color:C.ink}}>rosasbakery.com</span>
      <span style={{position:'relative',width:90,height:24,fontSize:12}}>
        <span style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'flex-end',color:C.muted,opacity:1-live}}>Connecting…</span>
        <span style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'flex-end',gap:6,color:C.cobalt,fontWeight:600,opacity:live}}><span style={{width:6,height:6,borderRadius:3,background:C.cobalt}}/>Live</span>
      </span>
    </Panel></Fade>
    <Fade p={site}><Panel p={18} style={{display:'flex',gap:16}}>
      <div style={{flex:1,display:'flex',flexDirection:'column',gap:8}}><Name>Rosa's Bakery</Name><div style={{height:4}}/><Bar w="90%" h={6}/><Bar w="70%" h={6}/><div style={{marginTop:8,width:96,height:26,borderRadius:999,background:C.cobalt}}/></div>
      <div style={{width:110,borderRadius:10,background:G.bar}}/>
    </Panel></Fade>
  </Stage>);
};
