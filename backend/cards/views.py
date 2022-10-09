from cards.models import Card
from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from backend.cards.serializers import CardSerializer


class CardViewSet(viewsets.ModelViewSet):
  queryset = Card.objects.all()
  serializer_class = CardSerializer
  permission_classes = [permissions.IsAuthenticated]
  filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
  filterset_fields = ['name', 'number', 'set__name', 'set__code']
  search_fields = ['name', 'set__name']
  ordering_fields = '__all__'