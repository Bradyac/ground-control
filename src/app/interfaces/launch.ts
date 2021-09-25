import { Mission } from '../types/mission';
import { Rocket } from '../types/rocket';
import { Provider } from '../types/provider';
import { Pad } from '../types/pad';

export interface Launch {
  _id: string;
  name: string;
  status: string[];
  date: Date;
  slug: string;
  image_url: string;
  watch_url?: string;
  mission?: Mission;
  rocket?: Rocket;
  provider?: Provider;
  pad?: Pad;
}
