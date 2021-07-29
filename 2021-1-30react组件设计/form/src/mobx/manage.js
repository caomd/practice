let isCollect = false
let nowObservable = null
const dependenceManager = {
    _store:{},
    beginCollect(observable){
        isCollect=true
        nowObservable = observable
    },
    addNowObserver(Id){
        this._store[Id] = this._store[Id] || {}
        this._store[Id].watchers = this._store[Id].watchers || []
        this._store[Id].watchers.push(nowObservable)
    },
    collect(Id){
        if(nowObservable){
            this.addNowObserver(Id)
        }
    },
    endCollect(){
        isCollect=false
        nowObservable=null
    },
    trigger(Id){
        let ds = this._store[Id]
        if(ds && ds.watchers){
            ds.watchers.forEach(d=>{
                d && d()
            })
        }
    }
}

export default dependenceManager