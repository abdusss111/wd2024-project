from rest_framework import serializers
from folder.models import Folder
from team.models import Team
from .models import User, Task


class TaskSerializer(serializers.Serializer):
    folder = serializers.SlugRelatedField(slug_field='name', required=False, queryset=Folder.objects.all())
    deadline = serializers.DateField(required=True)
    title = serializers.CharField(max_length=50, required=True)
    taskText = serializers.CharField(max_length=1000, required=True)
    created_by = serializers.SlugRelatedField('name', queryset=User.objects.all(), required=True)
    team = serializers.SlugRelatedField('name', queryset=Team.objects.all(), required=False)
    # file = serializers.FileField()

    def create(self, validated_data):
        # Implement the logic to create a new Task object based on validated data
        return Task.objects.create(**validated_data)