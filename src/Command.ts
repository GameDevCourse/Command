
interface Command {

    execute(callback: Function): void;

    cancel(callback: Function): void;

}

class WalkCommand implements Command {
    private x;
    private y;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    execute(callback: Function): void {
        GameScene.getCurrentScene().moveTo(this.x, this.y, function () {
            callback();
        })
    }

    cancel(callback: Function) {
        GameScene.getCurrentScene().stopMove(function () {
            callback();
        })
    }
}

class FightCommand implements Command {
    /**
     * 所有的 Command 都需要有这个标记，应该如何封装处理这个问题呢？
     */
    private _hasBeenCancelled = false;

    execute(callback: Function): void {

        console.log("开始战斗")
        egret.setTimeout(() => {
            if (!this._hasBeenCancelled) {
                console.log("结束战斗")
                callback();
            }
        }, this, 500)
    }

    cancel(callback: Function) {
        console.log("脱离战斗")
        this._hasBeenCancelled = true;
        egret.setTimeout(function () {
            callback();
        }, this, 100)

    }
}

class TalkCommand implements Command {


    execute(callback: Function): void {
        console.log("打开对话框")
        egret.setTimeout(function () {
            console.log("结束对话")
            callback();
        }, this, 500)
    }

    cancel(callback: Function) {
        console.log("关闭对话框");
    }
}
