const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyController extends cc.Component {

    start () {

    }

    // update (dt) {}

    die() {
      this.node.destroy();
    }
}
