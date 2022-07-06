const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyController extends cc.Component {

    @property
    dead: boolean = false;

    start () {

    }

    update (dt) {
      if (this.dead) {
        return;
      }
      if (this.node.y <= 0) {
        this.node.destroy();
      }

      this.node.y -= 300 * dt;
    }

    die() {
      this.dead = true;

      cc.loader.loadRes("fly/image/enemy_die", cc.SpriteFrame, (error, res) => {
        this.node.getComponent(cc.Sprite).spriteFrame = res;
      })

      cc.loader.loadRes("fly/audio/explode", cc.AudioClip, (res, audioClip) => {
        let explode: number = cc.audioEngine.playEffect(audioClip, false);
      });

      setTimeout(() => {
        this.node.destroy();
      }, 300);
    }
}
