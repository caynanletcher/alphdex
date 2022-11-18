from django.contrib import admin
from .models import Card

@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
  list_display = ['name', 'set', 'number', 'slug']
  list_filter = ['set__name']
  search_fields = ['name']