from cards.models import Card
from rest_framework import serializers


class CardSerializer(serializers.HyperlinkedModelSerializer):
  # Make "set" display by its __str__() format instead of its URL
  set = serializers.StringRelatedField()

  class Meta:
    model = Card
    fields = ['name', 'set', 'number']