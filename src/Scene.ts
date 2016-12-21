class GameScene {


    private static scene: GameScene;
    public static replaceScene(scene: GameScene) {
        GameScene.scene = scene;
    }

    public static getCurrentScene(): GameScene {
        return GameScene.scene;
    }

    public moveTo(x: number, y: number, callback: Function) {
        console.log ("开始移动")
        egret.setTimeout(function () {
            console.log("结束移动")
            callback();
        }, this, 500)
    }

}
