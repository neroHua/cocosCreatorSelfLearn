import { _decorator, Component, Node, UITransform} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CanvasController')
export class CanvasController extends Component {
    start() {
        const uiTransform = this.getComponent(UITransform);
        uiTransform.setContentSize(320, 480);
    }

    update(deltaTime: number) {
        
    }
}

