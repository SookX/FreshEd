from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Exercise, Test, Answers
from .serializers import testSerializer, answersSerializer, exerciseSerializer
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



