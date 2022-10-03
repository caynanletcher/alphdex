from django.contrib import admin
from .models import Card

@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
  list_display = ['name', 'set__name', 'number']
  list_filter = ['name', 'set__name', 'number']
  search_fields = ['name']