from rest_framework.generics import ListAPIView
from rest_framework import generics, serializers
from rest_framework.permissions import IsAdminUser

from .models import Todo,CustomUser
from .serializers import TodoSerializer, UserSerializer
from .permissions import IsAuthorOrReadOnly


class UserListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]


class TodoList(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    model=Todo,CustomUser
    queryset = Todo.objects.all()
    def get_queryset(self):
        todo = self.queryset.filter(author=self.request.user)
        return todo

    
class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
