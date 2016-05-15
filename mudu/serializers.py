from rest_framework import serializers
from .models import About, Contact

class AboutSerializer(serializers.ModelSerializer):

	class Meta:
		model = About


class ContactSerializer(serializers.ModelSerializer):

	class Meta:
		model = Contact
		fields = ('id', 'name', 'email', 'company', 'message')