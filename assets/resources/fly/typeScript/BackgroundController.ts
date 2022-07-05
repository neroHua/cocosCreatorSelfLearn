const {ccclass, property} = cc._decorator;

@ccclass
export default class BackGroundController extends cc.Component {

    start () {

    }

    update(deltaTime: number) {
      let backgroundList = this.node.children;
      let background1 = backgroundList[0];
      let background2 = backgroundList[1];

      background1.y -= 50 * deltaTime;
      background2.y -= 50 * deltaTime;

      if (background1.position.y <= -960) {
        background1.y =  background2.y + 960;
      }

      if (background2.position.y <= -960) {
        background2.y =  background1.y + 960;
      }

    }

}
