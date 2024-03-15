from django.shortcuts import render
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Exercise, Test, Answers, Class, Teacher, School
from .serializers import CombinedSerializer
import json
# Create your views here.

@api_view(['GET'])
def combined_data(request, *args, **kwargs):
    combined_data = {
        'tests': Test.objects.all(),
        'exercises': Exercise.objects.all(),
        'answers': Answers.objects.all()
    }
    serializer = CombinedSerializer(combined_data)
    return Response(serializer.data)

@api_view(['POST'])
def addSchool(request, *args, **kwargs):
    if request.method == "POST":
        body = request.body
        data = json.loads(body)
        name = data['name']
        try:
            school = School(name = name)
            School.save(school)
            return Response(data = {"message": "The school was added successfully"}, status=201)
        except:
            return Response(status=400)


@api_view(['POST'])
def createTeacher(request, *args, **kwargs):
    if request.method == 'POST':
        body = request.body
        data = json.loads(body)
        email = data['email']
        first_name = data['first_name']
        last_name = data['last_name']
        teacher = Teacher.objects.create(first_name = first_name, last_name = last_name)
        teacher.save()
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


