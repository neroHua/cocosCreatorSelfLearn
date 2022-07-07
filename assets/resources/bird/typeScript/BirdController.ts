const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdController extends cc.Component {

    @property
    direction: cc.Vec2 = cc.v2(0, -1)

    onLoad () {
      cc.director.getPhysicsManager().enabled = true;
    }

    start () {
      // let animation = this.node.getComponent(cc.Animation)
      // animation.play();
    }

    update (dt) {
    }

    fly() {
      let rigidBody = this.node.getComponent(cc.RigidBody);
      rigidBody.linearVelocity = cc.v2(0, 150);
    }


    onBeginContact(contact: cc.PhysicsContact, self, other) {
      console.log('开始碰撞');
      if (other.tag == 11) {
        console.log('碰撞地面');
      }
      if (other.tag == 12) {
        console.log('碰撞上管道');
      }
      if (other.tag == 13) {
        console.log('碰撞下管道');
      }
      if (other.tag == 14) {
        console.log('通过管道标识');
      }
    }

    onEndContact(contact: cc.PhysicsContact, self, other) {
      console.log('碰撞结束');
    }
    
}
