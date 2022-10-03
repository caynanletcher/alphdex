from django.contrib import admin
from .models import Set

@admin.register(Set)
class SetAdmin(admin.ModelAdmin):
  list_display = ['name', 'code']
  search_fields = ['name']