const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdController extends cc.Component {

    @property
    direction: cc.Vec2 = cc.v2(0, -1)

    onLoad () {
      cc.director.getPhysicsManager().enabled = true;
    }

    start () {
      // let rigidBody: cc.RigidBody = this.node.getComponent(cc.RigidBody);

      // rigidBody.applyForce(cc.v2(5000, 0), cc.v2(0, 0), true)
      // rigidBody.applyForceToCenter(cc.v2(5000, 0), true);

      // rigidBody.linearVelocity = cc.v2(20, 0);
    }

    update (dt) {
      this.node.x += 40 * this.direction.x * dt;
      this.node.y += 40 * this.direction.y * dt;

      const res = cc.director.getPhysicsManager().rayCast(this.node.position, cc.v2(this.node.x + this.direction.x * 100, this.node.y + this.direction.y * 100), cc.RayCastType.Closest);
      console.log(res, this.direction.y);

      if (res.length >= 1) {
        this.direction.y *= -1;
      }
    }

    onBeginContact(contact: cc.PhysicsContact, self, other) {
      const contactPointList = contact.getWorldManifold().points;
      const normal = contact.getWorldManifold().normal;
      console.log('开始碰撞', contactPointList, normal);
    }

    onEndContact(contact: cc.PhysicsContact, self, other) {
      console.log('碰撞结束');
    }
    
}
