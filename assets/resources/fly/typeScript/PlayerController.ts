import { _decorator, Component, Node, NodeEventType, Vec2, Vec3, Prefab, instantiate, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {

    @property(Prefab)
    bullet: Prefab = null;

    start() {
      this.node.on(NodeEventType.TOUCH_MOVE, (event) => {
        const touchLocation = event.getLocation();
        this.node.setPosition(new Vec3(touchLocation.x - 320, touchLocation.y - 480, 0));
      });

      this.schedule(() => {
        let bullet = instantiate(this.bullet);
        bullet.setParent(this.node.parent);
        bullet.setPosition(new Vec3(this.node.position.x, this.node.position.y + 56, 0));
      }, 0.5);
    }

    update(deltaTime: number) {
        
    }
}

