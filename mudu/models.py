from django.db import models

class About(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField()
	phone = models.CharField(max_length=100)
	info = models.TextField(default='')

	class Meta:
		verbose_name = 'About'
		verbose_name_plural = 'About'

	def __str__(self):
		return self.name

class Contact(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField()
	company = models.CharField(max_length=200, blank=True)
	message = models.TextField(default='')

	class Meta:
		verbose_name = 'Contact'
		verbose_name_plural = 'Contact'

	def __str__(self):
		return self.name
    
    
