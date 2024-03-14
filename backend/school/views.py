from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Exercise, Test, Answers, Class, Teacher
from .serializers import testSerializer, answersSerializer, exerciseSerializer
import json
# Create your views here.

@api_view(['GET'])
def test(request, *args, **kwargs):
    test = Test.objects.all()
    serializer = testSerializer(test, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def exercise(request, *args, **kwargs):
    exercise = Exercise.objects.all()
    serializer = exerciseSerializer(exercise, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def answer(request, *args, **kwargs):
    answer = Answers.objects.all()
    serializer = answersSerializer(answer, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def createTeacher(request, *args, **kwargs):
    if request.method == 'POST':
        body = request.body
        data = json.loads(body)
        first_name = data['first_name']
        last_name = data['last_name']
        name = first_name + ' ' + last_name
        teacher = Teacher.objects.create(name = name)
        teacher.save
        return Response('Teacher created')
    return Response('Error')

@api_view(['POST'])
def createClass(request, *args, **kwargs):
    if request.method == 'POST':
        body = request.body
        data = json.loads(body)
        name = data['name']
        class_teacher = data['class_teacher']
        
        class_ = Class.objects.create(name = name, class_teacher = class_teacher)
        class_.save
        return Response('Class created')

        
        
    return Response('Error')


