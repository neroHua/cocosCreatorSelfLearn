const {ccclass, property} = cc._decorator;

@ccclass
export default class PipeManagerController extends cc.Component {

    @property(cc.Prefab)
    pipeGroup: cc.Prefab = null;

    start () {
      this.schedule(() => {
        let pipeGroup = cc.instantiate(this.pipeGroup);
        cc.director.getScene().insertChild(pipeGroup, 3);
        pipeGroup.setPosition(cc.v2(pipeGroup.x, pipeGroup.y + Math.random() * 40));
      }, 2);
    }

}
