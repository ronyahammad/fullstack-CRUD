from datetime import datetime
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from rest_framework import serializers
from .models import CustomUser,Todo


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email','username', 'last_login', 'date_joined', 'is_staff')


class TodoSerializer(serializers.ModelSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Todo
        fields = ('id','author','title','body','completed',)
