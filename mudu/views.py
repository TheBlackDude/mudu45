from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from django.views.generic.base import TemplateView
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import About, Contact
from .serializers import AboutSerializer, ContactSerializer

class IndexPage(TemplateView):
	""" render the index page """
	template_name = 'mudu/index.html'

	@method_decorator(ensure_csrf_cookie)
	def dispatch(self, *args, **kwargs):
		return super(IndexPage, self).dispatch(*args, **kwargs)

class Api(APIView):
	"""
	List My Info, or Contact Me.
	"""
	def get(self, request):
		about = About.objects.all()
		serializer = AboutSerializer(about, many=True)
		return Response(serializer.data)

	def post(self, request):
		serializer = ContactSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)