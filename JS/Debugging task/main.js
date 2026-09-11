var student ={
    firstName: "Maya",
    course: "Full Stack Development",
    learningTopics: ["objects","functions","this"],
    completedLessons: 3,
    totalLessons: 5,

    getProgressMessage: function(){
        var percentage =(this.completedLessons / this.totalLessons)* 100;
        return this.firstName + " finished " + percentage + " % of the the lessons. ";
    }
};

function getLearningPlan(learner){
    return learner.firstName + " is practicing " + learner.learningTopics.join(",")+ ",";

}

function printMessage(message){
    console.log("MESSAGE:" + message.toUpperCase());
}

function getLearningTraine(trainee){
console.log(getLearningPlan(trainee));  

}

printMessage(getLearningPlan(student));

const getProgressMessage = student.getProgressMessage(); 
console.log(getProgressMessage);

