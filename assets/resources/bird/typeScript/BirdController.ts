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

      // let action = cc.moveTo(2, 200, 200)
      // let action = cc.moveBy(2, 200, 200)
      // let action = cc.rotateTo(2, 100);
      // let action = cc.scaleTo(2, 1.5)
      // let action = cc.jumpTo(2, 200 , 100, 200, 3);
      // let action = cc.blink(2, 3);
      // let action = cc.blink(2, 3);
      // let action = cc.fadeOut(2);
      // let action = cc.fadeIn(2);
      // let action = cc.tintTo(2, 100, 30, 100);
      // let action = cc.delayTime(1);
      // let action = cc.show();
      // let action = cc.hide();
      // let action = cc.toggleVisibility();
      // let action = cc.flipX(true);
      // let action = cc.flipY(true);
      // let action = cc.callFunc(() => {

      // });

      // let action1 = cc.fadeOut(2);
      // let action2 = cc.fadeIn(2);
      // let sequence = cc.sequence(action1, action2);
      // this.node.runAction(sequence);
      // let repeat = cc.repeat(sequence, 3);
      // let repeatForever = cc.repeatForever(sequence);
      // this.node.runAction(repeat);

      // let action1 = cc.tintTo(2, 100, 30, 100);
      // let action2 = cc.moveTo(2, 200, 200)
      // let spawn = cc.spawn(action1, action2);
      // this.node.runAction(spawn);

      // action.setTag(333);
      // this.node.stopAction(action);
      // this.node.pauseAllActions();
      // this.node.resumeAllActions();

      let animation = this.node.getComponent(cc.Animation)
      animation.play();

    }

    update (dt) {
      // this.node.x += 40 * this.direction.x * dt;
      // this.node.y += 40 * this.direction.y * dt;

      // const res = cc.director.getPhysicsManager().rayCast(this.node.position, cc.v2(this.node.x + this.direction.x * 100, this.node.y + this.direction.y * 100), cc.RayCastType.Closest);
      // console.log(res, this.direction.y);

      // if (res.length >= 1) {
      //   this.direction.y *= -1;
      // }
    }

    fly() {
      let rigidBody = this.node.getComponent(cc.RigidBody);
      rigidBody.linearVelocity = cc.v2(0, 300);
    }

    onBeginContact(contact: cc.PhysicsContact, self, other) {
      const contactPointList = contact.getWorldManifold().points;
      const normal = contact.getWorldManifold().normal;
      console.log('开始碰撞', contactPointList, normal);
    }

    onEndContact(contact: cc.PhysicsContact, self, other) {
      console.log('碰撞结束');
    }
    
    customerEvent() {
      console.log("自定义动画中的事件");
    }
}
