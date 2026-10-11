import {Composition} from 'remotion';
import {NoWebsite} from './NoWebsite';
import {OldSite} from './OldSite';
import {NoTime} from './NoTime';
import {SendInfo} from './SendInfo';
import {Mockup} from './Mockup';
import {GoLive} from './GoLive';
const c={durationInFrames:150,fps:30,width:480,height:360};
export const Root=()=>(<>
  <Composition id="no-website" component={NoWebsite} {...c}/>
  <Composition id="old-site" component={OldSite} {...c}/>
  <Composition id="no-time" component={NoTime} {...c}/>
  <Composition id="send-info" component={SendInfo} {...c}/>
  <Composition id="mockup" component={Mockup} {...c}/>
  <Composition id="go-live" component={GoLive} {...c}/>
</>);
