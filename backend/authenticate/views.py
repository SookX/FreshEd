import json
import mimetypes
from django.contrib.auth.hashers import check_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpRequest 
from user_profile.models import UserAccount
from base64 import b64encode
import mimetypes
from school.models import Student, Teacher, School, Grade, Class

def getClassName(class_instance):
    return class_instance.name


def getPhoto(id):
    user = UserAccount.objects.filter(id = id).first()
    content_type, _ = mimetypes.guess_type(user.profile_picture.name)
    with user.profile_picture.open('rb') as image_file:
        encoded_string = b64encode(image_file.read()).decode('utf-8')
        data_uri = f"data:{content_type};base64,{encoded_string}"
        return data_uri

def getGrades(student_id):
    student = Student.objects.get(id=student_id)
    grades = Grade.objects.filter(holder=student)

    grades_list = []
    for grade in grades:
        grade_info = {
            'id': grade.id,
            'subject': grade.subject.name,  
            'grade': grade.grade,
            'comment': grade.comment
        }
        grades_list.append(grade_info)

    return grades_list
    

@api_view(['POST', 'GET'])
def login(request, *args, **kwargs):
    body = request.body
    data = json.loads(body)
    email = data['email']
    password = data['password']
    try:
        user = UserAccount.objects.get(email=email)
    except UserAccount.DoesNotExist:
        return Response(data={"message": "This account doesn't exist."}, status=404)
    if check_password(password, user.password):
        return Response(data = {"id": str(user.id)}, status=200)
    else:
        return Response(data = {"message": "Wrong password."}, status=404)

@api_view(['POST', 'GET'])
def isUser(request, *args, **kwargs):
    if request.method == "POST":
        body = request.body
        data = json.loads(body)
        
        id = data['id']
        user = UserAccount.objects.filter(id=id).first()
        if user:
            role = user.role
            if role == 0:
                student = Student.objects.filter(email=user.email).first()
                if student:
                    school_class_instance = student.school_class
                    class_name = getClassName(school_class_instance) if school_class_instance else None
                    data = {
                        'role': role,
                        'first_name': student.first_name,
                        'last_name': student.last_name,
                        'email': student.email,
                        'class_name': class_name,
                        'grades': getGrades(student.id),
                    }
                    print(data)
                    return Response(data=data, status=200)
            if role == 1:
                teacher = Teacher.objects.filter(email=user.email).first()
                subject_instance = teacher.subject
                class_name = getClassName(subject_instance) if subject_instance else None

                school_instance = teacher.school
                school_name = getClassName(school_instance) if school_instance else None
                if teacher:
                    data = {
                        'role': role,
                        'first_name': teacher.first_name,
                        'last_name': teacher.last_name,
                        'email': teacher.email,
                        'subject': class_name,
                        'school_name': school_name
        
                    }
                    return Response(data=data, status=200)
                else:
                    return Response(status=400)
#api_view(['GET'])
#ef getUserCredentials(request, *args, **kwargs):
#   if request.method == "GET":
#       id = int(request.GET.get('id'))
#       try:
#           user = UserAccount.objects.filter(id=id).first()
#           user_data = {
#               "email": user.email,
#               "first_name": user.first_name,
#               "last_name": user.last_name,
#               "profile_picture": None
#           }
#           if user.profile_picture:
#               content_type, _ = mimetypes.guess_type(user.profile_picture.name)
#               with user.profile_picture.open('rb') as image_file:
#                   encoded_string = b64encode(image_file.read()).decode('utf-8')
#                   data_uri = f"data:{content_type};base64,{encoded_string}"
#                   user_data["profile_picture"] = data_uri
#           return Response(data={"data": user_data}, status=200)
#       except:
#           return Response(data={"Message": "There is no such account"}, status=404)
#
#
#api_view(['PUT', 'POST', 'GET'])
#ef saveChanges(request, *args, **kwargs):
#   if request.method == 'POST':
#       try:
#           user_id = request.POST.get('userId')
#           username = request.POST.get('newUsername')
#           new_profile_picture_blob = request.FILES.get('newProfilePicture')
#           message = {}
#
#           user = UserAccount.objects.filter(id=user_id).first()
#           if new_profile_picture_blob:
#               if user.profile_picture != new_profile_picture_blob:
#                   user.profile_picture.delete(save=False)
#                   user.profile_picture = new_profile_picture_blob
#                   user.save()
#
#               message['image'] = "Image saved successfully"
#           if username:
#               user.username = username
#               user.save()
#               message['username'] = "Username saved successfully"
#
#           return Response(data=message, status=201)
#       except:
#           return Response(status=404)