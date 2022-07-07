const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdBackgroundController extends cc.Component {

    @property
    speed: number = 36;

    @property
    width: number = 288;

    start () {
    }

    update (dt) {
      const backgroundList = this.node.children;
      const background1 = backgroundList[0]; 
      const background2 = backgroundList[1]; 

      background1.x -= this.speed * dt;
      background2.x -= this.speed * dt;

      if (background1.x <= -this.width) {
        background1.x = background2.x + this.width;
      }

      if (background2.x <= -this.width) {
        background2.x = background1.x + this.width;
      }
    }
}
