from django.urls import path 
from .views import createClass, createTeacher
from . import views

urlpatterns = [
    path('createClass/', createClass, name = 'createClass'),
    path('createTeacher/', createTeacher, name = 'createTeacher'),
    path('addSchool/', views.addSchool)
]