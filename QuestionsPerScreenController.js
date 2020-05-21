({
    handleChange : function(component, event, helper) {
        let changeValue = event.getParam("value");
        let qpsc = component.getEvent("qpsc");
        qpsc.setParams({"value": changeValue}); 
        qpsc.fire();
    }
})
