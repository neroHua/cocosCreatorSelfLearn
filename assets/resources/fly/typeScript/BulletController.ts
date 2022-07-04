import { _decorator, Component, Node, Vec3, PhysicsSystem2D, Contact2DType, Collider2D, IPhysics2DContact} from 'cc';
import EnemyController from './EnemyController';

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
