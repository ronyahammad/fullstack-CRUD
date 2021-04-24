from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

class CustomUser(AbstractUser):
    def __str__(self):
        return self.email


class Todo(models.Model):
    author = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=500)
    body = models.TextField()
    completed = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        return self.title
