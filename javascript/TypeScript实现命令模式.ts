interface Command {
    execute: Function
}
class RefreshMenuBarCommand implements Command {
    constructor() { }
    execute() {
        console.log('刷新菜单界面');
    }
}
class AddSubMenuCommand implements Command {
    constructor() {
    }
    execute() {
        console.log('增加子菜单');
    }
}
class DelSubMenuCommand implements Command {
    constructor() { }
    execute() {
        console.log('删除子菜单');
    }
}
var refreshMenuBarCommand = new RefreshMenuBarCommand(),
    addSubMenuCommand = new AddSubMenuCommand(),
    delSubMenuCommand = new DelSubMenuCommand();

refreshMenuBarCommand.execute();
addSubMenuCommand.execute();
delSubMenuCommand.execute();




