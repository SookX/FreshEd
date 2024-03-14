from django.urls import path 
from .views import test, exercise, answer

urlpatterns = [
    path('api/test/', test, name = 'test'),
    path('api/exercise/', exercise, name = 'exercise'),
    path('api/answer/', answer, name = 'answer'),
]