import {Easing,interpolate} from 'remotion';
export const SERIF='"Instrument Serif", Georgia, serif', SANS='"Instrument Sans", Helvetica, sans-serif', MONO='"JetBrains Mono", Menlo, monospace';
export const C={paper:'#FFFFFF',tint:'#F3F5FF',ink:'#0E0F1A',muted:'#5E6274',line:'#E3E6F2',cobalt:'#1F45F5',peri:'#A4B0FF',red:'#EE4436',orange:'#F6A12E',gold:'#F2D15C',warm:'#FFF7EC'};
export const SH='0 6px 24px -14px rgba(14,15,26,.25)';
const ease=Easing.bezier(.16,1,.3,1);
// clamped, eased 0..1 between two frames
export const t=(f:number,a:number,b:number)=>interpolate(f,[a,b],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:ease});
export const lerp=(a:number,b:number,p:number)=>a+(b-a)*p;
// every clip fades back to its first frame so the loop is seamless
export const outro=(f:number)=>1-t(f,130,148);
