from django.urls import path
from .views import UserListView, TodoList, TodoDetail

urlpatterns = [
    path('', UserListView.as_view()),
    path('todo/<int:pk>/', TodoDetail.as_view()),
    path('todo/', TodoList.as_view()),
]
