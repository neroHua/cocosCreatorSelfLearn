const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyManagerController extends cc.Component {

    @property(cc.Prefab)
    enemy: cc.Prefab = null;

    start () {
      this.schedule(() => {
        let enemy = cc.instantiate(this.enemy);
        enemy.setParent(cc.director.getScene());
        enemy.setPosition(new cc.Vec2(Math.random() * 580 + 30, 980));
      }, 0.5);
    }

    // update (dt) {}
}
