
const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {

  @property(cc.Prefab)
  bullet: cc.Prefab = null;

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
  }

  update(deltaTime: number) {
      
  }

  onCollisionEnter(other) {
    if (other.tag == 1) {
      cc.loader.loadRes("fly/image/hero_die", cc.SpriteFrame, (error, res) => {
        this.node.getComponent(cc.Sprite).spriteFrame = res;
      });
    }

    setTimeout(() => {
      this.node.destroy();
    }, 300);
  }

}
