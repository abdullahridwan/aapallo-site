import {useCurrentFrame} from 'remotion';
import {C,MONO,t,outro} from './brand';
import {Stage,Panel,Fade,Label,Name} from './ui';
const Row=({k,v,strike=0,flag=0,note}:{k:string;v:string;strike?:number;flag?:number;note?:string})=>(
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',padding:'9px 0',fontSize:14}}>
    <span style={{color:C.muted}}>{k}</span>
    <span style={{display:'flex',gap:10,alignItems:'baseline'}}>
      {note&&<span style={{fontFamily:MONO,fontSize:11,color:C.red,opacity:flag}}>{note}</span>}
      <span style={{position:'relative',color:C.ink}}>{v}<span style={{position:'absolute',left:0,top:'55%',height:1.5,width:`${strike*100}%`,background:C.ink}}/></span>
    </span>
  </div>);
export const OldSite=()=>{
  const f=useCurrentFrame(),o=outro(f);
  const s1=t(f,40,64)*o,s2=t(f,70,94)*o;
  return (<Stage>
    <Fade p={t(f,4,24)*o}><Label>rosasbakery.biz · last updated 2019</Label></Fade>
    <Fade p={t(f,10,32)*o}><Panel p={18}>
      <Name>Rosa's Bakery</Name>
      <div style={{height:12}}/>
      <Row k="Hours" v="Mon–Sun 6am–9pm" strike={s1} flag={s1} note="Wrong"/>
      <Row k="Menu" v="Spring 2019" strike={s2} flag={s2} note="Old"/>
      <Row k="Phone" v="(718) 555-0142"/>
    </Panel></Fade>
  </Stage>);
};
