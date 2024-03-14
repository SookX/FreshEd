from django.urls import path 
from .views import test, exercise, answer, createClass, createTeacher
from . import views

urlpatterns = [
    path('api/test/', test, name = 'test'),
    path('api/exercise/', exercise, name = 'exercise'),
    path('api/answer/', answer, name = 'answer'),
    path('createClass/', createClass, name = 'createClass'),
    path('createTeacher/', createTeacher, name = 'createTeacher'),
    path('addSchool/', views.addSchool)
]