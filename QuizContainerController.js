({
    handleQuizStageChange : function(component, event,helper) {
        let stage = event.getParam("stage");
        let quizId = event.getParam("quizId");
        let attempt = event.getParam("attmept");
        let results = event.getParam("results");
        switch(stage) {
            case "QUIZ":
                component.set("v.registerOpen", false);
                component.set("v.quizOpen", true);
                component.set("v.resultsOpen", false);
                helper.loadQuestions(component, event, quizId, attempt);
                break;
            case "RESULTS":
                component.set("v.registerOpen", false);
                component.set("v.quizOpen", false);
                component.set("v.resultsOpen", true);
                component.set("v.results", results);
                break;
            default:
                component.set("v.registerOpen", true);
                component.set("v.quizOpen", false);
                component.set("v.resultsOpen", false);
        }
    }
})
