functon Componet对比class Comment 没有this对象
unMount解除事件绑定，return一个方法，就是解除绑定
，有任何更新都会把之前的状态全部消除。
返回新的状态。传空数组就是只执行一次，跳出的时候就会执行unbind.
    useEffect(() => {
        console.log('component update')
        return () => v{
            console.log('unbind')
        };
    });