
interface Command {

    execute(callback: Function): void;
}

class WalkCommand implements Command {
    private x;
    private y;
    constructor( x:number, y:number){
        this.x = x;
        this.y = y;
    }

    execute(callback: Function): void {
        GameScene.getCurrentScene().moveTo(this.x,this.y,function(){
            callback();
        })

    }
}

class Fight implements Command {


    execute(callback: Function): void {
        console.log("开始战斗")
        egret.setTimeout(function () {
            console.log("结束战斗")
            callback();
        }, this, 500)
    }
}

class Talk implements Command {


    execute(callback: Function): void {
        console.log("开始对话")
        egret.setTimeout(function () {
            console.log("结束对话")
            callback();
        }, this, 500)
    }
}
