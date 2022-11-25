from django.db import models
from django.utils.text import slugify


class Set(models.Model):
  name = models.CharField(max_length=100, unique=True)
  code = models.CharField(max_length=20, unique=True)

  @property
  def slug(self):
    "Unique slug of a card for URL purposes."
    return slugify(f"{self.name}-{self.code}")


  def __str__(self):
    # ex. Vivid Voltage (SWSH4)
    return f'{self.name} ({self.code})'