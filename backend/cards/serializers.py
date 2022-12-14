from cards.models import Card
from sets.models import Set
from rest_framework import serializers
from sets.serializers import SetSerializer


class CardSerializer(serializers.HyperlinkedModelSerializer):
  # List set fields when GETting a card
  set = SetSerializer()

  class Meta:
    model = Card
    fields = ['name', 'number', 'set', 'slug']
    validators = [
      serializers.UniqueTogetherValidator(
        queryset=Card.objects.all(),
        fields=['set', 'number']
      )
    ]

  def create(self, validated_data):
    set_data = validated_data.pop('set')
    set = (Set.objects.filter(code=set_data.get('code')) | Set.objects.filter(name=set_data.get('name'))).first()
    if not set:
      raise serializers.ValidationError({
        'set': 'Set not found.'
      })
    
    card_name = validated_data.get('name')
    card_number = validated_data.get('number')
    if Card.objects.filter(name=card_name, number=card_number, set=set):
      raise serializers.ValidationError({
        'card': 'Card already exists.'
      })
    return Card.objects.create(set=set, **validated_data)