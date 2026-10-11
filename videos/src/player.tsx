import {createRoot} from 'react-dom/client';
import {Player} from '@remotion/player';
import {NoWebsite} from './NoWebsite';
import {OldSite} from './OldSite';
import {NoTime} from './NoTime';
import {SendInfo} from './SendInfo';
import {Mockup} from './Mockup';
import {GoLive} from './GoLive';
const clips:Record<string,React.FC>={'no-website':NoWebsite,'old-site':OldSite,'no-time':NoTime,'send-info':SendInfo,'mockup':Mockup,'go-live':GoLive};
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll<HTMLElement>('[data-clip]').forEach(el=>{
  const C=clips[el.dataset.clip!];if(!C)return;
  createRoot(el).render(<Player component={C} durationInFrames={150} fps={30} compositionWidth={480} compositionHeight={360}
    style={{width:'100%',aspectRatio:'4 / 3'}} autoPlay={!reduce} loop controls={false} clickToPlay={false} initialFrame={reduce?100:0} acknowledgeRemotionLicense/>);
});
