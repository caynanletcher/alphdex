from sets.models import Set
from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from sets.serializers import SetSerializer


class SetViewSet(viewsets.ModelViewSet):
  queryset = Set.objects.all()
  serializer_class = SetSerializer
  permission_classes = [permissions.IsAuthenticated]
  filter_backends = [filters.SearchFilter, DjangoFilterBackend]
  filterset_fields = ['name', 'code']
  search_fields = ['name']