from django.contrib import admin
from .models import Projects

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'short_description')
    list_filter = ('category',)
    search_fields = ('title', 'short_description')

admin.site.register(Projects, ProjectAdmin)
