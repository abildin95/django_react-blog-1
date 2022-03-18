from dataclasses import field
from rest_framework import serializers
from .models import *

class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = '__all__'

# class TableSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Tournament_table
#         fields = '__all__'
        