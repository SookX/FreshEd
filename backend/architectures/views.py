from django.shortcuts import render
from .question import answers, load_question
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json

load_question()

@api_view(['POST'])
def createTest(request, *args, **kwargs):
    body = request.body
    data = json.loads(body)
    theme = data['theme']
    number_of_questions = int(data['number_of_questions'])
    number_of_answers = int(data['number_of_answers'])
    questions = answers(theme, number_of_questions, number_of_answers)
    print(questions)
    return Response(status=200)
