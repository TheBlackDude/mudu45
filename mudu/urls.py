from django.conf.urls import url
from .views import Api

urlpatterns = [
    url(r'^about/$', Api.as_view()),
]
