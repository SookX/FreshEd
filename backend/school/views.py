from django.shortcuts import render
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Exercise, Test, Answers, Class, Teacher, School, Subject, Student, Grade
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
def addSubject(request, *args, **kwargs):
    if request.method == "POST":
        body = request.body
        data = json.loads(body)
        name = data['name']
        description = data['description']
        school = data['school']
        school = School.objects.get(name = school)
        try:
            subject = Subject(name = name, description = description, school = school)
            Subject.save(subject)
            return Response(data = {"message": "The subject was added successfully"}, status=201)
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
        subject = data['subject']
        school = data['school']
        school = School.objects.get(name = school)
        subject = Subject.objects.get(name = subject)
        try:
            teacher = Teacher(email = email, first_name = first_name, last_name = last_name, subject = subject, school = school)
            Teacher.save(teacher)
            return Response(data = {"message": "The teacher was added successfully"}, status=201)
        except:
            return Response(status=400)

@api_view(['POST'])
def createClass(request, *args, **kwargs):
    if request.method == 'POST':
        body = request.body
        data = json.loads(body)
        name = data['name']
        school = data['school']
        school = School.objects.get(name = school)
        try:
            class_ = Class(name = name, school = school)
            Class.save(class_)
            return Response(data = {"message": "The class was added successfully"}, status=201)
        except:
            return Response(status=400)

@api_view(['POST'])
def createStudent(request, *args, **kwargs):
    if request.method == 'POST':
        body = request.body
        data = json.loads(body)
        email = data['email']
        first_name = data['first_name']
        last_name = data['last_name']
        school_class = data['school_class']
        school_class = Class.objects.get(name = school_class)
        student_id = data['student_id']
        student = Student.objects.get(id = student_id)
        try:
            student = Student(email = email, first_name = first_name, last_name = last_name, school_class = school_class, student = student)
            Student.save(student)
            return Response(data = {"message": "The student was added successfully"}, status=201)
        except:
            return Response(status=400)


@api_view(['POST'])
def addGrade(request, *args, **kwargs):
    if request.method == "POST":
        body = request.body
        data = json.loads(body)
        type = str(data['type']).upper()
        comment = data['comment']
        grade = data['grade']
        subject = data['subject']
        subject = Subject.objects.get(name = subject)
        
        grade = Grade(type = type, 
                      comment = comment,
                      grade = grade,
                      subject = subject)
        grade.save()
        return Response(data = {"message": 
                                "The grade was successfully added"}, status=201)

        