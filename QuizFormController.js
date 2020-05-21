({
    handleAnswerSelected : function(component, event, helper) {
        let answerSelected = event.getParam("answerSelected");
        let questions = component.get("v.questions");
        
        questions.forEach(attachAnswer);
        function attachAnswer(q) {
            if (q.Id === answerSelected.id){
                q.answerSelected = answerSelected.answer;
                if(answerSelected.answer.trim() === q.Correct_Answer__c.trim()){
                    q.correct = true;
                } else {
                    q.correct = false;
                }
            }
        }
        
        component.set("v.results", questions);
    },
    handleQuestionsPerScreenChange : function(component, event, helper) {
        let qps = event.getParam("value");
        component.set("v.questionsPerScreen", qps);
        
    },
    handleNext : function(component, event, helper) {
        let qps = component.get("v.questionsPerScreen");
        component.set("v.questionsPerScreen", qps * 2);
    },
    handleQuizSubmit : function(component, event, helper) {
        const qsc = component.getEvent("qsc");
        const results = component.get("v.results");
        const questions = component.get("v.questions");
        let submissionValid = true;
        if (results.length == 0){
            submissionValid = false;
        }
        results.forEach(varifyNotNull);
        function varifyNotNull(result) {
            if (result.answerSelected === undefined){
                submissionValid = false;
            }
        }
        
        if(submissionValid === true){
            qsc.setParams({"stage": "RESULTS", "results": results});
            qsc.fire();
            component.set("v.errorMessage", false);
        } else{
            questions.forEach(markRequired);
            function markRequired(question) {
                if (question.answerSelected === undefined){
                    question.required = true;
                }
            }
            component.set("v.questions", questions);
            component.set("v.errorMessage", true);
        }
    }
})
