({
    init : function (cmp) {
      	//initiate flow
        let flow = cmp.find("quizFlow");
        flow.startFlow("Quiz_Flow");
    },
    openModal : function (cmp, event) {
        cmp.set("v.modalOpen", true);
    },
    
    closeModal : function (cmp, event) {
        cmp.set("v.modalOpen", false);    
    }, 
    
    //parse through flow variables to get actual attempt value.
    handleStatusChange : function (cmp, event) {         
        if (event.getParam('status') === "FINISHED") {
            cmp.set("v.modalOpen", false);
            let qsc = cmp.getEvent("qsc");
            
            //Needs upgrade to add a quiz Id dynamically.
            qsc.setParams({"stage": "QUIZ", "quizId": "a056g00000JUgceAAD"}); 
            qsc.fire();
        }
    }
});
