from asyncio import constants
from django.db import models
from sets.models import Set


class Card(models.Model):
  set = models.ForeignKey(Set, related_name='cards', on_delete=models.CASCADE)
  name = models.CharField(max_length=50)
  number = models.PositiveSmallIntegerField()

  class Meta:
    constraints = [
      models.UniqueConstraint(fields=['name', 'number', 'set'], name='unique_name_number_set')
    ]
    ordering = ['set', 'number']

  def __str__(self):
    return self.name