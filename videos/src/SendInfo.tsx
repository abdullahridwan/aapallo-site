import {useCurrentFrame} from 'remotion';
import {C,t,outro} from './brand';
import {Stage,Panel,Fade,Label,G} from './ui';
const Line=({k,v}:{k:string;v:string})=>(<div style={{display:'flex',gap:12,fontSize:14,padding:'8px 0'}}><span style={{color:C.muted,width:56}}>{k}</span><span style={{color:C.ink}}>{v}</span></div>);
export const SendInfo=()=>{
  const f=useCurrentFrame(),o=outro(f);
  const sent=t(f,96,110)*o;
  return (<Stage>
    <Fade p={t(f,0,16)*o}><Label>New message</Label></Fade>
    <Fade p={t(f,4,22)*o}><Panel p={18}>
      <Line k="To" v="hello@aapallo.com"/>
      <Line k="Subject" v="Rosa's Bakery"/>
      <div style={{display:'flex',gap:8,marginTop:10}}>
        {[0,1,2].map(i=>(<div key={i} style={{width:64,height:48,borderRadius:8,background:G.bar,opacity:t(f,30+i*10,46+i*10)*o}}/>))}
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:16}}>
        <span style={{fontSize:13,color:C.muted,opacity:t(f,56,70)*o}}>3 photos</span>
        <div style={{position:'relative',height:34,width:96}}>
          <div style={{position:'absolute',inset:0,borderRadius:999,background:C.cobalt,color:'#fff',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',justifyContent:'center',opacity:1-sent}}>Send</div>
          <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'flex-end',gap:6,fontSize:14,color:C.cobalt,opacity:sent}}>
            <svg width="14" height="14" viewBox="0 0 24 24"><path d="M4 12.5 L9.5 18 L20 6" stroke={C.cobalt} strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Sent</div>
        </div>
      </div>
    </Panel></Fade>
  </Stage>);
};
