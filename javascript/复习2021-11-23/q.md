享元模式 
内部状态 uploadType -> Upload(uploadType)
外部状态fileName,fileSize由状态管理器统一管理 uploadManager
工厂创建实例对象 CreateFactory
职责链模式
注意this.successor.passRequest.apply(this.successor)
this.successor && this.successor.passRequest.apply(this.successor, arguments)