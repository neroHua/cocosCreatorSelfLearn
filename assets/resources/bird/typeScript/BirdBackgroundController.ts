const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdBackgroundController extends cc.Component {
    start () {
    }

    update (dt) {
      const backgroundList = this.node.children;
      const background1 = backgroundList[0]; 
      const background2 = backgroundList[1]; 

      background1.x -= 36 * dt;
      background2.x -= 36 * dt;

      if (background1.x <= -288) {
        background1.x = background2.x + 288;
      }

      if (background2.x <= -288) {
        background2.x = background1.x + 288;
      }
    }
}
