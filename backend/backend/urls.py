from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("authenticate/", include('authenticate.urls')),
    path("school/", include('school.urls')),
    path('architectures/', include('architectures.urls')),
    path('sockets/', include('sockets.urls'))
]
