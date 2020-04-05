var budgetController =  (function () {
    var x = 23;
    var add = function (a) {
       return x+a;
    }

    return {
        publicTest:function (b) {
           return  add(b);
        },
        myname:'Omer'
    }

})();

var UIController = (function () {

})();

var controller = (function (budgetCtrl, UICtrl) {

   var deneme = budgetCtrl.publicTest(120);
   console.log('From controller : '+ deneme);

})(budgetController, UIController);