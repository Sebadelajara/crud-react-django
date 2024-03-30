
from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task  # nombre
        # field = ('id', 'title', 'description', 'done')
        fields = '__all__'  # añade todos los campos
