import { I18N, Strings as CoreStrings } from 'tuya-panel-kit';

import StringsConfig from './strings';

export const Strings = (new I18N(StringsConfig) as any) as typeof CoreStrings;

export default Strings;
