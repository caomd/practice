//大O表示法
分析算法时，常遇到的几类函数
符号                    名称
O(1)                   常数的
O(log(n))              对数的
O((log(n))c)           对数多项式的
O(n)                   线性的
O(n2)                  二次的
O(nc)                  多项式的
O(cn)                  指数的

12.1.2 时间复杂度比较
1.数据结构                 一般情况                     最差情况
                    插入   删除    搜索           插入   删除    搜索                 
数组/栈/队列         O(1)   O(1)    O(n)          O(1)   O(1)    O(n)
链表                O(1)   O(1)    O(n)          O(1)   O(1)    O(n) 
双向链表             O(1)   O(1)    O(n)          O(1)   O(1)    O(n) 
散列表              O(1)   O(1)    O(1)           O(n)   O(n)    O(n) 
二分搜索树          O(logn)  O(logn)  O(logn)      O(n)   O(n)    O(n) 
AVL树              O(logn)  O(logn)  O(logn)     O(logn)  O(logn)  O(logn)

2.图
节点/边的管理方式    存储空间        增加顶点        增加边    删除顶点      删除边    轮询 
邻接表              O(|V|+|E|)      O(1)         O(1)   O(|V|+|E|)     O(|E|)   O(|V|)
邻接矩阵            O(|V|^2)        O(|V|^2)     O(1)    O(|V|^2)     O(1)      O(1) 

3.排序算法
算法（用于数组）                      时间复杂度
                 最好情况       一般情况        最差情况
冒泡排序            O(n)           O(n2)         O(n2)
选择排序            O(n^2)         O(n^2)       O(n^2)
插入排序            O(n^2)         O(n^2)       O(n^2)
归并排序            O(nlog(n))     O(nlog(n))   O(nlog(n)) 
快速排序            O(nlog(n))     O(nlog(n))   O(n^2)
堆排序             O(nlog(n))      O(nlog(n))  O(nlog(n)) 
桶排序             O(n+k)           O(n+k)      O(n^2)
基数排序            O(nk)           O(nk)       O(nk)

4.搜索算法
算法                数据结构            最差情况
顺序搜索            数组                 O(n)
二分搜索            已排序的数组          O(log(n))
深度优先搜索(DPS)    顶点数为|V|,边数为|E|的图    O(|V|+|E|)