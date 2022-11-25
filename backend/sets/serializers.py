from sets.models import Set
from rest_framework import serializers

# SetSerializer cannot be a ModelSerializer or HyperlinkedModelSerializer, as name and code need to be allowed blank 
class SetSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, allow_blank=True, required=False)
    code = serializers.CharField(max_length=20, allow_blank=True, required=False)
    slug = serializers.CharField(max_length=100, allow_blank=True, required=False)

    def create(self, validated_data):
        return Set.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.title)
        instance.code = validated_data.get('code', instance.code)
        instance.save()
        return instance

    def delete(self, validated_data):
        return Set.objects.delete(**validated_data)