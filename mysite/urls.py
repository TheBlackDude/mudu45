from django.conf.urls import include, url
from django.contrib import admin
from mudu import urls, views

urlpatterns = [
    url(r'^$', views.IndexPage.as_view(), name='index'),
    url(r'^api/', include(urls)),

    url(r'^admin/', include(admin.site.urls)),
]
