
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('billing.urls')),
    path('api/', include('store.urls')),
    path('api/', include('user.urls')),
]
