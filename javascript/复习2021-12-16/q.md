/*
 * @Author: caomd 
 * @Date: 2021-12-16 09:17:25 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 09:21:17
 */
 *************Chapter 4 Inherit
 the best approach to inherit 
 create a new object with the same structure and defaults as the original
 clone function clone just is object copy version and will changes the values influence clone object
 var clone = function(object){
     var F = function(){}
     F.prototype = object
     return new F
 }