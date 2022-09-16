import re
from sets.models import Set
from rest_framework import serializers

# SetSerializer cannot be a ModelSerializer or HyperlinkedModelSerializer, as name and code need to be allowed blank 
class SetSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, allow_blank=True, required=False)
    code = serializers.CharField(max_length=20, allow_blank=True, required=False)