from django.contrib import admin
from .models import About, Contact

class AboutModelAdmin(admin.ModelAdmin):

	list_display = ('name', 'email', 'phone', 'info')


class ContactModelAdmin(admin.ModelAdmin):

	list_display = ('name', 'email', 'company', 'message')

	search_fields = ('name', 'company')


admin.site.register(About, AboutModelAdmin)
admin.site.register(Contact, ContactModelAdmin)
