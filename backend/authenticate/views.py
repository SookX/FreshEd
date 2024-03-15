import json
import mimetypes
from django.contrib.auth.hashers import check_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from user_profile.models import UserAccount
from base64 import b64encode


@api_view(['POST', 'GET'])
def isUser(request, *args, **kwargs):
    body = request.body
    data = json.loads(body)
    email = data['email']
    first_name = data['first_name']
    last_name = data['last_name']
    role = data['role']
    password = data['password']
    try:
        user = UserAccount.objects.get(email=email)
    except UserAccount.DoesNotExist:
        return Response(data={"message": "This account doesn't exist."}, status=404)
    if check_password(password, user.password):
        return Response(data = {"id": str(user.id)}, status=200)
    else:
        return Response(data = {"message": "Wrong password."}, status=404)
    
    
@api_view(['GET'])
def getUserCredentials(request, *args, **kwargs):
    if request.method == "GET":
        id = int(request.GET.get('id'))
        try:
            user = UserAccount.objects.filter(id=id).first()
            user_data = {
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "profile_picture": None
            }
            if user.profile_picture:
                content_type, _ = mimetypes.guess_type(user.profile_picture.name)
                with user.profile_picture.open('rb') as image_file:
                    encoded_string = b64encode(image_file.read()).decode('utf-8')
                    data_uri = f"data:{content_type};base64,{encoded_string}"
                    user_data["profile_picture"] = data_uri
            return Response(data={"data": user_data}, status=200)
        except:
            return Response(data={"Message": "There is no such account"}, status=404)


@api_view(['PUT', 'POST', 'GET'])
def saveChanges(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            user_id = request.POST.get('userId')
            username = request.POST.get('newUsername')
            new_profile_picture_blob = request.FILES.get('newProfilePicture')
            message = {}

            user = UserAccount.objects.filter(id=user_id).first()
            if new_profile_picture_blob:
                if user.profile_picture != new_profile_picture_blob:
                    user.profile_picture.delete(save=False)
                    user.profile_picture = new_profile_picture_blob
                    user.save()

                message['image'] = "Image saved successfully"
            if username:
                user.username = username
                user.save()
                message['username'] = "Username saved successfully"

            return Response(data=message, status=201)
        except:
            return Response(status=404)