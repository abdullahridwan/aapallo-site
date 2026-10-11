import {bundle} from '@remotion/bundler';
import {renderStill,selectComposition} from '@remotion/renderer';
const onBrowserLog=(l)=>console.log("[browser]",l.type,l.text);
const serveUrl=await bundle({entryPoint:'src/index.ts'});
for(const id of ['no-website','old-site','no-time','send-info','mockup','go-live']){
  const composition=await selectComposition({serveUrl,id,onBrowserLog});
  await renderStill({composition,serveUrl,output:`out/stills/${id}.png`,onBrowserLog,frame:Number(process.argv[2]||100)});
}
console.log('done');
