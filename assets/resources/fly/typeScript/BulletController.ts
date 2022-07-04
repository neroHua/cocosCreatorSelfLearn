import { _decorator, Component, Node, Vec3} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BulletController')
export class BulletController extends Component {

  @property
  speed: number = 960;

    start() {

    }

    update(deltaTime: number) {
        this.node.setPosition(new Vec3(this.node.position.x, this.node.position.y + 480 * deltaTime, 0));

        if (this.node.position.y > 480) {
          this.node.destroy();
        }
    }
}

