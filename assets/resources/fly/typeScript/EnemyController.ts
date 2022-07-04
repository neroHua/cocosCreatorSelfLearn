import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Enemy')
export default class EnemyController extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    die() {
      this.node.destroy();
    }
}

