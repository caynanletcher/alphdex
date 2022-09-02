from django.contrib.auth.models import Set
from rest_framework import viewsets, permissions
from backend.sets.serializers import SetSerializer


class SetViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows users to be viewed or edited.
  """
  queryset = Set.objects.all().order_by('-date_joined')
  serializer_class = SetSerializer
  permission_classes = [permissions.IsAuthenticated]