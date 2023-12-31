from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'phone_number', 'password')
        extra_kwargs = {'password': {'write_only': True}}