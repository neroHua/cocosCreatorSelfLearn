import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BackgroundController')
export class BackgroundController extends Component {
    start() {

    }

    update(deltaTime: number) {
        for (let children of this.node.children) {
            children.setPosition(new Vec3(children.position.x, children.position.y - 50 * deltaTime, children.position.z));
            if (children.position.y <= -240) {
                children.setPosition(new Vec3(children.position.x, 0, children.position.z));
            }
        }
    }
}

