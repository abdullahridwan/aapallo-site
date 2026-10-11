import {useCurrentFrame} from 'remotion';
import {C,MONO,t,outro} from './brand';
import {Stage,Panel,Fade,Label,Name} from './ui';
const rows:[string,string|null][]=[["Fade Kings","fadekings.com"],["Tony's Barbershop",null],["Clean Cutz","cleancutz.nyc"]];
export const NoWebsite=()=>{
  const f=useCurrentFrame(),o=outro(f);
  return (<Stage>
    <Fade p={t(f,4,24)*o}><Label>Search · barbershop near me</Label></Fade>
    {rows.map(([n,site],i)=>{const p=t(f,18+i*12,40+i*12)*o;return(
      <Fade key={n} p={p}><Panel style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div><Name>{n}</Name><div style={{fontSize:13,color:C.muted,marginTop:5}}>Open now · 0.{i+2} mi</div></div>
        <div style={{fontFamily:MONO,fontSize:12,color:site?C.cobalt:C.red}}>{site??'No website'}</div>
      </Panel></Fade>);})}
  </Stage>);
};
