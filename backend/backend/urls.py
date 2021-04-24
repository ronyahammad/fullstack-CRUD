from django.contrib import admin
from django.urls import path,include
from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view

schema_view = get_schema_view(title='Tasks API')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('todos.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
    path('docs/', include_docs_urls(title='Tasks API')),
    path('schema/', schema_view),
]
