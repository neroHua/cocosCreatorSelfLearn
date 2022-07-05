import EnemyController from "./EnemyController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletController extends cc.Component {

    @property
    speed: number = 960;

    start() {
    }

    update(deltaTime: number) {
        this.node.y += this.speed * deltaTime;

        if (this.node.y > 960) {
          this.node.destroy();
        }
    }

    onCollisionEnter(other) {
      if (other.tag == 1) {
        other.getComponent(EnemyController).die();
        this.node.destroy();
      }
    }
}
