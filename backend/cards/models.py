from django.db import models
from sets.models import Set


class Card(models.Model):
  set = models.ForeignKey(Set, related_name='cards', on_delete=models.CASCADE)
  name = models.CharField(max_length=50)
  number = models.PositiveSmallIntegerField()

  class Meta:
        unique_together = ['set', 'number']
        # TODO: have cards ordered by set, then number
        ordering = ['number']

  def __str__(self):
    return self.name