import {IAudioChain} from '../../Core/Audio/Connections/IAudioChain';
import {IBlock} from '../IBlock';
import IDisplayContext = etch.drawing.IDisplayContext;
import {IPowerSource} from './IPowerSource';
import {Logic} from './Logic/Logic';
import {Power} from './Power';
import {Source} from '../Source';

export class PowerSource extends Source implements IPowerSource {

    init(drawTo: IDisplayContext): void {
        super.init(drawTo);
    }

    UpdateConnections() {}

}
