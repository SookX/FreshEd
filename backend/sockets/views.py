from django.shortcuts import render
from rest_framework.decorators import api_view
from school.models import Log, Student, Test
import json

@api_view(['POST'])
def addLog(request, *args, **kwargs):
    if request.method == 'POST':
        body = request.body
        data = json.loads(body)
        student_id = data['student_id']
        test_id = data['test_id']
        student = Student.objects.filter(student_id = student_id).first()
        test = Test.objects.filter(test_id = test_id).first()

