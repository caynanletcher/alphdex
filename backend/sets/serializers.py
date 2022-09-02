from django.contrib.auth.models import Set
from rest_framework import serializers


class SetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Set
        fields = ['name', 'code']