from django.db import models


class Card(models.Model):
  # set = models.ForeignKey(Set, on_delete=models.CASCADE)
  name = models.CharField(max_length=50)
  number = models.PositiveSmallIntegerField()
  def __str__(self):
    return self.name