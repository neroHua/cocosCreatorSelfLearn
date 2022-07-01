import { _decorator, Component, Node, Vec3, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BackgroundController')
export class BackgroundController extends Component {
    start() {

    }

    update(deltaTime: number) {
      let backgroundList = this.node.children;
      let background1 = backgroundList[0];
      let background2 = backgroundList[1];

      background1.setPosition(new Vec3(background1.position.x, background1.position.y - 50 * deltaTime));
      background2.setPosition(new Vec3(background2.position.x, background2.position.y - 50 * deltaTime));

      if (background1.position.y <= -960 - 480) {
        console.log(background1.position);
        background1.setPosition(new Vec3(background1.position.x, background2.position.y + 960));
      }

      if (background2.position.y <= -960 - 480) {
        console.log(background2.position);
        background2.setPosition(new Vec3(background2.position.x, background1.position.y + 960));
      }

    }
}

