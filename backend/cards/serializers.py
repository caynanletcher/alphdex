from cards.models import Card
from rest_framework import serializers
from sets.serializers import SetSerializer


class CardSerializer(serializers.HyperlinkedModelSerializer):
  # List set fields when GETting a card
  set = SetSerializer()

  class Meta:
    model = Card
    fields = ['name', 'number', 'set']