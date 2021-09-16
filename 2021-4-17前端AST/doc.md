AST(Abstract Syntax Tree)抽象语法树，是源代码结构的一种抽象表示，它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构
项目工程化里工具babel，ES6到ES5
运用广泛，比如 
高级语言的编译，机器码的生成
网站：astexporer.net 对代码结构的描述，已对象的形式生成新的代码，从源码生成结构在由结构生成源码的过程

AST转化流程 （包含嵌套结构）
解析过程分为两步：
## 1.分词（扁平化处理） 把所有的词语分解 按空格或者一些换行符将代码进行分词，为后续生成AST结构更简单
将整个代码字符串分割成最小语法单元数组（编译是字符串到字符串的过程）
## 2.语法分析 对分词的结果进行转化和输出，最后生成AST结构
在分词的基础上建立分析语法单元之间的关系
每个关键字是一个Token,每个标识符是一个Token,每个操作符是一个Token,每个标点符号也都是一个Token，除此之外，会过滤掉源程序中的注释和空白字符（换行符，空格，制表符等）

修改内容，找到对应值修改比较麻烦，使用另一种形式，babel使用的一种形式
定义一个transformer的函数,接收一个老的ast,生成一个新的ast
function transformer(ast){
    let newAst = {
        type:'Program',
        body:[]
    }
    //定义一些内部变量
    ast_context = newAst.body;
    DFS(ast,{
        //设置给ast修改的参数
        NumberLiteral:{
            //执行修改，定义生命周期
            enter(node,parent){
                parent._context.push({
                    type:'NumberLiteral',
                    value:node.value
                })
            }
        },
        CallExpression:{
            enter(node,parent){
                let expression = {
                    type:'CallExpression',
                    callee:{
                        type:'Indentifier',
                        name:node.name
                    },
                    arguments:[],
                };
                node._context = expression.arguments
                if(parent.type !== 'CallExpression'){
                    expression = {
                        type:'ExpressionStatement',
                        expression:expression
                    }
                }
                parent._context.push(expression)
            }
        }
    });
    return newAst;
}
做DFS的处理 深度优先遍历ast,还有一个针对不同类型的回调 visitor
function DFS(ast,visitor){

function tranversArray(children,parent){
    children.forEach(child=>tranversNode(child,parent))
}

//处理递归
   function tranversNode(node,parent){
       //判断是否有修改参数
       let methods =  visitor(node.type)
       if(methods && methods.enter){
           methods.enter(node,parent)
       }
       switch(node.type){
           case 'Program':
           tranversArray(node.body,node)
           break;
           case 'CallExpression':
           tranversArray(node.params,node)
           break;
           case 'NumberLiteral':
           break; 
       }
       if(methods && methods.exit){
           methods.exit(node,parent )
       }
   }
   return tranversNode(ast,null)
}

function parser(ast){

}