import { _decorator, Component, Node, NodeEventType, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    start() {
      this.node.on(NodeEventType.TOUCH_MOVE, (event) => {
        const touchLocation = event.getLocation();
        this.node.setPosition(new Vec3(touchLocation.x - 320, touchLocation.y - 480, 0));
      });
    }

    update(deltaTime: number) {
        
    }
}

