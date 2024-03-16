from django.shortcuts import render
from .question import answers, load_question
from rest_framework.decorators import api_view
from rest_framework.response import Response
from school.models import Test, Question, Answers, Teacher
import json

load_question()

@api_view(['POST'])
def createTest(request, *args, **kwargs):
    body = request.body
    data = json.loads(body)
    title = data['title']
    theme = data['theme']
    teacher_id = data['teacher_id']
    type = int(data['type'])
    number_of_questions = int(data['number_of_questions'])
    number_of_answers = int(data['number_of_answers'])
    questions = answers(theme, number_of_questions, number_of_answers)
    teacher = Teacher.objects.get(id = teacher_id)
    test = Test(title = title, teacher = teacher)
    test.save()
    for question_prompt in questions:

        question = question_prompt['question']
        question = Question(question = question, test = test)
        question.save()

        answer = question_prompt['answer']
        answer = Answers(type = type, answer = answer, is_True = 1, question = question)
        answer.save()
        for wrong_answ in question_prompt['wrong']:
            wrong_answ = Answers(type = type, answer = wrong_answ, is_True = 0, question = question)
            wrong_answ.save()
    
    
    return Response(status=200)
