/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global Backbone */

var UserModel = Backbone.Model.extend({
    initialize : function(){
        alert("User has been init!");
    }
});

var u1 = new UserModel({fname:"Phuc", age : 30});
alert(u1.fname);
u1.save()
