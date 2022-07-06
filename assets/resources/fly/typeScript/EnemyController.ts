const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyController extends cc.Component {

    start () {

    }

    // update (dt) {}

    die() {
      cc.loader.loadRes("fly/image/enemy_die", cc.SpriteFrame, (error, res) => {
        this.node.getComponent(cc.Sprite).spriteFrame = res;
      })

      setTimeout(() => {
        this.node.destroy();
      }, 300);
    }
}
