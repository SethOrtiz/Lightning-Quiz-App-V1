({
    loadQuestions : function(component, event, quizId, attempt) {
        const action = component.get("c.getQuestions");
        if(quizId !== null && attempt !== null){
            action.setParams({"quizId": `${quizId}`,
                             "attempt": `${attempt}`});
            
            action.setCallback(this, function(response) {
                const state = response.getState();
                switch(state) {
                    case "SUCCESS":
                        let questions = response.getReturnValue();
                        for(let i = 0; i < questions.length; i++){
                            let questionId = `${questions[i].Id}`;
                            let opList = questions[i].Options__c.split("```");
                            let optArr = [];
                            for(let j = 0; j < opList.length; j++){
                                let formattedOpt = {"label": opList[j],"value": opList[j]};
                                optArr.push(formattedOpt);  
                            }
                            questions[i].Options__c = optArr;
                            questions[i].Id = questionId; 
                        }
                        component.set("v.questions", questions);
                        break;
                        
                    case "INCOMPLETE":
                        console.log('Incomplete');
                        alert("INCOMPLETE");
                        break;
                        
                    case "ERROR":
                        console.log(response.getError());
                        alert("ERROR" + response.getError());
                        break;
                }
            });
            $A.enqueueAction(action);
        } else {
            console.log('Quiz and Attempt are not specified');
        }
    }
})
