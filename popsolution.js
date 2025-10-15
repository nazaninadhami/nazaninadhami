//change 5 to the total number of questions
var total=5
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What does LMS stand for?"
choice1[1]="Learning Metrics Suite"
choice1[2]="Learning Media Server"
choice1[3]="Learning Management System"
choice1[4]="Learner Monitoring Service"

question[2]="A flipped classroom means students…"
choice2[1]="Take exams at home and lectures in class"
choice2[2]="Watch lectures at home and do activities in class"
choice2[3]="Learn only with mobile apps"
choice2[4]="Work without a teacher"

question[3]="Which tool is famous for live, gamified quizzes in class?"
choice3[1]="Kahoot!"
choice3[2]="Zotero"
choice3[3]="SPSS"
choice3[4]="LaTeX"

question[4]="In Bloom’s Revised Taxonomy, the highest cognitive level is…"
choice4[1]="Analyze"
choice4[2]="Evaluate"
choice4[3]="Understand"
choice4[4]="Create"

question[5]="SCORM is mainly used to…"
choice5[1]="Protect student data"
choice5[2]="Grade essays automatically"
choice5[3]="Package/track e-learning content in an LMS"
choice5[4]="Make videos searchable"

question[6]="The Modality Principle (from multimedia learning) suggests learners benefit most from…"
choice6[1]="Text + background music"
choice6[2]="Graphics + spoken narration"
choice6[3]="Text + text captions"
choice6[4]="Graphics + ambient noise"

question[7]="MOOC stands for…"
choice7[1]="Massive Open Online Course"
choice7[2]="Modular Online Open Curriculum"
choice7[3]="Managed Open Online Class"
choice7[4]="Multi-Organizational Online Course"

question[8]="Universal Design for Learning (UDL) encourages…"
choice8[1]="Multiple means of engagement"
choice8[2]="Multiple means of representation"
choice8[3]="Multiple means of action/expression"
choice8[4]="All of the above"

question[9]="In EdTech research, eye-tracking primarily measures…"
choice9[1]="Heart rate"
choice9[2]="Where and how long learners look on screen"
choice9[3]="Typing accuracy"
choice9[4]="Audio volume"

question[10]="H5P is best known for…"
choice10[1]="Managing enrollments"
choice10[2]="Hosting webinars"
choice10[3]="Creating interactive content (e.g., quizzes, interactive video)"
choice10[4]="Recording podcasts"




solution[1]="c"
solution[2]="b"
solution[3]="a"
solution[4]="d"
solution[5]="c"
solution[6]="b"
solution[7]="a"
solution[8]="d"
solution[9]="b"
solution[10]="c"
