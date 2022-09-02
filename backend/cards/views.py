from django.contrib.auth.models import Card
from rest_framework import viewsets, permissions
from backend.cards.serializers import CardSerializer


class CardViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows users to be viewed or edited.
  """
  queryset = Card.objects.all().order_by('-date_joined')
  serializer_class = CardSerializer
  permission_classes = [permissions.IsAuthenticated]