const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdController extends cc.Component {

    onLoad () {
      cc.director.getPhysicsManager().enabled = true;
    }

    start () {
      let rigidBody: cc.RigidBody = this.node.getComponent(cc.RigidBody);

      // rigidBody.applyForce(cc.v2(5000, 0), cc.v2(0, 0), true)
      // rigidBody.applyForceToCenter(cc.v2(5000, 0), true);

      rigidBody.linearVelocity = cc.v2(20, 0);
    }

    // update (dt) {}

    onBeginContact(contact: cc.PhysicsContact, self, other) {
      const contactPointList = contact.getWorldManifold().points;
      const normal = contact.getWorldManifold().normal;
      console.log('开始碰撞', contactPointList, normal);
    }

    onEndContact(contact: cc.PhysicsContact, self, other) {
      console.log('碰撞结束');
    }
    
}
