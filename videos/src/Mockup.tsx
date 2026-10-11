import {AbsoluteFill,useCurrentFrame} from 'remotion';
import {C,SANS,t,outro} from './brand';
import {Fade,Name,Bar,G} from './ui';
export const Mockup=()=>{
  const f=useCurrentFrame(),o=outro(f);
  const s=[0,1,2,3].map(i=>t(f,14+i*16,36+i*16)*o);
  return (<AbsoluteFill style={{background:C.tint,alignItems:'center',justifyContent:'center',fontFamily:SANS}}>
    <div style={{width:170,height:300,borderRadius:28,background:C.paper,padding:'26px 14px 14px',display:'flex',flexDirection:'column',gap:10}}>
      <Fade p={s[0]}><Name size={20}>Rosa's Bakery</Name><div style={{fontSize:10,color:C.muted,marginTop:4}}>Fresh bread since 1998</div></Fade>
      <Fade p={s[1]}><div style={{height:84,borderRadius:10,background:G.bar}}/></Fade>
      <Fade p={s[2]}><div style={{display:'flex',flexDirection:'column',gap:6}}><Bar w="90%" h={6}/><Bar w="70%" h={6}/><Bar w="80%" h={6}/></div></Fade>
      <Fade p={s[3]}><div style={{marginTop:6,height:30,borderRadius:999,background:C.cobalt,color:'#fff',fontSize:11,fontWeight:600,display:'flex',alignItems:'center',justifyContent:'center'}}>Call to order</div></Fade>
    </div>
  </AbsoluteFill>);
};
