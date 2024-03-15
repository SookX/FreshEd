from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('isUser/', views.isUser)
    path('info/', views.getUserCredentials)
    path('save/', views.saveChanges)
]
