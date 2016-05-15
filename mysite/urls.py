from django.conf.urls import include, url
from django.contrib import admin
from mudu import urls

urlpatterns = [
    # url(r'^$', 'mysite.views.home', name='home'),
    url(r'^api/', include(urls)),

    url(r'^admin/', include(admin.site.urls)),
]
