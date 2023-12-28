const cart= ["shoes","pant","kurta"];

api.createOrder(cart,function(){

    api.proccedToPayment(function(){

        api.updateWalet(function(){
            
            viewOrderSummary();
        })
    });
});
