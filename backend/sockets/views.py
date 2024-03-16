from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from school.models import Log, Student, Test
import json

@api_view(['POST'])
def addLog(request, *args, **kwargs):
    if request.method == 'POST':
        body = request.body
        data = json.loads(body)
        student_id = data['student_id']
        test_id = data['test_id']
        student = Student.objects.filter(id = student_id).first()
        test = Test.objects.filter(id = test_id).first()
        log = Log(user = student, test = test)
        log.save()
        return Response(status=201)

