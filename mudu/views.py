from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import About, Contact
from .serializers import AboutSerializer, ContactSerializer

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