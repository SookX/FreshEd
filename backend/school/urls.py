from django.urls import path 
from .views import createClass, createTeacher
from . import views

urlpatterns = [
    path('createSchool/', views.addSchool),
    path('createSubject/', views.addSubject),
    path('createTeacher/', createTeacher, name = 'createTeacher'),
    path('createClass/', createClass, name = 'createClass'),
    path('createStudent/', views.createStudent, name = 'createStudent'),
    path('addGrade/', views.addGrade),

]