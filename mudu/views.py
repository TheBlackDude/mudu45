from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import About, Contact
from .serializers import AboutSerializer, ContactSerializer

@api_view(['GET', 'POST'])
def api(request):
	""" List my Info, or Contact Me """
	if request.method == 'GET':
		about = About.objects.all()
		serializer = AboutSerializer(about, many=True)
		return Response(serializer.data)

	elif request.method == 'POST':
		serializer = ContactSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)