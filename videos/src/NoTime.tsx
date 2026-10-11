import {useCurrentFrame} from 'remotion';
import {C,MONO,t,lerp,outro} from './brand';
import {Stage,Panel,Fade,Label,Bar,G} from './ui';
const times=['Sat 10:00 AM','Sat 1:00 PM','Sat 5:00 PM','Sat 9:00 PM','Sun 11:00 AM','Sun 3:00 PM','Sun 7:00 PM'];
export const NoTime=()=>{
  const f=useCurrentFrame(),o=outro(f);
  const step=Math.min(times.length-1,Math.floor(lerp(0,times.length,t(f,10,120))));
  const prog=lerp(0,12,t(f,10,120))*o;
  return (<Stage>
    <Fade p={t(f,0,16)*o}><div style={{display:'flex',justifyContent:'space-between'}}><Label>Untitled site</Label><Label color={step>=4?C.red:C.muted}>{times[o<1?0:step]}</Label></div></Fade>
    <Fade p={t(f,4,22)*o}><Panel p={18} style={{display:'flex',flexDirection:'column',gap:12}}>
      <Bar w="55%" h={12} c={G.bar2}/>
      <Bar w="85%"/><Bar w="70%"/>
      <div style={{display:'flex',gap:10,marginTop:4}}><div style={{flex:1,height:70,borderRadius:10,background:G.bar}}/><div style={{flex:1,height:70,borderRadius:10,background:G.bar}}/></div>
      <div style={{display:'flex',justifyContent:'space-between',fontSize:13,color:C.muted,marginTop:4}}><span>Progress</span><span style={{fontFamily:MONO}}>{Math.round(prog)}%</span></div>
      <div style={{height:3,borderRadius:2,background:G.bar}}><div style={{height:3,borderRadius:2,width:`${prog}%`,background:C.ink}}/></div>
    </Panel></Fade>
  </Stage>);
};
