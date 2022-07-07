const {ccclass, property} = cc._decorator;

@ccclass
export default class PipeGroupController extends cc.Component {

    @property
    speed: number = 42;

    start () {

    }

    update (dt) {
      this.node.x -= this.speed * dt;
      for (let node of this.node.children) {
        node.x -= this.speed * dt;
      }

      if (this.node.x < -288) {
        this.node.destroy();

        for (let node of this.node.children) {
          node.destroy();
        }
      }
    }
}
