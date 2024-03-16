from django.urls import path 
from .views import createClass, createTeacher
from . import views
from school.views import testView, answer_isCorrect

urlpatterns = [
    path('createSchool/', views.addSchool),
    path('createSubject/', views.addSubject),
    path('createTeacher/', createTeacher, name = 'createTeacher'),
    path('createClass/', createClass, name = 'createClass'),
    path('createStudent/', views.createStudent, name = 'createStudent'),
    path('addGrade/', views.addGrade),
    path('api/testView/', testView, name = 'testView'),
    path('api/answer_isCorrect/', answer_isCorrect, name = 'answer_isCorrect')
]