
const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {

  @property(cc.Prefab)
  bullet: cc.Prefab = null;

  shootingMusic: number;

  start() {
    this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
      this.node.setPosition(event.getLocation());
    });

    this.schedule(() => {
      let bullet = cc.instantiate(this.bullet);
      bullet.setParent(cc.director.getScene());
      bullet.setPosition(new cc.Vec2(this.node.x, this.node.y + 85));
    }, 0.5);

    cc.director.getCollisionManager().enabled = true;

    cc.loader.loadRes("fly/audio/background", cc.AudioClip, (res, audioClip) => {
      let background: number = cc.audioEngine.playMusic(audioClip, true);
    });

    cc.loader.loadRes("fly/audio/shooting", cc.AudioClip, (res, audioClip) => {
      this.shootingMusic = cc.audioEngine.playEffect(audioClip, true);
    });

  }

  update(deltaTime: number) {
      
  }

  onCollisionEnter(other) {
    if (other.tag == 1) {
      cc.audioEngine.stopEffect(this.shootingMusic)

      cc.loader.loadRes("fly/image/hero_die", cc.SpriteFrame, (error, res) => {
        this.node.getComponent(cc.Sprite).spriteFrame = res;
      });

      cc.loader.loadRes("fly/audio/explode", cc.AudioClip, (res, audioClip) => {
        let explode: number = cc.audioEngine.playEffect(audioClip, false);
      });
    }

    setTimeout(() => {
      this.node.destroy();
    }, 300);
  }

}
