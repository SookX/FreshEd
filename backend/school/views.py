from django.shortcuts import render
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Exercise, Test, Answers, School
from .serializers import testSerializer, answersSerializer, exerciseSerializer
# Create your views here.

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



@api_view(['GET'])
def combined_data(request, *args, **kwargs):
    combined_data = {
        'tests': Test.objects.all(),
        'exercises': Exercise.objects.all(),
        'answers': Answers.objects.all()
    }
    serializer = CombinedSerializer(combined_data)
    return Response(serializer.data)
