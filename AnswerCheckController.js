({
    init : function(component, event, helper) {
        let ca = component.get("v.correctAnswer");
        let aa = component.get("v.actualAnswer");
        if (ca === aa) {
            component.set("v.correct", true);
        } else {
            component.set("v.correct", false);
        }
    }
})
