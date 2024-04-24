from rest_framework import serializers

from team.models import Team
from .models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        return data


class UserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=50, required=True)
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=50, required=True)
    lastname = serializers.CharField(max_length=50, required=True)
    password = serializers.CharField(max_length=20, required=False)
    email = serializers.EmailField(required=True)
    isLeader = serializers.BooleanField(required=False)
    # photo = serializers.ImageField()
    team = serializers.PrimaryKeyRelatedField(queryset=Team.objects.all(), required=False)


    def create(self, validated_data):
        instance = User(name=validated_data.get('name'), lastname=validated_data.get('lastname'), password=validated_data.get('password'), email=validated_data.get('email'), isLeader=validated_data.get('isLeader'), team_id=validated_data.get('team_id'))
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.lastname = validated_data.get("lastname")
        # instance.password = validated_data.get("password")
        instance.email = validated_data.get("email")
        # instance.isLeader = validated_data.get("isLeader")
        # instance.photo = validated_data.get("photo")
        # instance.team_id = validated_data.get("team_id")
        instance.save()
        return instance


class UserSerializerModel(serializers.ModelSerializer):
    username = serializers.CharField(max_length=50, required=True)
    name = serializers.CharField(max_length=50, required=True)
    lastname = serializers.CharField(max_length=50, required=True)
    password = serializers.CharField(max_length=20, required=True)
    email = serializers.EmailField()
    isLeader = serializers.BooleanField()
    # photo = serializers.ImageField()
    team_id = serializers.IntegerField()

    class Meta:
        model = User
        fields = ("username", "name", "lastname", "email" )