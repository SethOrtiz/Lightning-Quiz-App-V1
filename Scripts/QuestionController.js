({
    handleChange : function(component, event, helper) {
        let changeValue = event.getParam("value");
        let as = component.getEvent("as");
        let questionId = component.get("v.questionId");
        as.setParams({"answerSelected":{"answer" : changeValue, "id": questionId}}); 
        as.fire();
    }
})
