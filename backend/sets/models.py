from django.db import models


class Set(models.Model):
  name = models.CharField(max_length=100, unique=True)
  code = models.CharField(max_length=20, unique=True)

  def __str__(self):
    # ex. Vivid Voltage (SWSH4)
    return f'{self.name} ({self.code})'